/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function BillingSummaryCards({
  title,
  amount,
  date,
  card_number,
  card_date_Cvc,
  button_text,
  hasToPay,
  paid,
  details,
}) {
  return (
    <div className="flex flex-col justify-between border rounded-lg p-4 md:p-6 shadow-sm h-full">
    <div>
      <div className="text-gray-600 text-sm mb-2 font-bold">{title}</div>
      {amount && <div className="text-3xl font-bold text-blue-600 mb-2">{amount}</div>}
      {paid && <div className="text-xs text-gray-500">{paid}</div>}
      {date && (
        <div className="text-xs text-gray-700">
          <p className="flex flex-col gap-4 pt-3">
            <span>{hasToPay}</span> <span className="font-extrabold text-base">{date}</span>
          </p>
        </div>
      )}
    </div>
    {card_number && (
      <div className="text-lg text-[#c4c7cd] font-bold flex flex-col py-1">
        {card_number} <span>{card_date_Cvc}</span>
        <p className="text-sm mt-4 text-blue-600">
          <span className="mr-1 font-semibold">Change Card</span>
          <FaArrowRightLong className="inline" />
        </p>
      </div>
    )}
    {button_text && (
      <div className="py-2">
        <p className="py-2 text-xs text-slate-400">{details}</p>
        <p className="text-sm mt-4 text-blue-600">
          <span className="mr-1 font-semibold">{button_text}</span>
          <FaArrowRightLong className="inline" />
        </p>
      </div>
    )}
  </div>
  
  );
}

export default BillingSummaryCards;
 {/* if the card has a card number display it */}
//  {card_number && (
//     <div className="text-lg text-[#c4c7cd] font-bold flex flex-col py-4">
//       {card_number} <span>{card_date_Cvc}</span>
//       <p className="text-sm mt-4 text-blue-600">
//         <span className="mr-1 font-semibold ">Change Card</span>
//         <FaArrowRightLong className="inline" />
//       </p>
//     </div>
//   )}

  {/* if the card has a button text, display it  */}
//   {button_text && (
//       <div className="py-2">
//       <p className="py-2 text-xs text-slate-400">{details}</p>
//       <p className="text-sm mt-4 text-blue-600">
//         <span className="mr-1 font-semibold ">{button_text}</span>
//         <FaArrowRightLong className="inline" />
//       </p>
//     </div>
//   )}