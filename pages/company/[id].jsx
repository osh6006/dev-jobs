import DefaultButton from "components/common/defaultButton";
import Loading from "components/common/loading";
import SecondaryButton from "components/common/secondaryButton";
import CompanyRForm from "components/company/companyRForm";
import useDays from "libs/client/useDays";
import useEdit from "libs/client/useEdit";
import useUser from "libs/client/useUser";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const CompanyDetail = () => {
  const router = useRouter();

  const { data, isLoading } = useSWR(
    router.query.id ? `/api/company/${router.query.id}` : null
  );
  const days = useDays(data?.company?.createdAt);
  const user = useUser();
  const [edit, setEdit, handleDelete, handleUpdate] = useEdit();
  const [sameCEO, setSameCEO] = useState(false);

  useEffect(() => {
    if (user?.profile?.id === data?.company?.devJobsUserId) {
      setSameCEO(true);
    }
  }, [data, user, sameCEO]);

  return (
    <div>
      {isLoading ? (
        <div className="mx-auto flex h-[calc(100vh/2)] w-full items-center justify-center">
          <div className="h-11 w-40">
            <Loading />
          </div>
        </div>
      ) : (
        <>
          {edit ? (
            <CompanyRForm edit={edit} companyInfo={data?.company} />
          ) : (
            <>
              <section className="w-full px-5 tablet:px-0">
                <div className="mt-1 flex w-full flex-col items-center rounded-xl bg-white  shadow-lg dark:bg-very_dark_blue tablet:-mt-20 tablet:flex-row tablet:items-center tablet:justify-between">
                  <div className="flex flex-col items-center tablet:flex-row tablet:space-x-5">
                    <div
                      style={{ backgroundColor: data?.company?.logoBgColor }}
                    >
                      <img
                        className="-mt-5 aspect-square h-20 w-20 rounded-xl text-center tablet:mt-0 tablet:h-full tablet:w-24 tablet:rounded-none tablet:text-start"
                        src={
                          data &&
                          `https://imagedelivery.net/Qb_nKB9Jwhj1mePNmxDoZg/${data?.company?.logo}/public`
                        }
                      />
                    </div>
                    <div className="tablet:space-y-1">
                      <div className="mt-4 text-center text-h3 font-bold capitalize dark:text-white tablet:text-start">
                        {data?.company?.name}
                      </div>
                      <div className="mt-3 text-gray">
                        {data?.company?.website}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 mb-8 tablet:m-0 tablet:mr-10">
                    <Link href={data ? data?.company?.website : "#"}>
                      <SecondaryButton text="회사 홈페이지" />
                    </Link>
                  </div>
                </div>

                <div className="mt-4 rounded-md bg-white py-10 px-5 shadow-lg dark:bg-very_dark_blue">
                  <div className="tablet:flex tablet:items-center tablet:justify-between">
                    <div className="space-y-2">
                      <h4 className=" text-dark_grey tablet:text-h3 ">
                        {`${days && days} - ${data?.company?.contract}`}
                      </h4>
                      <h3 className="text-h3 font-bold capitalize dark:text-white tablet:text-h2">
                        {data?.company?.position}
                      </h3>
                      <h4 className="font-bold capitalize text-violet">
                        {data?.company?.location}
                      </h4>
                    </div>
                    <div
                      className={
                        sameCEO
                          ? "mt-10 grid grid-cols-2 gap-5 tablet:m-0  tablet:rounded-md"
                          : "mt-10 grid grid-cols-1 gap-5 tablet:m-0  tablet:rounded-md"
                      }
                    >
                      {sameCEO ? (
                        <>
                          <div className="tablet:w-32 desktop:w-32">
                            <DefaultButton
                              text="삭제 하기"
                              color="warning"
                              onClick={handleDelete}
                            />
                          </div>
                          <div>
                            <DefaultButton
                              text="수정 하기 "
                              color="edit"
                              onClick={handleUpdate}
                            />
                          </div>
                        </>
                      ) : (
                        <div className="tablet:w-32 desktop:w-32">
                          <DefaultButton text="지원 하기" />
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="mt-10 break-words text-h3 text-dark_grey">
                    {data?.company?.description}
                  </p>
                  <h1 className="mt-10 break-words text-h2 font-bold dark:text-white ">
                    Requirements
                  </h1>
                  <p className="mt-10 break-words text-h3 text-dark_grey ">
                    {data?.company?.requirements?.contents}
                  </p>
                  <ul className="mt-10 list-disc break-words px-5 text-h3 text-dark_grey marker:text-violet">
                    {data?.company?.requirements?.items?.map((element, i) => (
                      <li className="" key={i}>
                        {element}
                      </li>
                    ))}
                  </ul>
                  <h1 className="mt-10 break-words text-h2 font-bold dark:text-white ">
                    What You Will Do
                  </h1>
                  <p className="mt-10 break-words text-h3 text-dark_grey ">
                    {data?.company?.roles?.contents}
                  </p>
                  <ul className="mt-10 list-decimal break-words px-5 text-h3 text-dark_grey marker:text-violet">
                    {data?.company?.requirements?.items?.map((element, i) => (
                      <li className="" key={i}>
                        {element}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
              <footer className="mt-10 w-full bg-white  p-5 shadow-xl dark:bg-very_dark_blue tablet:left-0  tablet:flex tablet:justify-center ">
                <div className="tablet:flex tablet:w-full tablet:max-w-[1440px] tablet:justify-between tablet:px-10 tablet:py-5">
                  <div className="hidden tablet:block">
                    <h2 className="text-h2 font-bold capitalize dark:text-white ">
                      {data?.company?.position}
                    </h2>
                    <h3 className="text-h3 capitalize text-dark_grey">
                      {data?.company?.name}
                    </h3>
                  </div>
                  <div className="w-full tablet:w-32">
                    <DefaultButton text="지원 하기" />
                  </div>
                </div>
              </footer>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CompanyDetail;
