// src/components/PageTransition.jsx
import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}      // 初期 → 透明
      animate={{ opacity: 1 }}      // ふわっと表示
      exit={{ opacity: 0 }}         // ページ遷移 → ふわっと消える
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
