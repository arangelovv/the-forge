import ShieldIcon from "@mui/icons-material/Shield";
import Groups3Icon from "@mui/icons-material/Groups3";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import WhatshotIcon from "@mui/icons-material/Whatshot";

export const sidebarButtonsConfig = [
  {
    title: "Characters",
    buttonIcon: <Groups3Icon />,
  },
  {
    title: "Armor",
    buttonIcon: <ShieldIcon />,
    onClick: () => {
      console.warn("Armor button clicked");
    },
  },
  {
    title: "Offensive",
    buttonIcon: <WhatshotIcon />,
    onClick: () => {
      console.warn("Offensive button clicked");
    },
  },
  {
    title: "Prismatic",
    buttonIcon: <BlurOnIcon />,
    onClick: () => {
      console.warn("Prismatic button clicked");
    },
  },
  {
    title: "Defensive",
    buttonIcon: <HealthAndSafetyIcon />,
    onClick: () => {
      console.warn("Defensive button clicked");
    },
  },
];
