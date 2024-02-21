"use client";
import "./HowItWorks.css";
import { motion } from "framer-motion";
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";
import { hitFeatures } from "@/src/utils/data";
import Image from "next/image";

export default function HowItWorks() {
  const featureVariants = {
    offscreen: {
      scale: 0,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };
  return (
    <div className="hiw-wrapper">
      <div className="container">
        <div className="hiw-container">
          <div className="hiw-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              چجوری کار میکنه؟
            </motion.span>
            <motion.h3
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              بازکردن ویژگی های جدید برای شما در طول رشدتون
            </motion.h3>
          </div>
          <div className="hiw-features">
            {hitFeatures.map((feature, i) => (
              <motion.div
                key={i}
                className="hiw-feature"
                initial="offscreen"
                whileInView={"onscreen"}
                variants={featureVariants}
              >
                <div className="hiw-feature_body">
                  <div className="hiw-feature_info">
                    <div className="hiw-feature_step">0{i + 1}</div>
                    <div className="hiw-feature_title">{feature.title}</div>
                    <div className="hiw-feature_des">{feature.des}</div>
                  </div>
                  <div className="hiw-feature_img">
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={128}
                      height={128}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
