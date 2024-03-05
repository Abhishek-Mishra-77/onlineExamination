import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Instructions from "./components/instructions";
import Login from "./components/login ";
import TestScreen from "./components/testScreen";

function App() {
  return (
    <>
      {" "}
      <div className="container-fluid bg-warning">
        <div className="text-white text-center p-2 fw-bold">
          <h2>Online Assesment Tool</h2>
        </div>
      </div>
      <Routes>
        <Route
          path="/instructions"
          element={<Instructions></Instructions>}
        ></Route>
        <Route path="/test" element={<TestScreen></TestScreen>}></Route>
        <Route path="*" element={<Login></Login>}></Route>
      </Routes>
      {/* <Login></Login> */}
      {/* <Instructions></Instructions> */}
      {/* <TestScreen></TestScreen> */}
    </>
  );
}

export default App;
