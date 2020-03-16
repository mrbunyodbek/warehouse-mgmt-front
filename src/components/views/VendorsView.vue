<template>
  <div class="row">
    <vendors-list :vendors="vendors" @createNewVendor="createNewVendor" @openInfo="openInfo"></vendors-list>

    <div class="col-md-9 col-lg-9 col-8">
      <div v-for="(widget, index) in widgets">
        <VendorCreateForm @createdVendor="createdVendor" v-slot="widget"></VendorCreateForm>
      </div>
      <div v-for="(widget, index) in infoWidgets">
        <VendorInfoForm :chosenVendor="chosenVendors[index]"></VendorInfoForm>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import VendorsList from '../cards/lists/VendorsList'
  import VendorCreateForm from '../cards/forms/vendors/VendorCreateForm'
  import VendorInfoForm from '../cards/forms/vendors/VendorInfoForm'

  export default {
    name: 'VendorsView',
    components: {VendorsList, VendorCreateForm, VendorInfoForm},
    data() {
      return {
        vendors: [],
        widgets: [],
        infoWidgets: [],
        chosenVendors: []
      }
    },
    mounted() {
      axios
        .get('http://localhost:8085/vendors/get')
        .then(response => (this.vendors = response.data))
    },
    methods: {
      createNewVendor: function () {
        this.widgets.push('<vendor-create-form></vendor-create-form>')
      },
      createdVendor: function (response) {
        this.vendors.push(response.object)
        console.log(response)
      },
      openInfo: function (id) {
        for (let i = 0; i < this.vendors.length; i++) {
          if (this.vendors[i].id === id) {
            this.chosenVendors.push(this.vendors[i])
            this.infoWidgets.push('<vendor-info-card></vendor-info-card>')
          }
        }
      }
    }
  }
</script>
