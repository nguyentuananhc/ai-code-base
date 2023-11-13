"use client";

import React, { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchModels } from "@redux/features/cover/actions";
import { useSearchParams } from "next/navigation";
import { getCoversRequest } from "@redux/features/cover/actions";
import { SkeletonText } from "@chakra-ui/react";

import Player from "@components/Cover/Player";
import Request from "@components/Model/Request";

const model = ({ params }) => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const { characters, cover } = useSelector((state) => state.covers);
  const { id } = params;
  const modelId = searchParams.get("modelId");

  const model = characters.find(
    (item) => Number(item.speaker_id) === Number(modelId)
  );

  useEffect(() => {
    if (id)
      dispatch(
        getCoversRequest({
          requestId: id,
        })
      );
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(fetchModels());
  }, [dispatch]);

  return (
    <div className="container flex flex-col gap-4 p-8 mx-auto bg-white shadow-sm rounded-2xl">
      <Text className="text-2xl font-bold " as="h1">
        {model?.name} Model
      </Text>{" "}
      <Request modelId={modelId} />
      {model?.name && cover?.result ? (
        <>
          <Player url={cover?.result} />
        </>
      ) : (
        <>
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </>
      )}
    </div>
  );
};

export default model;
