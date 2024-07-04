"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed backdrop-blur md:top-5 top-3 inset-x-0 mx-[25px] my-[2px] border border-transparent dark:border-white/[0.2] md:rounded-2xl dark:bg-transparent bg-white z-[5000]  items-center justify-between space-x-4 md:py-3.5 py-[0] md:px-10 px-[0] md:shadow-[2px_4px_10px_0px_rgb(125,110,235)]",
          className
        )}
      >
        <div className="w-55 h-50 flex">
          <p className="leading-10 text-3xl font-normal">
            <span className="text-[color:var(--primary-color)]">N</span>AV
          </p>
          <p className="leading-10 text-3xl font-normal md:block hidden">
            <span className="text-[color:var(--primary-color)]">B</span>AR
          </p>
        </div>
        <div className="flex gap-5">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn("relative items-center flex space-x-1")}
            >
              <span className="block md:hidden">{navItem.icon}</span>
              <span className="hidden md:block text-sm">{navItem.name}</span>
            </Link>
          ))}
        </div>
        <div className="gap-3 md:flex hidden">
          <button className="border rounded-lg text-md font-medium relative py-[10px] px-[18px]">
            <span className="text-[color:var(--primary-color)]">Log in</span>
          </button>
          <button className="border rounded-lg text-md font-medium relative py-[10px] px-[18px] bg-[var(--primary-color)]">
            <span className="text-white">Sign up</span>
          </button>
        </div>
        <div className="md:hidden block">
          <GiHamburgerMenu />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
