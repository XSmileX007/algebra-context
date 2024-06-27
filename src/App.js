import Komponenta1 from "./Components/Komponenta1";
import { Provider } from "./Context/Context";

import "./App.css";
import React from "react";

function App() {
  const [number, setNumber] = React.useState(0);

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  return (
    <Provider value={{ text: "prikaz na komponenti 4", number }}>
      <Komponenta1></Komponenta1>
      <input type="number" onChange={handleChangeNumber} value={number}></input>
    </Provider>
  );
}

export default App;
