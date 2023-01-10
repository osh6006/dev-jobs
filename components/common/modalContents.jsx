import DefaultButton from "./defaultButton";

const ModalContents = ({
  text = "Modal Contents",
  onClose,
  isDelete,
  exeFunction,
}) => {
  return (
    <>
      {isDelete ? (
        <div className="flex flex-col items-center justify-center gap-10 p-10 font-main dark:bg-very_dark_blue">
          <div className="text-h3">{text}</div>
          <div className="flex w-full gap-5">
            <DefaultButton text="취소" onClick={onClose} color="warning" />
            <DefaultButton
              text="확인"
              onClick={() => {
                onClose();
                exeFunction();
              }}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-10 p-10 font-main dark:bg-very_dark_blue">
          <div className="text-h3">{text}</div>
          <div className="w-2/3">
            <DefaultButton text="확인" onClick={onClose} />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalContents;
