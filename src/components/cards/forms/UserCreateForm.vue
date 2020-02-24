<template>
  <div>
    <div class="box box-success box-solid">
      <div class="box-header with-border">
        <h3 class="box-title">Yangi foydalanuvchi</h3>

        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
          </button>
          <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i>
          </button>
        </div>
      </div>
      <!-- /.box-header -->
      <form @submit="createNewUser" class="no-padding">
        <div class="box-body">

          <div class="form-group">
            <label for="inputUserName">Username</label>
            <input type="text" v-model="username" class="form-control" id="inputUserName" placeholder="Username">
          </div>
          <div class="form-group">
            <label for="inputPassword">Password</label>
            <input type="password" v-model="password" class="form-control" id="inputPassword" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="inputFirstName">Ism</label>
            <input type="text" v-model="firstName" class="form-control" id="inputFirstName" placeholder="Enter name">
          </div>
          <div class="form-group">
            <label for="inputLastName">Familiya</label>
            <input type="text" v-model="lastName" class="form-control" id="inputLastName" placeholder="Last name">
          </div>
          <div class="form-group">
            <label for="phone">Telefon raqami</label>
            <vue-mask type="text" v-model="phone" class="form-control" id="phone" mask="+000(00) 000-00-00" :raw="false" placeholder="+000(00) 000-00-00"></vue-mask>
          </div>
          <div class="form-group">
            <label for="types">Foydalanuvchi turi</label>
            <select v-model="userType" id="types" class="form-control">
              <option value="ADMIN">Administrator</option>
              <option value="DIRECTOR">Direktor</option>
<!--              <option value="STOREKEEPER">Storekeeper</option>-->
              <option value="CUSTOMER">Xaridor</option>
            </select>
          </div>
        </div>
        <!-- /.box-body -->
        <div class="box-footer">
          <button class="btn btn-success no-border pull-right" type="submit">Saqlash</button>
        </div>

      </form>
      <!-- /.box-footer -->
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import vueMask from 'vue-jquery-mask'

    export default {
      name: 'UserCreateForm',
      data() {
        return {
          username: '',
          password: '',
          firstName: '',
          lastName: '',
          address: '',
          phone: '',
          userType: ''
        }
      },
      methods: {
        createNewUser: function (e) {
          axios.post('http://localhost:8085/users/save', {
            user: {
              username: this.username,
              password: this.password,
              firstName: this.firstName,
              lastName: this.lastName,
              address: this.data.address,
              phone: this.phone,
              userType: this.userType
            },
            headers: {
              'content-type': 'application/json'
            }
          })
          .then(response => {})
          .catch(e => {
            alert(e)
          })
        }
      },
      components: {
        vueMask
      }
    }
</script>

<style scoped>

</style>
