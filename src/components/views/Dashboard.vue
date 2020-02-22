<template>
  <div class="row">
    <user-list :users="users" @createNewUser="createNewUser"></user-list>

    <div v-for="widget in widgets">
      <UserCreateForm v-slot="widget"></UserCreateForm>
    </div>
<!--    <user-create-form></user-create-form>-->
  </div>
</template>

<script>
  import axios from 'axios'
  import userList from '../cards/lists/UserList'
  import UserCreateForm from '../cards/forms/UserCreateForm'

  export default {
    name: 'Dashboard',
    components: {userList, UserCreateForm},
    data() {
      return {
        users: [],
        widgets: []
      }
    },
    mounted() {
      axios
        .get('http://localhost:8085/users/get')
        .then(response => (this.users = response.data))
    },
    methods: {
      create: function() {
        alert('something')
      },
      addNewUserWidget: function () {
        this.widgets.push('<user-create-form></user-create-form>')
      },
      createNewUser: function () {
        this.addNewUserWidget()
      }
    }
  }
</script>
