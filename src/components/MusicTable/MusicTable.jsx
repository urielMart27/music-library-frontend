import React from "react";
import "./MusicTable.css";
import axios from "axios";

const MusicTable = ({ songs = [], onDelete }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7073/api/Songs/${id}`);
      onDelete(id);
    } catch (error) {
      console.warn("Error Deleting Song: ", error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <tr key={song.id}>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.genre}</td>
            <td>{song.releaseDate}</td>
            <td>
              <button onClick={() => handleDelete(song.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MusicTable;
