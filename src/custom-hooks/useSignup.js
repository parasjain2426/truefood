import { useState } from "react";

export const useSignup = () => {
  const [isSignupActive, setIsSignupActive] = useState(false);
  const enableSignup = () => {
    setIsSignupActive(true);
  };
  const disableSignup = () => {
    setIsSignupActive(false);
  };
  return [isSignupActive, enableSignup, disableSignup];
};
