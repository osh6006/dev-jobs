import { useState } from "react";

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  return [isHovered, setIsHovered];
};

export default useHover;
