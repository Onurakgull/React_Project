import { motion } from "framer-motion";
import "./Css/FlowerPage.css";

export default function FlowerRevealPage() {
  return (
    <div className="flower-page">
        {/* Parlayan Tanecikler */}
        <div className="glow-wrapper">
            {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="glow"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 1, 0], y: [0, -50, 0] }}
                transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                }}
                style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                }}
            />
            ))}
        </div>
        <motion.img
            src="/assets/rose.png"
            alt="flower"
            className="flower-image"
            initial={{
                clipPath: "inset(100% 0% 0% 0%)",
                opacity: 0,
                filter: "blur(10px)",
                scale: 1.1,
                y: 50
            }}
            animate={{
                clipPath: "inset(0% 0% 0% 0%)",
                opacity: 1,
                filter: "blur(0px)",
                scale: 1,
                y: 0
            }}
            transition={{
                duration: 3,
                ease: "easeInOut"
            }}
        />
    </div>
  );
}
