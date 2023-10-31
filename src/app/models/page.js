"use client";
import React, { useEffect } from "react";
import Title from "@components/Models/Title";
import Filter from "@components/Models/Filter";
import ListCard from "@components/Models/ListCard";
import { Spinner } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchModels } from "@redux/features/cover/actions";

const layout = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.covers);

  useEffect(() => {
    dispatch(fetchModels());
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <Title />
      <Filter />
      <ListCard />
      {loading && (
        <div className="flex items-center justify-center w-full h-full">
          <Spinner size="xl" />
        </div>
      )}
    </div>
  );
};

export default layout;
