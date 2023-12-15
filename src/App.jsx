import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import MusicTable from "./components/MusicTable/MusicTable";
import React, { useState, useEffect } from "react";

function App() {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7073/api/Songs");
      console.log(response.data);
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in Fetch Songs Request: ", error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <MusicTable songs={songs} />
      </div>
    </div>
  );
}

export default App;
