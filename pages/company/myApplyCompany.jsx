import DefaultButton from "components/common/defaultButton";
import Company from "components/home/company";
import useUser from "libs/client/useUser";
import Link from "next/link";
import useSWR from "swr";

const MyApplyCompany = () => {
  const user = useUser();
  const { data } = useSWR(
    user ? `/api/company/myCompany/${user.profile.id}` : null
  );

  return (
    <>
      {data && data?.company?.length > 0 ? (
        <>
          <h1 className="mb-14 text-h2 font-bold text-violet">
            내가 지원한 회사
          </h1>
          <section className="grid gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
            {data?.company?.map(element => (
              <Link key={element?.id} href={`company/${element?.id}`}>
                <Company companyInfo={element} />
              </Link>
            ))}
            <Link
              href={`/company/register`}
              className="flex h-[228px] w-full cursor-pointer flex-col items-center justify-center rounded-xl bg-white px-8 text-violet shadow-lg transition-transform hover:scale-110 hover:text-light_violet dark:bg-very_dark_blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </Link>
          </section>
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
