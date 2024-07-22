"use client";
import { useGlobalContext } from "@/providers/GlobalProviders";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const TextReveal = () => {
  const { setHoverHome } = useGlobalContext();
  const paragraph =
    "Established in 2021, our company has been at the forefront of the creative industry, handling a wide range of major projects. Our expertise spans video making, film production, ad creation, music mixing, event production management, editing, and photography";
  const words = paragraph.split(" ");
  const textRef = useRef();
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.8", "start 0.1"],
  });

  return (
    <div className=" bg-white px-20 h-[100vh] flex items-center">
      <div
        className="flex w-1/2 flex-col gap-14"
        ref={textRef}
        onMouseEnter={() => setHoverHome(true)}
        onMouseLeave={() => setHoverHome(false)}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          className="font-corir text-6xl"
        >
          Introduction
        </motion.div>
        <div className="flex flex-wrap">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.4 },
        }}
        className="w-1/2 h-full flex items-center justify-center"
      >
        <Image
          src={`/images/10.png`}
          width={200}
          height={300}
          className="h-[70%] w-[65%] object-cover rounded-md shadow-sm"
          alt="Image"
        />
      </motion.div>
    </div>
  );
};

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-3 mt-3 text-3xl font-poppins">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default TextReveal;
