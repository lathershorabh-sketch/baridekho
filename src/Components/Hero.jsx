import heroimg from "../assets/Images/heroimg.png";
import Button from "./Button";
import {
  Board,
  Box,
  City,
  Hand,
  Handshake,
  Runner,
  Trally,
} from "./Common/Icons";

const Hero = () => {
  const fields = [
    { label: "City", svg: <City />, options: ["Delhi", "Mumbai", "Gurgaon"] },
    {
      label: "Location",
      svg: <Runner />,
      options: ["Sector 14", "Sector 45", "DLF Phase 2"],
    },
    {
      label: "Property Type",
      svg: <Box />,
      options: ["Apartment", "Villa", "Plot"],
    },
    {
      label: "Budget",
      svg: <Hand />,
      options: ["10L - 20L", "20L - 50L", "50L+"],
    },
  ];

  return (
    <section className="mb-10 lg:mb-27.5 ">
      <div
        className="mt-8 bg-cover object-cover max-w-300 rounded-3xl bg-center mx-auto h-80 sm:h-100 md:h-117.5"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="bg-[#15151599] py-6 w-full h-full flex flex-col justify-center rounded-3xl px-5 lg:px-0">
          <h1 className="font-bold leading-[120%] text-[30px] sm:text-[32px] md:text-[38px] lg:text-[50px] text-white max-w-243.25 mx-auto text-center">
            Looking to Buy, Sell, or Rent a Property? Find Your Dream Home With
            Us!
          </h1>
        </div>
      </div>

      <div className="max-w-266.5 mx-auto rounded-b-xl overflow-hidden mt-8 lg:-mt-31 shadow-lg">
        <div className="flex px-5 lg:px-0 justify-center lg:justify-start mb-8 lg:mb-0">
          <button className="bg-[#100A55] text-white flex items-center py-3 px-6 gap-2 rounded-tl-lg">
            <Trally /> Buy
          </button>

          <button className="text-[#6C6C6C] flex items-center py-3 px-6 gap-2 bg-[#F6F6F6] border-r border-[#EBEBEB]">
            <Board /> Rent
          </button>

          <button className="text-[#6C6C6C] flex items-center bg-[#F6F6F6] py-3 px-6 gap-2 rounded-tr-lg border-[#EBEBEB] border-l-lg">
            <Handshake /> Sell
          </button>
        </div>

        <div className="flex flex-wrap gap-5 rounded-tr-xl text-[12px] items-end bg-white justify-center pb-5 lg:pb-0 px-5 lg:px-0">
          {fields.map((field, index) => (
            <div
              key={index}
              className="mt-0 lg:mt-[30.5px] mb-0 lg:mb-[30.5px] max-w-47.5 w-full"
            >
              <div className="flex items-center mb-1 gap-2">
                <span>
                  <City />
                </span>
                <p>{field.label}</p>
              </div>

              <select className="text-[#778088] border border-[#E0E2E3] rounded-lg pl-4.25 py-4.25 pr-10 w-full">
                <option>{field.label}</option>

                {field.options.map((option, i) => (
                  <option key={i} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <Button className="px-17 h-fit mb-1 lg:mb-[30.5px]" text={"Search"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
