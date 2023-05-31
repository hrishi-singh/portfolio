import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Qualification from './Components/Qualifications/Qualification';
import ScrollUp from './Components/ScrollUp/ScrollUp';
// import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <main className="main">
        <Home/>
        <About/>
        <Skills/>
        {/* <Services/> */}
        <Qualification/>
        <Contact/>
        </main>
        <Footer/>
        <ScrollUp/>

      </header>
    </div>
  );
}

export default App;
