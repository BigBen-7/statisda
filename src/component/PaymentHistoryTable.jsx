/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

const PaymentHistoryTable = () => {
  // Data for the payment history table
  const payment_data = [
    { date: "Jan 2024", amount: "$60.73", plan: "Standard", status: "Paid" },
    {
      date: "Feb 2024",
      amount: "$58.15",
      plan: "Standard",
      status: "Not Paid",
    },
    { date: "Mar 2024", amount: "$83.46", plan: "Standard", status: "Paid" },
    {
      date: "Apr 2024",
      amount: "$83.46",
      plan: "Standard",
      status: "Paid 50%",
    },
    { date: "Jul 2024", amount: "$83.46", plan: "Standard", status: "Paid" },
    { date: "Aug 2024", amount: "$83.46", plan: "Standard", status: "Paid" },
    { date: "Sep 2024", amount: "$83.46", plan: "Standard", status: "Pending" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg overflow-x-auto">
      {/* Table title */}
      <h2 className="text-base text-gray-600 font-semibold mb-4">
        Payment history and invoicing
      </h2>

      {/* Payment history table */}
      <table className="w-full text-left table-auto">
        <thead>
          <tr className="border-b text-gray-500">
            <th className="py-2 px-4 w-[15%]">Date</th>
            <th className="py-2 px-4 w-[15%]">Amount</th>
            <th className="py-2 px-4 w-[20%]">Plan</th>
            <th className="py-2 px-4 w-[20%]">Status</th>
            <th className="py-2 px-4 w-[30%]">Invoice</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping over payment data to render each row */}
          {payment_data.map((payment, index) => (
            <tr key={index} className="border-b">
              {/* Date cell */}
              <td className="py-2 px-4 font-bold text-xs sm:text-sm text-gray-500">
                {payment.date}
              </td>

              {/* Amount cell */}
              <td className="py-2 px-4 text-gray-500 text-xs sm:text-sm font-normal">
                {payment.amount}
              </td>

              {/* Plan cell */}
              <td className="py-2 px-4 text-gray-500 text-xs sm:text-sm font-semibold">
                {payment.plan}
              </td>

              {/* Status cell */}
              <td className="py-2 px-4">
                <span
                  className={`font-semibold text-xs sm:text-sm ${
                    payment.status === "Paid"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {payment.status}
                </span>
              </td>

              {/* Invoice download button */}
              <td className="py-2 px-4">
                <button className="flex items-center text-gray-600 text-xs sm:text-sm">
                  {/* Hide the text on smaller screens */}
                  <span className="hidden sm:inline sm:lowercase md:inline lg:normal-case mr-1 sm:mr-3 font-semibold">DOWNLOAD INVOICE</span>

                  <span className="border-2 border-sky-200 px-1 sm:px-2 py-1 rounded-md">
                    <FaCloudDownloadAlt className="inline mb-1 text-sky-600 text-sm sm:text-base" />
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Download All Button */}
      <div className="flex justify-end mt-4">
        <button className="text-blue-600">Download All</button>
      </div>
    </div>
  );
};

export default PaymentHistoryTable;
