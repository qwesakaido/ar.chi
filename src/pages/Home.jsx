import React from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchBlocks } from "../config/fetches"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
import imageOne from '../assets/imageOne.jpg'
import play from '../assets/play.svg'

export function Home() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['menu'],
        queryFn: fetchBlocks,
    })

    if (isLoading) return <div>Загрузка...</div>
    if (isError) return <div>Ошибка: {error.message}</div>

    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                modules={[Autoplay]}
                initialSlide={0}
                className="max-w-[1440px] max-h-[900px] mx-auto"
            >
                {data.map((block) => (
                    <SwiperSlide key={block.id}>
                        <div className="px-5 py-10 flex items-center justify-between">
                            <div className="w-1/2 space-y-8">
                                <h1 className="font-['Playfair Display'] font-bold text-8xl text-[#425A20]">
                                    {block.title}
                                </h1>
                                <div className="flex gap-12">
                                    <div className="max-w-[285px] space-y-4">
                                        <h3 className="text-lg font-['Futura'] font-semibold text-[#425A20] leading-[21.06px]">
                                            {block.description.col1.title}
                                        </h3>
                                        <p className="text-sm font-['FuturaB'] font-normal text-[#444444] leading-[18px]">
                                            {block.description.col1.description}
                                        </p>
                                    </div>
                                    <div className="max-w-[285px] space-y-4">
                                        <h3 className="text-lg font-['FuturaB'] font-semibold text-[#425A20] leading-[21.06px]">
                                            {block.description.col2.title}
                                        </h3>
                                        <p className="text-sm font-['FuturaB'] font-normal text-[#444444] leading-[18px]">
                                            {block.description.col2.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5 pt-8">
                                    <button type="button" className="font-['Futura'] bg-[#425A20] text-white py-2 px-6 rounded-[5px] w-[200px] h-[46px] cursor-pointer">Read More</button>
                                    <button type="button" className="font-['Futura'] flex items-center text-[#425A20] py-2 px-6 cursor-pointer">
                                        <img className="px-[7px]" src={play} alt="" />
                                        View Project
                                    </button>
                                </div>
                            </div>
                            <div className="w-1/2 flex justify-end">
                                <img src={imageOne} alt="Decorative" className="max-w-[700px]" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
