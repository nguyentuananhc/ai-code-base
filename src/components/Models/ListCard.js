"use client";

import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Card from "./Card";

const ListCard = () => {
  return (
    <Grid className="mt-8" templateColumns="repeat(4, 1fr)" gap={6}>
      {Array(20).fill(
        <GridItem>
          <Card />
        </GridItem>
      )}
    </Grid>
  );
};

export default ListCard;
