import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import UsersView from './components/views/UsersView.vue'
import ProductsView from './components/views/ProductsView.vue'
import WarehousesView from './components/views/WarehousesView.vue'
import VendorsView from './components/views/VendorsView.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'
import CustomersView from './components/views/CustomersView'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'users',
        alias: '',
        component: UsersView,
        name: 'Foydalanuvchilar',
        meta: {description: 'Ilova Foydalanuvchilari ro\'yhati va ular haqida ma\'lumot'}
      }, {
        path: 'products',
        component: ProductsView,
        name: 'Mahsulotlar',
        meta: {description: 'Mahsulotlar ro\'yhati va ularning turlari haqida ma\'lumot'}
      }, {
        path: 'customers',
        component: CustomersView,
        name: 'Xaridorlar',
        meta: {description: 'Xaridorlar ro\'yhati va ular haqida ma\'lumotlar'}
      }, {
        path: 'warehouses',
        component: WarehousesView,
        name: 'Omborlar',
        meta: {description: 'Omborlar va ular ichidagi mahsulotlar haqida ma\'lumotlar'}
      }, {
        path: 'vendors',
        component: VendorsView,
        name: 'Sotuvchilar',
        meta: {description: 'Sotuvchilar ro\'yhati va ular haqida ma\'lumotlar'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: true}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
