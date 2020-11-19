import { Container, Grid, makeStyles, Paper, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import fakeData from "../../../fakeData/fakeData";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
  root: {},
  paper: {
    padding: "30px",
    margin: "auto",
    backgroundColor: "#E87482",
  },
  headerForm: {
    marginLeft: "30x",
    textAlign: "center",
  },
});

// const fakeData = [
//   {
//     id: 101,
//     from: "Sylhet",
//     to: "Dhaka",
//     date: "2020-11-20",
//   },
//   {
//     id: 102,
//     from: "MoulviBazar",
//     to: "Dhaka",
//     date: "2020-11-21",
//   },
//   {
//     id: 103,
//     from: "Kulaura",
//     to: "Dhaka",
//     date: "2020-11-22",
//   },
// ];
const districts = [
  { name: "Dhaka" },
  { name: "Chittagong" },
  { name: "Rajshahi" },
  { name: "Sylhet" },
];

const Homee = () => {
  const [dataset, setDataset] = useState([]);
  useEffect(() => {
    const storeData = fakeData;
    setDataset(storeData);
  }, []);

  //2020-11-19
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const journeyDate = data.journeyDate;
    const returnDate = data.returnDate;
    const from = data.from;
    const to = data.to;

    const filterData = dataset.filter((data) => data.date === journeyDate );
    console.log(filterData);
  };
  const [fromLocation, setFromLocation] = useState("");

  const [toLocation, setToLocation] = useState("");

  const handleFromLocation = (event) => {
    setFromLocation(event.target.value);
  };

  const handleToLocation = (event) => {
    setToLocation(event.target.value);
  };

  const classes = useStyles();
  return (
    <>
      <Container>
        <Paper className={classes.paper}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.headerForm}
          >
            <Grid container>
              <Grid item md={2}>
                <label htmlFor="FROM">FROM</label>
                <br />
                <select
                  id="cars"
                  value={fromLocation}
                  ref={register({ required: true })}
                  name="from"
                  onChange={handleFromLocation}
                >
                  {districts.map((option) => (
                    <option key={option.name} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </Grid>
              <Grid item md={2}>
                <label htmlFor="FROM">TO</label> <br />
                <select
                  id="cars"
                  value={toLocation}
                  ref={register({ required: true })}
                  name="from"
                  onChange={handleToLocation}
                >
                  {districts.map((option) => (
                    <option key={option.name} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </Grid>
              <Grid item md={2}>
                <label htmlFor="FROM">JOURNEY DATE</label>
                <input
                  ref={register({ required: true })}
                  type="date"
                  name="journeyDate"
                  id=""
                />
              </Grid>
              <Grid item md={2}>
                <label htmlFor="FROM">RETURN DATE (OPTIONAL)</label>
                <input
                  ref={register({ required: true })}
                  type="date"
                  name="returnDate"
                  id=""
                />
              </Grid>
              <Grid item md={2}>
                <input
                  className="redButton"
                  type="submit"
                  value="Search Buses"
                />
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default Homee;
