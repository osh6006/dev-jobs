import useDays from "libs/client/useDays";

const ResumeItem = ({ resumeInfo, index }) => {
  const days = useDays(resumeInfo.createdAt);
  const updateDays = useDays(resumeInfo.updatedAt);

  return (
    <>
      <div className="relative flex h-[228px] w-full cursor-pointer flex-col justify-center rounded-xl bg-white px-8 shadow-xl transition-transform hover:scale-110 dark:bg-very_dark_blue">
        <div className="mt-3 text-h3 font-bold capitalize dark:text-white">
          {`${resumeInfo?.title}`}
        </div>
        <div className="mt-3 font-thin text-violet">{`${resumeInfo?.email}`}</div>
        <div className="mt-7 font-bold text-violet">{resumeInfo?.location}</div>
        <div className="font-thin text-gray">{`${
          days && days
        } - 작성됨 ·  ${updateDays} - 수정됨`}</div>
        {resumeInfo && (
          <div className="absolute top-5 right-5 z-20 p-5 text-purple ">
            {resumeInfo.isRepresentative ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
};

export default ResumeItem;
