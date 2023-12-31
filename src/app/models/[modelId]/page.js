"use client";
import React, { useEffect } from "react";
import Detail from "src/components/Model/Detail";
import AddVoice from "@components/Model/AddVoice";
import { useSelector, useDispatch } from "react-redux";
import { fetchModels } from "@redux/features/cover/actions";

const model = ({ params }) => {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.covers);
  const { modelId } = params;

  const model = characters.find(
    (item) => Number(item.speaker_id) === Number(modelId)
  );

  useEffect(() => {
    dispatch(fetchModels());
  }, [dispatch]);

  return (
    <div className="container flex flex-col items-center gap-4 p-8 mx-auto bg-white shadow-sm rounded-2xl">
      <Detail model={model} />
      <AddVoice />
    </div>
  );
};

export default model;
