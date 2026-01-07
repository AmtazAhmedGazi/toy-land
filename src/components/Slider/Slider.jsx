import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa6";
import { Autoplay } from "swiper/modules";

import { Navigation, Pagination } from "swiper/modules";

const Slider = ({ data }) => {
  return (
    <div className=" mx-auto pb-12  px-5 md:px-10 lg:px-20 xl:px-30 2xl:px-50 py-10">
      <h2 className="text-3xl text-center md:text-left font-bold text-black mb-7">
        MEGA Sale Spotlight
      </h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        speed={1000}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        observer={true}
        observeParents={true}
        className="mySwiper"
      >
        {data.map((toy) => (
          <SwiperSlide key={toy.toyId}>
            <div className="bg-[#1b1b1b] rounded-xl overflow-x-hidden shadow-lg flex flex-col">
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-80 object-cover"
              />
              <div className="p-3 text-gray-200">
                <p className="text-sm opacity-70">{toy.subCategory}</p>
                <h3 className="text-md font-semibold">{toy.toyName}</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
                    Qty: {toy.availableQuantity}
                  </span>
                  <span className="text-gray-400 text-base">${toy.price}</span>
                  <span className="text-white font-semibold flex items-center gap-1">
                    <p>{toy.rating}</p>
                    <FaStar></FaStar>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
