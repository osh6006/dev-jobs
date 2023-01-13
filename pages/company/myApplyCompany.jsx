import DefaultButton from "components/common/defaultButton";
import Company from "components/home/company";
import ApplyTable from "components/user/applyTable";
import useGeneralMove from "libs/client/useGeneralMove";
import useUser from "libs/client/useUser";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const MyApplyCompany = () => {
  useGeneralMove();
  const user = useUser();
  const router = useRouter();

  const { data } = useSWR(`/api/users/getApply`);

  console.log(data);

  return (
    <>
      {data && data?.getApplyData?.length > 0 ? (
        <>
          <h1 className="mb-14 text-h2 font-bold text-violet">
            나의 지원 현황
          </h1>
          <ApplyTable
            applyData={data?.getApplyData}
            companyData={data?.getCompanyData}
          />
        </>
      ) : (
        <div className="flex h-[calc(100vh*1/2)] flex-col items-center justify-center space-y-12">
          <h2 className="text-center text-h2 font-bold text-dark_grey dark:text-white">
            아직 지원한 회사가 없어요 지원하러 가볼까요?
          </h2>
          <Link href="/" className="w-32">
            <DefaultButton text="지원 하러 가기" />
          </Link>
        </div>
      )}
    </>
  );
};

export default MyApplyCompany;
