import { topNavLinks } from "../../data/navData";

const TopAppBar = ({ onSearch }) => {
  return (
    <header className="hidden md:flex justify-between items-center w-full h-16 px-lg bg-surface border-b border-outline-variant sticky top-0 z-40 shadow-sm">
      <div className="flex items-center gap-md">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
            search
          </span>
          <input
            className="pl-10 pr-4 py-2 bg-surface-container border border-outline-variant rounded-full text-body-md focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 w-64 transition-all"
            placeholder="Search..."
            type="text"
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>
        <nav className="flex gap-lg">
          {topNavLinks.map((link) => (
            <a
              key={link.label}
              className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-all"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-md">
        <div className="px-sm py-xs bg-tertiary-container text-on-tertiary-container rounded-full font-label-sm text-label-sm flex items-center gap-xs">
          <span className="material-symbols-outlined text-sm">schedule</span>
          Next Prayer: 12:15
        </div>
        <button className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
          <img
            alt="Admin User Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPLzb7HTezmTVwA_YZ0Q8H3cD9wlkoGDzR0Kwht9iTcWeeBY021XbYPuQDgjOfe45_cTjv7jCBNVd-aeWbBzmSG1GOO5hP5y2ts9OK1quFrrmu4hZrqeljzNF6gINZMhBvT4YHQ_jPP6fsqm1WIIx9WlxqwH4nC-NDe0xK51lrLQ4cip4hz6jpZgwEa2er5ojRVr-Gs2K_HRnkVlfyp93lB9OytPiZRnzVV9EETPYf4l5OzZeG6D7w"
          />
        </div>
      </div>
    </header>
  );
};

export default TopAppBar;
