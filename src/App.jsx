import { getProjects } from "./features/projects/projectsSlice";
import { useProjectLoad } from "./hooks/useProjectLoad";
import AppLayout from "./ui/AppLayout";

function App() {
  useProjectLoad(getProjects);

  return <AppLayout />;
}

export default App;
