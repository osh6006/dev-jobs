import Company from "components/home/company";
import SearchBar from "components/home/searchbar";
import Link from "next/link";
import useSWR from "swr";
import Loading from "components/common/loading";
import { useState } from "react";
import DefaultButton from "components/common/defaultButton";

export default function Home() {
  const { data, isLoading } = useSWR("/api/company/getCompany");
  const [next, setNext] = useState(6);
  return (
    <>
      {isLoading ? (
        <div className="mx-auto flex h-[calc(100vh/2)] w-full items-center justify-center">
          <div className="h-11 w-40">
            <Loading />
          </div>
        </div>
      ) : (
        <div className="-mt-12 flex w-full flex-col space-y-14 tablet:-mt-20">
          <SearchBar />
          <section className="grid w-full  gap-20 tablet:grid-cols-2 tablet:gap-10 desktop:grid-cols-3">
            {data?.companys?.slice(0, next).map(element => (
              <Link key={element?.id} href={`company/${element?.id}`}>
                <Company companyInfo={element} />
              </Link>
            ))}
          </section>
          <div className="w-24 self-center">
            <DefaultButton
              text="Load More"
              onClick={() => {
                setNext(next + 6);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
