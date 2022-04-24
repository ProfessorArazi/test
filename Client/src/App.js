import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./contextApi";
import { Home } from "./Components/Home";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_SERVER}/check`).then((res) =>
  //     res.json().then((data) => console.log(data))
  //   );
  // }, []);

  return (
    <div className="App">
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
