import { Link, useLocation } from "react-router-dom";
import placeholder from "@/assets/junkndumplogo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Why Choose Us", path: "/why-choose-us" },
  { label: "Get a Quote", path: "/get-a-quote" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="hidden md:flex section-container items-center h-20">
        <Link to="/" className="flex items-center gap-3 mr-8">
          <img
  src={placeholder}
  alt="Junk N Dump"
  className="h-10 w-auto max-w-[140px] object-contain sm:h-14 sm:max-w-[220px]"
/>
          <div className="text-left leading-none">
            <span className="block text-lg font-bold font-body text-foreground tracking-[0.2em] uppercase">Junk N Dump</span>
            <span className="block text-xs text-muted-foreground uppercase tracking-[0.25em] mt-1">Junk Removal</span>
          </div>
        </Link>

        <div className="flex items-center justify-center flex-1 gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-center ${
                  isActive ? "text-primary bg-primary-light" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex items-center justify-center h-16 px-4">
          <Link to="/" className="flex items-center gap-3">
            <img
  src={placeholder}
  alt="Junk N Dump"
  className="h-8 w-auto max-w-[105px] object-contain"
/>
            <div className="leading-none">
              <span className="block text-base font-bold font-body text-foreground tracking-[0.15em] uppercase">Junk N Dump</span>
              <span className="block text-[10px] text-muted-foreground uppercase tracking-[0.2em] mt-1">Junk Removal</span>
            </div>
          </Link>
        </div>

        <div className="overflow-x-auto border-t border-border scrollbar-hide">
          <div className="flex items-center gap-1 px-4 py-2 w-max">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`whitespace-nowrap px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive ? "text-primary bg-primary-light" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
