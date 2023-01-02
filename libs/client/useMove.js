import { useRouter } from "next/router";
import { useEffect } from "react";
import useUser from "./useUser";

const useMove = url => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    // 유저가 존재하면 이동
    if (user?.ok) {
      router.replace(url);
    } else {
      return;
    }
  }, [router, user]);
};

export default useMove;
