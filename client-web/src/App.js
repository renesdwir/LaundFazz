import { Route, Routes } from "react-router-dom";
import MapForm from "./components/FormForMap";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/map" element={<MapForm />} />
    </Routes>
  );
}

export default App;
