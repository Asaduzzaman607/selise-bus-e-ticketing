import React from "react";
import WeekendOutlinedIcon from "@material-ui/icons/WeekendOutlined";
import { useState } from "react";
import { useStateValue } from "../Redux/StateProvider/Index";
import "./ViewSeats.css";
const ViewSeats = ({ busId, fare = 500 }) => {
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

  const [selectedSeat, setSelectedSeat] = useState([]);

  const handleSeatSelection = (selected, available) => {
    if (
      available === 0 &&
      !selectedSeat.find((founded) => founded === selected)
    ) {
      const bookedSeat = [...selectedSeat, selected];
      setSelectedSeat(bookedSeat);
      let timeOut = setTimeout(...selectedSeat, 6000);
      clearTimeout(timeOut);
      timeOut = setTimeout(...selectedSeat, 6000);
    }
  };

  const amount = fare * selectedSeat.length;
  console.log(amount);

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (id) => {
    dispatch({
      type: "Add-to-basket",
      item: {
        id: id,
        fare: fare,
      },
    });
  };

  return (
    <div className="container">
      <div className="row d-flex seatStatusColor">
        <li className="d-flex mr-3">
          <WeekendOutlinedIcon /> <p>BOOKED(M)</p>{" "}
        </li>
        <li className="d-flex mr-3">
          <WeekendOutlinedIcon /> <p>BOOKED(F)</p>{" "}
        </li>
        <li className="d-flex mr-3">
          <WeekendOutlinedIcon /> <p>BLOCKED</p>{" "}
        </li>
        <li className="d-flex mr-3">
          <WeekendOutlinedIcon /> <p>AVAILABLE</p>{" "}
        </li>
        <li className="d-flex mr-3">
          <WeekendOutlinedIcon /> <p>SELECTED</p>{" "}
        </li>
        <li className="d-flex mr-3">
          <WeekendOutlinedIcon /> <p>SOLD(M)</p>{" "}
        </li>
        <li className="d-flex mr-3">
          <WeekendOutlinedIcon /> <p>SOLD(F)</p>{" "}
        </li>
      </div>
      <div className="row">
        <div className="col-md-3 seats-container">
          <ul className="d-flex flex-wrap mt-5 pt-5">
            {seats.map((seat, index) => (
              <li
                onClick={() => {
                  handleSeatSelection(index, seat);
                  addToBasket();
                }}
                // onClick={() => handleSeatSelection(index, seat)}
                style={
                  selectedSeat.find((activeSeat) => activeSeat == index)
                    ? { color: "green" }
                    : seatsStyle[seat]
                }
              >
                <WeekendOutlinedIcon
                  style={{ width: "40px", height: "50px", marginRight: "5px" }}
                ></WeekendOutlinedIcon>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4">
          <h2>Seat Information</h2>
        </div>
        <div className="col-md-5">
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
              <button className="redButton ml-5"> Verify</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewSeats;
