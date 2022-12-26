import useMoveLogin from "libs/client/useMoveLogin";

const Profile = () => {
  useMoveLogin("/profile");
  return <div>Profile</div>;
};

export default Profile;
