import React from "react";

const Title = () => {
  return (
    <div className="container flex flex-col items-center gap-4 mx-auto">
      <h2 className="font-bold text-[42px]">
        Discover Unlimited AI Voice Models
      </h2>
      <p className="text-[24px] text-gray-400 text-center">
        Our AI voice model library boasts 100+ voices. Find your favorite voice
        model and start crafting a unique musical experience. Can't find your
        favorite AI voice?{" "}
        <a className="text-orange-500 cursor-pointer">
          Submit your model request
        </a>
      </p>
    </div>
  );
};

export default Title;
