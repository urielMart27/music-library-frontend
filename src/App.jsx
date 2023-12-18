import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import MusicTable from "./components/MusicTable/MusicTable";
import React, { useState, useEffect } from "react";
import "./components/SearchBar/SearchBar";
import SearchBar from "./components/SearchBar/SearchBar";
import NewSongForm from "./components/NewSongForm/NewSongForm";

function App() {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7073/api/Songs");
      console.log(response.data);
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in Fetch Songs Request: ", error);
    }
  };

  const handleSearch = (searchInput) => {
    const filteredData = songs.filter(
      (song) =>
        song.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchInput.toLowerCase()) ||
        song.album.toLowerCase().includes(searchInput.toLowerCase()) ||
        song.genre.toLowerCase().includes(searchInput.toLowerCase()) ||
        (song.releaseDate &&
          typeof song.releaseDate === "string" &&
          song.releaseDate.toLowerCase().includes(searchInput.toLowerCase())) ||
        (song.releaseDate &&
          typeof song.releaseDate !== "string" &&
          song.releaseDate
            .toString()
            .toLowerCase()
            .includes(searchInput.toLowerCase()))
    );
    setFilteredSongs(filteredData);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <NewSongForm />
        <SearchBar onSearch={handleSearch} />
        <MusicTable songs={filteredSongs} />
      </div>
    </div>
  );
}

export default App;
