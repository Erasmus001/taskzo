import { useState } from "react";

const useModal = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibile = () => setVisible(!visible);

  return { toggleVisibile, visible };
};

export default useModal;
