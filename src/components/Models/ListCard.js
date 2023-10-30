"use client";

import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux"; // import { fetchCovers } from "@redux/features/cover/actions";
import Card from "./Card";

const ListCard = () => {
  const { characters } = useSelector((state) => state.covers);
  return (
    <Grid className="mt-8" templateColumns="repeat(4, 1fr)" gap={6}>
      {characters.map((item, index) => (
        <GridItem>
          <Card data={item} key={index} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ListCard;
