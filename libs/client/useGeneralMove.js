import { useRouter } from "next/router";
import { useEffect } from "react";
import useUser from "./useUser";

const useGeneralMove = () => {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    } else {
      if (user.profile.isCEO) {
        router.replace("/");
      }
    }
  }, [router]);
};

export default useGeneralMove;
