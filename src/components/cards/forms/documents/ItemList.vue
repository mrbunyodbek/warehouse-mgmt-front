<template>
  <div>
    <table class="table table-bordered table-hover">
      <thead>
      <tr>
        <th></th>
        <th style="min-width: 300px;">Mahsulot</th>
        <th>Miqdor</th>
        <th>Narxi</th>
        <th>Jami</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="text-center"><span class="badge bg-green"><i class="fa fa-plus"></i></span></td>
        <td>
          <ProductSelect label="productName" :options="items" v-model="selectedItem"></ProductSelect>
        </td>
        <td>{{ selectedItem.description }}</td>
        <td></td>
        <td>100</td>
        <td class="text-center"><span class="badge bg-red"><i class="fa fa-minus"></i></span></td>
      </tr>
      </tbody>
    </table>
    {{ selectedItem }}
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
        selectedItem: {},
        items: []
      }
    },
    mounted() {
      axios.get('http://localhost:8085/collector/product-counts')
      .then(response => {
        this.items = response.data
      })
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
