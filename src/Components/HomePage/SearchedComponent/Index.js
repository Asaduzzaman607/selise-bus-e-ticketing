import React, { useState } from "react";
import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import ViewSeats from "../../ViewSeats/Index";

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
  colored: {
    color: "#7B1516",
    fontWeight: "bold",
  },
});

const Index = ({ filter }) => {
  // destructuring from filter
  const {
    name,
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
  } = filter;

  // needed state
  const [show, setShow] = useState(false);

  //  view seat show handle
  const ShowSeats = () => {
    setShow(!show);
  };
  // taking substring  0 to 3
  const startingFrom = from.substring(0, 3);
  const destination = to.substring(0, 3);

  // material ui classes
  const classes = useStyles();
  return (
    <>
      <Container>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item md={2}>
              <div>
                <h5 className={classes.colored}>{name}</h5>
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
                <p className={classes.colored}>{departureTime}</p>
              </div>
            </Grid>
            <Grid item md={2}>
              <div>
                <p>ARRIVAL TIME</p>
                <p className={classes.colored}>{arrivalTime}</p>
              </div>
            </Grid>
            <Grid item md={2}>
              <div>
                <p>SEAT AVAILABLE</p>
                <p className={classes.colored}>{seatsAvailable}</p>
              </div>
            </Grid>
            <Grid item md={2}>
              <p className={classes.colored}>{fare}</p>
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
        {show && <ViewSeats busId={id} fare={fare}></ViewSeats>}
      </Container>
    </>
  );
};

export default Index;
