<template>
  <div class="col-md-4 cardClass">
    <div class="box box-warning">
      <div class="box-header with-border">
        <h3 class="box-title">Omborlar ro'yhati</h3>
        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
          </button>
        </div>
      </div>
      <div class="box-body" style="margin: 0; padding: 0">
        <table class="table table-hover">
          <tbody>
          <tr v-for="warehouse in warehouses" :key="warehouse.id" @click="toInfo(warehouse.id)">
            <!--              @click="toWarehouseInfo(warehouse.id)"-->
            <td :id="warehouse.name"><span style="font-size: 18px;">{{ warehouse.name }} </span>
              <span class="pull-right badge bg-aqua"> {{ warehouse.address }}</span>
            </td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="box-footer">
        <button type="button" class="btn btn-success pull-right no-border" @click="clickedButton"
                title="Ilovaga yangi ombor qo'shish">Yangi ombor
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WarehousesList',
    props: ['warehouses'],
    methods: {
      clickedButton(event) {
        this.$emit('createNewWarehouse')
      },
      toInfo(id) {
        this.$emit('openInfoCard', id)
      }
    }
  }
</script>

<style scoped>

</style>
