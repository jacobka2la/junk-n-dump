import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold font-body text-primary-foreground mb-4 uppercase tracking-[0.15em]">Junk N Dump</h3>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs mx-auto md:mx-0">
              Local, student-owned junk removal serving Oakland County and Macomb County with same-day availability, free estimates, and straightforward hauling.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "How It Works", path: "/how-it-works" },
                { label: "Why Choose Us", path: "/why-choose-us" },
                { label: "Get a Quote", path: "/get-a-quote" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm opacity-60 hover:opacity-100 transition-opacity duration-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-sm opacity-75 leading-relaxed">
              <p>(248) 387-9026</p>
              <p>hello@junkndumpmi.com</p>
              <p>Oakland County & Macomb County</p>
              <p>Free estimates and same-day service available</p>
            </div>
            <Link to="/get-a-quote" className="inline-block mt-4 px-6 py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-colors duration-200">
              Get a Free Quote
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm opacity-40">© {new Date().getFullYear()} Junk N Dump. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
