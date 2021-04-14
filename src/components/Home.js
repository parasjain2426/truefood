import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormHelperText
} from "@material-ui/core";
import React from "react";
import { FiLogIn } from "react-icons/fi";
import { IoMdCreate } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { Controller, useForm } from "react-hook-form";

export const Home = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control
  } = useForm();

  const cityValidator = (city) => {
    if (city === "") {
      return "Please select the city";
    }
  };

  const locationValidator = (location) => {
    if (location === "") {
      return "Please fill the location";
    }
  };

  const submitHandler = (data, e) => {
    console.log(data);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "40%",
        background: `linear-gradient(
          rgba(0, 0, 0, 0.52),
          rgba(0, 0, 0, 0.5)
      ),url("https://cutt.ly/AviDdUf")`,
        backgroundPosition: "center",
        margin: "0px",
        padding: "10px",
        position: "absolute",
        left: "0px",
        top: "0px"
      }}
    >
      <nav style={{ float: "right" }}>
        <Button
          color="primary"
          variant="contained"
          style={{ margin: "10px 20px" }}
        >
          <FiLogIn style={{ marginRight: "5px" }} />
          Login
        </Button>
        <Button
          color="primary"
          variant="contained"
          style={{ margin: "10px 20px 10px 10px" }}
        >
          <IoMdCreate style={{ marginRight: "5px" }} />
          Signup
        </Button>
      </nav>
      <main style={{ clear: "both", textAlign: "center", color: "white" }}>
        <h1 style={{ fontFamily: "Trebuchet MS" }}>Truefood</h1>
        <div
          style={{
            backgroundColor: "white",
            width: "max-content",
            minWidth: "150px",
            margin: "0 auto",
            padding: "2px"
          }}
        >
          <ImLocation
            color="black"
            style={{ float: "left", height: "4em", marginLeft: "10px" }}
          />
          <form
            style={{ width: "450px", margin: "0px" }}
            onSubmit={handleSubmit(submitHandler)}
          >
            <FormControl
              style={{ margin: "0px 20px 0px 0px" }}
              error={Boolean(errors?.city)}
            >
              <InputLabel id="city-select">City</InputLabel>
              <Controller
                render={({ field: { onChange, value } }) => (
                  <Select
                    value={value}
                    onChange={onChange}
                    style={{ minWidth: "50px", width: "100px" }}
                    labelId="city-select"
                  >
                    <MenuItem value="Delhi">Delhi</MenuItem>
                    <MenuItem value="Ghaziabad">Ghaziabad</MenuItem>
                    <MenuItem value="Meerut">Meerut</MenuItem>
                    <MenuItem value="Noida">Noida</MenuItem>
                  </Select>
                )}
                name="city"
                defaultValue=""
                control={control}
                rules={{
                  validate: cityValidator,
                  required: "Please select a city"
                }}
              />
              <FormHelperText>{errors?.city?.message}</FormHelperText>
            </FormControl>
            <TextField
              label="Enter your location"
              style={{ margin: "0px 10px", minWidth: "60%", width: "150px" }}
              {...register("location", {
                validate: locationValidator,
                required: "Please fill the location"
              })}
              error={Boolean(errors?.location)}
              helperText={errors?.location?.message}
            />
            <input type="submit" hidden={true} />
          </form>
        </div>
      </main>
    </div>
  );
};
