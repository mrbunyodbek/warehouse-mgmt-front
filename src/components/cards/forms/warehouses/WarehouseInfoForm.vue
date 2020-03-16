<template>
    <div class="box box-default">
      <div class="box-header">
        <div class="box-title">
          Ombor ma`lumotlari
        </div>
        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
          </button>
          <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i>
          </button>
        </div>
      </div>
      <div class="box-body">
        <h2>{{ chosenWarehouse.name }}</h2>
        <span class="text-gray">Address: {{ chosenWarehouse.address }}</span>
        <hr>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'WarehouseInfoForm',
    props: ['chosenWarehouse'],
    data() {
      return {
        chosenWarehouses: {}
      }
    },
    mounted() {
      axios
        .get('http://localhost:8085/warehouse/get/count/warehouse=' + this.chosenWarehouse.id)
        .then(response => (this.chosenWarehouses = response.data))
    }
  }
</script>

<style scoped>

</style>
