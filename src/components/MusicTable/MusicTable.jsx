import React from "react";

const MusicTable = ({}) => {
  const songs = [];
  const songItems = songs.map((song) => <div>{song}</div>);
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MusicTable;