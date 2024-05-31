import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/footer/footer";
import Logos from "./components/Logos/logos";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Logos/>
      <Works/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
