/* eslint-disable no-unused-vars */
// This page is where we mapped the entire cards, so it represents each individual cards.
import React from 'react'
import BillingSummaryCards from './BillingSummaryCards';

function BillingSummaryCard() {
    // Data array for the billing summary cards
  const billingSummaryData = [
    {
      title: 'So far',
      amount: '$46.99',
      hasToPay: 'You will have to pay on',
      toPay: true,
      hasPaid: false,
      date: 'November 1, 2024',
    },
    {
        title: 'Last month',
        amount: '$49.99',
        toPay: false,
        paid: 'You Paid',
        hasPaid: true,
      date: 'December 1, 2024',
    },
    {
      title: 'Card details',
      card_number: '**** **** **** 1234',
      card_date_Cvc: '**/** ** ',
    },
    {
      title: 'Pricing Calculator',
      details:'Want to have more pods or change the pod type?',
      button_text: 'Calculate it',
    },
  ];
  return (
    <div className='grid bg-white p-10 rounded-md grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-:'>
        {/* mapping over the billing summary data  */}
        {billingSummaryData.map((card, index) => (
            <BillingSummaryCards key={index} {...card} />// Spread operator to pass all card properties as props
        ))
        }
        
    </div>
  )
}

export default BillingSummaryCard