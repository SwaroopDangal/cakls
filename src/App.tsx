import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Strengths from "./components/Strengths/Strengths";
import About from "./components/About/About";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Strengths />
      <About />
      <Products />
    </div>
  );
};

export default App;
