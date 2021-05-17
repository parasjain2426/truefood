import React, { useEffect, useState } from "react";
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
import "../components-styles/searchBoxStyle.css";
import { authAPI, cityAPI } from "../../services/APIService";

export const SearchBox = (props) => {
  const [authToken, setAuthToken] = useState({ auth_token: "" });
  const [cities, setCities] = useState([]);

  useEffect(() => {
    authAPI().then((data) => {
      setAuthToken(data);
    });
  }, []);

  useEffect(() => {
    cityAPI(authToken.auth_token).then((data) => {
      if (!data?.error) {
        setCities(data);
      }
    });
  }, [authToken]);
  // console.log(cities[0].city_name);
  const defaultValues = {
    location: "Paras",
    city: "Rangat"
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    control
  } = useForm({ defaultValues });
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
    <div className="searchBoxStyle">
      <ImLocation
        color="black"
        style={{ float: "left", height: "4em", marginLeft: "10px" }}
      />
      <form
        style={{ width: "90%", margin: "0px" }}
        onSubmit={handleSubmit(submitHandler)}
      >
        <FormControl
          style={{ margin: "0px 20px 0px 0px" }}
          error={Boolean(errors?.city)}
        >
          <InputLabel id="city-select">City</InputLabel>
          <Controller
            render={({ field }) => (
              <Select
                {...field}
                style={{ minWidth: "50px", width: "100px" }}
                labelId="city-select"
                // defaultValue="Rangat"
              >
                {cities.map((city) => (
                  <MenuItem value={city.city_name} key={city.city_name}>
                    {city.city_name}
                  </MenuItem>
                ))}
              </Select>
            )}
            name="city"
            control={control}
            rules={{
              validate: cityValidator,
              required: "Please select a city"
            }}
          />
          <FormHelperText>{errors?.city?.message}</FormHelperText>
        </FormControl>
        <TextField
          label="Restaurants nearby"
          style={{ margin: "0px 10px", minWidth: "150px", width: "60%" }}
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
