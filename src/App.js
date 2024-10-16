import { ThemeProvider } from "./context/ThemeContext";
import Portfolio from "../src/pages/Portfolio";
import BackToTopButton from "./components/BackToTopButton";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Portfolio />
        <BackToTopButton />
      </ThemeProvider>
    </div>
  );
}

export default App;
