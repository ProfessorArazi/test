import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./contextApi";
import { Home } from "./Components/Home";
// import { useState } from "react";

function App() {
  // const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App">
      {/* <nav>
        <button className="menu-btn" onClick={() => setOpenMenu(!openMenu)}>
          תפריט
        </button>
        <h2>{`text`}</h2>
      </nav>
      {openMenu && (
        <div className="menu" onClick={() => setOpenMenu(false)}>
          <div className={`${true && "active"}`}>A 101</div>
          <div className={`${true && "active"}`}>B 100</div>
          <div className={`${true && "active"}`}>C 102</div>
        </div>
      )} */}
      <Provider value={{ home: <p>Home</p> }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addroom" element={<p>addroom</p>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
