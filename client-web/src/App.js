import MapForm from "./components/FormForMap";
import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";
import MyHistoryPage from "./pages/MyHistoryPage";
import DetailPage from "./pages/DetailPage";
import ChatPage from "./pages/ChatPage";
import { Route, Routes } from "react-router-dom";
import MapTracking from "./components/Map/MapTracking";
import MapTransaction from "./components/MapTransaction";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/form/map/:id" element={<MapTransaction />} />
        <Route path="/myhistory" element={<MyHistoryPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
