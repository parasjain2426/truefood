import { Route, Switch } from "react-router-dom";
import { MenuChild } from "../components/sub-components/MenuChild";
import { OrderChild } from "../components/sub-components/OrderChild";
import { OverviewChild } from "../components/sub-components/OverviewChild";
import { PhotosChild } from "../components/sub-components/PhotosChild";
import { ReviewChild } from "../components/sub-components/ReviewChild";
export const OrderRouter = () => {
  // console.log(props);
  return (
    <Switch>
      <Route path="/orderOnline/:ShopName/overview" component={OverviewChild} />
      <Route path="/orderOnline/:ShopName/order" component={OrderChild} />
      <Route path="/orderOnline/:ShopName/menu" component={MenuChild} />
      <Route path="/orderOnline/:ShopName/photos" component={PhotosChild} />
      <Route path="/orderOnline/:ShopName/reviews" component={ReviewChild} />
      <Route path="/outMeal/:ShopName/overview" component={OverviewChild} />
      <Route path="/outMeal/:ShopName/order" component={OrderChild} />
      <Route path="/outMeal/:ShopName/menu" component={MenuChild} />
      <Route path="/outMeal/:ShopName/photos" component={PhotosChild} />
      <Route path="/outMeal/:ShopName/reviews" component={ReviewChild} />
    </Switch>
  );
};
