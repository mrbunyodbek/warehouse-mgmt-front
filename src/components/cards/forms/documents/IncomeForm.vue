<template>
  <div class="modal fade in" id="modal-income">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span></button>
          <h4 class="modal-title">Mahsulot xarid qilish formasi</h4>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4 col-xs-12">
              <div class="form-group">
                <label for="orderDate">Mahsulot xarid qilingan sana</label>
                <input type="date" class="form-control" v-model="orderDate" id="orderDate">
              </div>
            </div>
            <div class="col-md-4 col-xs-12">
              <div class="form-group">
                <label for="documentId">Xaridning ro'yhat raqami</label>
                <input type="text" class="form-control" v-model="documentNo" disabled id="documentId">
              </div>
            </div>
            <div class="col-md-4 col-xs-12">
              <div class="form-group">
                <label for="cost">Xaridning umumiy narxi</label>
                <input id="cost" type="number" disabled class="form-control" v-model="cost">
              </div>
            </div>
          </div>
          <div class="form-group">
            <label>Sotuvchi</label>
            <vendor-select
              id="vendorList"
              :options="vendors"
              label="name"
              v-model="selectedVendor">
              <template slot="option" slot-scope="option" style="border-bottom: 1px solid #c1c1c1;">
                <table class="no-border" style="width: 100%;">
                  <tr>
                    <td style="width: 50%;">{{ option.name }}</td>
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
            </vendor-select>
          </div>
          <br><hr><br>
          <h4>Mahsulotlar ro'yhati</h4>
          <income-item-list @sendData="reinitializeData"></income-item-list>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Bekor qilish</button>
          <button type="button" class="btn btn-primary" @click="createIncome">Saqlash</button>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script>
  import VendorSelect from 'vue-select'
  import IncomeItemList from './item-lists/IncomeItemList'
  import axios from 'axios'

  export default {
    name: 'IncomeForm',
    components: {IncomeItemList, VendorSelect},
    data() {
      return {
        documentNo: '',
        orderDate: '',
        vendorId: 0,
        selectedVendor: {},
        cost: 0,
        items: [],
        vendors: [],
        picker: {}
      }
    },
    mounted() {
      axios.get('http://localhost:8085/vendors/get')
        .then(response => {
          this.vendors = response.data
        })
      let currentDate = new Date()
      this.documentNo = 'INCOME' +
        currentDate.getFullYear() + currentDate.getMonth() + currentDate.getDate() +
        '/' + currentDate.getHours() + currentDate.getMinutes()
    },
    methods: {
      reinitializeData: function (data) {
        this.cost = 0
        this.items = data
        data.forEach((item) => {
          // eslint-disable-next-line use-isnan
          if (item.total !== 'NaN') {
            this.cost += item.total
          } else {
            this.cost = 0
          }
        })
      },
      createIncome: function (e) {
        e.preventDefault()
        axios.post('http://localhost:8085/incomes/save', {
          income: {
            documentType: 'INCOME',
            documentNo: this.documentNo,
            orderDate: this.orderDate,
            vendorId: this.selectedVendor.id,
            cost: this.cost
          },
          items: this.items
        })
      }
    }
  }
</script>

<style scoped>
  .modal-dialog {
    min-width: 100rem;
  }
</style>
