import "./App.css";
import NavigationBar from "./Navigation/NavigationBar";
import Particles from "particles-bg";
import Header from "./Header/Header";
import Home from "./Home/Home.jsx";
import Skills from "./Skill/Skills.jsx";
import Projects from "./Projects/Projects";
import Contact from "./ContactMe/Contact";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      {/* <Header /> */}
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
