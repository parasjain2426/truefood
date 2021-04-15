import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormHelperText
} from "@material-ui/core";
import { ImLocation } from "react-icons/im";

export const SearchBox = (props) => {
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
    if (props?.setServeDestination) {
      props.setServeDestination(data.city);
    }
    console.log(data);
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "450px",
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
          label="Search for restaurants"
          style={{ margin: "0px 10px", minWidth: "60%", width: "150px" }}
          {...register("location", {
            validate: locationValidator,
            required: "Please fill the restaurant name"
          })}
          error={Boolean(errors?.location)}
          helperText={errors?.location?.message}
        />
        <input type="submit" hidden={true} />
      </form>
    </div>
  );
};
