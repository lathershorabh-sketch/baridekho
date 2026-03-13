import Button from "./Button";
import { Gallerylist } from "./Common/Helper";

const Gallery = () => {
  return (
    <section className="mb-27.5 px-5 xl:px-0">
      <div className="flex flex-col md:flex-row max-w-300 justify-between mx-auto items-center mb-10">
        <div className="max-w-116">
          <h2 className="text-[44px] leading-[130%] w-full font-manrope font-extrabold">
            Find Properties in the Areas You Love
          </h2>
        </div>
        <div className="max-w-96.5 w-full ">
          <p className="mb-5.5 text-center md:text-start">
            Explore properties by neighbourhood. Select an area to view
            available homes, apartments, buildings, and land for buying,
            selling, or renting.
          </p>
          <Button text={"View Properties"} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-300 mx-auto">
        {Gallerylist.map((item, index) => (
          <div
            key={index}
            className="w-70 h-70 overflow-hidden rounded-xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            <img
              className="w-full h-full object-cover"
              src={item.img}
              alt="gallery"
            />

            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white font-semibold">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
