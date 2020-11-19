import React, { useState } from "react";
import { Container, Grid, makeStyles, Paper, Select } from "@material-ui/core";
import ViewSeats from "../../ViewSeats/ViewSeats";

const useStyles = makeStyles({
  root: {},
  paper: {
    padding: "30px",
    margin: "auto",
    backgroundColor: "white",
    marginBottom: "10px",
  },
  headerForm: {
    marginLeft: "30x",
    textAlign: "center",
  },
  policy: {
    color: "red",
    fontStyle: "italic",
  },
  busName: {
    color: "#7B1516",
  },
});

const Index = ({ flt }) => {
  const {
    from,
    to,
    seatsAvailable,
    id,
    departureTime,
    arrivalTime,
    startingPoint,
    endingPoint,
    busType,
    fare,
  } = flt;

  const [show, setShow] = useState(false);

  const ShowSeats = () => {
    setShow(!show);
  };

  const startingFrom = from.substring(0, 3);
  const destination = to.substring(0, 3);

  const classes = useStyles();
  return (
    <>
      <Container>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item md={2}>
              <div>
                <h5 className={classes.busName}>GreenLine</h5>
                <div>
                  <p>{id}</p>
                  <div className="d-flex">
                    <p className="mr-2">
                      {startingFrom} - {destination}
                    </p>
                    <p>{busType ? "AC" : "Non AC"}</p>
                  </div>
                  <p>Starting point :{startingPoint}</p>
                  <p>End Point : {endingPoint}</p>
                </div>
              </div>
            </Grid>
            <Grid item md={2}>
              <div>
                <p>DEPARTURE TIME</p>
                <p>{departureTime}</p>
              </div>
            </Grid>
            <Grid item md={2}>
              <div>
                <p>ARRIVAL TIME</p>
                <p>{arrivalTime}</p>
              </div>
            </Grid>
            <Grid item md={2}>
              <div>
                <p>SEAT AVAILABLE</p>
                <p>{seatsAvailable}</p>
              </div>
            </Grid>
            <Grid item md={2}>
              <p>{fare}</p>
            </Grid>
            <Grid item md={2}>
              <div>
                <button onClick={() => ShowSeats()} className="redButton">
                  View Seats
                </button>
                <p>
                  <small className={classes.policy}>Cancellation Policy</small>
                </p>
              </div>
            </Grid>
          </Grid>
        </Paper>
        {show && <ViewSeats busId={id}></ViewSeats>}
      </Container>
    </>
  );
};

export default Index;
