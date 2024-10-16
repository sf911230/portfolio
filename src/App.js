import { ThemeProvider } from "./context/ThemeContext";
import Portfolio from "../src/pages/Portfolio";
import BackToTopButton from "./components/BackToTopButton";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.scss";

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <ThemeProvider>
          <Portfolio />
          <BackToTopButton />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
