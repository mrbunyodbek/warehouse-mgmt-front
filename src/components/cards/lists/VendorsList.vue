<template>
  <div class="col-md-3">
    <div class="box box-warning card-class">
      <div class="box-header with-border">
        <h3 class="box-title">Sotuvchilar</h3>
        <div class="box-tools pull-right">
          <button type="button"
                  class="btn btn-box-tool"
                  data-widget="collapse">
            <i class="fa fa-minus"></i>
          </button>
        </div>
      </div>
      <div class="box-body table-fixed-height"
           style="margin: 0; padding: 0">
        <table class="table table-hover">
          <tbody>
          <tr v-for="vendor in vendors"
              :key="vendor.id"
              @click="openInfo(vendor.id)">
            <td>
              <span>{{ vendor.name }}</span>
            </td>
            <td>
              <span class="badge pull-right">{{ vendor.address }}</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="box-footer">
        <button type="button"
                class="btn btn-success pull-right no-border"
                @click="clickedButton"
                title="Ilovaga yangi vendor qo'shish">
          Yangi Sotuvchi
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VendorsList',
    props: ['vendors'],
    methods: {
      clickedButton() {
        this.$emit('createNewVendor')
      },
      openInfo(id) {
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
