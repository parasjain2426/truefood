import { Route, Switch } from "react-router-dom";
import { Home } from "../components/Home";
export const ParentRouter = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};
