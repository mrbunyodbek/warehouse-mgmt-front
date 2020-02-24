<template>
  <div class="col-md-3 cardClass">
    <div class="box box-warning">
      <div class="box-header with-border">
        <h3 class="box-title">Foydalanuvchilar ro'yhati</h3>
        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
          </button>
        </div>
      </div>
      <div class="box-body" style="margin: 0; padding: 0">
        <table class="table table-hover">
          <tbody>
          <tr v-for="inform in users" :key="inform.id">
            <td><span>{{ inform.firstName }} </span> <span> {{ inform.lastName }}</span></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="box-footer">
        <button type="button" class="btn btn-success pull-right no-border" @click="clickedButton" title="Ilovaga yangi foydalanuvchini qo'shish">Yangi foydalanuvchi</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'UserList',
      props: ['users'],
      methods: {
        clickedButton (event) {
          this.$emit('createNewUser')
        }
      }
    }
</script>

<style scoped>

</style>
