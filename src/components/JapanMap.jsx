import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const geoUrl = "/data/japan.geojson";

const locations = [
  { name: "Hakone", coordinates: [139.1088, 35.2337], link: "/memory/Hakone" },
  { name: "Kinugawa", coordinates: [139.7158, 36.8238], link: "/memory/Kinugawa" },
  { name: "Yokohama", coordinates: [139.6379, 35.4436], link: "/memory/Yokohama" },
  { name: "Yamanashi", coordinates: [138.8324, 35.4600], link: "/memory/Yamanashi" },
];

export default function JapanMap() {
  const navigate = useNavigate();
  const [hearts, setHearts] = useState([]);

  // ハートを生成
  const spawnHeart = (name) => {
    const id = Date.now();
    setHearts((prev) => [...prev, { id, name }]);

    // 1.5秒後にハートを削除
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== id));
    }, 1500);
  };

  return (
    <div className="relative w-[700px] h-[600px] bg-white/30 rounded-4xl shadow-md p-4 flex justify-center items-center overflow-hidden backdrop-blur-sm">
    
    {/* タイトル */}
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-white text-2xl font-medium tracking-wide drop-shadow-lg font-zen">
      行ったね、ここ。
    </div>
    
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1200,
          center: [138, 37],
        }}
        width={700}
        height={600}
      >
        {/* 日本地図 */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                 default: {
                   fill: "#E9DCC4",      // やさしいミルクベージュ
                   stroke: "#B59B7A",    // 薄いブラウンの境界線
                   strokeWidth: 0.7,
                   outline: "none",
                   transition: "300ms ease-out",
                 },
                 hover: {
                   fill: "#F5E9D7",      // ほんのり明るく
                   stroke: "#A78A68",
                   cursor: "pointer",
                 },
                 pressed: {
                   fill: "#DCC7AC",      // 押した時ふんわり濃く
                   stroke: "#8A7358",
                 },
                }}
              />
            ))
          }
        </Geographies>

        {/* ピン */}
        {locations.map(({ name, coordinates, link }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle
              r={5}
              fill="#ff6b81"
              stroke="#fff"
              strokeWidth={2}
              className="cursor-pointer hover:scale-125 transition-transform"
              onClick={() => {
                spawnHeart(name);
                setTimeout(() => navigate(link), 1000); // 少し遅れてページ遷移
              }}
            />
            {/* <text
              textAnchor="middle"
              y={-10}
              style={{ fontFamily: "sans-serif", fill: "#333", fontSize: 8 }}
            >
              {name}
            </text> */}
          </Marker>
        ))}
      </ComposableMap>

      {/* 💖 ハートアニメーション */}
      <AnimatePresence>
        {hearts.map((h) => (
          <motion.div
            key={h.id}
            initial={{ opacity: 0, y: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              y: -100 - Math.random() * 50,
              scale: 1,
              x: Math.random() * 40 - 20,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute text-sky-500 text-4xl pointer-events-none"
            style={{
              left: "50%",
              top: "50%",
            }}
          >
            ✈
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
