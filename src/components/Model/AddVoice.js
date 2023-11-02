"use client";

import React, { useState } from "react";
import {
  Input,
  InputGroup,
  Button,
  InputRightElement,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import { VscMic, VscCloudUpload } from "react-icons/vsc";
import { TfiYoutube } from "react-icons/tfi";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { createCoversRequest } from "@redux/features/cover/actions";
import { useToast } from "@chakra-ui/react";

// import ListVideos from "./ListVideos";
import Request from "./Request";

const AddVoice = () => {
  const dispatch = useDispatch();

  const toast = useToast();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=jpTGDGxmOig");
  const { request } = useSelector((state) => state.covers);
  const params = useParams();
  const { modelId } = params;

  const handleClick = () => {
    setIsButtonDisabled(true);
    dispatch(
      createCoversRequest({
        speakerId: modelId,
        youtubeUrl: url,
      })
    ).then((res) => {
      setIsButtonDisabled(false);
      if (res?.error_code) {
        toast({
          title: "Error",
          description: res?.error_message,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      } else {
        toast({
          title: "Success",
          description: "Your request has been created",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    });
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="flex flex-col w-full gap-4 text-center">
      <h2 className="text-3xl font-bold">Please Add Your Audio</h2>
      <p>
        You can add YouTube songs
        {/* You can add YouTube songs, upload audio files, or record your voice. */}
      </p>
      <InputGroup size="lg">
        <InputLeftElement className="pr-2" width="60px">
          <Icon boxSize={8} as={TfiYoutube} />
        </InputLeftElement>
        <Input
          onChange={handleUrlChange}
          className="bg-white"
          placeholder="Search or paste YouTube link here"
          value={url}
        />
        <InputRightElement className="pr-2" width="160px">
          <Button
            className="w-full text-white bg-orange-500"
            size="md"
            onClick={handleClick}
            isDisabled={!url || isButtonDisabled}
            loadingText="Generating"
            isLoading={isButtonDisabled}
          >
            Generate Song
          </Button>
        </InputRightElement>
      </InputGroup>
      {request?.request_id && <Request />}
      {/* <h2 className="text-3xl font-bold text-gray-400">OR</h2>

      <div className="border-[2px] border-dashed border-[#d8d8d8] p-20 rounded-2xl flex items-center justify-between gap-10">
        <div className="flex flex-col items-center gap-4 p-8 cursor-pointer hover:bg-orange-50 rounded-xl">
          <Icon boxSize={10} as={VscCloudUpload} />
          <Text className="font-semibold" as="h3">
            Upload Audio Files
          </Text>
          <Text className="text-gray-400">
            Upload MP3/WAV/M4A audio file here. Maximum file size: 10MB
          </Text>
        </div>
        <div className="flex flex-col items-center gap-4 p-8 cursor-pointer hover:bg-orange-50 rounded-xl">
          <Icon boxSize={10} as={VscMic} />
          <Text className="font-semibold" as="h3">
            Record Audio
          </Text>
          <Text className="text-gray-400">
            Please allow FineShare Singify to access your microphone before
            recording.
          </Text>
        </div>
      </div>
      <ListVideos /> */}
    </div>
  );
};

export default AddVoice;
