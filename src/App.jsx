import CommonRoute from "./components/CommonRoute";
import HomePage from "./Pages/HomePage";
import Discover from "./Pages/Discover";
import Spaces from "./Pages/Spaces";
import Routine from "./Pages/Routine";
import Consult from "./Pages/Consult";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CommonRoute>
            <HomePage />
          </CommonRoute>
        }
      />
      <Route
        path="/discover"
        element={
          <CommonRoute>
            <Discover />
          </CommonRoute>
        }
      />

      <Route
        path="/spaces"
        element={
          <CommonRoute>
            <Spaces />
          </CommonRoute>
        }
      />

      <Route
        path="/routine"
        element={
          <CommonRoute>
            <Routine />
          </CommonRoute>
        }
      />

      <Route
        path="/consult"
        element={
          <CommonRoute>
            <Consult />
          </CommonRoute>
        }
      />
    </Routes>
  );
}
export default App;
