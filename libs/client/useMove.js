import { useRouter } from "next/router";
import { useEffect } from "react";
import useUser from "./useUser";

const useMove = ({ url, isPrivate }) => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isPrivate) {
      !user?.ok ? router?.replace(url) : null;
    } else {
      user?.ok ? router?.replace(url) : null;
    }
  }, [router, user]);
};

export default useMove;
