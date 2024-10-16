/* eslint-disable no-unused-vars */
import React from 'react';
import BillingSummaryCard from '../component/BillingSummaryCard';
import PaymentHistoryTable from '../component/PaymentHistoryTable';
import { IoIosInformationCircle } from 'react-icons/io';
import FadeInWrapper from '../../src/ui/FadeInWrapper';

function Billing() {
  return (
    <FadeInWrapper className="">
      <div className="bg-slate-100 p-4 md:p-8">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-2xl">Billing</h3>
          {/* Header section with current plan and button to change the plan */}
          <div className="flex flex-col gap-4  items- mb-8">
            <div className="text-sm text-gray-600 text-center">
              <h4>
                <IoIosInformationCircle className="inline" />
                <span className="ml-1 align-middle">Standard Plan</span>
              </h4>
            </div>
            <div className="bg-blue-600 text-white px-8 py-2 rounded-lg">
              <button>Change Plan</button>
            </div>
          </div>
        </div>
        {/* Billing Summary Section */}
        <div className="max-w-6xl mx-auto">
          <BillingSummaryCard />
          <PaymentHistoryTable />
        </div>
      </div>
    </FadeInWrapper>
  );
}

export default Billing;
