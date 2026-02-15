'use client'
import React, { useState } from "react";
import { motion, useAnimation } from 'framer-motion'

const Folder = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="text-black relative w-[361px] h-[274px] cursor-pointer"
      
        initial={{ scale: 0, borderRadius: "50%", opacity: 0 }}
        animate={{
          scale: 1,
          borderRadius: hovered ? "41px" : "41px",
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 14,
          mass: 1,
          duration: 2,
        }}
  
        whileHover={{
          y: -12,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 8,
            mass: 0.8,
          },
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <div className="relative">

          <svg
            width="361"
            height="274"
            viewBox="0 0 361 274"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="361" height="274" rx="41" fill="#2A2929" />
          </svg>

   
          <motion.div
            className="absolute inset-4 overflow-hidden rounded-[30px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          >
            <img
              src="/demo_file.jpg"
              className="w-full object-cover"
              style={{ height: "60%" }}
            />
          </motion.div>

    
          <motion.div
            className="absolute bottom-5 left-1/2 -translate-x-1/2"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.25,
              type: "spring",
              stiffness: 180,
              damping: 16,
            }}
          >
            <svg
              width="335"
              height="187"
              viewBox="0 0 335 187"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
            >
              <defs>
                <filter id="tabShadow" x="-10%" y="-20%" width="120%" height="140%">
                  <feDropShadow
                    dx="0"
                    dy="-6"
                    stdDeviation="10"
                    floodColor="rgba(0,0,0,0.6)"
                  />
                </filter>
              </defs>
              <path
                d="M0 21C0 9.40202 9.40202 0 21 0H149.951C154.831 0 159.558 1.69923 163.321 4.80578L194.679 30.6942C198.442 33.8008 203.169 35.5 208.049 35.5H314C325.598 35.5 335 44.902 335 56.5V166C335 177.598 325.598 187 314 187H21C9.40202 187 0 177.598 0 166V21Z"
                fill="#373737"
                filter="url(#tabShadow)"
              />
            </svg>
          </motion.div>

             <motion.div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[335px] h-[187px] flex flex-col justify-between px-6 py-5 pointer-events-none"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 180, damping: 16 }}
          >
  
            <div>
              <p className="text-amber-300/80 text-xs font-medium uppercase tracking-widest">Daily Memo</p>
              <p className="text-white/30 text-[11px]">Notes & Journaling</p>
            </div>

   
            <div className="flex items-end justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-white text-3xl font-bold">05</span>
                <span className="text-white/40 text-sm">Doc</span>
              </div>
              <span className="text-white text-sm">1270 Notes</span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Folder;