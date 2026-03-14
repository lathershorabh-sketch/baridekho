import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Houselist } from "./Common/Helper";


const Swiper = () => {
  return (
    <section className="">
      <div className="max-w-300 mx-auto mb-10">
        <h2 className="text-[48px] font-bold font-manrope leading-[120%] text-[#0B0B2C]">
          Buy & Sell Property Confidently
        </h2>
        <p className="mt-4 max-w-169.25 text-[18px] text-gray-600 leading-[160%]">
          From finding your dream home to selling with the best value, we offer
          expert advice, trusted insights, and a seamless process that ensures
          confidence and peace of mind.
        </p>
      </div>
      <div className="max-w-300 mx-auto">
        <Swiper spaceBetween={20} slidesPerView={4}>
          {Houselist.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[250px] object-cover"
                />

                <div className="p-4">
                  <p className="text-lg font-semibold">{item.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Swiper;
