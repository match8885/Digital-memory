// src/components/Message.jsx
import { motion } from "framer-motion";

export default function Message() {
  return (
    <motion.div
      className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-500 mt-12 leading-relaxed drop-shadow-lg tracking-wide"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
    >
      瑞希ちゃんへ🌸<br />
      これからも一緒にたくさん思い出を作っていこうね😊<br />
      いつもありがとう！
    </motion.div>
  );
}
