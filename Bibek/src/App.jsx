import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header/header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Works from "./Components/Works";
import Teams from "./Components/Teams";
import Testimonials from "./Components/Testimonials";

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
          <Works />
          <Teams />
          <Testimonials />
        </main>
      </div>
    </>
  );
}

export default App;
