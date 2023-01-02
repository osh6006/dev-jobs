import Company from "components/home/company";
import SearchBar from "components/home/searchbar";
import Link from "next/link";
import useSWR from "swr";
import Loading from "components/common/loading";

export default function Home() {
  const { data, isLoading } = useSWR("/api/company/getCompany");
  return (
    <>
      {isLoading ? (
        <div className="mx-auto flex h-[calc(100vh/2)] w-full items-center justify-center">
          <div className="h-11 w-40">
            <Loading />
          </div>
        </div>
      ) : (
        <div className="-mt-12 w-full space-y-14 tablet:-mt-20">
          <SearchBar />
          <section className="grid w-full gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
            {data?.companys?.map(element => (
              <Link key={element?.id} href={`company/${element?.id}`}>
                <Company companyInfo={element} />
              </Link>
            ))}
          </section>
        </div>
      )}
    </>
  );
}
