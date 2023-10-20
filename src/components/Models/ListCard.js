"use client";

import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Card from "./Card";

const ListCard = ({ data = [] }) => {
  return (
    <Grid className="mt-8" templateColumns="repeat(4, 1fr)" gap={6}>
      {data.map((item, index) => (
        <GridItem>
          <Card data={item} key={index} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ListCard;
