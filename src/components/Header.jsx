import { NavLink } from "react-router-dom"
import { useState } from "react"
import { Search } from "./Search"

export function Header() {
    const [isSearchVisible, setIsSearchVisible] = useState(false)

    const handleSearchClick = () => {
        setIsSearchVisible(!isSearchVisible)
    }

    return (
        <header>
            <div className="max-w-[1440px] max-h-[900px] w-full mx-auto flex justify-between items-center px-[40px] py-[34px]">
                <div className="flex items-center gap-4">
                    <NavLink to='/' className="font-['Playfair Display'] font-bold leading-[31.99px] text-2xl text-[#444444] transition delay-150 hover:text-green-700">AR.CHI</NavLink>
                    <div className="flex items-center gap-4 text-sm text-gray-500 font-['Futura']">
                        <span className="text-gray-300">|</span>
                        <button className="transition delay-150 hover:text-green-700 cursor-pointer">RUS</button>
                        <button className="transition delay-150 hover:text-green-700 cursor-pointer">ENG</button>
                    </div>
                </div>

                <nav className={`flex items-center gap-4 ${isSearchVisible ? 'hidden' : ''}`}>
                    <ul className="flex items-center gap-8 text-sm text-gray-600 font-['Futura']">
                        <NavLink className="hover:text-green-700 transition delay-150 text-[#444444] text-[16px]">About us</NavLink>
                        <NavLink className="hover:text-green-700 transition delay-150 text-[#444444] text-[16px]">Architecture</NavLink>
                        <NavLink className="hover:text-green-700 transition delay-150 text-[#444444] text-[16px]">Interior</NavLink>
                        <NavLink className="hover:text-green-700 transition delay-150 text-[#444444] text-[16px]">Contact</NavLink>
                        <NavLink className="hover:text-green-700 transition delay-150 text-[#444444] text-[16px]">Shop</NavLink>
                    </ul>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-300">|</span>
                        <button
                            type="button"
                            className="text-gray-600 transition delay-150 hover:text-green-700 cursor-pointer"
                            onClick={handleSearchClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.75-5.9a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <span className="text-gray-300">|</span>
                        <button type="button" className="text-gray-600 transition delay-150 hover:text-green-700 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </nav>

                {isSearchVisible && <Search onClose={handleSearchClick} />}
            </div>
        </header>
    )
}
