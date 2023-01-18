import DefaultButton from "components/common/defaultButton";
import Link from "next/link";

const ApplyTable = ({ applyData, companyData }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const tabletFormatter = new Intl.DateTimeFormat("ko", options);
  const mobileFormatter = new Intl.DateTimeFormat(options);

  const handleDelete = () => {};

  return (
    <>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="hidden border border-gray bg-edit p-3 font-bold uppercase text-white dark:text-gray tablet:table-cell">
              No.
            </th>
            <th className="hidden border border-gray bg-edit p-3 font-bold uppercase text-white dark:text-gray tablet:table-cell">
              회사
            </th>
            <th className="hidden border border-gray bg-edit p-3 font-bold uppercase text-white dark:text-gray tablet:table-cell">
              상태
            </th>
            <th className="hidden border border-gray bg-edit p-3 font-bold uppercase text-white dark:text-gray tablet:table-cell">
              날짜
            </th>
            <th className="hidden border border-gray bg-edit p-3 font-bold uppercase text-white dark:text-gray tablet:table-cell">
              비고
            </th>
          </tr>
        </thead>
        <tbody>
          {applyData &&
            applyData.map((element, index) => (
              <tr className="tablet:flex-no-wrap mb-10 flex border-collapse flex-row flex-wrap bg-white dark:bg-very_dark_blue tablet:mb-0 tablet:table-row tablet:flex-row ">
                <td className="relative block w-full border border-b p-3 text-center text-violet tablet:static tablet:table-cell tablet:w-auto">
                  <span className="absolute top-0 left-0  px-2 py-1 text-h4 font-bold text-edit tablet:hidden">
                    No.
                  </span>
                  <span className="text-edit dark:text-gray">{index + 1}</span>
                </td>
                <td className="relative block w-full border border-b p-3 text-center text-violet tablet:static tablet:table-cell tablet:w-auto">
                  <span className="absolute top-0 left-0  px-2 py-1 text-h4 font-bold text-edit tablet:hidden">
                    회사
                  </span>
                  <Link
                    href={`/company/${element.companyInfoId}`}
                    className="p-3 text-center align-middle  text-violet underline shadow-lg dark:text-gray "
                  >
                    {companyData && companyData[index].name}
                  </Link>
                </td>
                <td className="relative block w-full border border-b p-3 text-center text-violet tablet:static tablet:table-cell tablet:w-auto">
                  <span className="absolute top-0 left-0 px-2 py-1 text-h4 font-bold text-edit tablet:hidden">
                    상태
                  </span>
                  <span className="whitespace-pre rounded bg-warning_light py-2 px-2 text-h4  text-white">
                    {element.state === "pending" ? "서류 검토중" : null}
                    {element.state === "allow" ? "서류 합격" : null}
                  </span>
                </td>
                <td className="relative block w-full border border-b p-3 text-center text-violet tablet:static tablet:table-cell tablet:w-auto">
                  <span className="absolute top-0 left-0 px-2 py-1 text-h4 font-bold text-edit tablet:hidden">
                    날짜
                  </span>
                  <span className="hidden text-edit dark:text-gray tablet:block">
                    {tabletFormatter.format(new Date(element.updatedAt))}
                  </span>
                  <span className="block tablet:hidden">
                    {mobileFormatter.format(new Date(element.updatedAt))}
                  </span>
                </td>
                <td className="relative block w-full border border-b p-3 text-center text-violet tablet:static tablet:table-cell tablet:w-auto">
                  <span className="absolute top-0 left-0 px-2 py-1 text-h4 font-bold text-edit tablet:hidden">
                    비고
                  </span>
                  <button
                    onClick={handleDelete}
                    className="whitespace-pre rounded bg-purple px-2 py-2 text-h4  text-white transition-colors hover:bg-violet"
                  >
                    취소 하기
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ApplyTable;
