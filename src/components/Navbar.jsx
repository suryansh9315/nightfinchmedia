"use client";
import { Links, Socials } from "@/utils/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const variants = {
  open: {
    height: 650,
    width: 400,
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    height: 40,
    width: 100,
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};
const perspective = {
  initial: {
    opacity: 0,
  },
  enter: (i) => ({
    opacity: 1,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};
const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="bg-transparent absolute top-0 w-screen z-10 px-8 py-5 flex items-center justify-between">
        <div className="">
          {/* <Image
            src={"/logo_white.png"}
            width={200}
            height={200}
            className=""
            alt="Image"
          /> */}
        </div>
        <div className="z-10 relative">
          <motion.div
            variants={variants}
            animate={isActive ? "open" : "closed"}
            initial="closed"
            className="absolute w-[400px] h-[650px] rounded-2xl bg-white p-4"
          >
            <AnimatePresence>
              {isActive && (
                <div className="h-full px-6 pt-28 pb-10 flex flex-col justify-between">
                  <div className="flex flex-col gap-3">
                    {Links.map((link, index) => (
                      <motion.div
                        key={index}
                        variants={perspective}
                        custom={index}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        className="text-4xl font-sans font-medium"
                      >
                        <Link href={link.path}>{link.name}</Link>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex flex-wrap">
                    {Socials.map((social, index) => (
                      <motion.div
                        key={index}
                        variants={slideIn}
                        custom={index}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        className="text-base w-1/2 font-poppins cursor-pointer"
                      >
                        <a href={social.link}>{social.name}</a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
          <div
            onClick={() => setIsActive(!isActive)}
            className="h-[40px] w-[100px] rounded-3xl cursor-pointer overflow-hidden font-sans text-[12px] font-bold"
          >
            <motion.div
              className="relative h-full w-full"
              animate={{ top: isActive ? "-100%" : "0%" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="h-full w-full bg-white text-black flex items-center justify-center">
                MENU
              </div>
              <div className="h-full w-full text-white bg-black flex items-center justify-center">
                CLOSE
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
