<template>
  <footer class="main-footer">
    <strong>Copyright &copy; {{ year }}
    <a href="">WareHouse Management </a>.</strong> All rights reserved.
  </footer>
</template>

<script>
export default {
  name: 'DashFooter',
  data: function () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
