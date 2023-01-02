import { useRouter } from "next/router";
import { useEffect } from "react";
import useUser from "./useUser";

const useMove = ({ url, isPrivate }) => {
  const user = useUser();
  const router = useRouter();

  console.log(url, isPrivate);

  useEffect(() => {
    if (isPrivate) {
      if (!user?.ok) {
        router.replace(url);
      } else {
        return;
      }
    } else {
      if (user?.ok) {
        router.replace(url);
      } else {
        return;
      }
    }
  }, [router, user]);
};

export default useMove;
