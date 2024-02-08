import SideNavNavigation from "./side-nav-navigation";
import SideNavFooter from "./side-nav-footer";

export function SideNav({ items, className }) {
  return (
    <div className=" flex justify-between flex-col h-full py-10 ">
      <nav>
        {items.map((item) => {
          return (
            <SideNavNavigation
              {...item}
              key={item.title}
              className={className}
            />
          );
        })}
      </nav>
      <SideNavFooter className={className} />
    </div>
  );
}
