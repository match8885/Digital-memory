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
          relative overflow-hidden
          bg-cover bg-center bg-no-repeat
        "
        style={{
          backgroundImage: "url('/images/kurage.jpg')",
        }}
      >

        {/* うっすら暗くして見やすくするレイヤー（弱めに） */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

        <div className="relative z-10 flex flex-col items-center">

          <motion.img
            src="/images/couple.jpg"
            alt="Two of us"
            className="w-120 h-80 object-cover rounded-2xl shadow-lg mt-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />

          <Message />

          {/* <h2 className="mt-16 text-xl text-white/90 font-semibold tracking-wide"/>
            行ったね、ここ。
          </h2> */}

          <div className="mt-10 w-full flex justify-center">
            <JapanMap />
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
