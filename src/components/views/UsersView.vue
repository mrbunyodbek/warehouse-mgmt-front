<template>
  <div class="row">
      <user-list :users="users" @createNewUser="createNewUser" @openInfo="openInfoCard"></user-list>

    <div class="col-md-9 col-lg-9 col-8">
<!--      <NotificationItem v-slot="widget" :notification="this.message"></NotificationItem>-->
      <div v-for="(widget, index) in creationWidgets">
        <UserCreateForm @retrieveBackUser="retrieveBackUser" :widgetId="index"></UserCreateForm>
      </div>
      <div v-for="widget in infoWidgets">
        <UserInfoCard :chosenUser="chosenUser"></UserInfoCard>
      </div>
    </div>
<!--    <user-create-form></user-create-form>-->
  </div>
</template>

<script>
  import axios from 'axios'
  import userList from '../cards/lists/UserList'
  import UserCreateForm from '../cards/forms/users/UserCreateForm'
  import NotificationItem from '../layout/NotificationItem'
  import UserInfoCard from '../cards/forms/users/UserInfoCard'

  export default {
    name: 'UsersView',
    components: {UserInfoCard, NotificationItem, userList, UserCreateForm},
    data() {
      return {
        chosenUser: {},
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
      addNewUserWidget: function () {
        this.creationWidgets.push('<user-create-form></user-create-form>')
      },
      createNewUser: function () {
        this.addNewUserWidget()
      },
      retrieveBackUser: function (response) {
        this.message = response.message
        this.users.push(response.user)
      },
      openInfoCard: function (id) {
        console.log(id)
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id === id) {
            this.chosenUser = this.users[i]
            this.infoWidgets.push('<user-info-card></user-info-card>')
          }
        }
      },
      closeWidget: function (widgetId) {
        console.log('Closing widget id: ' + widgetId)
        this.creationWidgets.splice(widgetId, 1)
      }
    }
  }
</script>
