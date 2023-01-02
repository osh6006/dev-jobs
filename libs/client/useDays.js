import { timeAgoKo } from "public/options";
import { useEffect, useState } from "react";
import { format, register } from "timeago.js";

const useDays = createdAt => {
  const [days, setDays] = useState("");
  useEffect(() => {
    register("ko-locale", timeAgoKo);
    setDays(format(new Date(createdAt), "ko-locale"));
  }, [createdAt]);
  return days;
};

export default useDays;
