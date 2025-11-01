import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function MemoryLayout({ image, title, date, children }) {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-b from-pink-50 to-pink-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* 写真 (ポラロイド風) */}
      <div className="bg-white p-4 shadow-xl rounded-xl mb-8">
        <img
          src={image}
          alt={title}
          className="w-80 h-80 object-cover rounded-lg"
        />
      </div>

      {/* タイトル + 日付 */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-pink-700 drop-shadow-sm font-zen">
          {title}
        </h1>
        <p className="text-lg text-pink-500 mt-1">{date}</p>
      </div>

      {/* メッセージ部分 */}
      <p className="text-center text-xl text-pink-600 leading-relaxed whitespace-pre-line mb-10 px-4 font-zen">
        {children}
      </p>

      {/* 戻るボタン */}
      <Link
        to="/"
        className="mt-8 bg-orange-500 text-white px-6 py-2 rounded-full shadow-md font-zen"
      >
        ← ホームに戻る
      </Link>
    </motion.div>
  );
}
