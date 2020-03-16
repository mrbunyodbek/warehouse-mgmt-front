<template>
    <div class="box box-default box-solid">
      <div class="box-header with-border">
        <h3 class="box-title">Foydalanuvchi haqida ma'lumot</h3>

        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
          </button>
          <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i>
          </button>
        </div>
        <!-- /.box-tools -->
      </div>
      <!-- /.box-header -->
      <div class="box-body" style="">
        <div class="row info-card-header">
          <div class="col-md-6 col-xs-12">
            <h2 class="text-capitalize">{{ chosenUser.firstName }} {{ chosenUser.lastName }}</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <h3>Asosiy ma'lumotlar</h3>
            <dl class="dl-horizontal center-block">
              <dt>Ism</dt>
              <dd>{{ chosenUser.firstName }}</dd>

              <dt>Familiya</dt>
              <dd>{{ chosenUser.lastName }}</dd>

              <dt>Username</dt>
              <dd>{{ chosenUser.username }}</dd>

              <dt>Telefon raqami</dt>
              <dd>{{ chosenUser.phone }}</dd>

              <dt>Adres</dt>
              <dd></dd>
              <dt>Ilovadagi rol</dt>
              <dd>{{ chosenUser.userType }}</dd>
            </dl>
          </div>
          <div class="col-md-6 col-xs-12">
            <h3>Qo'shimcha ma'lumotlar</h3>
            <p>Foydalanuvchining oxirgi buyurtmasi</p>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th>Buyurtma qilingan sana</th>
                  <th>Buyurtma No.</th>
                </tr>
                <tr>
                  <td>{{ statistics.lastOrder.orderDate }}</td>
                  <td>{{ statistics.lastOrder.documentNo }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import UserDetailsCard from './UserDetailsCard'
  import axios from 'axios'

  export default {
    name: 'UserInfoCard',
    components: {UserDetailsCard},
    props: ['chosenUser'],
    data() {
      return {
        statistics: []
      }
    },
    mounted() {
      axios
        .get('http://localhost:8085/users/get/statistics/' + this.chosenUser.id)
        .then(response => (this.statistics = response.data))
    }
  }
</script>

<style scoped>
  .info-card-header {
    min-height: 5rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #ddd;
  }
  .additional-style {
    margin-top: 32px;
  }
</style>
