import { FiLogIn } from "react-icons/fi";
import { IoMdCreate } from "react-icons/io";
import { Button } from "@material-ui/core";
import { logOutUser } from "../../actions/actionCreator";
import { LogInContext } from "../../contexts/LogInContext";
import { useContext } from "react";

export const NavHeader = () => {
  const { state, dispatch, enableLogin, enableSignup } = useContext(
    LogInContext
  );
  return (
    <div>
      <nav
        style={{
          float: "right",
          display: state.isLoggedIn ? "none" : "block"
        }}
      >
        <Button
          color="primary"
          variant="contained"
          style={{ margin: "10px 20px" }}
          onClick={enableLogin}
        >
          <FiLogIn style={{ marginRight: "5px" }} />
          Login
        </Button>
        <Button
          color="primary"
          variant="contained"
          style={{ margin: "10px 20px 10px 10px" }}
          onClick={enableSignup}
        >
          <IoMdCreate style={{ marginRight: "5px" }} />
          Signup
        </Button>
      </nav>
      <nav
        style={{
          float: "right",
          display: state.isLoggedIn ? "block" : "none"
        }}
      >
        <Button
          color="primary"
          variant="contained"
          style={{ margin: "10px 20px" }}
          onClick={() => dispatch(logOutUser())}
        >
          Logout
        </Button>
      </nav>
    </div>
  );
};
