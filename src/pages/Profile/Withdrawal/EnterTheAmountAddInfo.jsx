import React from "react";

const EnterTheAmountAddInfo = ({ amount }) => {
  return (
    <>
      <p>
        Will be withdrawn subject to commission:
        <span>{!isNaN(amount) ? amount.toFixed(2) : 0} USD</span>
      </p>
      <p>
        Commission:<span> 0.00 USD</span>
      </p>
    </>
  );
};

export default EnterTheAmountAddInfo;
