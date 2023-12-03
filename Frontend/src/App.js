import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { useState } from "react";


function App() {
  const [suscribeClick, setSuscribeClick] = useState(false);  
  return (
    <>
      <Router>
        <NavBar suscribeClick={suscribeClick} setSuscribeClick={setSuscribeClick}/>

        <div className="pages">
          <Routes>
          <Route path="/" element={<Home setSuscribeClick={setSuscribeClick} suscribeClick={suscribeClick}/>} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
