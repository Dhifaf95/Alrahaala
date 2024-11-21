import React, { useState } from "react";
import styled from "styled-components";
import ZigguratOfUr from "../zainabsours/imges/ZigguratOfUr.webp";
import NajafKarbala from "../zainabsours/imges/NajafKarbala.webp"; // أضف صورة هنا
import AbbasidBaghdad from "../zainabsours/imges/AbbasidBaghdad.webp"; // أضف صورة هنا

const Card = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookingClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const tours = [
    {
      title: "Ziggurat of Ur and Marshes",
      image: ZigguratOfUr,
      destination: "Ur, Mesopotamian Marshes",
      duration: "4 days",
      departureDates: "March, November",
      price: "$700",
      includes: "Boat Trip, Guide, Meals",
    },
    {
      title: "Pilgrimage to Najaf & Karbala",
      image: NajafKarbala,
      destination: "Najaf, Karbala",
      duration: "3 days",
      departureDates: "August, October",
      price: "$600",
      includes: "Transport, Guide, Accommodation",
    },
    {
      title: "Abbasid Baghdad Tour",
      image: AbbasidBaghdad,
      destination: "Abbasid Palace, Baghdad Museum",
      duration: "1 day",
      departureDates: "Monthly",
      price: "$180",
      includes: "Guide, Entry Fees, Transport",
    },
  ];

  return (
    <StyledWrapper>
      <div className="bookingcard">
        {tours.map((tour, index) => (
          <div className="book" key={index}>
            <img src={tour.image} alt={tour.title} className="trip-image" />
            <div className="details">
              <h2>{tour.title}</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Destination(s): {tour.destination}</td>
                  </tr>
                  <tr>
                    <td>Duration: {tour.duration}</td>
                  </tr>
                  <tr>
                    <td>Departure Dates: {tour.departureDates}</td>
                  </tr>
                  <tr>
                    <td>Price (USD): {tour.price}</td>
                  </tr>
                  <tr>
                    <td>Includes: {tour.includes}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cover">
              <button className="booking-button" onClick={handleBookingClick}>
                Booking
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="modal">
          <form className="form">
            <div className="separator"></div>
            <div className="credit-card-info--form">
              <div className="input_container">
                <label className="input_label">Card holder full name</label>
                <input className="input_field" type="text" placeholder="Enter your full name" />
              </div>
              <div className="input_container">
                <label className="input_label">Card Number</label>
                <input className="input_field" type="number" placeholder="0000 0000 0000 0000" />
              </div>
              <div className="input_container">
                <label className="input_label">Expiry Date / CVV</label>
                <div className="split">
                  <input className="input_field" type="text" placeholder="01/23" />
                  <input className="input_field" type="number" placeholder="CVV" />
                </div>
              </div>
            </div>
            <button className="purchase--btn">Checkout</button>
          </form>
        </div>
      )}
    </StyledWrapper>
  );
};



const StyledWrapper = styled.div`
  .bookingcard {
    padding: 20px;
    padding-top: 50px;
  padding-bottom: 80px;

    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(3, 0.5fr);
    grid-gap: 40px;
  }

  .book {
    position: relative;
    border-radius: 10px;
    width: 18rem;
    height: 21rem;
    background-color: whitesmoke;
    box-shadow: 1px 1px 12px #000;
    overflow: hidden;
    transition: transform 0.5s;
  }

  .trip-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  .details {
    padding: 10px;
    text-align: left;
    width: 100%;
  }

  h2 {
    font-size: 18px;
    margin: 10px 0;
  }

  table {
    font-size: 14px;
    width: 100%;
    margin-top: 5px;
    text-align: left;
  }

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(211, 211, 211, 0.8);
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .book:hover .cover {
    opacity: 1;
  }

  .booking-button {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

 .form {
  display: flex;
  flex-direction: column;
  gap: 20px;
   background: #FFFFFF;
    border-radius: 26px;
  max-width: 450px;
  padding: 20px;
}

.payment--options {
  width: calc(100% - 40px);
  display: grid;
  grid-template-columns: 33% 34% 33%;
  gap: 20px;
  padding: 10px;
}

.payment--options button {
  height: 55px;
  background: #F2F2F2;
  border-radius: 11px;
  padding: 0;
  border: 0;
  outline: none;
}

.payment--options button svg {
  height: 18px;
}

.payment--options button:last-child svg {
  height: 22px;
}

.separator {
  width: calc(100% - 20px);
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 10px;
  color: #8B8E98;
  margin: 0 10px;
}

.separator > p {
  word-break: keep-all;
  display: block;
  text-align: center;
  font-weight: 600;
  font-size: 11px;
  margin: auto;
}

.separator .line {
  display: inline-block;
  width: 100%;
  height: 1px;
  border: 0;
  background-color: #e8e8e8;
  margin: auto;
}

.credit-card-info--form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input_container {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.split {
  display: grid;
  grid-template-columns: 4fr 2fr;
  gap: 15px;
}

.split input {
  width: 100%;
}

.input_label {
  font-size: 10px;
  color: #8B8E98;
  font-weight: 600;
}

.input_field {
  width: auto;
  height: 40px;
  padding: 0 0 0 16px;
  border-radius: 9px;
  outline: none;
  background-color: #F2F2F2;
  border: 1px solid #e5e5e500;
  transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.input_field:focus {
  border: 1px solid transparent;
  box-shadow: 0px 0px 0px 2px #242424;
  background-color: transparent;
}

.purchase--btn {
  height: 55px;
  background: #F2F2F2;
  border-radius: 11px;
  border: 0;
  outline: none;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  background: linear-gradient(180deg, #363636 0%, #1B1B1B 50%, #000000 100%);
  box-shadow: 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #000000;
  transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.purchase--btn:hover {
  box-shadow: 0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #0000003a;
}

/* Reset input number styles */
.input_field::-webkit-outer-spin-button,
.input_field::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.input_field[type=number] {
  -moz-appearance: textfield;
}

`;

export default Card;
