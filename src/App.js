import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/HomePage/Home/Index";
import ViewSeats from "./Components/ViewSeats/ViewSeats";
import Homee from "./Components/HomePage/Home/Homee";
import SearchedComponent from "./Components/HomePage/SearchedComponent/Index";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
          {/* <Homee></Homee> */}
        </Route>
        <Route path="/viewSeats">
          <ViewSeats></ViewSeats>
        </Route>
        <Route path="/view">
          <SearchedComponent></SearchedComponent>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
