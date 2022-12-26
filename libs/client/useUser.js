import useSWR from "swr";

const useUser = () => {
  const { data, error } = useSWR("/api/users/me");
  return data;
};

export default useUser;
