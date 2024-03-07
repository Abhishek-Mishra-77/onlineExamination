import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Instructions from "./components/instructions";
import Login from "./components/login ";
import TestScreen from "./components/testScreen";
import { useSelector } from "react-redux";

function App() {
  const states = useSelector((state) => state);
  console.log(states);
  return (
    <>
      {" "}
      <Routes>
        <Route
          path="/instructions"
          element={
            <>
              <div className="container-fluid bg-warning">
                <div className="text-white text-center p-2 fw-bold">
                  <h2>Online Assesment Tool</h2>
                </div>
              </div>
              <Instructions></Instructions>
            </>
          }
        ></Route>
        <Route
          path="/test"
          element={
            <>
              {" "}
              <div className="container-fluid bg-warning">
                <div className="text-white text-center p-2 fw-bold">
                  <h2>Online Assesment Tool</h2>
                </div>
              </div>
              <TestScreen></TestScreen>
            </>
          }
        ></Route>
        <Route path="*" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
