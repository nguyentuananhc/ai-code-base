"use client";

import React from "react";
import { VscUnmute, VscError } from "react-icons/vsc";
import { Icon } from "@chakra-ui/react";

const Notice = () => {
  const [isClose, setClose] = React.useState(false);

  if (isClose) return null;

  return (
    <div className="relative flex justify-center w-full p-4 align-middle bg-orange-50">
      <div className="flex justify-center w-full gap-4 align-middle">
        <Icon as={VscUnmute} boxSize={6} />
        <h3 className="font-semibold">
          First-time registered users will receive 2,000 Credits for free,
          <a className="ml-2 text-orange-500 cursor-pointer">sign up now</a>
        </h3>
      </div>
      <Icon
        className="absolute cursor-pointer right-4"
        as={VscError}
        boxSize={8}
        onClick={() => setClose(true)}
      />
    </div>
  );
};

export default Notice;
