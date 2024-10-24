import { useState } from "react";

const Tooltip = ({ children, content }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className="bg-black text-white"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <div>{content}</div>}
    </div>
  );
};

export default Tooltip;
