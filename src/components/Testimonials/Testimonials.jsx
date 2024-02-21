"use client";
import "./Testimonials.css";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/src/utils/animation";
import SlickSlider from "./SlickSlider";

export default function Testimonials() {
  return (
    <div className="test-wrapper">
      <div className="container">
        <div className="test-container">
          <div className="test-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              نظرات
            </motion.span>
            <motion.h3
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              به سرمایه ای دسترسی پیدا کنید که مکمل گزینه های تامین مالی سنتی
              است
            </motion.h3>
            <motion.p
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="des"
            >
              مردم در مورد ما چی میگن
            </motion.p>
          </div>
        </div>
        {/* slider */}
        <SlickSlider />
      </div>
    </div>
  );
}
