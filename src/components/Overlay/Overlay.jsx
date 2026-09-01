import { motion } from "framer-motion";

export default function Overlay({ click, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, visibility: "invisible" }}
      animate={{ opacity: 1, visibility: "visible" }}
      exit={{ opacity: 0, visibility: "invisible" }}
      className={`fixed inset-0 z-20 bg-black/50 ${className || ""}`}
      onClick={click}
    ></motion.div>
  );
}
