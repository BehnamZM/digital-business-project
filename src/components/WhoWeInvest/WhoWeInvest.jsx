"use client";
import { motion } from "framer-motion";
import "./WhoWeInvest.css";
import React from "react";
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";
import { whoWeInvest } from "@/src/utils/data";
import Image from "next/image";

export default function WhoWeInvest() {
  return (
    <div className="wwi-wrapper">
      <div className="container">
        <div className="wwi-container">
          <div className="wwi-right">
            <div className="wwi-head">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="tag"
              >
                روی چه کسانی سرمایه گذاری می کنیم
              </motion.span>
              <motion.h3
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="title"
              >
                کسب و کارهای دیجیتال با کشش زودرس
              </motion.h3>
            </div>
            <div className="wwi-features">
              {whoWeInvest.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={containerVariants(i * 0.05 + 1)}
                  initial="offscreen"
                  whileInView={"onscreen"}
                  className="wwi-feature"
                >
                  <h4>{feature.title}</h4>
                  <span>{feature.des}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className="wwi-left"
            variants={containerVariants(0.5)}
            initial="offscreen"
            whileInView={"onscreen"}
          >
            <img src="persons.png" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
