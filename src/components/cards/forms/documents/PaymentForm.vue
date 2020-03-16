<template>
  <div class="modal fade in" id="modal-payment">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span></button>
          <h4 class="modal-title">To'lov qabul qilish formasi</h4>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4 col-xs-12">
              <div class="form-group">
                <label for="orderDate">To'lov qabul qilingan sana</label>
                <input type="date" class="form-control" v-model="orderDate" id="orderDate">
              </div>
            </div>
            <div class="col-md-4 col-xs-12">
              <div class="form-group">
                <label for="documentId">Ro'yhatga olish raqami</label>
                <input type="text" class="form-control" v-model="documentNo" disabled id="documentId">
              </div>
            </div>
            <div class="col-md-4 col-xs-12">
              <div class="form-group">
                <label for="cost">Umumiy to'lov qiymati</label>
                <input id="cost" type="number" class="form-control" v-model="amount">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-xs-12">
              <div class="form-group">
                <label for="payerList">Xaridor</label>
                <payer-select
                  id="payerList"
                  :options="payerList"
                  label="firstName"
                  v-model="selectedPayer">
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
                </payer-select>
              </div>
            </div>
          </div>
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
  import PayerSelect from 'vue-select'
  import axios from 'axios'

  export default {
    name: 'PaymentForm',
    components: {PayerSelect},
    data() {
      return {
        documentType: 'PAYMENT',
        documentNo: '',
        orderDate: '',
        payerList: [],
        selectedPayer: {}
      }
    },
    mounted() {
      axios.get('http://localhost:8085/users/get/userTypeIs=CUSTOMER')
        .then(response => {
          this.payerList = response.data
        })
      let currentDate = new Date()
      this.documentNo = 'PAYMENT' +
        currentDate.getFullYear() + currentDate.getMonth() + currentDate.getDate() +
        '/' + currentDate.getHours() + currentDate.getMinutes()
    }
  }
</script>

<style scoped>

</style>
