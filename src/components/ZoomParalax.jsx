"use client";
import { useGlobalContext } from "@/providers/GlobalProviders";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const ZoomParalax = () => {
  const containerRef = useRef();
  const { hoverHome, setHoverHome } = useGlobalContext();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-[100vh] overflow-hidden bg-black">
        <div className="flex items-center justify-center absolute top-0 h-full w-full">
          <motion.div
            style={{ scale: scale4 }}
            className="relative w-[75%] h-[75%]"
          >
            <video
              src="/NFM_Montage.mp4"
              height="100%"
              width="100%"
              className="object-cover rounded-md"
              autoPlay
              loop
              muted
            ></video>
            {/* <Image
              src={"/images/9.png"}
              alt="image"
              fill
              className="object-cover"
            /> */}
          </motion.div>
          {/* <div
            className="absolute left-0 bottom-0 text-white text-[140px] font-semibold font-suiss leading-[0.7]"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              NIGHT
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              FINCH
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              MEDIA
            </motion.div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ZoomParalax;
