import handshake from "../assets/Images/handshake.png";
import Button from "./Button";
const Post = () => {
  return (
    <section className="max-w-300 w-full flex justify-between items-center mx-auto mb-10 lg:mb-27.5 bg-[#DBDAE6] rounded-2xl gap-3 sm:gap-0">
      <div className="flex items-center justify-between ">
        <div>
          <img
            className="max-w-30 sm:max-w-37.75 h-37.5 object-cover rounded-l-2xl "
            src={handshake}
            alt={handshake}
          />
        </div>
        <div className="ml-6 lg:ml-12.5 gap-1 hidden md:block">
          <h3 className=" text-[24px]  lg:text-[38px]">
            Post your property for <span className="text-[#06041E]">free</span>
          </h3>
          <p className="text-[16px] lg:text-[20px] ">
            List on BariDekho and get genuine leads
          </p>
        </div>
      </div>
      <Button
        className="mr-6 hidden md:block "
        text="Post Properties"
        badge="Free"
      />
      <div className="mr-2 sm:mr-12.5 gap-1 block md:hidden">
        <h3 className=" text-[18px] sm:text-[24px]  lg:text-[38px]">
          Post your property for <span className="text-[#06041E]">free</span>
        </h3>
        <p className="text-[16px] lg:text-[20px] ">
          List on BariDekho and get genuine leads
        </p>
        <Button
          className="mr-6 block md:hidden mt-1.5 sm:mt-5"
          text="Post Properties"
          badge="Free"
        />
      </div>
    </section>
  );
};

export default Post;
