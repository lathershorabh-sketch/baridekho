const Button = ({ text, className }) => {
  return (
    <button
      className={`bg-[linear-gradient(to_bottom,rgb(181,179,202)_0%,rgb(7,5,38)_90%)] text-white px-6 py-[15px] rounded-xl ${className} hover:shadow-lg transition-shadow duration-300 ease-in-out`}
    >
      {text}
    </button>
  );
};

export default Button;
