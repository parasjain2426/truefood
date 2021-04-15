import { Route, Switch } from "react-router-dom";
import { Signup } from "../components/Signup";
import { Login } from "../components/Login";

export const ChildrenRouter = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
};
