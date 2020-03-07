<template>
  <ul class="sidebar-menu">
    <li class="header">ASOSIY IMKONIYATLAR</li>
    <li>
      <a data-toggle="modal" data-target="#modal-payment">
        <i class="fa fa-money"></i>
        <span class="page">To'lov qabul qilish</span>
      </a>
    </li>
    <li>
      <a data-toggle="modal" data-target="#modal-order">
        <i class="fa fa-shopping-cart"></i>
        <span class="page">Mahsulot buyurtma qilish</span>
      </a>
    </li>
    <li>
      <a data-toggle="modal" data-target="#modal-income">
        <i class="fa fa-arrow-down"></i>
        <span class="page">Omborga tovar sotib olish</span>
      </a>
    </li>
    <li>
      <a data-toggle="modal" data-target="#modal-outgo">
        <i class="fa fa-arrow-up"></i>
        <span>Xaridorga mahsulot yetkazish</span>
      </a>
    </li>
    <li class="header text-uppercase">Ma'lumotlar bazasi</li>
    <router-link tag="li" class="pageLink" to="/users">
      <a>
        <i class="fa fa-star-half-full"></i>
        <span class="page">Foydalanuvchilar</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/products">
      <a>
        <i class="fa fa-shopping-cart"></i>
        <span class="page">Mahsulotlar</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/vendors">
      <a>
        <i class="fa fa-street-view"></i>
        <span class="page">Sotuvchilar</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/customers">
      <a>
        <i class="fa fa-group"></i>
        <span class="page">Xaridorlar</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/warehouses">
      <a>
        <i class="fa fa-building-o"></i>
        <span class="page">Omborlar</span>
      </a>
    </router-link>

    <li class="header">ME</li>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <i class="fa fa-cog"></i>
        <span class="page">Settings</span>
      </a>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'SidebarMenu'
}
</script>
<style>
li {
  cursor: pointer;
}
/* override default */
.sidebar-menu > li > a {
  padding: 12px 15px 12px 15px;
}

.sidebar-menu li.active > a > .fa-angle-left,
.sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
  animation-name: rotate;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}

.treeview-title {
  z-index: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-90deg);
  }
}
</style>
