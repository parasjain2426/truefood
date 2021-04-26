import React, { memo } from "react";
import { useSpring, animated } from "react-spring";
import { TrueHeader } from "./sub-components/TrueHeader";
import { TrueOptions } from "./sub-components/TrueOptions";

export const Home = memo((props) => {
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
    </animated.div>
  );
});
