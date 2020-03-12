<template>
  <div class="col-lg-12">
    <div class="box box-success box-solid">
      <div class="box-header with-border">
        <h3 class="box-title">Mahsulot haqida ma`lumotlar</h3>
        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
          </button>
          <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i>
          </button>
        </div>
      </div>
      <div class="box-body">
        <h3>{{ chosenProduct.name }}</h3>
        <span class="text-gray">Description: {{ chosenProduct.description }}</span><br>
        <span class="text-gray">Measurement: {{ chosenProduct.measurement }}</span>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
  // import axios from 'axios'

  export default {
    name: 'ProductInfoForm',
    props: ['chosenProduct']
    // ,
    // mounted() {
    //   axios
    //   .get('http://192.168.0.20:8085/warehouses/get')
    // }
  }
</script>

<style>
  @media screen and (max-width: 600px) {
    tbody {
      height: 250px;
      display: inline-block;
      width: 100%;
      overflow: auto;
    }
  }
</style>
