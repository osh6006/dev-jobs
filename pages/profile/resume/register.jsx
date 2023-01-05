import ResumeForm from "components/profile/resume/resumeForm";
import useGeneralMove from "libs/client/useGeneralMove";

const RriteResume = () => {
  useGeneralMove();

  return (
    <div className="flex w-full flex-col">
      <h1 className="mb-10 text-center text-h2 font-bold text-violet tablet:text-start">
        이력서 작성
      </h1>
      <ResumeForm edit={false} />
    </div>
  );
};

export default RriteResume;
