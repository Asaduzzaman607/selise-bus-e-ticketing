import React, { useEffect } from "react";
import WeekendIcon from "@material-ui/icons/Weekend";
import { useState } from "react";
import "./Index.css";
const Index = ({ busId, fare }) => {
  const seats = [
    0,
    2,
    0,
    1,
    0,
    3,
    0,
    1,
    0,
    2,
    0,
    0,
    0,
    0,
    0,
    3,
    0,
    0,
    0,
    0,
    1,
    0,
    5,
    0,
    4,
    0,
    0,
    4,
    0,
    4,
    0,
    1,
    0,
    5,
    0,
    1,
    0,
    5,
    0,
    0,
  ];
  const seatsStyle = [
    {
      color: "black",
      cursor: "pointer",
    },
    {
      color: "#C7A4E6",
      cursor: "not-allowed",
    },
    {
      color: "#EA4DF7",
      cursor: "not-allowed",
    },
    {
      color: "#ABABAB",
      cursor: "not-allowed",
    },
    {
      color: "#FF8996",
      cursor: "not-allowed",
    },
    {
      color: "#FF95CD",
      cursor: "not-allowed",
    },
  ];

  // needed states
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [number, setNumber] = useState(false);

  // handle search action
  const handleSeatSelection = (selected, available) => {
    if (number) {
    } else {
      if (
        available === 0 &&
        !selectedSeat.find((founded) => founded === selected)
      ) {
        const bookedSeat = [...selectedSeat, selected];
        setSelectedSeat(bookedSeat);
      }
    }
  };

  // timeout after 10 minutes
  useEffect(() => {
    if (number === false)
      var timer = setTimeout(() => setSelectedSeat([]), 600000);

    return () => clearTimeout(timer);
  });

  let serviceCharge = 40;
  let insuranceCharge = 10;
  // sub total
  const subTotal = fare * selectedSeat.length;
  console.log(subTotal);

  // grand Total
  const grandTotal = subTotal + serviceCharge + insuranceCharge;

  //  disabled after verifying number
  const ShowDetails = () => {
    setNumber(true);
    console.log(number);
  };

  return (
    <div className="container p-4 ml-auto">
      <div className="row d-flex seatStatusColor mb-5">
        <li style={seatsStyle[1]} className="d-flex mr-3">
          <WeekendIcon /> <p>BOOKED(M)</p>{" "}
        </li>
        <li style={seatsStyle[2]} className="d-flex mr-3">
          <WeekendIcon /> <p>BOOKED(F)</p>{" "}
        </li>
        <li style={seatsStyle[3]} className="d-flex mr-3">
          <WeekendIcon /> <p>BLOCKED</p>{" "}
        </li>
        <li className="d-flex mr-3">
          <WeekendIcon /> <p>AVAILABLE</p>{" "}
        </li>
        <li style={{ color: "green" }} className="d-flex mr-3">
          <WeekendIcon /> <p>SELECTED</p>{" "}
        </li>
        <li style={seatsStyle[4]} className="d-flex mr-3">
          <WeekendIcon /> <p>SOLD(M)</p>{" "}
        </li>
        <li style={seatsStyle[5]} className="d-flex mr-3">
          <WeekendIcon /> <p>SOLD(F)</p>{" "}
        </li>
      </div>
      <div className="row">
        <div className="col-md-3 seats-container">
          <ul className="d-flex flex-wrap mt-5 pt-5">
            {seats.map((seat, index) => (
              <li
                onClick={() => handleSeatSelection(index, seat)}
                style={
                  selectedSeat.find((activeSeat) => activeSeat === index)
                    ? { color: "green" }
                    : seatsStyle[seat]
                }
              >
                <WeekendIcon
                  style={{ width: "40px", height: "50px", marginRight: "5px" }}
                ></WeekendIcon>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4">
          <h4>Seat Information</h4>
          <p>
            <small>Sub Total</small> <small>{subTotal}</small>
          </p>
          <p>
            <small>Service Charge</small> <small>{serviceCharge}</small>
          </p>
          <p>
            <small>Insurance Fee</small> <small>{insuranceCharge}</small>
          </p>
          <p>
            <small>Grand Total</small> <small>{grandTotal}</small>
          </p>
        </div>
        <div className="col-md-5">
          {number ? (
            <h1>Booking details after verifying phone number</h1>
          ) : (
            <form>
              <div className="form-group">
                <label for="phone">Your Phone Number</label> <br />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
                <button onClick={ShowDetails} className="redButton ml-5">
                  Verify
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
