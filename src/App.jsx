import "./App.css";
// import Square from "./components/3d/square";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Initiative from "./components/Initiative";
import Navbar from "./components/Navbar";
import ReachOut from "./components/ReachOut";

function App() {
  return (
    <main className="bg-black/70 body-font">
      <Navbar />
      {/* <Square /> */}
      <Home />
      <About />
      <Initiative />
      <Gallery />
      <ReachOut />
    </main>
  );
}

export default App;
