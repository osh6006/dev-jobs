const Loading = ({ size = "6", color = "violet" }) => {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center rounded-lg duration-[500ms,800ms]">
        <div
          className={`my-auto mx-auto h-${size} w-${size} animate-spin rounded-full border-4 border-solid border-t-transparent text-${color}`}
        ></div>
      </div>
    </>
  );
};

export default Loading;
