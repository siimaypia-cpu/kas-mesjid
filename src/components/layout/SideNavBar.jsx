import { navItems } from "../../data/navData";

const SideNavBar = () => {
  return (
    <nav className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface border-r border-outline-variant py-md px-sm z-50">
      <div className="flex items-center gap-sm mb-lg px-sm">
        <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
          <span className="material-symbols-outlined font-headline-md text-headline-md font-bold text-primary">mosque</span>
        </div>
        <div>
          <h1 className="font-headline-md text-headline-md font-bold text-primary leading-tight">SIAM Admin</h1>
          <p className="font-label-sm text-label-sm text-on-surface-variant">Masjid Management</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-xs">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={`flex items-center gap-sm px-md py-sm rounded-lg font-label-md text-label-md transition-colors ${
              item.active
                ? "bg-secondary-container text-on-secondary-container font-bold transform hover:scale-95 duration-150"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
            href={item.href}
          >
            <span
              className="material-symbols-outlined"
              style={item.active ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {item.icon}
            </span>
            {item.label}
          </a>
        ))}
      </div>

      <div className="mt-auto space-y-sm">
        <button className="w-full flex items-center justify-center gap-sm px-md py-sm rounded-full bg-primary text-on-primary font-label-md text-label-md hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined">volunteer_activism</span>
          Quick Donation
        </button>
        <a
          className="flex items-center gap-sm px-md py-sm rounded-lg text-error hover:bg-error-container transition-colors font-label-md text-label-md"
          href="#"
        >
          <span className="material-symbols-outlined">logout</span>
          Logout
        </a>
      </div>
    </nav>
  );
};

export default SideNavBar;
