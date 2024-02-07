import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Container from "@/components/ui/container";
import { NavItems } from "@/components/constants/side-nav";
import SideNavItem from "./side-nav-item";

const Header = () => {
  return (
    <header className="block sm:hidden  py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] ">
                <nav className="flex flex-col gap-4 mt-10">
                  {NavItems.map((item) => (
                    <SideNavItem
                      {...item}
                      key={item.title}
                      className="block px-2 py-1 text-lg"
                    />
                  ))}
                </nav>
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
