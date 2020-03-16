<template>
  <div>
    <label for="selection">Mahsulotni shu yerdan tanlang</label>
    <ProductSelect
      @input="addNewRow"
      id="selection"
      :options="products"
      label="name"
      v-model="selectedProduct">
      <template slot="option" slot-scope="option">
        <table class="no-border" style="width: 100%;">
          <tr>
            <td style="width: 35%;">{{ option.name }}, {{ option.measurement }}</td>
            <td>
              <span v-if="option.description.length > 50">{{ option.description.substring(0, 70) }}...</span>
              <span v-if="option.description.length < 50">{{ option.description }}</span>
            </td>
          </tr>
        </table>
      </template>
    </ProductSelect>
    <hr>
    <table class="table table-bordered table-hover">
      <thead>
      <tr>
        <th class="centralize-text" style="width: 30%;">Mahsulot</th>
        <th class="centralize-text" style="width: 30%;">Ombor</th>
        <th class="centralize-text" style="width: 10%;">Miqdori</th>
        <th class="centralize-text" style="width: 10%;">Narxi</th>
        <th class="centralize-text" style="width: 15%;">Qiymat</th>
        <th class="centralize-text" style="width: 5%;"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(prod, index) in this.registered">
        <td><b>{{ prod.name }}</b>, <small>({{ prod.description }})</small></td>
        <td class="centralize-text">
          <ProductSelect
            :options="warehouses"
            label="name">
            <template slot="option" slot-scope="option">
              <div>
                <b>{{ option.name }}</b>,
                <span v-if="option.address.length > 50"><small>{{ option.address.substring(0, 70) }}...</small></span>
                <span v-if="option.address.length < 50"><small>{{ option.address }}</small></span>
              </div>
            </template>
          </ProductSelect>
        </td>
        <td class="centralize-text">
          <label>
            <input
              type="number"
              class="form-control"
              v-model="prod.price"
              placeholder="0"
            >
          </label>
        </td>
        <td class="centralize-text">
          <label>
            <input
              type="number"
              class="form-control"
              v-model="prod.quantity"
              placeholder="0"
              @mouseleave="resendData"
            >
          </label>
        </td>
        <td class="text-center centralize-text">
          <label>
            <input
              type="number"
              class="form-control"
              disabled
              placeholder="0"
              v-model="prod.total = prod.quantity * prod.price">
          </label>
        </td>
        <td class="text-center centralize-text">
          <button class="btn btn-sm btn-danger"
             :title="prod.name + 'ni ro\'yhatdan o\'chirish'"
             @click="deleteItemByIndex(index)">
            <i class="fa fa-minus"></i>
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
        products: [],
        warehouses: [],
        selectedWarehouse: {
          id: 0,
          name: '',
          address: ''
        },
        selectedProduct: {
          id: 0,
          name: '',
          description: '',
          measurement: '',
          price: 0
        },
        selectedItem: {
          productId: 0,
          warehouseId: 0,
          name: '',
          description: '',
          measurement: '',
          cost: 0,
          price: 0,
          quantity: 0,
          total: 0
        },
        items: [],
        registered: []
      }
    },
    mounted() {
      axios.get('http://localhost:8085/collector/products-n-warehouses')
        .then(response => {
          this.products = response.data.products
          this.warehouses = response.data.warehouses
        })
    },
    methods: {
      /**
       * Adding new row to the table with chosen product
       */
      addNewRow: function () {
        this.registered.push(this.selectedProduct)
        this.products.splice(this.getNthElementIndexFromArray(this.selectedProduct.id), 1)
        this.selectedProduct = {
          id: 0,
          name: '',
          description: '',
          measurement: '',
          price: 0
        }
      },
      /**
       * Delete product from table by its index
       * @param index Chosen product index
       */
      deleteItemByIndex: function (index) {
        this.products.push(this.registered[index])
        this.registered.splice(index, 1)
      },
      /**
       * Adding warehouse id to product.
       * @param item Chosen warehouse.
       * @param index Index of the product for which warehouse has benn assigned.
       */
      getWarehouse: function (item, index) {
        this.registered[index].warehouseId = item.id
        console.log(this.registered)
      },
      /**
       * Method will be called every time when mouse leave Quantity input field.
       */
      resendData: function () {
        this.$emit('sendData', this.registered)
      },
      /**
       * Gets index of the object in Products array for further uasge
       * @param id Chosen product id.
       * @returns {number} Array index of the product
       */
      getNthElementIndexFromArray: function (id) {
        let index = 0
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === id) {
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
