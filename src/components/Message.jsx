import { motion } from "framer-motion";

export default function Message() {
  return (
    <motion.div
      className="
        mt-14 text-center max-w-[85%]
        leading-relaxed
        font-zen
        text-glow
        drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]
      "
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-[#FFFAF3]">
        瑞希ちゃん<br />
        いつもありがとう！
      </h1>

      <p className="text-lg sm:text-lg md:text-xl lg:text-2xl text-[#FFFAF3]/90">
        一緒にいろんな場所へ<br />行けて楽しかった！<br />
        これからも一緒に<br />たくさん思い出を作っていこうね😊
      </p>
    </motion.div>
  );
}
