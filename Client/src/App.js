import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./contextApi";
import { Home } from "./Components/Home";
import { useState } from "react";

function App() {
  const [openMenu, setOpenMenu] = useState(false); // פותח וסוגר את ההאדר

  return (
    <div className="App">
      <nav>
        <button className="menu-btn" onClick={() => setOpenMenu(!openMenu)}>
          תפריט
        </button>
        <h2>{`text`}</h2>
      </nav>
      {openMenu && (
        <div className="menu" onClick={() => setOpenMenu(false)}>
          <div>A 101</div>
          <div>B 100</div>
          <div>C 102</div>
        </div>
      )}
      <Provider value={{ home: <p>Home</p> }}>
        {/* פרוביידר שמעביר קונטקסט */}
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
