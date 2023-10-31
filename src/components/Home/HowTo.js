"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@components/Button";

const STEP = [
  {
    id: 1,
    name: "Select the Voice Model",
    icon: "",
    photo: "/step1.webp",
  },
  { id: 2, name: "Add the Song", icon: "", photo: "/step2.webp" },
  { id: 3, name: "Generate AI Song Cover", icon: "", photo: "/step1.webp" },
];

const HowTo = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="container flex flex-col items-center gap-12 mx-auto">
      <h2 className="font-bold text-[38px]">
        Music Creation Has Never Been Easier
      </h2>
      <p className="text-[24px] text-gray-400 text-center">
        Create AI songs with your favorite vocals within 3 steps.
      </p>
      <ul className="flex justify-center">
        {STEP?.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => setStep(item.id)}
              className={`cursor-pointer flex flex-col items-center py-4 px-8 ${
                step === item?.id &&
                "text-[#FF4218] border-b-4 border-[#FF4218]"
              }`}
            >
              <Image
                src="https://singify.fineshare.com/images/ic-step1.svg"
                width={68}
                height={68}
                alt="step icon"
              />
              <b>{item.name}</b>
            </li>
          );
        })}
      </ul>
      <img
        className="max-w-[100%] h-auto"
        src={STEP.find((item) => item.id === step)?.photo}
        alt="step photo"
      />
      <Button text={"Make AI Covers"} />
    </div>
  );
};

export default HowTo;
