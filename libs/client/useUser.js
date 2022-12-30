import useSWR from "swr";

const useUser = () => {
  const { data, error } = useSWR("/api/users/me");
  if (error) {
    return null;
  }
  return data;
};

export default useUser;
