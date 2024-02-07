import SideNavItem from "./side-nav-item";

export function SideNav({ items, className }) {
  return (
    <nav className="space-y-2">
      {items.map((item) => {
        return <SideNavItem {...item} key={item.title} className={className} />;
      })}
    </nav>
  );
}
