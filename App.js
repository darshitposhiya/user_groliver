import React from "react";
import Routes from "./src/NAVIGATION/Routes";
import { Provider } from "react-redux";
import { Store } from "./src/REDUX/Store";

const App = () => {

  return (
    <Provider store={Store}>
      <Routes />
    </Provider>

  )
}

export default App;