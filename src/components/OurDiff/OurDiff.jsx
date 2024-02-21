import "./OurDiff.css";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";
import { ourDiffFeatures } from "@/src/utils/data";
import Image from "next/image";

export default function OurDiff() {
  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          <div className="od-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              تفاوت ما با بقیه
            </motion.span>
            <motion.h3
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              سرمایه منصفانه، بدون دردسر
            </motion.h3>
            <motion.p
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="des"
            >
              ماموریت ما این است که زمین بازی را برای سرمایه رشد در مراحل اولیه
              یکسان کنیم. ما سرمایه ای بی طرفانه، منعطف و غیر رقیق کننده با
              پشتیبانی اجرایی برای تسریع خلق ارزش ارائه می کنیم.
            </motion.p>
          </div>
          <div className="od-features">
            {ourDiffFeatures.map((feature, i) => (
              <motion.div
                key={i}
                className="od-feature"
                initial="offscreen"
                whileInView={"onscreen"}
                variants={containerVariants((i + 3) * 0.1)}
              >
                <Image
                  src={feature.icon}
                  alt="feature"
                  width={128}
                  height={128}
                />
                <div className="od-feature_title">{feature.title}</div>
                <div className="od-feature_des">{feature.des}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
