import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import "./App.css";

function App() {
  const [sport, setSport] = useLocalStorage("sport", "");
  const [player, setPlayer] = useState("");

  return (
    <>
      <label>Sport :</label>
      <input
        type="text"
        autoFocus
        value={sport}
        onChange={(event) => setSport(event.target.value)}
      />
      <label>Player :</label>
      <input
        type="text"
        defaultValue={player}
        onChange={(event) => setPlayer(event.target.value)}
      />
    </>
  );
}

export default App;
