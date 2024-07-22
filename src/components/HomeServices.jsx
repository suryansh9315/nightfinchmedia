"use client";
import { Services } from "@/utils/constants";
import { useWindowSize } from "@darkroom.engineering/hamo";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const HomeServices = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-[100vh] overflow-hidden">
        <div className="h-screen bg-white flex">
          <div className="w-1/2 flex flex-col justify-between px-10 py-20 pr-20 h-full">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
              className="font-corir text-6xl text-black h-1/2"
            >
              Services
            </motion.div>
            <div className="flex flex-col gap-5">
              <div className="h-[100px] overflow-hidden flex flex-col gap-[10px]">
                {Services.map((service, index) => (
                  <SlideText
                    key={index}
                    index={index}
                    scrollYProgress={scrollYProgress}
                    service={service}
                  />
                ))}
              </div>
              <div className="h-[100px] overflow-hidden flex flex-col gap-[10px]">
                {Services.map((service, index) => (
                  <SlideTextDesc
                    key={index}
                    index={index}
                    scrollYProgress={scrollYProgress}
                    service={service}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full overflow-hidden">
            {Services.map((service, index) => (
              <SlideImage
                key={index}
                index={index}
                scrollYProgress={scrollYProgress}
                service={service}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SlideText = ({ scrollYProgress, index, service }) => {
    const top = useTransform(
        scrollYProgress,
        [0*index, index * 0.2],
        [0, -index * 110]
      );
  return (
    <motion.div style={{top}} className="flex flex-col gap-10 text-black font-oswald text-[84px] leading-none relative bg-white">
      {service.name}
    </motion.div>
  );
};

const SlideTextDesc = ({ scrollYProgress, index, service }) => {
  const top = useTransform(
    scrollYProgress,
    [0*index, index * 0.2],
    [0, -index * 110]
  );

  return (
    <motion.div style={{top}} className="text-gray-500 font-quick text-2xl relative bg-white">
      {service.description}
    </motion.div>
  );
};

const SlideImage = ({ scrollYProgress, index, service }) => {
  const { height } = useWindowSize();
  const top = useTransform(
    scrollYProgress,
    [0*index, index * 0.2],
    [0, -index * height]
  );

  return (
    <motion.div
      className="w-full h-full relative"
      style={{ top, transition: "top 0.5s linear" }}
    >
      <Image
        src={service.image}
        width={100}
        height={100}
        className="h-full w-full object-cover z-10"
        alt="Image"
        unoptimized
      />
    </motion.div>
  );
};

export default HomeServices;
