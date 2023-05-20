import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <main className="main">
        <Home/>
        <About/>
        </main>

      </header>
    </div>
  );
}

export default App;
