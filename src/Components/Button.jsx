const Button = ({ text, className }) => {
  return (
    <button
      className={`bg-[#070526] hover:bg-[#B5B3CA] text-[12px] md:text-[16px]  text-white px-6 py-3.75 rounded-xl ${className} transition-all duration-300 ease-linear transform`}
    >
      {text}
    </button>
  );
};

export default Button;
