import "./App.css";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Initiative from "./components/Initiative";
import Navbar from "./components/Navbar";
import ReachOut from "./components/ReachOut";

function App() {
  return (
    <main className="bg-gray-900 body-font">
      <Navbar />
      <Home />
      <About />
      <Initiative />
      <Gallery />
      <ReachOut />
    </main>
  );
}

export default App;
