import React from "react";
import { useSelector } from "react-redux";
import { Button, Icon, Image, Text } from "@chakra-ui/react";
import { Link } from "next/link";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const Request = () => {
  const params = useParams();
  const { modelId } = params;
  const { request, characters } = useSelector((state) => state.covers);
  const router = useRouter();
  const handleClick = () => {
    router.push(
      `/covers/${request?.request_id}?token=${request.token}&modelId=${modelId}`
    );
  };

  const model = characters.find(
    (item) => Number(item.speaker_id) === Number(modelId)
  );

  return (
    <div className="flex justify-between w-full p-4 overflow-hidden rounded-lg outline outline-1 outline-gray-600">
      <div>
        <Image
          objectFit="contain"
          boxSize={40}
          src={model?.image}
          alt="Avatar"
          borderRadius="md"
        />
      </div>
      <div className="flex flex-col items-start justify-center w-full gap-3 px-4 font-medium">
        <Text className="text-sm text-left text-gray-800" as="p">
          Song title: {request?.song_title}
        </Text>
        <Text className="text-sm text-left text-gray-800" as="p">
          ID: {request?.request_id}
        </Text>
        <Text className="text-sm text-left text-gray-800" as="p">
          Status: completed
        </Text>
      </div>
      <div className="flex items-center justify-center">
        <Button
          className="w-full text-white bg-orange-500"
          size="md"
          onClick={handleClick}
        >
          Play
        </Button>
      </div>
    </div>
  );
};

export default Request;
