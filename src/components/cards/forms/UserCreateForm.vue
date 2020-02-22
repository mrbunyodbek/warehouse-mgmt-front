<template>
  <div class="col-md-9 cardClass">
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
      <div class="box-body">
        <div class="form-group">
          <label for="inputUserName">Username</label>
          <input type="password" class="form-control" id="inputUserName" placeholder="Username">
        </div>
        <div class="form-group">
          <label for="inputFirstName">First Name</label>
          <input type="email" class="form-control" id="inputFirstName" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="inputLastName">Last Name</label>
          <input type="password" class="form-control" id="inputLastName" placeholder="Last Name">
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="Password">
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox"> Check me out
          </label>
        </div>
      </div>
      <!-- /.box-body -->
      <div class="box-footer">
        <button class="btn btn-success no-border pull-right">Create</button>
      </div>
      <!-- /.box-footer -->
    </div>
  </div>
</template>

<script>
    export default {
      name: 'UserCreateForm'
    }
</script>

<style scoped>

</style>
