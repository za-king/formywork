import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";
import MyProjectDetail from "./pages/MyProjectDetail";
import ProjectPage from "./pages/ProjectsPage";
import ProfilePage from "./pages/ProfilePage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="projectdetail/:id" element={<ProjectDetail/>} />
          <Route path="myprojectdetail/:id" element={<MyProjectDetail/>} />
          <Route path="project" element={<ProjectPage/>} />
          <Route path="profile" element={<ProfilePage/>} />
          <Route path="skills" element={<SkillsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
