import Image from "next/image";
import React from "react";
import { images } from "../../public/Utils/assets";

const AboutCity = () => {
  return (
    <div
      className={`flex flex-col w-[100%] h-60 rounded-3xl bg-white px-2 py-2 shadow`}
    >
      <Image
        className="w-full  rounded-xl"
        width={"100%"}
        height={120}
        blurDataURL
        placeholder="blur"
        src={images.mainCity}
      />
      <h1 className="mt-2 font-medium">About the city</h1>
      <p className="text-sm text-gray-500">
        Find useful info about the tourist attraction of the city, how to get
        around, hidden gems, and more...
      </p>
    </div>
  );
};

export default AboutCity;
