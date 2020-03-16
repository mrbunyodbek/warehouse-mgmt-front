<template>
  <div>
    <div class="box box-success box-solid">
      <div class="box-header with-border">
        <h3 class="box-title">Yangi sotuvchi</h3>
        <div class="box-tools pull-right">
          <button type="button"
                  class="btn btn-box-tool"
                  data-widget="collapse">
            <i class="fa fa-minus"></i>
          </button>
          <button type="button"
                  class="btn btn-box-tool"
                  data-widget="remove"
                  @click="closeWidget">
            <i class="fa fa-times"></i>
          </button>
        </div>
      </div>
      <form class="no-padding">
        <div class="box-body">
          <div class="form-group">
            <label for="inputUserName">Sotuvchi Ismi</label>
            <input type="text"
                   v-model="name"
                   class="form-control"
                   id="inputUserName"
                   placeholder="Sotuvchi ismi">
          </div>
          <div class="form-group">
            <label for="phone">Telefon raqami</label>
            <vue-mask type="text"
                      v-model="phone"
                      class="form-control"
                      id="phone"
                      mask="+000(00) 000-00-00"
                      :raw="false"
                      placeholder="+000(00) 000-00-00"></vue-mask>
          </div>
          <div class="form-group">
            <label for="inputAddress">Vendor Ismi</label>
            <input type="text"
                   v-model="address"
                   class="form-control"
                   id="inputAddress"
                   placeholder="Vendor manzili">
          </div>
        </div>
        <div class="box-footer">
          <button @click="createNewVendor"
                  class="btn btn-success no-border pull-right"
                  data-widget="remove"
                  title="Yangi ma`lumotlarni saqlash!">Saqlash
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import vueMask from 'vue-jquery-mask'

  export default {
    name: 'VendorCreateForm',
    props: ['widgetId'],
    data() {
      return {
        name: '',
        address: '',
        phone: ''
      }
    },
    methods: {
      createNewVendor: function (e) {
        e.preventDefault()
        axios.post('http://localhost:8085/vendors/save', {
          name: this.name,
          address: this.address,
          phone: this.phone
        })
          .then(response => {
            this.$emit('createdVendor', response.data)
          })
          .catch(e => {
            alert(e)
          })
      },
      closeWidget: function () {
        this.$emit('closeWidget', this.widgetId)
      }
    },
    components: {
      vueMask
    }
  }
</script>
