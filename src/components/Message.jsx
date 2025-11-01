import { motion } from "framer-motion";

export default function Message() {
  return (
    <motion.div
      className="
        mt-14 text-center max-w-[85%]
        text-orange-900
        leading-relaxed
      "
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
        瑞希ちゃん いつもありがとう！
      </h1>

      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl opacity-80">
        一緒にいろんな場所へ行けて楽しかった！<br />
        これからも一緒にたくさん思い出を作っていこうね😊
      </p>
    </motion.div>
  );
}
