<template>
  <div class="col-lg-8 ">
    <div class="box box-success box-solid">
      <div class="box-header with-border">
        <h3 class="box-title">Yangi ombor</h3>
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
            <label for="inputName">Ombor nomi</label>
            <input type="text" v-model="name" class="form-control" id="inputName"
                   placeholder="Ombor nomini kiriting">
          </div>
          <div class="form-group">
            <label for="inputAddress">Ombor manzili</label>
            <input type="text" v-model="address" class="form-control" id="inputAddress"
                   placeholder="Mahsulot haqida qisqacha ma'lumot bering"/>
          </div>
        </div>
        <div class="box-footer">
          <button @click="createNewWareHouse" class="btn btn-success no-border pull-right" data-widget="remove"
                  title="Kiritilgan omborni saqlash">Saqlash
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'WareHouseCreateForm',
    data() {
      return {
        name: '',
        address: ''
      }
    },
    methods: {
      createNewWareHouse: function (e) {
        e.preventDefault()
        let newWarehouse = {
          name: this.name,
          address: this.address
        }
        axios.post('http://localhost:8085/warehouse/save', newWarehouse)
          .then(response => {
            console.log(response.data)
            this.$emit('createdWarehouse', response.data)
          })
          .catch(e => {
            alert(e)
          })
      }
    }
  }
</script>

