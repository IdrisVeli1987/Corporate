import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header/header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";

function App() {
  return (
    <>
      <div>
        <header id="header">
          <Header />
        </header>
        <main>
          <Hero />
          <About />
          <Services />
        </main>
      </div>
    </>
  );
}

export default App;
