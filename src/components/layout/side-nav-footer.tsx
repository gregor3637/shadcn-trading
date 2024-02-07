import SideNavButton from "./side-nav-button";
import { useTheme } from "next-themes";

function SideNavFooter({ className }) {
  const { theme, setTheme } = useTheme();
  

  return (
    <div>
      <SideNavButton
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <SideNavButton.CollapseMenu className={className} isExpanded={true}/>
      </SideNavButton>
      <SideNavButton
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <SideNavButton.Theme theme={theme} className={className} />
      </SideNavButton>
    </div>
  );
}

export default SideNavFooter;
