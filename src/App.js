import './App.css';
import Lottery from "./Lottery"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lottery />
        <Lottery title="Mini-Lottery" maxNum = {5} numBalls = {4}/>
      </header>
    </div>
  );
}

export default App;
