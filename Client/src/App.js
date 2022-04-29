import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./contextApi";
import { Home } from "./Components/Home";
import { useState } from "react";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_SERVER}/check`).then((res) =>
  //     res.json().then((data) => console.log(data))
  //   );
  // }, []);

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App">
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 20px",
        }}
      >
        <a href="#">something</a>
        <a href="#">something</a>
        <a href="#">something</a>
        <button onClick={() => setOpenMenu(!openMenu)}>Menu</button>
      </nav>
      {openMenu && (
        <div
          style={{ textAlign: "right", marginRight: "20px" }}
          onClick={() => setOpenMenu(false)}
        >
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      )}
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
