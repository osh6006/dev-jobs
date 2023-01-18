import useDays from "libs/client/useDays";
import notImgUrl from "public/notlogo.png";

const Company = ({ companyInfo }) => {
  const days = useDays(companyInfo.createdAt);
  return (
    <>
      <div className="flex h-[228px] w-full cursor-pointer flex-col rounded-xl bg-white px-8 shadow-xl transition-transform hover:scale-110 dark:bg-very_dark_blue">
        <div
          style={{ backgroundColor: companyInfo?.logoBgColor }}
          className="-mt-6 aspect-square h-14 w-14 rounded-xl"
        >
          <img
            className="aspect-square w-24 rounded-xl object-scale-down text-center  tablet:mt-0 tablet:h-full tablet:rounded-none tablet:text-start"
            src={
              companyInfo?.logo
                ? `https://imagedelivery.net/Qb_nKB9Jwhj1mePNmxDoZg/${companyInfo?.logo}/public`
                : `${notImgUrl?.src}`
            }
          />
        </div>
        <div className="mt-5 font-thin text-gray">
          {`${days && days} - ${companyInfo?.contract}`}
        </div>
        <div className="mt-3 text-h3 font-bold capitalize dark:text-white">
          {companyInfo?.position}
        </div>
        <div className="mt-3 font-thin capitalize text-gray">
          {companyInfo?.name}
        </div>
        <div className="mt-7 font-bold text-violet">
          {companyInfo?.location}
        </div>
      </div>
    </>
  );
};

export default Company;
