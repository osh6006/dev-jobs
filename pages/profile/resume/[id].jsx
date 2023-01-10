import useGeneralMove from "libs/client/useGeneralMove";
import useUser from "libs/client/useUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Loading from "components/common/loading";
import CVDetail from "components/profile/resume/cvDetail";

const ResumeDetail = () => {
  useGeneralMove();
  const user = useUser();
  const router = useRouter();
  const { data, isLoading } = useSWR(
    user ? `/api/users/resume/${user.profile.id}` : null
  );

  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(() => {
    if (data && data?.resume?.length > 0) {
      const newItem = [...data?.resume].filter(element => {
        return element.id == router.query.id;
      });
      setSelectedItem(...newItem);
    }
  }, [data]);
  console.log(selectedItem);

  return (
    <>
      {isLoading ? (
        <div className="mx-auto flex h-[calc(100vh/2)] w-full items-center justify-center">
          <div className="h-11 w-40">
            <Loading />
          </div>
        </div>
      ) : (
        <>
          <CVDetail resumeInfo={selectedItem} />
        </>
      )}
    </>
  );
};

export default ResumeDetail;
