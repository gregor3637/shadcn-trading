import SideNavNavigation from "./side-nav-navigation";
import SideNavFooter from "./side-nav-footer";

export function SideNav({ items, className }) {
  return (
    <div className="space-y-2 flex justify-between flex-col h-full">
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
