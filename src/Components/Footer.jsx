import footerlogo from "../assets/Images/footerlogo.png";
import { Useful } from "./Common/Helper";
import { Email, Icons, Location, Mobile } from "./Common/Icons";

const Footer = () => {
  return (
    <section className="bg-[#100A55]">
      <div className="max-w-300 w-full flex justify-between m-auto pt-26.75 pb-20.5 text-white">
        <div className="max-w-90.75">
          <img className="max-w-50 w-full" src={footerlogo} alt={footerlogo} />
          <p className="mt-4 mb-6.5">
            From finding your dream home to selling with the best value, we
            offer expert advice, trusted insights, and a seamless process that
            ensures confidence and peace of mind.
          </p>
          <Icons />
        </div>
        <div>
          <p className="text-[18px] font-semibold mb-5">Useful Information</p>
          <ul className="flex flex-col gap-3.75">
            {Useful.map((item, index) => (
              <li key={index}>
                <a href="/">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[18px] font-semibold mb-5">Contact</p>
          <ul>
            <li className="flex items-center">
              <Email />
              mail@mcswitzerland.de
            </li>
            <li className="flex items-center">
              <Mobile />
              (252) 555-0116
            </li>
            <li className="flex items-center">
              <Location />
              Road 27, Gulshan 1, Dhaka 1212
            </li>
          </ul>
        </div>
        <div>
            <p className="text-[18px] font-semibold mb-5">Download the BariDekho App</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
