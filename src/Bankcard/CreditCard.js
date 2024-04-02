import React from "react";

import './CreditCard.css'
const CreditCard = ({ formData, side }) => {
const getCardType=()=>{
    if(formData.cardNumber.slice(0,2)==='37' ||formData.cardNumber.slice(0,2)==='34'){
        return 'Amex'
    }
     if(formData.cardNumber.slice(0,1)==='4' )return "Visa";
     if(formData.cardNumber.slice(0,2)==='510' || formData.cardNumber.slice(0,2)==='555' ){
        return "Master Card"
     }

    return "Maste Card"

}
    return (
    <div className="credit-card">
      {side === "front" && (
        <div className="visa-front-side card">
          <div className="card-details-container">
            <div className="detail-container">
              <p>Expiry</p>
              <h2>{formData.cardMonth}</h2>
            </div>
            <div className="detail-container">
              <p>Card Holder:</p>
              <h2>{formData.cardName}</h2>
            </div>
          </div>
          <div className="number-display">
            <h3>{formData.cardNumber}</h3>
          </div>
        </div>
      )}

      {side === "back" && (
        <div className="visa-back-side card">
          <div id="cvv-display">
            <p>{formData.cardCvv} {`${getCardType()}`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditCard;