import Like from '../views/pages/like';
import Detail from '../views/pages/detail';
import Restaurants from '../views/pages/restaurants';

const routes = {
  '/': Restaurants, // default page
  '/restaurants': Restaurants,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
