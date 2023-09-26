import React from "react";
import Button from "@components/Button";

const Banner = () => {
  return (
    <div className="container mx-auto flex">
      <div className="flex flex-col gap-7 max-w-[50%]">
        <h1 className="text-[48px] font-bold">
          Music Creation Has Never Been Easier
        </h1>
        <p className="text-[24px] text-gray-400">
          Explore a vast library of 100+ AI voice models and create song covers
          with your favorite AI vocals in just one click. Spark your imaginative
          flair and ignite your passion for music creation.
        </p>
        <div>
          <span>
            <Button text="Create AI Covers Now" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
