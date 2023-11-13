import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Image, Text, Box, keyframes } from "@chakra-ui/react";

const spin = keyframes`  
  from {transform: rotate(0deg);}   
  to {transform: rotate(360deg)} 
`;

const Request = ({ modelId }) => {
  const { cover, characters } = useSelector((state) => state.covers);
  const [timeLeft, setTimeLeft] = React.useState(0);
  const spinAnimation = `${spin} infinite 12s linear`;

  useEffect(() => {
    if (cover?.time_left) setTimeLeft(cover?.time_left);
  }, [cover?.time_left]);

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
    <div className="flex gap-6 flex-col justify-between w-full p-4 overflow-hidden rounded-lg outline outline-1 outline-gray-600">
      <Box width="fit-content" animation={spinAnimation}>
        <Image
          animation={spinAnimation}
          width={200}
          objectFit="contain"
          src={model?.image}
          alt="Avatar"
          className="rounded-full"
          fallbackSrc="/logo.svg"
        />
      </Box>
      <div className="flex flex-col items-start justify-center w-full gap-3 px-4 font-medium">
        <Text className="text-sm text-left text-gray-800" as="p">
          <b>Song title:</b> {cover?.songTitle}
        </Text>
        {/* <Text className="text-sm text-left text-gray-800" as="p">
          <b>ID:</b> {request?.request_id}
        </Text> */}
        <Text className="text-sm text-left text-gray-800" as="p">
          <b>Time left:</b> {timeLeft}s
        </Text>
        <Text className="text-sm text-left text-gray-800" as="p">
          <b>Status:</b> {timeLeft?.toString() === "0" ? "Done" : "In Progress"}
        </Text>
      </div>
    </div>
  );
};

export default Request;
