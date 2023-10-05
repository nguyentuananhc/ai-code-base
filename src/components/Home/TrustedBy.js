import React from "react";
import Image from "next/image";
import Link from "next/link";

const LIST_TRUSTED = [
  {
    href: "https://www.wikigpt3.com/",
    img: "https://www.wikigpt3.com/images/share-rate/featured_badge.png",
  },
  {
    href: "https://www.wikigpt3.com/",
    img: "https://www.wikigpt3.com/images/share-rate/featured_badge.png",
  },
  {
    href: "https://www.wikigpt3.com/",
    img: "https://www.wikigpt3.com/images/share-rate/featured_badge.png",
  },
  {
    href: "https://www.wikigpt3.com/",
    img: "https://www.wikigpt3.com/images/share-rate/featured_badge.png",
  },
  {
    href: "https://www.wikigpt3.com/",
    img: "https://www.wikigpt3.com/images/share-rate/featured_badge.png",
  },
  {
    href: "https://www.wikigpt3.com/",
    img: "https://www.wikigpt3.com/images/share-rate/featured_badge.png",
  },
  {
    href: "https://www.wikigpt3.com/",
    img: "https://www.wikigpt3.com/images/share-rate/featured_badge.png",
  },
  {
    href: "https://www.wikigpt3.com/",
    img: "https://www.wikigpt3.com/images/share-rate/featured_badge.png",
  },
];

const TrustedBy = () => {
  return (
    <div className="container flex flex-col items-center gap-12 mx-auto">
      <h2 className="font-bold text-[38px]">Trusted by</h2>
      <div className="flex flex-wrap items-center justify-center w-full gap-4">
        {LIST_TRUSTED.map((item) => {
          return (
            <Link href={item?.href}>
              <Image src={item.img} height={60} width={250} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TrustedBy;
