import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBlocks } from "../config/fetches";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import imageOne from "../assets/imageOne.jpg";
import play from "../assets/play.svg";

export function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["menu"],
    queryFn: fetchBlocks,
  });

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: {error.message}</div>;

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        speed={1500}
        initialSlide={0}
        className="mx-auto max-h-[900px] max-w-[1440px] md:max-xl:max-h-[450px] md:max-xl:max-w-[720px]"
      >
        {data.map((block) => (
          <SwiperSlide key={block.id}>
            <div className="flex items-center justify-between px-5 py-10">
              <div className="w-1/2 space-y-8">
                <h1 className="font-['Playfair Display'] text-8xl font-bold text-[#425A20]">
                  {block.title}
                </h1>
                <div className="flex gap-12">
                  <div className="max-w-[285px] space-y-4">
                    <h3 className="font-['Futura'] text-lg leading-[21.06px] font-semibold text-[#425A20]">
                      {block.description.col1.title}
                    </h3>
                    <p className="font-['FuturaB'] text-sm leading-[18px] font-normal text-[#444444]">
                      {block.description.col1.description}
                    </p>
                  </div>
                  <div className="max-w-[285px] space-y-4">
                    <h3 className="font-['FuturaB'] text-lg leading-[21.06px] font-semibold text-[#425A20]">
                      {block.description.col2.title}
                    </h3>
                    <p className="font-['FuturaB'] text-sm leading-[18px] font-normal text-[#444444]">
                      {block.description.col2.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 pt-8 md:max-xl:pt-0">
                  <button
                    type="button"
                    className="h-[46px] w-[200px] cursor-pointer rounded-[5px] bg-[#425A20] px-6 py-2 font-['Futura'] text-white"
                  >
                    Read More
                  </button>
                  <button
                    type="button"
                    className="flex cursor-pointer items-center px-6 py-2 font-['Futura'] text-[#425A20] md:max-xl:px-0"
                  >
                    <img className="px-[7px]" src={play} alt="" />
                    View Project
                  </button>
                </div>
              </div>
              <div className="flex w-1/2 justify-end md:max-xl:hidden">
                <img
                  src={imageOne}
                  alt="Decorative"
                  className="max-w-[700px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
