import DefaultButton from "components/common/defaultButton";
import { useEffect } from "react";
import ResumeForm from "./resumeForm";
import useMutation from "libs/client/useMutation";
import { useRouter } from "next/router";
import usePopup from "libs/client/usePopup";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ModalContents from "components/common/modalContents";
import useEdit from "libs/client/useEdit";
import useDoubleMutation from "libs/client/useDoubleMutation";

const CVDetail = ({ resumeInfo }) => {
  const [edit, setEdit] = useEdit();
  const router = useRouter();

  const [remove, { loading, mutationData }] = useMutation(
    "/api/users/resume/remove"
  );
  const [rep, { doubleData }] = useDoubleMutation(
    resumeInfo ? `/api/users/resume/${resumeInfo?.id}/rep` : null
  );

  const [isModalOpen, modalText, setModalText, onModalOpen, onModalClose] =
    usePopup();

  const [
    isRepModalOpen,
    repModalText,
    setRepModalText,
    onRepModalOpen,
    onRepModalClose,
  ] = usePopup();

  const handleEdit = () => {
    setEdit(true);
  };

  const handleDelete = () => {
    remove(resumeInfo?.id);
  };
  const handleRep = () => {
    const repData = {
      id: resumeInfo?.id,
      devJobsUserId: resumeInfo?.devJobsUserId,
    };
    rep(repData);
  };

  useEffect(() => {
    if (mutationData?.ok || doubleData?.ok) {
      router.replace("/profile/resume");
    }
    setModalText("정말로 이력서를 삭제 하시겠습니까?");
    setRepModalText("대표 이력서로 설정하시겠습니까?");
  }, [mutationData, doubleData]);

  return (
    <>
      <Modal open={isModalOpen} onClose={onModalClose} center>
        <ModalContents
          text={modalText}
          onClose={onModalClose}
          isDelete={true}
          exeFunction={handleDelete}
        />
      </Modal>
      <Modal open={isRepModalOpen} onClose={onRepModalClose} center>
        <ModalContents
          text={repModalText}
          onClose={onRepModalClose}
          isDelete={true}
          exeFunction={handleRep}
        />
      </Modal>
      {edit ? (
        <div className="flex w-full flex-col">
          <h1 className="mb-10 text-center text-h2 font-bold text-violet tablet:text-start">
            이력서 작성
          </h1>
          <ResumeForm edit={edit} resumeInfo={resumeInfo} />
        </div>
      ) : (
        <div className="h-full w-full">
          <section className="mb-10 grid w-full grid-cols-1 gap-4 rounded-3xl bg-white p-5 font-semibold text-midnight shadow-lg dark:bg-very_dark_blue dark:text-dark_grey tablet:grid-cols-2">
            <div className="w-full space-y-10">
              <div className="rounded-3xl border-2 border-violet p-5 text-center tablet:text-start">
                <div className="flex flex-col items-center mobile:text-center desktop:flex-row desktop:space-x-11">
                  <div className="h-36 w-36 rounded-full bg-gray"></div>
                  <div>
                    <div className="mb-3 whitespace-nowrap mobile:mt-5 tablet:mb-2">
                      {resumeInfo?.title}
                    </div>
                    <div className="mb-3 whitespace-nowrap tablet:mb-2 ">
                      {resumeInfo?.name}
                    </div>
                    <div>희망 직업 - {resumeInfo?.hope}</div>
                  </div>
                </div>
                <div className="mt-5 break-words">
                  {resumeInfo?.introduction}
                </div>
                <div className="mt-5 flex flex-col text-violet desktop:flex-row">
                  <span className="tablet:mr-10 ">{resumeInfo?.email}</span>
                  <span className="">{resumeInfo?.phone}</span>
                </div>
              </div>
              <div className="space-y-3 rounded-3xl  border-2 border-violet p-5">
                <div className="font-bold text-violet">링크</div>
                <div className="desktop:w-1/2">
                  {resumeInfo?.link?.contents?.map((element, i) => (
                    <a target="_blank" rel="my_link" key={i} href={element}>
                      <div className="mt-2 text-link transition-colors hover:text-light_violet">
                        {element}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border-2 border-violet p-5 ">
                <div className="font-bold text-violet">최종 학력</div>
                <div className="mt-3 hidden rounded-t-xl bg-violet p-3 text-center tablet:grid tablet:grid-cols-3">
                  <div className="border-r border-white text-midnight">
                    학교
                  </div>
                  <div className="border-r border-white text-midnight">
                    학과
                  </div>
                  <div className="border-white text-midnight">학력</div>
                </div>
                <div className="grid p-3 text-center shadow-lg tablet:grid-cols-3 ">
                  <div className="border-white text-midnight dark:text-dark_grey tablet:border-r">
                    {resumeInfo?.school}
                  </div>
                  <div className="border-white text-midnight dark:text-dark_grey tablet:border-r">
                    컴퓨터 공학과
                  </div>
                  <div className="border-white text-midnight dark:text-dark_grey">
                    {resumeInfo?.ability}
                  </div>
                </div>
              </div>
              <div className="space-y-3 rounded-3xl border-2 border-violet p-5">
                <div className="mb-3 font-bold text-violet">기술 스택</div>
                <div className="flex flex-col flex-wrap items-center space-x-3 tablet:flex-row">
                  {resumeInfo?.skill?.contents?.map((element, i) => (
                    <>
                      <div
                        className="my-1 rounded-3xl bg-violet p-2 text-h4 font-thin text-white"
                        key={element.id}
                      >
                        {element.name}
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-10 tablet:mt-0">
              <div className="rounded-3xl  border-2 border-violet p-5">
                <div className="font-bold text-violet">경력</div>
                <div>
                  {resumeInfo?.career?.contents?.map((element, i) => (
                    <>
                      <div
                        className="my-3 text-h4 font-semibold text-very_dark_blue dark:text-dark_grey"
                        key={i}
                      >
                        {element}
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl  border-2  border-violet p-5">
                <div className="font-bold text-violet">자격증</div>
                <div>
                  {resumeInfo?.certificate?.contents?.map((element, i) => (
                    <>
                      <div
                        className="my-3 text-h4 font-semibold text-very_dark_blue dark:text-dark_grey"
                        key={element}
                      >
                        {element}
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-3 tablet:col-span-2">
              <DefaultButton
                onClick={handleEdit}
                color="edit"
                text="수정하기"
              />
              <DefaultButton
                onClick={onModalOpen}
                color="warning"
                text="삭제하기"
              />
              <DefaultButton
                onClick={onRepModalOpen}
                text="대표 이력서로 설정하기"
                disabled={false}
              />
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default CVDetail;
