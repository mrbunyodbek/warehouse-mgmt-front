<template>
  <div class="col-md-9">
    <div class="box box-success">
      <div class="box-header with-border">
        <h3 class="box-title">Latest Members</h3>

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
            <input type="text" v-model="user.username" class="form-control" id="inputUserName" placeholder="Username">
          </div>
          <div class="form-group">
            <label for="inputPassword">Password</label>
            <input type="password" v-model="user.password" class="form-control" id="inputPassword" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="inputFirstName">First Name</label>
            <input type="text" v-model="user.firstName" class="form-control" id="inputFirstName" placeholder="Enter name">
          </div>
          <div class="form-group">
            <label for="inputLastName">Last Name</label>
            <input type="text" v-model="user.lastName" class="form-control" id="inputLastName" placeholder="Last name">
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <vue-mask type="text" v-model="user.phone" class="form-control" id="phone" mask="+000(00) 000-00-00" :raw="false" placeholder="+000(00) 000-00-00"></vue-mask>
          </div>
          <div class="form-group">
            <label for="types">Type</label>
            <select v-model="user.userType" id="types" class="form-control">
              <option value="ADMIN">Administrator</option>
              <option value="DIRECTOR">Director</option>
              <option value="STOREKEEPER">Storekeeper</option>
              <option value="CUSTOMER">Customer</option>
            </select>
          </div>
        </div>
        <!-- /.box-body -->
        <div class="box-footer">
          <button class="btn btn-success no-border pull-right" type="submit">Create</button>
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
          user: {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phone: '',
            userType: ''
          }
        }
      },
      methods: {
        createNewUser: function () {
          axios.post('http://localhost:8085/users/save', {
            user: this.data
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
