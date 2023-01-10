import { useState } from "react";

const useEdit = () => {
  const [edit, setEdit] = useState(false);

  const handleDelete = deletefn => {
    deletefn;
  };
  const handleUpdate = () => {
    setEdit(true);
  };
  return [edit, setEdit, handleDelete, handleUpdate];
};

export default useEdit;
