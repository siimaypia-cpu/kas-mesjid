import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import ActivitiesKajian from "./pages/ActivitiesKajian";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<ActivitiesKajian />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
