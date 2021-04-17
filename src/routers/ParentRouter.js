import { Route, Switch } from "react-router-dom";
import { DefaultError } from "../components/DefaultError";
import { Home } from "../components/Home";
import { OrderOnline } from "../components/OrderOnline";
import { Shop } from "../components/Shop";
export const ParentRouter = () => {
  // console.log(props);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/orderOnline" component={OrderOnline} />
      <Route exact path="/outMeal" component={OrderOnline} />
      <Route path="/orderOnline/:ShopName" component={Shop} />
      <Route path="/outMeal/:ShopName" component={Shop} />
      <Route path="*" component={DefaultError} />
    </Switch>
  );
};
