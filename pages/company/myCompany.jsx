import DefaultButton from "components/common/defaultButton";
import Layout from "components/common/layout";
import useUser from "libs/client/useUser";
import Link from "next/link";
import { timeAgoKo } from "public/options";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { format, register } from "timeago.js";

const MyCompany = () => {
  const user = useUser();
  const { data } = useSWR(user ? `/api/company/${user.profile.id}` : null);
  const [days, setDays] = useState("");

  useEffect(() => {
    const createdDay = data?.company?.createdAt;
    register("ko-locale", timeAgoKo);
    setDays(format(new Date(createdDay), "ko-locale"));
  }, [data]);
  return (
    <div>
      {data ? (
        <>
          <h1 className="text-h2 font-bold text-violet">등록한 채용 공고</h1>
        </>
      ) : (
        <div className="flex h-full flex-col items-center justify-center space-y-5">
          <h2 className="text-center text-h2 font-bold text-dark_grey dark:text-white">
            아직 기업을 등록하지 않았어요 등록하러 가볼까요?
          </h2>
          <Link href="/company/register" className="w-32">
            <DefaultButton text="등록 하러 가기" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyCompany;
