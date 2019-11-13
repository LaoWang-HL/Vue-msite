import Msite from '../pages/Msite/Miste.vue'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'
import Admin from '../pages/Admin/Admin.vue'
import Shop from '../pages/Shop/Shop.vue'
import Info from '../pages/Shop/Info/Info.vue'
import Goods from '../pages/Shop/Goods/Goods.vue'
import Rating from '../pages/Shop/Rating/Rating.vue'



export default[
  {
    path:'/msite',
    component:Msite,
    meta:{
      isShowFooterGuide:true
    }
  },
  {
    path:'/search',
    component:Search,
    meta:{
      isShowFooterGuide:true
    }
  },
  {
    path:'/order',
    component:Order,
    meta:{
      isShowFooterGuide:true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      isShowFooterGuide:true
    }
  },
  {
    path:'/admin',
    component:Admin,
    meta:{
      isShowFooterGuide:false
    }
  },
  {
    path:'/shop',
    component:Shop,
    children:[
      {
        path:'/shop/goods',
        component:Goods
      },
      {
        path:'/shop/info',
        component:Info
      },
      {
        path:'/shop/rating',
        component:Rating
      },
      {
        path:'/shop',
        component:Goods
      }

    ]
  },
  {
    path:'/',
    redirect:'/msite'
  }

]