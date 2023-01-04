import useDays from "libs/client/useDays";

const ResumeItem = ({ resumeInfo, index }) => {
  const days = useDays(resumeInfo.createdAt);
  return (
    <>
      <div className="flex h-[228px] w-full cursor-pointer flex-col justify-center rounded-xl bg-white px-8 shadow-xl transition-transform hover:scale-110 dark:bg-very_dark_blue">
        <div className="font-thin text-gray">{`${days && days} - 작성됨`}</div>
        <div className="mt-3 text-h3 font-bold capitalize dark:text-white">
          {`${resumeInfo?.name}님의 ${index} 번째 이력서`}
        </div>
        <div className="mt-3 font-thin text-violet">{`${resumeInfo?.email}`}</div>
        <div className="mt-7 font-bold text-violet">{resumeInfo?.location}</div>
      </div>
    </>
  );
};

export default ResumeItem;
