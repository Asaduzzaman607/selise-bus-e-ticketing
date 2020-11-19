import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";

const useStyles = makeStyles({
  root: {},
  paper: {
    padding: "30px 20px",
    backgroundColor: "red",
  },
});

const fakeData = [
  {
    id: 101,
    from: "Sylhet",
    to: "Dhaka",
    date: "2020-11-20",
  },
  {
    id: 102,
    from: "MoulviBazar",
    to: "Dhaka",
    date: "2020-11-21",
  },
  {
    id: 103,
    from: "Kulaura",
    to: "Dhaka",
    date: "2020-11-22",
  },
];

const Homee = () => {
  //2020-11-19
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const date = data.date;
    const from = data.from;
    const to = data.to;

    const filterData = fakeData.filter((flt) => flt.date === date);
    console.log(filterData);
  };

  const classes = useStyles();
  return (
    <>
      <Container>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
              <Grid item md={2}>
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="from"
                  id=""
                />
              </Grid>
              <Grid item md={2}>
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="to"
                  id=""
                />
              </Grid>
              <Grid item md={2}>
                <input
                  ref={register({ required: true })}
                  type="date"
                  name="date"
                  id=""
                />
              </Grid>
              <Grid item md={2}>
                <input type="submit" value="Submit" />
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
