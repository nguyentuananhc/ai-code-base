import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Image, Text, Box, keyframes } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const spin = keyframes`  
  from {transform: rotate(0deg);}   
  to {transform: rotate(360deg)} 
`;

const Request = () => {
  const params = useParams();
  const { modelId } = params;
  const { request, characters } = useSelector((state) => state.covers);
  const [timeLeft, setTimeLeft] = React.useState(0);
  const router = useRouter();
  const spinAnimation = `${spin} infinite 7s linear`;
  useEffect(() => {
    if (request?.time_left) setTimeLeft(request?.time_left);
  }, [request?.time_left]);

  const handleClick = () => {
    router.push(
      `/covers/${request?.request_id}?token=${request.token}&modelId=${modelId}`
    );
  };

  const model = characters.find(
    (item) => Number(item.speaker_id) === Number(modelId)
  );

  useEffect(() => {
    if (timeLeft > 0) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
  }, [timeLeft]);

  return (
    <div className="flex justify-between w-full p-4 overflow-hidden rounded-lg outline outline-1 outline-gray-600">
      <Box animation={spinAnimation}>
        <Image
          width={200}
          objectFit="contain"
          src={model?.image}
          alt="Avatar"
          className="rounded-full"
        />
      </Box>
      <div className="flex flex-col items-start justify-center w-full gap-3 px-4 font-medium">
        <Text className="text-sm text-left text-gray-800" as="p">
          <b>Song title:</b> {request?.song_title}
        </Text>
        <Text className="text-sm text-left text-gray-800" as="p">
          <b>ID:</b> {request?.request_id}
        </Text>
        <Text className="text-sm text-left text-gray-800" as="p">
          <b>Time left:</b> {timeLeft}s
        </Text>
        <Text className="text-sm text-left text-gray-800" as="p">
          <b>Status:</b> {timeLeft?.toString() === "0" ? "Done" : "In Progress"}
        </Text>
      </div>
      <div className="flex items-center justify-center">
        <Button
          className="w-full text-white bg-orange-500"
          size="md"
          onClick={handleClick}
          isLoading={timeLeft > 0}
          loadingText="In progress"
        >
          Play
        </Button>
      </div>
    </div>
  );
};

export default Request;
