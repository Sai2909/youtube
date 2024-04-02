import React, { useState } from "react";
import CreditCard from "./CreditCard";
import './CreditCard.css'

const Send = () => {
  const currentMont = new Date().getMonth() + 1;
  const formatting = String(currentMont).length <= 1 ? "0" : null;
  const formattedCurrentMonth = formatting + currentMont;
  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    cardCvv: "",
    cardMonth: currentYear + "-" + formattedCurrentMonth,
  });

  const [side, setSide] = useState("front");
  const [message,setMessage]=useState('Please enter your credit card details...! ')
  const handleChange = (e) => {
    // let { name, value } = e.target;
    const name = e.target.name;
    let value = e.target.value;
    if (name === "cardCvv" || name === "cardNumber") {
      value = value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    }
    setFormData({ ...formData, [name]: value });
    if (name === "cardCvv") {
      setSide("back");
      return;
    }
    setSide("front");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "submitted");
    setMessage("Thank You for Custoom...!")
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <CreditCard formData={formData} side={side} />
        <div className="input-container">
          <label>
            Name on Card
            <input
              placeholder="Name"
              required
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="input-container">
          <label>
            Card Number
            <input
              placeholder="0000 0000 0000 0000"
              minLength={16}
              maxLength={16}
              required
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="supporting-input-container">
          <label>
            Expiry Date
            <input
              type="month"
              required
              name="cardMonth"
              value={formData.cardMonth}
              onChange={handleChange}
            />
          </label>
          <label className="CVV-container">
            CVV
            <input
              minLength={3}
              maxLength={3}
              name="cardCvv"
              value={formData.cardCvv}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="input-container">
          <input type="submit" />
        </div>
        <p className="info-message">{message}</p>
      </form>
    </div>
  );
};

export default Send;