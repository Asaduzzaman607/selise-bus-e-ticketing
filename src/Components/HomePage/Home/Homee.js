import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SearchedComponent from "../SearchedComponent/Index";
import fakeData from "../../../fakeData/fakeData";

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

const districts = [
  { name: "Dhaka" },
  { name: "Chittagong" },
  { name: "Rajshahi" },
  { name: "Sylhet" },
];

const Homee = () => {
  // const [district, setDistricts]

  // useEffect(async () => {
  //   const district = await axios.get(
  //     "https://cors-anywhere.herokuapp.com/https://bdapis.herokuapp.com/api/v1.0/districts?fbclid=IwAR3ndby6Q7vcVeh9sb2q2_l2Re4New7m0pqQ5d-bJPW_s-CUbVDwq3XGC_U"
  //   );
  //   setDistricts(district.data);
  // }, []);

  //needed State
  const [dataset, setDataset] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");

  // destructuring from useForm
  const { register, handleSubmit, watch } = useForm();

  // loading data
  useEffect(() => {
    const storeData = fakeData;
    setDataset(storeData);
  }, []);

  // using useForm to get the input values
  const onSubmit = (data) => {
    const date = data.date; //2020-11-19
    const from = data.from;
    const to = data.to;

    const filterData = dataset.filter((flt) => flt.date === date);
    setFiltered(filterData);
  };

  // handle from location to set on a state
  const handleFromLocation = (event) => {
    setFromLocation(event.target.value);
  };
  // handle to location to set on a state
  const handleToLocation = (event) => {
    setToLocation(event.target.value);
  };

  // material Ui classes
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
      {filtered.map((flt) => (
        <SearchedComponent flt={flt}></SearchedComponent>
      ))}
    </>
  );
};

export default Homee;
