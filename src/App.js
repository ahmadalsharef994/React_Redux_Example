import { increment, decrement } from "./store/actions";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <div> {count} </div>
        <button onClick={() => dispatch(increment(2))}> + </button>
        <button onClick={() => dispatch(decrement(2))}> - </button>
      </header>
    </div>
  );
}

export default App;
