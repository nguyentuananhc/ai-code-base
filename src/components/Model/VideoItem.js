import React from "react";
import { Image } from "@chakra-ui/react";

const VideoItem = () => {
  return (
    <div className="flex justify-between w-full p-4">
      <div>
        <Image
          objectFit="contain"
          boxSize={40}
          src="https://i.ytimg.com/vi/qDZFevQpVFk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjAgmGEUepOLAteDCR3kL59aAqHg"
          alt="Avatar"
          borderRadius="md"
        />
      </div>
      <div className="flex gap-3"></div>
      <div className="flex gap-3"></div>
    </div>
  );
};

export default VideoItem;
