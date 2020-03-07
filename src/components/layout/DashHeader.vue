<template>
  <header class="main-header">
    <span class="logo-mini">
      <a href="/"><img src="/static/img/copilot-logo-white.svg" alt="Logo" class="img-responsive center-block logo"></a>
    </span>
    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="javascript:;" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle text-bold text-uppercase" data-toggle="dropdown" aria-expanded="false">
              Asosiy imkoniyatlar
            </a>
            <ul class="dropdown-menu">
              <li><a href="#" data-toggle="modal" data-target="#modal-payment"><i class="fa fa-money"></i>To'lov qabul qilish</a></li>
              <li><a href="#" data-toggle="modal" data-target="#modal-order"><i class="fa fa-shopping-cart"></i>Mahsulot buyurtma qilish</a></li>
              <li><a href="#" data-toggle="modal" data-target="#modal-income"><i class="fa fa-arrow-down"></i>Omborga tovar sotib olish</a></li>
              <li><a href="#" data-toggle="modal" data-target="#modal-outgo"><i class="fa fa-arrow-up"></i>Xaridorga mahsulot yetkazish</a></li>

            </ul>
          </li>
          <user-menu :user="user"></user-menu>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import MessagesMenu from './MessagesMenu'
import NotificationsMenu from './NotificationsMenu'
import TasksMenu from './TasksMenu'
import UserMenu from './UserMenu'

export default {
  name: 'DashHeader',
  components: {
    MessagesMenu,
    NotificationsMenu,
    TasksMenu,
    UserMenu
  },
  props: ['user'],
  computed: {
    ...mapState([
      'userInfo'
    ])
  }
}
</script>
