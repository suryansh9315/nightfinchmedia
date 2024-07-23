"use client";
import { useGlobalContext } from "@/providers/GlobalProviders";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const ZoomParalax = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-[100vh] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <video
            src="/NFM_Montage.mp4"
            className="object-cover w-full h-full"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
          <motion.div
            style={{ scale: scaleText }}
            className="text-center text-white"
          >
            <Image
              src={"/logo_white.png"}
              alt="Nightfinch Media Logo"
              width={240}
              height={100}
              className="mx-auto mb-4"
            />
            <h1 className="text-7xl font-bold mb-4">NIGHT FINCH MEDIA</h1>
            <p className="text-xl">FROM IMAGINATION TO REALITY</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ZoomParalax;
