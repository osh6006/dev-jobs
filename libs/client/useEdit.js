import { useState } from "react";

const useEdit = () => {
  const [edit, setEdit] = useState(false);

  const handleDelete = () => {
    console.log("delete");
  };
  const handleUpdate = () => {
    console.log("update!");
    setEdit(true);
  };
  return [edit, setEdit, handleDelete, handleUpdate];
};

export default useEdit;
