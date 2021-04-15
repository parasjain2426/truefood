import { Route, Switch } from "react-router-dom";
import { OrderOnline } from "../components/OrderOnline";
export const OrderRouter = () => {
  return (
    <Switch>
      <Route exact path="/orderOnline" component={OrderOnline} />
      <Route exact path="/outMeal" component={OrderOnline} />
    </Switch>
  );
};
