"use client";

import React from "react";
import {
  Input,
  InputGroup,
  Button,
  InputRightElement,
  InputLeftElement,
  Icon,
  Select,
} from "@chakra-ui/react";

import {
  VscStarEmpty,
  VscSearch,
  VscPlay,
  VscMic,
  VscSmiley,
  VscFeedback,
  VscThumbsup,
  VscUnmute,
} from "react-icons/vsc";

const CATEGORY = [
  { name: "All", value: "all", icon: VscPlay },
  { name: "Singer", value: "singer", icon: VscMic },
  { name: "Rapper", value: "rapper", icon: VscSmiley },
  { name: "Character", value: "character", icon: VscFeedback },
  { name: "Original", value: "original", icon: VscUnmute },
  { name: "Favorite", value: "favorite", icon: VscThumbsup },
  { name: "My Model", value: "model", icon: VscStarEmpty },
];

const GENDER = [
  { name: "All", value: "all" },
  { name: "Male", value: "male" },
  { name: "Female", value: "female" },
];

const Filter = () => {
  const handleClick = () => {};

  return (
    <div className="container flex flex-col mx-auto mt-6">
      <InputGroup size="lg">
        <InputLeftElement width="3rem">
          <Icon as={VscSearch} />
        </InputLeftElement>
        <Input className="bg-white" placeholder="Search for AI Voice Models" />
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
      {/* <div className="flex mt-4 justify-between">
        <div className="flex gap-2">
          {CATEGORY.map((item, index) => {
            return (
              <Button
                leftIcon={<item.icon />}
                className="w-full bg-white border-[1px] border-black"
                key={index}
              >
                {item.name}
              </Button>
            );
          })}
        </div>
        <div className="flex gap-2 items-center">
          <p className="font-semibold text-base">Gender:</p>
          <Select
            className="bg-white border-[1px] border-black"
            placeholder="Select option"
          >
            {GENDER.map((item, index) => {
              return (
                <option value={item.value} key={index}>
                  {item.name}
                </option>
              );
            })}
          </Select>
        </div>
      </div> */}
    </div>
  );
};

export default Filter;
