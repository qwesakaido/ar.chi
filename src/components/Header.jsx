import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Search } from "./Search";
import { motion } from "framer-motion";
import { Menu } from "./Menu";

export function Header({ defaultLanguage = "ENG" }) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [language, setLanguage] = useState(defaultLanguage);
  const [isBurgerVisible, setIsBurgerVisible] = useState(false);

  const handleClickSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleClickMenu = () => {
    setIsBurgerVisible(!isBurgerVisible);
  };

  const handleClickLanguageRUS = () => {
    setLanguage("RUS");
  };

  const handleClickLanguageENG = () => {
    setLanguage("ENG");
  };

  return (
    <header className="relative">
      <div className="mx-auto flex max-h-[900px] w-full max-w-[1440px] items-center justify-between px-[30px] py-[30px]">
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className="font-['Playfair Display'] text-2xl leading-[31.99px] font-bold text-[#444444] transition delay-150 hover:text-green-700"
          >
            AR.CHI
          </NavLink>
          <div className="relative flex items-center gap-2 rounded-md p-1 font-['Futura'] text-sm text-gray-500">
            <motion.div
              className="absolute top-0 left-0 h-full w-1/2 rounded-md bg-gray-200"
              animate={{ x: language === "ENG" ? "100%" : "0%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            />
            <button
              className={`relative cursor-pointer rounded-md px-3 py-1 transition-all duration-300 ${language === "RUS" ? "font-bold" : "hover:text-green-700"}`}
              onClick={handleClickLanguageRUS}
            >
              RUS
            </button>
            <button
              className={`relative cursor-pointer rounded-md px-3 py-1 transition-all duration-300 ${language === "ENG" ? "font-bold" : "hover:text-green-700"}`}
              onClick={handleClickLanguageENG}
            >
              ENG
            </button>
          </div>
        </div>

        <nav
          className={`flex items-center gap-4 ${isSearchVisible || isBurgerVisible ? "hidden" : ""}`}
        >
          <ul className="flex items-center gap-8 font-['Futura'] text-sm text-gray-600 md:max-xl:hidden">
            <NavLink className="text-[16px] text-[#444444] transition delay-150 hover:text-green-700">
              About us
            </NavLink>
            <NavLink className="text-[16px] text-[#444444] transition delay-150 hover:text-green-700">
              Architecture
            </NavLink>
            <NavLink className="text-[16px] text-[#444444] transition delay-150 hover:text-green-700">
              Interior
            </NavLink>
            <NavLink className="text-[16px] text-[#444444] transition delay-150 hover:text-green-700">
              Contact
            </NavLink>
            <NavLink className="text-[16px] text-[#444444] transition delay-150 hover:text-green-700">
              Shop
            </NavLink>
          </ul>
          <div className="flex items-center gap-4">
            <span className="text-gray-300">|</span>
            <button
              type="button"
              className="cursor-pointer text-gray-600 transition delay-150 hover:text-green-700"
              onClick={handleClickSearch}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5_89)">
                  <path
                    d="M19.8248 18.98L14.9645 14.1197C16.2683 12.6208 17.0576 10.6652 17.0576 8.52772C17.0576 3.82262 13.2306 0 8.52991 0C3.82481 0 0.00219727 3.82705 0.00219727 8.52772C0.00219727 13.2284 3.82925 17.0554 8.52991 17.0554C10.6674 17.0554 12.623 16.2661 14.1219 14.9623L18.9822 19.8226C19.0975 19.9379 19.2527 20 19.4035 20C19.5543 20 19.7095 19.9424 19.8248 19.8226C20.0554 19.592 20.0554 19.2106 19.8248 18.98ZM1.1951 8.52772C1.1951 4.48337 4.48556 1.19734 8.52547 1.19734C12.5698 1.19734 15.8558 4.4878 15.8558 8.52772C15.8558 12.5676 12.5698 15.8625 8.52547 15.8625C4.48556 15.8625 1.1951 12.5721 1.1951 8.52772Z"
                    fill="#444444"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_89">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <span className="text-gray-300">|</span>
            <button
              type="button"
              className="cursor-pointer text-gray-600 transition delay-150 hover:text-green-700"
              onClick={handleClickMenu}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.812479 8.12499H25.1875C25.636 8.12499 25.9999 7.76096 25.9999 7.31251C25.9999 6.86399 25.6359 6.50003 25.1875 6.50003H0.812479C0.363961 6.50003 0 6.86406 0 7.31251C0 7.76096 0.364028 8.12499 0.812479 8.12499Z"
                  fill="#444444"
                />
                <path
                  d="M25.1875 12.1875H0.812479C0.363961 12.1875 0 12.5516 0 13C0 13.4484 0.364028 13.8125 0.812479 13.8125H25.1875C25.636 13.8125 25.9999 13.4484 25.9999 13C25.9999 12.5516 25.636 12.1875 25.1875 12.1875Z"
                  fill="#444444"
                />
                <path
                  d="M25.1875 17.875H8.93748C8.48896 17.875 8.125 18.239 8.125 18.6875C8.125 19.136 8.48903 19.5 8.93748 19.5H25.1875C25.636 19.5 25.9999 19.1359 25.9999 18.6875C26 18.239 25.636 17.875 25.1875 17.875Z"
                  fill="#444444"
                />
              </svg>
            </button>
          </div>
        </nav>

        {isSearchVisible && <Search onClose={handleClickSearch} />}
        {isBurgerVisible && <Menu onClose={handleClickMenu} />}
      </div>
    </header>
  );
}
