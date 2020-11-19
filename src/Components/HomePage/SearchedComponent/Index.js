import React from "react";
import { Container, Grid, makeStyles, Paper, Select } from "@material-ui/core";

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

const Index = ({ filteredData }) => {
  console.log(filteredData);
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
                <p>35</p>
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
              <button className="redButton">View Seats</button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Index;
