"use client";
import { features } from "@/src/utils/data";
import Image from "next/image";
import "./WhatWeDo.css";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";

export default function WhatWeDo() {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          <div className="wwd-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              ما چیکار میکنیم
            </motion.span>
            <motion.h3
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              توانمندسازی سرمایه گذاران با سرمایه غیرکاهشی و تخصص اجرایی
            </motion.h3>
            <motion.p
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="des"
            >
              اینجا جایی است که ما میتوانیم ارزیابی کنیم
            </motion.p>
          </div>
          <div className="wwd-blocks">
            <div className="wwd-block">
              <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="wwd-block_title"
              >
                پیشرفت سرمایه
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="wwd-block_des"
              >
                هزینه های شما برای رشد مجدد تامین خواهد شد
              </motion.div>
              <div className="wwd-block_features">
                {features.slice(0, 3).map((feature, i) => (
                  <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants((i + 1) * 0.1)}
                    className="wwd-block_feature-item"
                    key={i}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={feature.icon}
                      alt={feature.title}
                    />
                    <p>{feature.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="wwd-block">
              <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="wwd-block_title"
              >
                بذر آبی
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="wwd-block_des"
              >
                سرمایه گذاری یکباره تا مقیاس مدنظر
              </motion.div>
              <div className="wwd-block_features">
                {features.slice(3, 6).map((feature, i) => (
                  <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants((i + 1) * 0.1)}
                    className="wwd-block_feature-item"
                    key={i}
                  >
                    <Image
                      width={60}
                      height={60}
                      src={feature.icon}
                      alt={feature.title}
                    />
                    <p>{feature.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={containerVariants(0.3)}
            className="wwd-support"
          >
            <div className="wwd-support_title">
              <h4>پشتیبانی شرکت ما</h4>
              <h6>بینش داده ها و تخصص کامل برای تغییرات اساسی</h6>
            </div>
            <div className="wwd-support_body">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
