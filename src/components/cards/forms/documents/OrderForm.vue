<template>
  <div class="modal fade in" id="modal-order">
    <div class="modal-dialog" style="min-width: 1000px;">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span></button>
          <h4 class="modal-title">Mahsulot buyurtma qilish formasi</h4>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6 col-xs-12">
              <div class="form-group">
                <label for="orderDate">Buyurtma qilingan sana</label>
                <date-picker class="my-datepicker" id="orderDate"></date-picker>
              </div>
            </div>
            <div class="col-md-6 col-xs-12">
              <div class="form-group">
                <label for="documentId">Buyurtmaning ro'yhat raqami</label>
                <input type="text" class="form-control" v-model="documentNo" disabled id="documentId">
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="customerList">Buyurtmachi</label>
            <customer-select
              id="customerList"
              :options="users"
              label="firstName"
              v-model="selectedUser">
              <template slot="option" slot-scope="option" style="border-bottom: 1px solid #c1c1c1;">
                <table class="no-border" style="width: 100%;">
                  <tr>
                    <td style="width: 50%;">{{ option.firstName }}, {{ option.lastName }}</td>
                    <td>
                      <span>Adres : </span>
                      <span v-if="option.address.length > 50">{{ option.address.substring(0, 30) }}...</span>
                      <span v-if="option.address.length < 50">{{ option.address }}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    </td>
                    <td class="option-info__stats">
                      <span>Telefon : </span>
                      <span><b>{{ option.phone }}</b></span>
                    </td>
                  </tr>
                </table>
              </template>
            </customer-select>
          </div>
          <hr>
          <h4>Mahsulotlar ro'yhati</h4>
          <item-list></item-list>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Bekor qilish</button>
          <button type="button" class="btn btn-primary">Saqlash</button>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script>
  import axios from 'axios'
  import ItemList from './OrderItemList'
  import DatePicker from 'vue-date-picker'
  import CustomerSelect from 'vue-select'

  export default {
    name: 'OrderForm',
    components: {ItemList, DatePicker, CustomerSelect},
    data() {
      return {
        users: [],
        selectedUser: {},
        documentType: 'ORDER',
        orderDate: '',
        status: false,
        balance: 0,
        customerId: '',
        documentNo: 'ORDER' + new Date('YYYY-MM-DD/HH:mm')
      }
    },
    mounted() {
      axios.get('http://localhost:8085/users/get/userTypeIs=CUSTOMER')
      .then(response => {
        this.users = response.data
      })
      let currentDate = new Date()
      this.documentNo = 'ORDER' +
        currentDate.getFullYear() + currentDate.getMonth() + currentDate.getDay() +
        '/' + currentDate.getHours() + currentDate.getMinutes()
    },
    methods: {

    }
  }
</script>

<style scoped>
  .my-datepicker {
    display: block !important;
  }
  .my-datepicker input {
    height: 3rem;
  }
</style>
