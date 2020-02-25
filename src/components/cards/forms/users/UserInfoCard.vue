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
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <h2>{{ chosenUser.firstName }} {{ chosenUser.lastName }}</h2>
            <hr>
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
              <dd>{{ chosenUser.userTypes }}</dd>
            </dl>
          </div>
          <div class="col-md-6 col-xs-12"></div>
        </div>
      </div>
      <!-- /.box-body -->
    </div>
    <!-- /.box -->
</template>

<script>
    export default {
      name: 'UserInfoCard',
      props: ['chosenUser']
    }
</script>

<style scoped>

</style>
