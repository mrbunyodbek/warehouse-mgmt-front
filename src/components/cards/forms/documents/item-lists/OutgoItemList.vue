<template>
  <div class="row">
    <div class="col-md-4 col-xs-12">
      <div class="form-group">
        <label for="orderDate">Mahsulot xaridorga yetkazilgan sana</label>
        <input type="date" class="form-control" v-model="orderDate" id="orderDate">
      </div>
    </div>
    <div class="col-md-4 col-xs-12">
      <div class="form-group">
        <label for="documentId">Ro'yhat raqami</label>
        <input type="text" class="form-control" v-model="documentNo" disabled id="documentId">
      </div>
    </div>
    <div class="col-md-4 col-xs-12">
      <div class="form-group">
        <label for="cost">Umumiy narxi</label>
        <input id="cost" type="number" disabled class="form-control" v-model="cost">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OutgoItemList',
    data() {
      return {
        documentNo: '',
        documentType: 'OUTGO',
        cost: 0,
        orderDate: '',
        items: []
      }
    }
  }
</script>

<style scoped>

</style>
