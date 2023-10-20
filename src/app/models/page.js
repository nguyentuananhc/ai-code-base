"use client";
import React, { useEffect } from "react";
import Title from "@components/Models/Title";
import Filter from "@components/Models/Filter";
import ListCard from "@components/Models/ListCard";
import { Spinner } from "@chakra-ui/react";

const layout = () => {
  const [characters, setCharacters] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch("/api/covers");
      const data = await res?.json();
      setIsLoading(false);

      setCharacters(data?.data);
    })();
  }, []);
  return (
    <div className="flex flex-col">
      <Title />
      <Filter />
      <ListCard data={characters} />
      {isLoading && (
        <div className="flex items-center justify-center w-full h-full">
          <Spinner size="xl" />
        </div>
      )}
    </div>
  );
};

export default layout;
