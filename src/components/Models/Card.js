"use client";

import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Stack,
  Image,
  Text,
  HStack,
  Icon,
} from "@chakra-ui/react";

import Link from "next/link";

import { VscPlayCircle, VscHeart, VscHeartFilled } from "react-icons/vsc";

const CardItem = () => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  return (
    <Card maxW="sm">
      <div className="relative w-full">
        <Icon
          className="absolute text-white cursor-pointer top-2 right-2"
          boxSize={9}
          as={isFavorite ? VscHeartFilled : VscHeart}
          onClick={() => setIsFavorite(!isFavorite)}
        />

        <Link href="/models/naruto">
          <Image
            objectFit="cover"
            src="https://singifyai.fineshare.com/song-ai/covers/naruto-uzumaki.webp"
            alt="Avatar"
            borderTopRadius="lg"
            className="w-full"
          />
        </Link>
      </div>

      <CardBody>
        <HStack spacing="3" justify="space-between" cursor="pointer">
          <Stack spacing="3">
            <Heading size="md">Naruto</Heading>
            <Text>5544 used</Text>
          </Stack>
          <Icon boxSize={9} as={VscPlayCircle} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default CardItem;
