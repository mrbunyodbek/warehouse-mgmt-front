<template>
  <div class="row">
    <customers-list :users="users" @createNewUser="createNewUser" @openInfo="openInfoCard"></customers-list>
    <div class="col-md-9 col-lg-9 col-8">
      <div v-for="(widget, index) in creationWidgets">
        <CustomerCreateForm @retrieveBackUser="getCreatedUserBack" :widgetId="index"></CustomerCreateForm>
      </div>
      <div v-for="(widget, index) in infoWidgets">
        <CustomersList :chosenUser="chosenUsers[index]"></CustomersList>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import CustomerCreateForm from '../cards/forms/customers/CustomerCreateForm'
  import CustomerInfoCard from '../cards/forms/customers/CustomerInfoForm'
  import CustomersList from '../cards/lists/CustomersList'

  export default {
    name: 'CustomersView',
    components: {CustomerInfoCard, CustomersList, CustomerCreateForm},
    data() {
      return {
        chosenUsers: [],
        users: [],
        creationWidgets: [],
        infoWidgets: [],
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
