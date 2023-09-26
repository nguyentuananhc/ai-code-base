import React from "react";
import Button from "@components/Button";

const MODEL = [
  {
    name: "Kurt Cobain AI Model",
    used: "101",
    thumbnail:
      "https://singifyai.fineshare.com/song-ai/covers/satoru-gojo.webp",
  },
  {
    name: "Selena Gomez AI Model",
    used: "99",
    thumbnail:
      "https://singifyai.fineshare.com/song-ai/covers/satoru-gojo.webp",
  },
  {
    name: "Peso Pluma AI Model",
    used: "31",
    thumbnail:
      "https://singifyai.fineshare.com/song-ai/covers/satoru-gojo.webp",
  },
  {
    name: "Satoru Gojo AI Model",
    used: "134",
    thumbnail:
      "https://singifyai.fineshare.com/song-ai/covers/satoru-gojo.webp",
  },
];

const Feature = () => {
  return (
    <div className="container mx-auto  flex flex-col items-center gap-12">
      <h2 className="font-bold text-[38px]">Find the New AI Voice Models</h2>
      <p className="text-[24px] text-gray-400">
        FineShare Singify is continuously adding new AI models to its extensive
        library.
      </p>
      <div className="flex justify-between items-center gap-8">
        {MODEL?.map((item) => {
          return (
            <div className="rounded-lg flex flex-col items-center gap-4 relative">
              <img
                src="https://singify.fineshare.com/images/ic-new.svg"
                className="absolute top-0 right-0"
              />
              <img
                className="w-[200px] h-auto rounded-2xl"
                src={item?.thumbnail}
              />
              <b>{item?.name}</b>
              <span>{item?.used} used</span>
            </div>
          );
        })}
      </div>
      <Button text={"Cover Now"} />
    </div>
  );
};

export default Feature;
