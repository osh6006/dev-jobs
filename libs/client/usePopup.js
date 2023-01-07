import { useRouter } from "next/router";
import { useState } from "react";

const usePopup = url => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const onOpen = () => setOpen(true);
  const router = useRouter();

  const onClose = () => {
    setOpen(false);
    url && router.replace(url);
  };

  return [open, text, setText, onOpen, onClose];
};

export default usePopup;
