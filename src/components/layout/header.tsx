import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Container from "@/components/ui/container";
import { NavItems } from "@/components/constants/side-nav";
import SideNavNavigation from "./side-nav-navigation";
import { useTheme } from "next-themes";
import SideNavButton from "./side-nav-button";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="block sm:hidden  py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] flex flex-col  justify-between h-full"
              >
                <nav className="flex flex-col gap-4 mt-10">
                  {NavItems.map((item) => (
                    <SideNavNavigation
                      {...item}
                      key={item.title}
                      className="block px-2 py-1 text-lg"
                    />
                  ))}
                </nav>
                <SideNavButton
                  className={"className"}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <SideNavButton.Theme theme={theme} isExpanded={true} />
                </SideNavButton>
              </SheetContent>
            </Sheet>
            <a href="" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">SITE NAME</h1>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
