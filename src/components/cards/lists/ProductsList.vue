<template>
  <div class="col-md-3 cardClass">
    <div class="box box-warning">
      <div class="box-header with-border">
        <h3 class="box-title">Mahsulotlar ro'yhati</h3>
        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
          </button>
        </div>
      </div>
      <div class="box-body" style="margin: 0; padding: 0">
        <table class="table table-hover">
          <tbody>
          <tr v-for="inform in products" :key="inform.id" @click="toInfo(inform.id)">
            <td :id="inform.description"><span>{{ inform.name }} </span> <span> {{ inform.measurement }}</span></td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="box-footer">
        <button type="button" class="btn btn-success pull-right no-border" @click="clickedButton"
                title="Ilovaga yangi foydalanuvchini qo'shish">Yangi mahsulot
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'ProductsList',
    data() {
      return {
        products: []
      }
    },
    mounted() {
      axios
        .get('http://localhost:8085/products/get')
        .then(response => (this.products = response.data))
    },
    methods: {
      clickedButton(event) {
        this.$emit('createNewProduct')
      },
      toInfo(id) {
        this.$emit('openInfoCard', id)
      }
    }
  }
</script>

<style scoped>
  tbody {
    height: 500px;
    display: inline-block;
    width: 100%;
    overflow: auto;
  }
  td {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    tbody {
      height: 250px;
      display: inline-block;
      width: 100%;
      overflow: auto;
    }
  }
</style>

