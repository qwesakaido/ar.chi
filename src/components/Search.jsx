import { motion } from "framer-motion"

export function Search({ onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex items-center w-full max-w-lg bg-gray-100 border border-gray-300 px-4 py-2 relative"
        >
            <span className="text-gray-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35m1.75-5.9a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
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
                className="absolute right-2 text-gray-500 hover:text-gray-700 transition cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </motion.div>
    )
}
