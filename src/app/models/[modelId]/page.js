"use client";
import React from "react";
import Detail from "src/components/Model/Detail";
import AddVoice from "@components/Model/AddVoice";

const model = ({ params }) => {
  return (
    <div className="container flex flex-col items-center gap-4 p-8 mx-auto bg-white shadow-sm rounded-2xl">
      <Detail />
      <AddVoice />
    </div>
  );
};

export default model;
