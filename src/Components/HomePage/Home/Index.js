import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import fakeData from "../../../fakeData/fakeData";
import SearchedComponent from "../SearchedComponent/Index";
import "./Index.css";
import axios from "axios";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useEffect } from "react";
import { Button, Paper, Select } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   "& > *": {
  //     margin: theme.spacing(1),
  //   },
  // },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const districts = [
  { name: "Dhaka" },
  { name: "Chittagong" },
  { name: "Rajshahi" },
  { name: "Sylhet" },
];

const Index = () => {
  const classes = useStyles();

  // needed states

  const [datas, setDatas] = useState([]);

  const [selectedDate, setSelectedDate] = useState({
    journeyDate: new Date(),
    returnDate: new Date(),
  });
  const journeyYear = selectedDate.journeyDate.getFullYear();
  const journeyMonth = selectedDate.journeyDate.getMonth();
  const journeyDay = selectedDate.journeyDate.getDay();
  console.log(journeyYear);

  const newFormattedDate = `${journeyDay}/${journeyMonth}/${journeyYear}`;
  console.log(newFormattedDate);

  const [fromLocation, setFromLocation] = React.useState("");

  const [toLocation, setToLocation] = React.useState("");

  // storing  data into a state
  useEffect(() => {
    const storeData = fakeData;
    setDatas(storeData);
  }, []);

  // useEffect(async () => {
  //   const districts = await axios.get(
  //     "https://bdapis.herokuapp.com/api/v1.0/districts"
  //   );
  //   console.log(districts);
  // }, []);

  // handle Search
  const [filtered, setFiltered] = useState([]);
  const handleSearch = () => {
    console.log(fromLocation, toLocation);
    let filteredData = datas.filter(
      (data) =>
        data.from === fromLocation ||
        data.to === toLocation ||
        data.journeyDate === newFormattedDate
    );
    setFiltered(filteredData);
    console.log(filteredData);
  };

  const handleJourneyDate = (date) => {
    const newDate = { ...selectedDate };
    newDate.journeyDate = date;
    setSelectedDate(newDate);
  };

  const handleReturnDate = (date) => {
    const newDate = { ...selectedDate };
    newDate.returnDate = date;
    setSelectedDate(newDate);
  };

  const handleFromLocation = (event) => {
    setFromLocation(event.target.value);
  };

  const handleToLocation = (event) => {
    setToLocation(event.target.value);
  };

  return (
    <>
      <header className="container form-container mt-5">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <form className={classes.root} noValidate autoComplete="off">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={fromLocation}
                onChange={handleFromLocation}
              >
                {districts.map((option) => (
                  <MenuItem key={option.name} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={toLocation}
                onChange={handleToLocation}
              >
                {districts.map((option) => (
                  <MenuItem key={option.name} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Check in date"
                  value={selectedDate.journeyDate}
                  onChange={handleJourneyDate}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />

                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Check out date"
                  format="dd/MM/yyyy"
                  value={selectedDate.returnDate}
                  onChange={handleReturnDate}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#D6011D", color: "white" }}
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </MuiPickersUtilsProvider>
            </form>
          </div>
        </div>
      </header>
      <SearchedComponent filtered={filtered}></SearchedComponent>
    </>
  );
};

export default Index;
