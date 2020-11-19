import React, { useState } from "react";
import { Container, Grid, makeStyles, Paper, Select } from "@material-ui/core";
import ViewSeats from "../../ViewSeats/ViewSeats";

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

const Index = ({ flt }) => {
  const { seatsAvailable, id } = flt;

  const [show, setShow] = useState(false);
  

  const ShowSeats = () => {
    setShow(!show);
  };

  const classes = useStyles();
  return (
    <>
      <Container>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item md={2}>
              <div className="d-flex">
                <p>DEPARTURE TIME</p>
                <p>35</p>
              </div>
            </Grid>
            <Grid item md={2}>
              <div className="d-flex">
                <p>DEPARTURE TIME</p>
                <p>35</p>
              </div>
            </Grid>
            <Grid item md={2}>
              <div className="d-flex">
                <p>ARRIVAL TIME</p>
                <p>{seatsAvailable}</p>
              </div>
            </Grid>
            <Grid item md={2}>
              <div className="d-flex">
                <p>SEAT AVAILABLE</p>
                <p>35</p>
              </div>
            </Grid>
            <Grid item md={2}>
              <p>500</p>
            </Grid>
            <Grid item md={2}>
              <button onClick={() => ShowSeats()} className="redButton">
                View Seats
              </button>
            </Grid>
          </Grid>
        </Paper>
        {show && <ViewSeats busId={id}></ViewSeats>}
      </Container>
    </>
  );
};

export default Index;
