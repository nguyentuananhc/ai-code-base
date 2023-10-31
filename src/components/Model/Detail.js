import React from "react";
import { Image, Text, Tag, Icon } from "@chakra-ui/react";
import { VscPlayCircle, VscHeartFilled } from "react-icons/vsc";

const Detail = ({ model }) => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-4">
        <Image
          objectFit="contain"
          boxSize={40}
          src={model?.image}
          alt="Avatar"
          borderRadius="md"
        />
        <div className="flex flex-col gap-4">
          <Text className="text-2xl font-bold" as="h1">
            {model?.name} AI Song Generator
          </Text>
          <div className="flex gap-2">
            <Tag variant="outline" colorScheme="cyan">
              #Anime
            </Tag>
            <Tag variant="outline" colorScheme="cyan">
              #Anime
            </Tag>
            <Tag variant="outline" colorScheme="cyan">
              #Anime
            </Tag>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6">
        <div className="flex gap-1">
          <Icon boxSize={6} as={VscPlayCircle} />
          <Text className="font-semibold" as="p">
            3618 Used
          </Text>
        </div>
        <div className="flex gap-1">
          <Icon boxSize={6} as={VscHeartFilled} />
          <Text className="font-semibold" as="p">
            264 Likes
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Detail;
