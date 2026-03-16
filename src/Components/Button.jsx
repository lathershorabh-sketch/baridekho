const Button = ({ text, badge, className }) => {
  return (
    <button
      className={`flex items-center gap-2 bg-[#070526] hover:bg-[#B5B3CA] 
      text-[12px] md:text-[16px] text-white px-6 py-3.5 rounded-xl 
      transition-all duration-300 ease-linear ${className}`}
    >
      {text}

      {badge && (
        <span className="text-[10px] md:text-[12px] bg-white text-black px-2 py-0.5 rounded-full ml-2.5 font-medium">
          {badge}
        </span>
      )}
    </button>
  );
};

export default Button;
