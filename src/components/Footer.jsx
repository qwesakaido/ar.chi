import { Slider } from './Slider'

export function Footer() {
    return (
        <footer>
            <div className="max-w-[1440px] max-h[900px] flex justify-start gap-10 mx-auto px-[40px] py-[34px]">
                <span className="hover:text-green-700 transition text-[#444444] text-[16px]">Facebook</span>
                <span className="hover:text-green-700 transition text-[#444444] text-[16px]">Vkontakte</span>
                <span className="hover:text-green-700 transition text-[#444444] text-[16px]">Behance</span>
                <Slider />
            </div>
        </footer>
    )
}