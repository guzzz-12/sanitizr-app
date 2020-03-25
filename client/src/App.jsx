import React, {useState} from "react";
import {MuiThemeProvider} from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Form from "./components/Form";
import NavBar from "./components/AppBar";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";
import DisclaimerModal from "./components/DisclaimerModal";
import "./App.css";

const theme = createMuiTheme({
  typography: {
    "fontFamily": "Raleway",
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 700
  },
  palette: {
    primary: {
      light: "#86afd4",
      main: "#4894d8",
      dark: "#19344c",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ffae68",
      main: "#ff7e3b",
      dark: "#a93400",
      contrastText: "#fff"
    }
  }
})

const App = (props) => {
  const [continueToApp, setContinueToApp] = useState(false);

  const exitWelcome = () => {
    setContinueToApp(true)
  }

  return (
    <MuiThemeProvider theme={theme}>
      <WelcomeScreen continueToApp={continueToApp} exitWelcome={exitWelcome} />
      <DisclaimerModal />
      <div className="main-container">
        <NavBar />
        <div className="container">
          <Form />
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
