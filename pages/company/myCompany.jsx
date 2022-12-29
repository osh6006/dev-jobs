import DefaultButton from "components/common/defaultButton";
import useCEO from "libs/client/ceo/useCEO";
import useMyCompany from "libs/client/ceo/useMyCompany";
import Link from "next/link";

const MyCompany = () => {
  useCEO();
  const company = useMyCompany();
  return (
    <div className="h-2/3">
      {company ? (
        ""
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
