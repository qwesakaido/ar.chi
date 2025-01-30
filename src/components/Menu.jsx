import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export function Menu({ onClose }) {
  return (
    <motion.div
      initial={{ y: "-50%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#EBEBEB] font-['Futura'] md:max-xl:inset-0"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-[16px] font-medium tracking-wide"
      >
        Close ✖
      </button>

      <nav className="flex flex-col items-center gap-6 text-[32px] font-light tracking-wide">
        <NavLink className="text-[48px] text-[#444444] transition delay-150 hover:text-green-700">
          About Us
        </NavLink>
        <NavLink className="text-[48px] text-[#444444] transition delay-150 hover:text-green-700">
          Interior
        </NavLink>
        <NavLink className="text-[48px] text-[#444444] transition delay-150 hover:text-green-700">
          Architecture
        </NavLink>
        <NavLink className="text-[48px] text-[#444444] transition delay-150 hover:text-green-700">
          Portfolio
        </NavLink>
        <NavLink className="text-[48px] text-[#444444] transition delay-150 hover:text-green-700">
          Contact
        </NavLink>
      </nav>

      <div className="absolute bottom-6 flex gap-8 text-[20px] tracking-wide">
        <a href="https://facebook.com" className="text-[#444] hover:text-black">
          Facebook
        </a>
        <a href="https://vk.com" className="text-[#444] hover:text-black">
          Vkontakte
        </a>
        <a href="https://behance.net" className="text-[#444] hover:text-black">
          Behance
        </a>
      </div>
    </motion.div>
  );
}
