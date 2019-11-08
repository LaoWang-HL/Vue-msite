import Msite from '../pages/Msite/Miste.vue'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'




export default[
  {
    path:'/msite',
    component:Msite
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/profile',
    component:Profile
  }

]