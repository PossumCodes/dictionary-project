import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Lana's Word Lookup</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded with 🤘 by Lana</footer>
      </div>
    </div>
  );
}

export default App;
