import { NavLink } from "react-router-dom"

export function Header() {
    return (
        <header classNameName="bg-gray-50 font-['Playfair Display'] font-bold leading-[31.99px]">
            <div className="max-w-[1440px] max-h[900px] mx-auto flex justify-between items-center px-[40px] py-[34px]">
                <div className="flex items-center gap-8">
                    <NavLink to='/' className="text-[24px] text-[#444444] hover:text-green-700">AR.CHI</NavLink>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="text-gray-300">|</span>
                        <button className="hover:text-green-700 cursor-pointer">RUS</button>
                        <button className="hover:text-green-700 cursor-pointer">ENG</button>
                    </div>
                </div>

                <nav className="flex items-center gap-8">
                    <ul className="flex items-center gap-8 text-sm text-gray-600">
                        <NavLink className="hover:text-green-700 transition text-[#444444] text-[16px]">About us</NavLink>
                        <NavLink className="hover:text-green-700 transition text-[#444444] text-[16px]">Architecture</NavLink>
                        <NavLink className="hover:text-green-700 transition text-[#444444] text-[16px]">Interior</NavLink>
                        <NavLink className="hover:text-green-700 transition text-[#444444] text-[16px]">Contact</NavLink>
                        <NavLink className="hover:text-green-700 transition text-[#444444] text-[16px]">Shop</NavLink>
                    </ul>

                    <div className="flex items-center gap-4">
                        <span className="text-gray-300">|</span>
                        <button className="text-gray-600 hover:text-green-700 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m1.75-5.9a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <span className="text-gray-300">|</span>
                        <button className="text-gray-600 hover:text-green-700 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}