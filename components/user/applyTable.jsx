import Link from "next/link";

const ApplyTable = ({ applyData, companyData }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const tabletFormatter = new Intl.DateTimeFormat("ko", options);
  const mobileFormatter = new Intl.DateTimeFormat(options);
  return (
    <>
      <div className="grid grid-cols-4 gap-1 rounded-xl dark:bg-very_dark_blue">
        <div className="hidden bg-edit  p-3 text-center text-white tablet:block">
          No.
        </div>
        <div className="hidden bg-edit p-3 text-center text-white tablet:block">
          회사 이름
        </div>
        <div className="hidden bg-edit p-3 text-center text-white tablet:block">
          지원 현황
        </div>
        <div className="hidden bg-edit p-3 text-center text-white tablet:block">
          날짜
        </div>
        <div className="bg-edit p-3 text-center text-white tablet:hidden">
          No.
        </div>
        <div className="bg-edit p-3 text-center text-white tablet:hidden">
          회사
        </div>
        <div className="bg-edit p-3 text-center text-white tablet:hidden">
          상태
        </div>
        <div className="bg-edit p-3 text-center text-white tablet:hidden">
          날짜
        </div>

        {applyData &&
          applyData.map((element, index) => (
            <>
              <div
                className="p-3 text-center align-middle shadow-lg dark:text-white"
                key={index}
              >
                {index + 1}
              </div>
              <Link
                href={`/company/${element.companyInfoId}`}
                className="p-3 text-center align-middle text-violet underline shadow-lg dark:text-white "
              >
                {companyData[index].name}
              </Link>
              <div className="p-3 text-center align-middle shadow-lg dark:text-white">
                {element.state === "pending" ? "검토중" : null}
                {element.state === "allow" ? "서류 합격" : null}
              </div>
              <div className="p-3 text-center align-middle text-[15px] shadow-lg dark:text-white">
                <span className="hidden tablet:block">
                  {tabletFormatter.format(new Date(element.updatedAt))}
                </span>
                <span className="block tablet:hidden">
                  {mobileFormatter.format(new Date(element.updatedAt))}
                </span>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default ApplyTable;
