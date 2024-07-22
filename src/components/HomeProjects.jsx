"use client";
import { Projects } from "@/utils/constants";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const HomeProjects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className="min-h-[100vh] bg-white px-20 py-28">
      <div className="flex justify-center flex-col h-full gap-14">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          className="font-corir text-6xl"
        >
          Selected Work
        </motion.div>
        <div className="flex flex-col">
          {Projects.map((project, index) => (
            <Work
              project={project}
              key={index}
              index={index}
              setModal={setModal}
            />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            className="cursor-pointer w-[250px] h-[70px] border-gray-300 border-[1px] flex items-center justify-center rounded-full font-sans hover:bg-black hover:text-white transition-all duration-300 ease-out"
          >
            View all (107)
          </motion.div>
        </div>
        <Modal modal={modal} />
      </div>
    </div>
  );
};

const Work = ({ project, index, setModal }) => {
  return (
    <motion.div
      whileHover={{ opacity: 0.3, paddingLeft: 20, paddingRight: 20 }}
      initial={{ opacity: 0, y: -10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.1 * index },
      }}
      onMouseEnter={() => setModal({ active: true, index: index })}
      onMouseLeave={() => setModal({ active: false, index: index })}
      className="text-3xl border-t-2 py-8 border-t-gray-100 font-sans flex items-center justify-between cursor-pointer"
    >
      <Link href={project.link}>{project.name}</Link>
      <Image
        src={"/images/download.svg"}
        width={40}
        height={40}
        className="text-black"
        alt="Image"
      />
    </motion.div>
  );
};

const Modal = ({ modal }) => {
  const { active, index } = modal;
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const moveComtainerX = gsap.quickTo(containerRef.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveComtainerY = gsap.quickTo(containerRef.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    const moveButtonX = gsap.quickTo(buttonRef.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveButtonY = gsap.quickTo(buttonRef.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      moveComtainerX(pageX);
      moveComtainerY(pageY);
      moveButtonX(pageX);
      moveButtonY(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={containerRef}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="h-[300px] w-[460px] overflow-hidden absolute z-10 pointer-events-none"
      >
        <div
          className={`w-full h-full absolute`}
          style={{
            transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
            top: index * -100 + "%",
          }}
        >
          {Projects.map((project, i) => (
            <div
              className={`h-[300px] w-[460px] flex items-center justify-center rounded-xl`}
              style={{ backgroundColor: project.color }}
              key={i}
            >
              <Image
                src={project.image}
                width={200}
                height={0}
                className="object-cover h-[300px] w-[460px]"
                alt="Image"
              />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        ref={buttonRef}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="h-[80px] w-[80px] absolute bg-blue-500 text-white shadow-lg z-20 rounded-full pointer-events-none flex items-center justify-center font-suiss"
      >
        View
      </motion.div>
    </>
  );
};

export default HomeProjects;
