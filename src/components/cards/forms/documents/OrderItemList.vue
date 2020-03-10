<template>
  <div>
    <label for="selection">Mahsulotni shu yerdan tanlang</label>
    <ProductSelect
      @input="addNewRow"
      id="selection"
      :options="items"
      label="name"
      v-model="selectedItem">
      <template slot="option" slot-scope="option" style="border-bottom: 1px solid #c1c1c1;">
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
              <span>Ombordagi soni : </span>
              <span v-if="option.warehouses.length > 0"><b>{{ option.overallQuantity }}</b></span>
              <span v-if="option.warehouses.length === 0">0</span>
            </td>
          </tr>
        </table>
      </template>
    </ProductSelect>
    <hr>
    <table class="table table-bordered table-hover">
      <thead>
      <tr>
        <th style="width: 5%;"></th>
        <th style="width: 30%;">Mahsulot</th>
        <th style="width: 35%;">Ma'lumot</th>
        <th style="width: 10%;">Mahsulot narxi</th>
        <th style="width: 15%;">Buyurtma soni</th>
        <th style="width: 5%;"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(prod, index) in this.registered">
        <td class="text-center centralize-text">{{ index + 1 }}</td>
        <td class="centralize-text">{{ prod.name }}</td>
        <td>{{ prod.description }}</td>
        <td><input type="number"
                   :max="prod.overallQuantity"
                   v-model="prod.quantity"
                   placeholder="Miqdorni kirirting"
                   @change="checkQuantity(prod.overallQuantity)">
          <span class="help-block text-red">{{ errorMessage }}</span>
        </td>
        <td>{{ prod.quantity }}</td>
        <td>
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
    name: 'ItemList',
    components: {ProductSelect},
    data() {
      return {
        selectedItem: {
          id: 0,
          name: '',
          description: '',
          measurement: '',
          quantity: 0,
          overallQuantity: 0
        },
        items: [],
        registered: [],
        quantity: 0,
        cost: 0,
        errorMessage: ''
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
        this.registered.push(this.selectedItem)
        this.items.splice(this.getNthElementIndexFromArray(this.selectedItem.id), 1)
        this.selectedItem = {
          id: 0,
          name: '',
          description: '',
          measurement: '',
          quantity: 0,
          overallQuantity: 0
        }
      },
      deleteItemByIndex: function (index) {
        this.items.push(this.registered[index])
        this.registered.splice(index, 1)
      },
      checkQuantity: function (qty) {
        if (this.selectedItem.quantity > qty) {
          this.errorMessage = 'Kiritilgan miqdor ' + qty + 'dan katta bo\'lmasligi kerak'
          this.selectedItem.quantity = this.selectedItem.overallQuantity
        } else {
          this.errorMessage = ''
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
