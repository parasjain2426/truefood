import React from "react";
import { useSpring, animated } from "react-spring";
import { Footer } from "./sub-components/Footer";
import { TrueHeader } from "./sub-components/TrueHeader";
import { TrueOptions } from "./sub-components/TrueOptions";

export const Home = (props) => {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });
  return (
    <animated.div style={fade}>
      <TrueHeader {...props} />
      <TrueOptions />
      <Footer />
    </animated.div>
  );
};
