import { makeStyles } from "@material-ui/core";
import Homepage from "./pages/Homepage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Coinpage from "./pages/Coinpage";
import Header from "./components/Header";


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {

  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
          <Route exact path="/" component={Homepage} />
          <Route path="/coin/:id" component={Coinpage} />
        </div>
    </BrowserRouter>
  );
}

export default App;
