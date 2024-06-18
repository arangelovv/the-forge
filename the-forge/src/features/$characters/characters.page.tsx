import { SingleTabConfig } from "../../LibFacade/src/ui/models/tabs.config";
import AppBarOrganism from "../../LibFacade/src/ui/organisms/AppBar.org";
import TabsOrganism from "../../LibFacade/src/ui/organisms/Tabs.org";

export const tabsConfig: SingleTabConfig[] = [
  {
    label: "Forge",
    index: "1",
    iconPosition: "start",
  },
  {
    label: `Forged`,
    index: "2",
    iconPosition: "start",
  },
];

export default function CharactersPage() {
  return (
    <div>
      <AppBarOrganism
        position="static"
        borderStyle="rounded"
        color="#efefef"
        elevation="none"
      ></AppBarOrganism>
      <TabsOrganism tabsConfig={tabsConfig}></TabsOrganism>
    </div>
  );
}
