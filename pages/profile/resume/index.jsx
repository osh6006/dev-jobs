import DefaultButton from "components/common/defaultButton";
import Loading from "components/common/loading";
import ResumeItem from "components/profile/resume/resumeItem";
import useGeneralMove from "libs/client/useGeneralMove";
import useUser from "libs/client/useUser";
import Link from "next/link";
import useSWR from "swr";

const Resume = () => {
  useGeneralMove();
  const user = useUser();
  const { data, isLoading } = useSWR(
    user ? `/api/users/resume/${user?.profile?.id}` : null
  );
  return (
    <section className="h-full">
      {data?.ok ? (
        <>
          <h1 className="mb-14 text-h2 font-bold text-violet">
            내 이력서 목록
          </h1>
          <p className="mb-14 text-h3 font-bold text-warning_light">
            * 이력서로 들어가서 대표 이력서를 설정하세요 지원시 대표 이력서로
            지원 됩니다.
          </p>

          {isLoading ? (
            <div className="h-[calc(100vh-50vh)] w-full">
              <Loading />
            </div>
          ) : (
            <section className="grid w-full gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
              {data?.resume?.map((element, i) => (
                <Link key={element?.id} href={`/profile/resume/${element?.id}`}>
                  <ResumeItem resumeInfo={element} index={i + 1} />
                </Link>
              ))}
              <Link
                href={`/profile/resume/register`}
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
          )}
        </>
      ) : (
        <div className="flex h-[calc(100vh*1/2)] flex-col items-center justify-center space-y-5">
          <h2 className="text-center text-h2 font-bold text-dark_grey dark:text-white">
            아직 이력서를 작성하지 않았어요 작성하러 가볼까요?
          </h2>
          <Link href="/profile/resume/register" className="w-32">
            <DefaultButton text="작성 하러 가기" />
          </Link>
        </div>
      )}
    </section>
  );
};

export default Resume;

// <!-- License: MIT. Made by css.gg: https://github.com/astrit/css.gg -->
// <!-- License: Apache. Made by Remix Design: https://github.com/Remix-Design/remixicon -->
