import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";
import MyHistoryPage from "./pages/MyHistoryPage";
import DetailPage from "./pages/DetailPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/myhistory" element={<MyHistoryPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
