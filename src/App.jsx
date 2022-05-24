import Topbar from "./components/topbar/Topbar"
import About from "./components/about/About"
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact"
import "./app.scss"

const App = () => {
  return (
  <div className='app'>
    <Topbar />
    <div className="sections">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  </div>  
  );
}

export default App