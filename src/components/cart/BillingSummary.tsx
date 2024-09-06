"use client";
import { calculateCartTotals } from "@/src/lib/utils";
import React from "react";
import PriceFormat from "../PriceFormat";

const BillingSummary = () => {
  const { totalAmt } = calculateCartTotals();

  return (
    <>
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">Subtotal</dt>
          <dd className="text-sm font-medium text-gray-900">
            <PriceFormat amount={totalAmt?.regular} />
          </dd>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">
            Total Discount
          </dt>
          <dd className="text-base font-medium text-gray-500">
            <PriceFormat amount={totalAmt?.discounted} />
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">Payable total</dt>
          <dd className="text-lg font-bold text-gray-900">
            <PriceFormat amount={totalAmt?.regular - totalAmt?.discounted} />
          </dd>
        </div>
      </dl>
    </>
  );
};

export default BillingSummary;
