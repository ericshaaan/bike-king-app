import Home from './components/pages/home.vue';

import ShopBikesHome from './components/pages/shopbikesHome.vue';
import ShopBikes from './components/pages/shopbikes.vue';
import BikeDetails from './components/pages/bikedetails.vue';
import CustomerInfo from './components/pages/customerinfo.vue';
import ConfirmationPage from './components/pages/confirmationpage.vue';

import AboutUs from './components/pages/aboutus.vue';

import CustomerReviews from './components/pages/customerreviewsHome.vue';
// import CustomerReviewsHome from './components/pages/customerreviewsHome.vue';

export const routes = [
  {
    path: '',
    component: Home,
    name: 'home'
  },
  {
    path: '/shopbikes',
    component: ShopBikesHome,
    children: [
      {
        path: '',
        component: ShopBikes,
        name: 'shopbikes',
      },
      {
        path: 'details/:slug',
        component: BikeDetails,
        name: 'bikedetails'
      },
      {
        path: 'order/:slug',
        component: CustomerInfo,
        name: 'customerinfo'
      },
      {
        path: 'order/:orderId',
        component: ConfirmationPage,
        name: 'confirmationpage'
      }
    ]
  },
  {
    path: '/aboutus',
    component: AboutUs,
    name: 'aboutus'
  },
  {
    path: '/customerreviews',
    component: CustomerReviews,
    name: 'customerreviews'
  },
]