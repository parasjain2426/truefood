import React from "react";
import { TrueHeader } from "./sub-components/TrueHeader";
import { TrueOptions } from "./sub-components/TrueOptions";

export const Home = (props) => {
  // console.log(props);
  return (
    <div>
      <TrueHeader {...props} />
      <TrueOptions />
    </div>
  );
};
