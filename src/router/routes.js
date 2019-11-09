import Msite from '../pages/Msite/Miste.vue'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'
import Admin from '../pages/Admin/Admin.vue'



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
    path:'/',
    redirect:'/msite'
  }

]