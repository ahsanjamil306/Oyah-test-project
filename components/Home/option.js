import React from "react";
import Image from "next/image";
import Router, { useRouter } from 'next/router';

const Option = ({ item, className }) => {

  const router = useRouter();
  return (
    <button
      className={`w-[48%] ${className}`}
      onClick={() => router.replace(item.path)}
    >
      <div
        className={`flex  flex-col  h-[100%] rounded-2xl bg-[#FFFFFF] px-2 py-2 pb-5 shadow`}
      >
        <Image
          className="w-full  rounded-xl"
          width={"100%"}
          height={120}
          blurDataURL
          placeholder="blur"
          src={item.image}
        />
        <h1 className="mt-2 font-medium self-start">{item.name}</h1>
        <p className="text-xs text-gray-500 self-start text-start">
          {item.info}
        </p>
      </div>
    </button>
  );
};

export default Option;
