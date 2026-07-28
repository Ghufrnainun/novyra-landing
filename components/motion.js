"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUpVar = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const staggerVar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
};

export { motion, fadeUpVar, staggerVar };
