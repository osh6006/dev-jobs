import useDays from "libs/client/useDays";

const ResumeItem = ({ resumeInfo, index }) => {
  const days = useDays(resumeInfo.createdAt);
  const updateDays = useDays(resumeInfo.updatedAt);
  return (
    <>
      <div className="flex h-[228px] w-full cursor-pointer flex-col justify-center rounded-xl bg-white px-8 shadow-xl transition-transform hover:scale-110 dark:bg-very_dark_blue">
        <div className="mt-3 text-h3 font-bold capitalize dark:text-white">
          {`${resumeInfo?.title}`}
        </div>
        <div className="mt-3 font-thin text-violet">{`${resumeInfo?.email}`}</div>
        <div className="mt-7 font-bold text-violet">{resumeInfo?.location}</div>
        <div className="font-thin text-gray">{`${
          days && days
        } - 작성됨 ·  ${updateDays} - 수정됨`}</div>
      </div>
    </>
  );
};

export default ResumeItem;
