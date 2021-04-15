import React, { useState } from "react";
import { Controller, set, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { AiFillCloseCircle } from "react-icons/ai";

import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  TextField
} from "@material-ui/core";
import { toast } from "react-toastify";
import "./components-styles/containerStyle.css";

toast.configure();
export const Signup = ({ active, setActive }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control
  } = useForm();

  const tncValidator = (data) => {
    if (data) {
      return true;
    }
    return false;
  };
  const submitHandler = (data, e) => {
    toast.success("SignedUp Succesfully!", {
      position: "bottom-center",
      hideProgressBar: true
    });
    console.log(data);
    e.target.reset();
    setActive(false);
  };

  return (
    <div
      className="containerStyle"
      style={{ display: active ? "block" : "none" }}
    >
      <div style={cardStyle}>
        <AiFillCloseCircle
          style={{ float: "right" }}
          onClick={() => setActive(false)}
        />
        <h1 style={{ textAlign: "left" }}>SignUp</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <TextField
            variant="outlined"
            label="Name"
            fullWidth
            size="small"
            style={{ margin: "10px auto" }}
            {...register("name", {
              required: "Please type the name"
            })}
            error={Boolean(errors?.name)}
            helperText={errors?.name?.message}
          />
          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            size="small"
            style={{ margin: "10px auto" }}
            {...register("email", {
              required: "Please type the email"
            })}
            error={Boolean(errors?.email)}
            helperText={errors?.email?.message}
          />
          <TextField
            variant="outlined"
            label="Contact No."
            fullWidth
            size="small"
            style={{ margin: "10px auto" }}
            {...register("contact", {
              required: "Please type the contact no."
            })}
            error={Boolean(errors?.contact)}
            helperText={errors?.contact?.message}
          />
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
          <FormControl
            error={Boolean(errors?.tnc)}
            style={{ display: "block", marginBottom: 15 }}
          >
            <Controller
              control={control}
              name="tnc"
              defaultValue={false}
              render={({
                field: { onChange, value, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState
              }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={onChange}
                      checked={value}
                      inputRef={ref}
                    />
                  }
                  label="I agree to all terms and conditions."
                />
              )}
              rules={{
                validate: tncValidator,
                required: "Please agree to our TnC to signup."
              }}
            />
            <FormHelperText style={{ textAlign: "center" }}>
              {errors?.tnc?.message}
            </FormHelperText>
          </FormControl>
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
  height: "70%",
  backgroundColor: "white",
  margin: "5% auto",
  padding: "20px",
  maxWidth: "350px",
  overflow: "auto",
  top: "50%"
};
