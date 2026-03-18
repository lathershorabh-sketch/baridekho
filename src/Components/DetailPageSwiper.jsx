"use client";

import { useState } from "react";
import { LiningPicture } from "./Common/Icons";

const button = ["Per night", "Entire stay"];

const DetailPageSwiper = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="max-w-6xl mx-auto p-5">
      <div>
        <div className="max-w-[384px] h-59.5 rounded-xl overflow-hidden">
          <iframe
            title="India Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps?q=India&output=embed"
          ></iframe>
        </div>
        <div className="max-w-[384px] w-full rounded-xl border border-[#E4E4E8]">
          <p className="text-[20px] font-bold border-b border-[#E4E4E8] w-full pt-4 pb-3 pl-4">
            Filter by:
          </p>
          <p className="text-[20px] font-bold pt-4 pb-3 pl-4">
            Your budget (per night)
          </p>
          <div className="max-w-80 mx-auto">
            <div className="flex items-center gap-1 bg-[#F1F1F1] mb-4 py-2 justify-between rounded-xl">
              {button.map((obj, i) => (
                <button
                  onClick={() => setActive(i)}
                  key={i}
                  className={`${active === i ? "border text-black bg-white " : "text-[#9393A0] border-transparent "}  cursor-pointer transition-all  duration-300 linear ease-in transform max-w-38.5 w-full text-center rounded-xl  font-semibold py-2.25 mx-4 border-2 text-[16px]"`}
                >
                  {obj}
                </button>
              ))}
            </div>
          </div>
          <p>$400 - $5,000+</p>
        </div>
          <LiningPicture />
        
      </div>
    </section>
  );
};

export default DetailPageSwiper;
