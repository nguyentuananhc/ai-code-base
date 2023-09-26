import React from "react";

const Button = ({ text }) => {
  return (
    <div className="cursor-pointer orange_gradient max-w-[300px] min-w-[300px] !text-white text-[24px] bg-[linear-gradient(120deg, #FF9A26, #FF4218)] py-3 transition-[0.3s] duration-[linear] shadow-[0_4px_8px_rgb(255,66,24,0.2)] rounded-lg text-center font-semibold">
      {text}
    </div>
  );
};

export default Button;
