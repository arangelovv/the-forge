import { AppBar } from "@mui/material";
import AppBarOrganism from "./LibFacade/src/ui/organisms/AppBar.org";

function App() {
  return (
    <>
      <AppBarOrganism
        color="default"
        position="fixed"
        title="The Forge"
      ></AppBarOrganism>
    </>
  );
}

export default App;
