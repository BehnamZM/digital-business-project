import "./EmailBox.css";
import { LuMail } from "react-icons/lu";
import { motion } from "framer-motion";
import { containerVariants } from "@/src/utils/animation";
export default function EmailBox() {
  const variants = () => {};
  return (
    <motion.div
      initial={{
        width: "5rem",
      }}
      whileInView={{
        width: "70%",
        transition: {
          type: "easeOut",
          duration: 1,
        },
      }}
      viewport={{
        once: true,
      }}
      className="email-box"
    >
      <motion.div
        variants={containerVariants(0.6)}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
      >
        <LuMail size={30} color="gray" />
      </motion.div>
      <motion.input
        variants={containerVariants(0.7)}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
        type="email"
        placeholder="ایمیل را واردکنید"
        className="email-input"
      />
      <motion.button
        variants={containerVariants(0.9)}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
        className="send-email"
      >
        دریافت سرمایه
      </motion.button>
    </motion.div>
  );
}
