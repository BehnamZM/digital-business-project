"use client";
import { HeroData } from "@/src/utils/data";
import EmailBox from "../EmailBox/EmailBox";
import { motion } from "framer-motion";
import "./Hero.css";
export default function Hero() {
  const variants = (delay) => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay,
      },
    },
  });
  const imgVariants = () => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        stiffness: 30,
        duration: 2,
      },
    },
  });

  return (
    <div className="h-wrapper">
      <div className="container">
        <img src="hero/hero-arrow.png" alt="hero" className="hero-arrow" />
        <div className="h-container">
          <div className="h-right">
            <div className="image-boxes">
              {HeroData.map((person, i) => (
                <div key={i} className="image-box">
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className="image-box-bg"
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-left">
            <div className="h-title">
              <span>یاد میگیرید چجوری</span>
              <span>بیزینس دیجیتالتون رو</span>
              <span>رشد بدید</span>
            </div>
            <div className="h-des">
              پشتیبانی مالی و اجرایی مبتنی بر درآمد که برای بنیانگذاران مراحل
              اولیه طراحی شده است.
            </div>
            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  );
}
