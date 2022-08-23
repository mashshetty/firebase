import logo from "./logo.svg";
import Movies from "./Comp/Movies";
import im from "./0010.gif";
import Add from "./Comp/Add";
import "./App.css";
import { useCallback, useState ,useEffect} from "react";

function App() {
  const [movies, setmovies] = useState([]);
  const [load, setload] = useState(false);
  const [er, seter] = useState(null);
  const FM = useCallback(async () => {
    setload(true);

    const response = await fetch(
      "https://neww-a1e15-default-rtdb.firebaseio.com/mov.json"
    );

    const data = await response.json();

    const mov = [];

    for (const key in data) {
      mov.push({
        id: key,
        title: data[key].title,
        openingdate: data[key].openingText,
        releasedate: data[key].releaseDate,
      });
    }
    console.log(mov);
    setmovies(mov);
    setload(false);

    console.log(movies);
  }, []);

  async function addd(movie)
  {
    const response = await fetch('https://neww-a1e15-default-rtdb.firebaseio.com/mov.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

 

  let cont = " ";

  if (load) {
    cont = <img src={im} alt="" />;
  }

  return (
    <div className="App">
        <Add ad={addd} />
      <button className="btn" onClick={FM}>
        Fetch Movie
      </button>
      {/* <button onClick={show}>show Movie</button> */}
      <Movies mov={movies} />
      <p className="ld">{cont}</p>
      <p>{er}</p>
    
    </div>

  );
}

export default App;
