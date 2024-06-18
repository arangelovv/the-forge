import { Box } from "@mui/material";
import SidebarOrganism from "../../LibFacade/src/ui/organisms/SideBar.org";
import { sidebarButtonsConfig } from "./core.config";
import { Link, Outlet } from "react-router-dom";
import SidebarButtonAtom from "../../LibFacade/src/ui/atoms/SidebarButtonAtom";

export default function AppCore() {
  return (
    <div
      className="core-container"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <SidebarOrganism
        borderStyle="rounded"
        drawerColor="#efefef"
        drawerWidht="200px"
        position="right"
        elevation="none"
      >
        <div
          className="sidebar-container"
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <span
            className="app-title"
            style={{
              fontSize: "22px",
              lineHeight: "24px",
              fontFamily: "Roboto,Helvetica,arial,sans-serif",
              fontWeight: "550",
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingLeft: "8px",
            }}
          >
            The Forge
          </span>
          {sidebarButtonsConfig.map((button, index) => (
            <Box key={index} sx={{ width: "100%", marginBottom: "5px" }}>
              <Link to={"characters"} style={{ textDecoration: "none" }}>
                <SidebarButtonAtom
                  variant="text"
                  buttonText={button.title}
                  buttonIcon={button.buttonIcon}
                  onHoverColor="#e6e6e6"
                  borderStyle="rounded"
                  onClick={button.onClick}
                  //activeState={true}
                  //activeStateColor="#0000001a"
                ></SidebarButtonAtom>
              </Link>
            </Box>
          ))}
        </div>
      </SidebarOrganism>
      <div
        className="route-content"
        style={{ paddingLeft: "10px", width: "100%" }}
      >
        <Outlet />
      </div>
    </div>
  );
}
