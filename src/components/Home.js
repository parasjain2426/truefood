import React from "react";
import { Footer } from "./sub-components/Footer";
import { TrueHeader } from "./sub-components/TrueHeader";
import { TrueOptions } from "./sub-components/TrueOptions";

export const Home = (props) => {
  return (
    <div>
      <TrueHeader {...props} />
      <TrueOptions />
      <Footer />
    </div>
  );
};
