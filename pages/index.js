import CompanyItem from "../components/home/companyItem";
import SearchBar from "../components/home/searchbar";
import data from "../public/data.json";

export default function Home() {
  return (
    <div className=" w-full">
      <div className="-mt-24 w-full space-y-14 p-10">
        <SearchBar />
        <section className="grid w-full gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
          {data &&
            data.map((data) => (
              <CompanyItem key={data.id} companyInfo={data} />
            ))}
        </section>
      </div>
    </div>
  );
}
