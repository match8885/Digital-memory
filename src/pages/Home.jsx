import { motion } from "framer-motion";
import Message from "../components/Message";
import JapanMap from "../components/JapanMap";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <div
        className="
          flex flex-col items-center
          min-h-screen
          relative
          overflow-hidden
          bg-gradient-to-br from-amber-50 via-stone-50 to-orange-100
        "
      >
        {/* ふわっとした光レイヤー */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),transparent_70%)]" />

        {/* メインコンテンツ */}
        <div className="relative z-10 flex flex-col items-center">

          {/* ツーショット */}
          <motion.img
            src="/images/couple.jpg"
            alt="Two of us"
            className="
              w-120 h-80 object-cover rounded-3xl shadow-lg mt-16
              brightness-105
              contrast-90
              saturate-110
              [filter:sepia(8%)]
            "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* メッセージ */}
          <Message />

          {/* 日本地図タイトル */}
          <motion.div
            className="mt-20 text-[28px] font-semibold text-[#8B5E3C] drop-shadow-sm select-none"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            行ったね、ここ。
          </motion.div>

          {/* 日本地図 */}
          <div className="mt-20 w-full flex justify-center">
            <JapanMap />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
