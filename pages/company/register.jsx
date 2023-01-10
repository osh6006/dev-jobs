import useCEO from "libs/client/ceo/useCEO";
import CompanyRForm from "components/company/companyRForm";

const CompanyRegister = () => {
  useCEO();

  return (
    <section className="my-0 mx-auto w-full p-10">
      <h1 className="text-h1 font-bold text-violet">기업 등록</h1>
      <CompanyRForm />
    </section>
  );
};

export default CompanyRegister;
