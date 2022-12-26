import Company from "components/home/company";
import SearchBar from "components/home/searchbar";
import Link from "next/link";

import data from "../public/data.json";

export default function Home() {
  return (
    <div className="w-full">
      <div className="-mt-12 w-full space-y-14 p-10 tablet:-mt-20">
        <SearchBar />
        <section className="grid w-full gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
          {data &&
            data.map((data) => (
              <Link key={data.id} href={`company/${data.id}`}>
                <Company companyInfo={data} />
              </Link>
            ))}
        </section>
      </div>
    </div>
  );
}
