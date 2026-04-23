import { Link } from "react-router-dom";
import { Home, Sofa, Refrigerator, Hammer, Trees, Trash2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import servicesImage from "@/assets/junk-removal-services.jpeg";

const offerings = [
  {
    icon: Home,
    title: "House, Basement, and Garage Cleanouts",
    description: "From one packed room to a whole-property cleanout, we help clear out unwanted junk, boxed clutter, old household items, and general mess left behind.",
  },
  {
    icon: Sofa,
    title: "Furniture Removal",
    description: "We haul away couches, tables, dressers, mattresses, bed frames, patio furniture, and other bulky items that are hard to move on your own.",
  },
  {
    icon: Refrigerator,
    title: "Appliance Pickup",
    description: "Old appliances like washers, dryers, refrigerators, stoves, and similar large items can be loaded up and removed as part of a single pickup or larger cleanout.",
  },
  {
    icon: Hammer,
    title: "Construction and Renovation Debris",
    description: "We can handle smaller loads of debris such as wood, drywall, trim, flooring, cabinets, and leftover material from home improvement work.",
  },
  {
    icon: Trees,
    title: "Yard Waste and Outdoor Junk",
    description: "Branches, bagged yard waste, outdoor clutter, broken equipment, and old backyard junk can all be cleared out to free up your space.",
  },
  {
    icon: Trash2,
    title: "General Junk Removal",
    description: "If it is taking up space, there is a good chance we can remove it. We handle a wide range of residential junk hauling jobs with straightforward service and clear communication.",
  },
];

const Services = () => {
  return (
    <PageLayout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicesImage} alt="Trailer loaded with junk for removal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
        </div>
        <div className="relative section-container text-center max-w-3xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">Our Services</span>
            <h1 className="heading-display mb-6">What We Remove</h1>
            <p className="text-body-lg">
              Junk N Dump handles a wide range of residential junk removal jobs across Oakland County and Macomb County. If it can be loaded safely and hauled away, there is a good chance we can clear it out.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <div className="card-elevated h-full flex flex-col text-center">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary-light flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="heading-card mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="section-container text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="heading-section mb-6">We’ll Handle What You Need Gone</h2>
            <p className="text-body-lg mb-8">
              If it is taking up space, we can take care of it. Reach out with a quick description or photo, and we will let you know how fast we can get it gone.
            </p>
            <Link to="/get-a-quote" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-colors duration-200 shadow-lg">
              Get a Free Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
