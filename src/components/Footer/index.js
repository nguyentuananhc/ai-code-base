"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input, InputGroup, Button, InputRightElement } from "@chakra-ui/react";

const HERO_PRODUCT = [
  { name: "Something", link: "/" },
  { name: "Something", link: "/" },
  { name: "Something", link: "/" },
];

const SUPPORT = [
  { name: "Support Center", link: "/" },
  { name: "Contact Us", link: "/" },
  { name: "Refund Policy", link: "/" },
  { name: "Cancel Subscription", link: "/" },
];

const COMPANY = [
  { name: "About Us", link: "/" },
  { name: "Affiliate", link: "/" },
  { name: "DMCA", link: "/" },
];

const SOCIALS = [
  { name: "Facebook", link: "/", icon: "/Facebook.svg" },
  { name: "Youtube", link: "/", icon: "/Youtube.svg" },
  { name: "Twitter", link: "/", icon: "/Twitter.svg" },
];

const Form = () => {
  const handleClick = () => {};

  return (
    <div className="flex flex-col min-w-[25%] gap-2">
      <h4 className="font-semibold text-black">Join Our Newsletter</h4>
      <InputGroup size="md">
        <Input className="bg-white" placeholder="Please enter emails" />
        <InputRightElement className="pr-2" width="4.5rem">
          <Button
            className="bg-orange-500 text-white"
            size="sm"
            onClick={handleClick}
          >
            Submit
          </Button>
        </InputRightElement>
      </InputGroup>
      <p className="font-semibold text-black text-[16px]">Follow us</p>
      <div className="flex gap-1">
        {SOCIALS.map((item) => {
          return <Image src={item.icon} width={24} height={24} />;
        })}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="container flex flex-col mx-auto mt-10 text-lg">
      <div className="flex w-full px-8">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-black">Hero Products</h4>
            <ul>
              {HERO_PRODUCT.map((item) => {
                return (
                  <li key={item.name} className="py-1 text-[16px]">
                    <Link href={item.link}> {item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-black">Support</h4>
            <ul>
              {SUPPORT.map((item) => {
                return (
                  <li key={item.name} className="py-1 text-[16px]">
                    <Link href={item.link}> {item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-black">Company</h4>
            <ul>
              {COMPANY.map((item) => {
                return (
                  <li key={item.name} className="py-1 text-[16px]">
                    <Link href={item.link}> {item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Form />
        </div>
      </div>
      <div className="text-[16px] flex justify-between py-4 mt-4 border-t-2 border-gray-200">
        <div className="flex gap-4">
          <Link href="">About Us</Link>
          <Link href="">Privacy Policy</Link>
          <Link href="">Terms of Use</Link>
        </div>
        <div>Copyright © 2023 FineShare Co., Ltd. All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
