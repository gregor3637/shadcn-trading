import { useState } from "react";

const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen((val) => !val);

  return { isOpen, toggle };
};

export default useSidebar;
