<template>
  <div class="modal fade in" id="modal-order">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span></button>
          <h4 class="modal-title">Mahsulot buyurtma qilish formasi</h4>
        </div>
        <div class="modal-body">
          <item-list></item-list>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script>
  import ItemList from './ItemList'

  export default {
    name: 'OrderForm',
    components: {ItemList},
    data() {
      return {
        'documentType': 'ORDER',
        'orderDate': '',
        'status': false,
        'balance': 0,
        'customerId': '',
        'documentNo': ''
      }
    },
    mounted() {
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
