import { useState } from "react";

export const useLogin = () => {
  const [isLoginActive, setIsLoginActive] = useState(false);

  const enableLogin = () => {
    setIsLoginActive(true);
  };
  const disableLogin = () => {
    setIsLoginActive(false);
  };

  return [isLoginActive, enableLogin, disableLogin];
};
