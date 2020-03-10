<template>
  <div>
    <div class="box box-success box-solid">
      <div class="box-header with-border">
        <h3 class="box-title">Yangi mahsulot</h3>
        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
          </button>
          <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i>
          </button>
        </div>
      </div>
      <form class="no-padding">
        <div class="box-body">
          <div class="form-group">
            <label for="inputName">Mahsulot nomi</label>
            <input type="text" v-model="name" class="form-control" id="inputName"
                   placeholder="Mahsulot nomini kiriting">
          </div>
          <div class="form-group">
            <label for="inputDescription">Mahsulot tavsifi</label>
            <textarea type="password" v-model="description" class="form-control" rows="4" id="inputDescription"
                      placeholder="Mahsulot haqida qisqacha ma'lumot bering"></textarea>
          </div>
          <div class="form-group">
            <label for="inputMeasurement">O`lchov turi</label>
            <input type="text" v-model="measurement" class="form-control" id="inputMeasurement"
                   placeholder="O`lchov turini kiriting">
          </div>
        </div>
        <div class="box-footer">
          <button @click="createNewProduct" class="btn btn-success no-border pull-right" data-widget="remove" title="Kiritilgan ma'hsulotni saqlash">Saqlash</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'ProductCreateForm',
    data() {
      return {
        name: '',
        description: '',
        measurement: ''
      }
    },
    methods: {
      createNewProduct: function (e) {
        e.preventDefault()
        axios.post('http://localhost:8085/products/save', {
          product: {
            name: this.name,
            description: this.description,
            measurement: this.measurement
          },
          headers: {
            'content-type': 'application/json'
          }
        })
          .catch(e => {
            alert(e)
          }
          )
      }
    }
  }
</script>

