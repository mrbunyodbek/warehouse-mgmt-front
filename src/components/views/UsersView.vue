<template>
  <div class="row">
      <user-list :users="users" @createNewUser="createNewUser" @openInfo="openInfoCard"></user-list>

    <div class="col-md-9 col-lg-9 col-8">
<!--      <NotificationItem v-slot="widget" :notification="this.message"></NotificationItem>-->
      <div v-for="(widget, index) in creationWidgets">
        <UserCreateForm @retrieveBackUser="getCreatedUserBack" :widgetId="index"></UserCreateForm>
      </div>
      <div v-for="(widget, index) in infoWidgets">
        <UserInfoCard :chosenUser="chosenUsers[index]"></UserInfoCard>
      </div>
    </div>
<!--    <user-create-form></user-create-form>-->
  </div>
</template>

<script>
  import axios from 'axios'
  import UserList from '../cards/lists/UserList'
  import UserCreateForm from '../cards/forms/users/UserCreateForm'
  import NotificationItem from '../layout/NotificationItem'
  import UserInfoCard from '../cards/forms/users/UserInfoCard'

  export default {
    name: 'UsersView',
    components: {UserInfoCard, NotificationItem, UserList, UserCreateForm},
    data() {
      return {
        chosenUsers: [],
        users: [],
        creationWidgets: [],
        infoWidgets: [],
        notifications: [],
        message: ''
      }
    },
    mounted() {
      axios
        .get('http://localhost:8085/users/get')
        .then(response => (this.users = response.data))
    },
    methods: {
      /**
       * Method adds UserCreateForm component into creationWidgets array.
       * After that component will be appeared on the screen.
       */
      createNewUser: function () {
        this.creationWidgets.push('<user-create-form></user-create-form>')
      },
      /**
       * This method gets created user from UserCreateForm component.
       * @param response Created user object.
       */
      getCreatedUserBack: function (response) {
        this.message = response.message
        this.users.push(response.user)
      },
      /**
       * Method calls UserInfoCard component for chosen user.
       * @param id Chosen user id in UserList component.
       */
      openInfoCard: function (id) {
        console.log(id)
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id === id) {
            this.chosenUsers.push(this.users[i])
            this.infoWidgets.push('<user-info-card></user-info-card>')
          }
        }
      }
    }
  }
</script>
