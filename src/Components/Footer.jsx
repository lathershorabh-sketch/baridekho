import footerlogo from "../assets/Images/footerlogo.png";
import { FotterList, Useful } from "./Common/Helper";
import { Apple, Email, Google, Icons, Location, Mobile } from "./Common/Icons";

const Footer = () => {
  return (
    <section className="bg-[#100A55] text-white px-5 xl:px-0">
      <div className="max-w-300 w-full flex flex-wrap gap-6 sm:gap-10 lg:gap-4 xl:gap-0 justify-start sm:justify-center lg:justify-between m-auto pt-10 lg:pt-26.75 pb-10 lg:pb-20.5 text-white">
        <div className="max-w-90 lg:max-w-70 xl:max-w-90.75">
          <img className="max-w-50 w-full" src={footerlogo} alt={footerlogo} />
          <p className="mt-2 sm:mt-4 mb-2 sm:mb-6.5">
            From finding your dream home to selling with the best value, we
            offer expert advice, trusted insights, and a seamless process that
            ensures confidence and peace of mind.
          </p>
          <Icons />
        </div>
        <div>
          <p className="text-[18px] font-semibold mb-2 sm:mb-5">
            Useful Information
          </p>
          <ul className="flex flex-col gap-1.5 sm:gap-3.75">
            {Useful.map((item, index) => (
              <li key={index}>
                <a href="/">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[18px] font-semibold mb-2.5 sm:mb-5">Contact</p>
          <ul className="gap-1.5 sm:gap-3 flex flex-col">
            <li className="flex items-center gap-1.5">
              <Email />
              mail@mcswitzerland.de
            </li>
            <li className="flex items-center gap-1.5">
              <Mobile />
              (252) 555-0116
            </li>
            <li className="flex items-center gap-1.5">
              <Location />
              Road 27, Gulshan 1, Dhaka 1212
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[18px] font-semibold mb-2 sm:mb-5">
            Download the BariDekho App
          </p>
          <Apple />
          <Google className="mt-1.5 sm:mt-5" />
        </div>
      </div>
      <div className="bg-[#1B155C] border-b border-b-[#403B77]">
        <div className="max-w-300 w-full mx-auto pb-5 ">
          <h3 className="text-[18px] font-bold mb-2">Disclaimer</h3>
          <ol className="list-decimal">
            {FotterList.map((item, index) => (
              <div>
                <li className="text-[14px]" key={index}>
                  {item}
                </li>
              </div>
            ))}
          </ol>
        </div>
      </div>
      <p className="py-5 text-[18px] flex justify-center text-center">
        Copyright©2025 by BariDekho Management LLC.
      </p>
    </section>
  );
};

export default Footer;
