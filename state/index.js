import useUser from "libs/client/useUser";
import { atom, selector } from "recoil";

export const getUserSelector = selector({
  key: "getUserSelector",
  get: async () => {
    try {
      const user = await useUser();
      console.log(user);
      return user;
    } catch (error) {
      console.log(`getUserSelector 에러 발생`);
    }
  },
});
