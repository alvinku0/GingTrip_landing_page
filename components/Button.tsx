const Button = ({ text }: { text: string }) => {
  return <button className="text-white bg-[#00551c] py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base rounded-lg cursor-pointer hover:bg-[#004416] transition-colors duration-200">{text}</button>;
};

export default Button;
