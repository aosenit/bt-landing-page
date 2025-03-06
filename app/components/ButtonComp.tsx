import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonComp = ({
  text = "Register for Training",
  link = "/event"
}: {
  text?: string;
  link?: string;
}) => {
  const router = useRouter();
  return (
    <button
      className="px-4 sm:px-6 py-3 sm:py-4 bg-[#095424] text-white  transition rounded-full flex items-center gap-2 text-base sm:text-lg  group font-normal tracking-wide"
      onClick={() => router.push(link)}
    >
      {text}
      <ArrowUpRight
        className="bg-[#F0AD12] rounded-full text-[#095424] p-1 group-hover:translate-x-1 transition-all duration-300"
        size={30}
      />
    </button>
  );
};

export default ButtonComp;
