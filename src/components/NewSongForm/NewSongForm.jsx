import React, { useState } from "react";
import axios from "axios";
import TextField from "../TextField/TextField";
import "./NewSongForm.css";

const NewSongForm = ({ onNewSong }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      artist,
      album,
      genre,
      releaseDate,
    };
    try {
      const response = await axios.post(
        "https://localhost:7073/api/Songs",
        formData
      );
      if (response.status === 201) {
        onNewSong();
      }
    } catch (error) {
      console.warn("Error submitting New Song Form: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-item form">
      <h3 className="form">Add Song</h3>
      <TextField label="Title" value={title} onChange={setTitle} />
      <TextField label="Artist" value={artist} onChange={setArtist} />
      <TextField label="Album" value={album} onChange={setAlbum} />
      <TextField label="Genre" value={genre} onChange={setGenre} />
      <div className="form">
        <label className="form">Release Date</label>
        <input
          className="text-field-RD"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Song</button>
    </form>
  );
};

export default NewSongForm;
