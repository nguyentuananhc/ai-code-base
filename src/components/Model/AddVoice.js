"use client";
import React from "react";
import {
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Icon,
  Text,
} from "@chakra-ui/react";
import { VscMic, VscCloudUpload } from "react-icons/vsc";

const AddVoice = () => {
  const handleClick = () => {};
  return (
    <div className="flex flex-col w-full gap-4 text-center">
      <h2 className="text-3xl font-bold">Please Add Your Audio</h2>
      <p>
        You can add YouTube songs, upload audio files, or record your voice.
      </p>
      <InputGroup size="lg">
        <Input
          className="bg-white"
          placeholder="Search or paste YouTube link here"
        />
        <InputRightElement className="pr-2" width="160px">
          <Button
            className="w-full text-white bg-orange-500"
            size="md"
            onClick={handleClick}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
      <h2 className="text-3xl font-bold text-gray-400">OR</h2>

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
    </div>
  );
};

export default AddVoice;
