<template>
  <div>
    <label for="selection">Mahsulotni shu yerdan tanlang</label>
    <ProductSelect
      @input="addNewRow"
      id="selection"
      :options="items"
      label="name"
      v-model="selectedItem">
      <template slot="option" slot-scope="option">
        <table class="no-border" style="width: 100%;">
          <tr>
            <td style="width: 35%;">{{ option.name }}, {{ option.measurement }}</td>
            <td>
              <span v-if="option.description.length > 50">{{ option.description.substring(0, 70) }}...</span>
              <span v-if="option.description.length < 50">{{ option.description }}</span>
            </td>
          </tr>
          <tr>
            <td>
            </td>
            <td class="option-info__stats">
              <div class="row">
                <div class="col-md-3">
                  <span>Ombordagi soni: </span>
                  <span v-if="option.warehouses.length > 0"><b>{{ option.overallQuantity }}</b></span>
                  <span v-if="option.warehouses.length === 0">0</span>
                </div>
                <div class="col-md-9">
                  <span>Narxi: </span>
                  <span><b>{{ option.price }}</b></span>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </template>
    </ProductSelect>
    <hr>
    <table class="table table-bordered table-hover">
      <thead>
      <tr>
        <th class="centralize-text" style="width: 30%;" rowspan="2">Mahsulot</th>
        <th class="centralize-text" rowspan="2">Ombor</th>
        <th class="centralize-text" rowspan="2">Soni</th>
        <th class="centralize-text" style="width: 10%;">Narx</th>
        <th class="centralize-text" style="width: 10%;">Qiymat</th>
        <th class="centralize-text" style="width: 5%;"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(prod, index) in this.registered">
        <td class="centralize-text">{{ prod.name }}, (Omborda: {{ prod.overallQuantity }})</td>
        <td>{{ prod.description }}</td>
        <td class="centralize-text">{{ prod.price }}</td>
        <td class="centralize-text">
          <label>
            <input
              type="number"
              class="form-control"
              :max="prod.overallQuantity"
              v-model="prod.quantity"
              placeholder="0"
              @change="checkQuantity(prod.quantity, prod.overallQuantity)"
            >
          </label>
        </td>
        <td class="text-center centralize-text">
          <label>
            <input
              type="number"
              class="form-control"
              disabled
              v-model="prod.total = prod.quantity * prod.price">
          </label>
        </td>
        <td class="text-center centralize-text">
          <button class="btn btn-sm btn-danger"
                  :title="prod.name + 'ni ro\'yhatdan o\'chirish'">
            <i class="fa fa-minus" @click="deleteItemByIndex(index)"></i>
          </button>
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'
  import ProductSelect from 'vue-select'
  import 'vue-select/dist/vue-select.css'

  export default {
    name: 'IncomeItemList',
    components: {ProductSelect},
    data() {
      return {
        selectedItem: {
          productId: 0,
          name: '',
          description: '',
          measurement: '',
          cost: 0,
          price: 0,
          quantity: 0,
          total: 0,
          overallQuantity: 0
        },
        items: [],
        total: 0,
        registered: []
      }
    },
    mounted() {
      axios.get('http://localhost:8085/collector/product-counts')
        .then(response => {
          this.items = response.data
        })
    },
    methods: {
      addNewRow: function () {
        if (this.selectedItem.overallQuantity > 0) {
          this.registered.push(this.selectedItem)
          this.items.splice(this.getNthElementIndexFromArray(this.selectedItem.id), 1)
          this.selectedItem = {
            productId: 0,
            name: '',
            description: '',
            measurement: '',
            price: 0,
            quantity: 0,
            total: 0,
            overallQuantity: 0
          }
        } else {
          alert('\'' + this.selectedItem.name + '\'ni ro\'yhatga qo\'shib bo\'lmaydi. ' +
            'Omborda bu mahsulot hozirda yo\'q. Iltimos, boshqa mahsulotni tanlang!')
        }
      },
      deleteItemByIndex: function (index) {
        this.items.push(this.registered[index])
        this.registered.splice(index, 1)
      },
      checkQuantity: function (insertedQty, qty) {
        if (insertedQty > qty) {
          alert('Kiritilgan miqdor ombordagi umumiy miqdordan katta bo\'lmasligi kerak. ' +
            'Umumiy miqdor ' + qty + 'ga teng.')
          this.selectedItem.quantity = this.selectedItem.overallQuantity
        } else {
          this.$emit('newItemAdded', this.registered)
        }
      },
      getNthElementIndexFromArray: function (id) {
        let index = 0
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].id === id) {
            index = i
          }
        }
        return index
      }
    }
  }
</script>

<style scoped>
  .option-info__stats {
    font-size: 12px;
  }
  .centralize-text {
    vertical-align: middle;
  }
</style>
