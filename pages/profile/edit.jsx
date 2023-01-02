import CeoUserEdit from "components/profile/edit/ceoUserEdit";
import GeneralUserEdit from "components/profile/edit/generalUserEdit";
import useUser from "libs/client/useUser";

const Edit = () => {
  const user = useUser();
  return (
    <>
      {false ? (
        <CeoUserEdit user={user?.profile} />
      ) : (
        <GeneralUserEdit user={user?.profile} />
      )}
    </>
  );
};

export default Edit;
