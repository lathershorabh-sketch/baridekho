import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Houselist } from "./Common/Helper";
import { Autoplay, Navigation } from "swiper/modules";
import Button from "./Button";

const HouseSwiper = () => {
  return (
    <section>
      <div className="max-w-300 mx-auto mb-10 px-5 xl:px-0">
        <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-bold font-manrope leading-[120%] text-[#0B0B2C] text-center lg:text-start">
          Buy & Sell Property Confidently
        </h2>

        <p className="mt-4 max-w-169.25 text-[16px] lg:text-[18px] text-gray-600 leading-[160%] text-center lg:text-start">
          From finding your dream home to selling with the best value, we offer
          expert advice, trusted insights, and a seamless process that ensures
          confidence and peace of mind.
        </p>
      </div>
      <div className="max-w-300 mx-auto relative px-5 mb-0 lg:mb-12">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            650: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {Houselist.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-60 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-[#100A55] text-white text-sm px-3 py-1 rounded">
                    For Sale
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#0B0B2C]">
                    {item.title}
                  </h3>
                  <p className=" text-sm mt-2">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4 text-sm text-gray-600">
                    <span className="border px-3 py-1 rounded-full">
                      {item.bedroom}-Bedroom
                    </span>
                    <span className="border px-3 py-1 rounded-full">
                      {item.villa}-Villa
                    </span>
                    <span className="border px-3 py-1 rounded-full">
                      {item.bathroom}-Bathroom
                    </span>
                    <span className="border px-3 py-1 rounded-full">
                      1-Swimming pool
                    </span>

                    <span className="border px-3 py-1 rounded-full">
                      Breakfast included
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <div>
                      <p className="text-sm text-gray-500">Fares From</p>
                      <h4 className="text-2xl font-bold">{item.price}</h4>
                    </div>
                    <span className="bg-[#100A55] text-white text-sm px-3 py-2 rounded">
                      {item.duration}
                    </span>
                  </div>
                  <button className="w-full mt-5 border border-[#0B0B2C] py-3 rounded-xl font-semibold hover:bg-[#0B0B2C] hover:text-white transform duration-300 ease-linear transition">
                    View Property Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center mb-10 lg:mb-27.5">
        <Button text={"View All Properties"} />
      </div>
    </section>
  );
};

export default HouseSwiper;
