import axios from "axios";
import "./App.css";

function App() {
  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7073/api/Songs");
      console.log(response);
    } catch (error) {
      console.warn("Error in Fetch Songs Request: ", error);
    }
  };
  return (
    <div className="App">
      <button onClick={fetchSongs}>Fetch Songs</button>
    </div>
  );
}

export default App;
