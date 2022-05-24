import Header from "./styling/bootstrap/Header";
import About from "./styling/bootstrap/About";
import Project from "./styling/bootstrap/Project";
import Contact from "./styling/bootstrap/Contact";
import Footer from "./styling/bootstrap/Footer";
import "./app.scss"


function App() {
  return (
    <div className="app">
      <Header />
      <div className="sections">
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;