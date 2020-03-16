<template>
  <div class="row">
      <WarehousesList :warehouses="warehouses" @createNewWarehouse="createNewWarehouse"
                      @openInfoCard="openInfoCard"></WarehousesList>
    <div class="col-md-8 col-lg-8 col-8">
      <div class="col-8" v-for="widget in widgets">
        <WarehouseCreateForm @createdWarehouse="createdWarehouse" v-slot="widget"></WarehouseCreateForm>
      </div>
      <div v-for="(widget, index) in infoWidgets">
        <WarehouseInfoForm :chosenWarehouse="chosenWarehouse[index]"></WarehouseInfoForm>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import WarehouseCreateForm from '../cards/forms/warehouses/WarehouseCreateForm'
  import WarehouseInfoForm from '../cards/forms/warehouses/WarehouseInfoForm'
  import WarehousesList from '../cards/lists/WarehousesList'

  export default {
    name: '',
    components: {WarehouseCreateForm, WarehouseInfoForm, WarehousesList},
    data() {
      return {
        warehouses: [],
        warehouse: {
          name: '',
          address: ''
        },
        widgets: [],
        chosenWarehouse: [],
        infoWidgets: []
      }
    },
    mounted() {
      axios
        .get('http://localhost:8085/warehouse/get')
        .then(response => (this.warehouses = response.data))
    },
    methods: {
      createdWarehouse: function (newWarehouse) {
        this.warehouses.push(newWarehouse.object)
        console.log(newWarehouse.object)
      },
      addNewWarehouseWidget: function () {
        this.widgets.push('<warehouse-create-form></warehouse-create-form>')
      },
      createNewWarehouse: function () {
        this.addNewWarehouseWidget()
      },
      openInfoCard: function (id) {
        for (let i = 0; i < this.warehouses.length; i++) {
          if (this.warehouses[i].id === id) {
            this.chosenWarehouse.push(this.warehouses[i])
            this.infoWidgets.push('<warehouse-info-form></warehouse-info-form>')
          }
        }
      }
    }
  }
</script>
