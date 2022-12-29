import Company from "components/home/company";
import SearchBar from "components/home/searchbar";
import Link from "next/link";
import useSWR from "swr";
import useUser from "libs/client/useUser";

export default function Home() {
  const user = useUser();
  const { data } = useSWR("/api/company/getCompany");
  return (
    <div className="">
      <div className="-mt-12 w-full space-y-14 p-10 tablet:-mt-20">
        <SearchBar />
        <section className="grid w-full gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
          {data?.companys?.map((element) => (
            <Link key={element.id} href={`company/${element.id}`}>
              <Company companyInfo={data.companys} />
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
