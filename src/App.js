import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Slides from "./components/Slides";

function App() {
  const slideInfo = [
    {
      title: "title 0",
      text: "text 0",
    },
    {
      title: "title 1",
      text: "text 1",
    },
    {
      title: "title 2",
      text: "text 2",
    },
    {
      title: "title 3",
      text: "text 3",
    },
  ];

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : prevTheme === "dark" ? "light" : "light"
    );
  };

  return (
    <div className="App" data-theme={theme}>
      <Header toggleTheme={toggleTheme}></Header>
      <Slides slides={slideInfo}></Slides>
    </div>
  );
}

export default App;
