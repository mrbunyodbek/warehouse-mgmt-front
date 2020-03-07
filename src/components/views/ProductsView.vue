<template>
  <div class="row">
    <products-list :products="products" @createNewProduct="createNewProduct"
                   @openInfoCard="openInfoCard"></products-list>
<!--    <product-info-form></product-info-form>-->

    <div class="col-md-9 col-lg-9 col-8">
      <div v-for="widget in widgets">
        <ProductCreateForm v-slot="widget"></ProductCreateForm>
      </div>
      <div v-for="infoWidget in infoWidgets">
        <ProductInfoForm v-slot="infoWidget" :chosenProduct="chosenProduct"></ProductInfoForm>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import productsList from '../cards/lists/ProductsList'
  import ProductCreateForm from '../cards/forms/products/ProductCreateForm'
  import ProductInfoForm from '../cards/forms/products/ProductInfoForm'

  export default {
    name: 'ProductsVieProductInfoFormw',
    components: {ProductCreateForm, productsList, ProductInfoForm},
    data() {
      return {
        chosenProduct: {},
        products: [],
        widgets: [],
        infoWidgets: []
      }
    },
    mounted() {
      axios
        .get('http://localhost:8085/products/get')
        .then(response => (this.products = response.data))
    },
    methods: {
      addNewProductWidget: function () {
        this.widgets.push('<product-create-form></product-create-form>')
      },
      createNewProduct: function () {
        this.addNewProductWidget()
      },
      openInfoCard: function (id) {
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === id) {
            this.chosenProduct = this.products[i]
            this.infoWidgets.push('<product-info-form></product-info-form>')
          }
        }
      }
    }
  }
</script>
