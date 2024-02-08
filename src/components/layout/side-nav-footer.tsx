import SideNavButton from "./side-nav-button";
import { useTheme } from "next-themes";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNavMenu,
  toggleMenu,
  setStatus,
} from "@/services/store/reducers/navMenuSlice";

function SideNavFooter({ className }) {
  const dispatch = useDispatch();
  const { theme, setTheme } = useTheme();
  const { isOpen } = useSelector(selectNavMenu);

  const handleToggle = () => {
    dispatch(setStatus(true));
    dispatch(toggleMenu());
    setTimeout(() => dispatch(setStatus(false)), 500);
  };

  return (
    <div className="flex flex-col gap-4">
      <SideNavButton onClick={handleToggle} className={className}>
        <SideNavButton.CollapseMenu isExpanded={isOpen} />
      </SideNavButton>
      <SideNavButton
        className={className}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <SideNavButton.Theme theme={theme} isExpanded={isOpen} />
      </SideNavButton>
    </div>
  );
}

export default SideNavFooter;
