import React from "react";
import Title from "@components/Models/Title";
import Filter from "@components/Models/Filter";
import ListCard from "@components/Models/ListCard";

const layout = () => {
  return (
    <div className="flex flex-col">
      <Title />
      <Filter />
      <ListCard />
    </div>
  );
};

export default layout;
