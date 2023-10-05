import React from "react";
import Image from "next/image";
import Button from "@components/Button";

const BottomBanner = () => {
  return (
    <div
      className="container flex flex-col items-center gap-4 py-16 mx-auto"
      style={{
        background: "#FFF2EF url(/bottom-bg.webp) no-repeat center",
        borderRadius: 30,
      }}
    >
      <Image className="rounded-2xl" src="/logo.jpg" width={120} height={120} />
      <b className="text-[32px]">SingSing</b>
      <h2 className="font-bold text-[38px]">
        Redefining Music at Your Fingertips
      </h2>
      <Button text="Create Now" />
    </div>
  );
};

export default BottomBanner;
