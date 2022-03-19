import react, { useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import "./App.css";
import Contact from "./Contact";
import Work from "./Work";

import Aos from "aos";
import "aos/dist/aos.css";
import Achivements from "./Achivements";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      delay: 300,
    });
  }, []);
  return (
    <react.StrictMode>
      <div className="main relative">
        <Header />
        <Hero />
        <Work />
        <Achivements />
        <Contact />
      </div>
    </react.StrictMode>
  );
}

export default App;
