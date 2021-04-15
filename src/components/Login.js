import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { containerStyle } from "./components-styles/containerStyle";
export const Login = (props) => {
  // console.log(props);
  const { push } = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <AiFillCloseCircle
          style={{ float: "right" }}
          onClick={() => push("/")}
        />
        <h1 style={{ textAlign: "left" }}>Login</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <TextField
            variant="outlined"
            label="Username"
            fullWidth
            size="small"
            style={{ margin: "10px auto" }}
            {...register("username", {
              required: "Please type the username"
            })}
            error={Boolean(errors?.username)}
            helperText={errors?.username?.message}
          />
          <TextField
            variant="outlined"
            label="Password"
            fullWidth
            size="small"
            style={{ margin: "10px auto" }}
            {...register("password", {
              required: "Please type the password"
            })}
            error={Boolean(errors?.password)}
            helperText={errors?.password?.message}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

const cardStyle = {
  width: "80%",
  height: "50%",
  backgroundColor: "white",
  margin: "5% auto",
  padding: "20px",
  maxWidth: "350px",
  top: "50%"
};
