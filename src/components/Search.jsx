import { motion } from "framer-motion";

export function Search({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="relative flex w-full max-w-lg items-center border border-gray-300 bg-gray-100 px-4 py-2 md:max-xl:w-1/2 sm:max-md:w-1/2"
    >
      <span className="mr-3 text-gray-400">
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
      </span>
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-full bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
      />
      <button
        type="button"
        onClick={onClose}
        className="absolute right-2 cursor-pointer text-gray-500 transition hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </motion.div>
  );
}
