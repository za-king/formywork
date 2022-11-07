import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";
import MyProjectDetail from "./pages/MyProjectDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="projectdetail/:id" element={<ProjectDetail/>} />
          <Route path="myprojectdetail/:id" element={<MyProjectDetail/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
