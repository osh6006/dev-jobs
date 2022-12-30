import { useRouter } from "next/router";
import { useEffect } from "react";
import useUser from "./useUser";

const useMoveLogin = (url) => {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    } else {
      router.replace(url);
    }
  }, []);
};

export default useMoveLogin;
