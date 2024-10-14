/* eslint-disable react/prop-types */
const Button = ({
  label,
  bgColor,
  border,
  textColor,
  hoverBgColor,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`rounded-full px-[10px] py-[4px] sm:px-[8px] sm:py-3 md:px-[10px] md:py-[4px] text-[12px] sm:text-[14px] md:text-[16px] font-[700] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${border || ""} ${bgColor} ${textColor} hover:${hoverBgColor}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
