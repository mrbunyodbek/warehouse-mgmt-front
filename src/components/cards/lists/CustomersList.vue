<template>
  <div class="col-md-3">
    <div class="box box-warning card-class">
      <div class="box-header with-border">
        <h3 class="box-title">Xaridorlar</h3>
        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
          </button>
        </div>
      </div>
      <div class="box-body table-fixed-height" style="margin: 0; padding: 0">
        <table class="table table-hover">
          <tbody>
          <tr v-for="inform in users" :key="inform.id" @click="openInfo(inform.id)">
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
    name: 'CustomersList',
    props: ['users'],
    methods: {
      clickedButton () {
        this.$emit('createNewUser')
      },
      openInfo (id) {
        this.$emit('openInfo', id)
      }
    }
  }
</script>

<style scoped>
  tbody {
    height: 450px;
    display: inline-block;
    width: 100%;
    overflow: auto;
  }
  td {
    width: 100%;
  }
</style>
