import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSideBar.jsx";

function App() {
  const [] = useState({})
  return (
    <main className="h-screen my-8 flex gap-8  ">
      <ProjectsSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
