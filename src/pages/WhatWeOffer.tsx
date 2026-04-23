import { Link } from "react-router-dom";
import { Home, Sofa, Refrigerator, Hammer, Trees, Trash2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import bgOffer from "@/assets/bg-offer.jpg";

const offerings = [
  {
    icon: Home,
    title: "House, basement, and garage cleanouts",
    description: "From one packed room to a whole-property cleanout, we help clear out unwanted junk, boxed clutter, old household items, and general mess left behind.",
  },
  {
    icon: Sofa,
    title: "Furniture removal",
    description: "We haul away couches, tables, dressers, mattresses, bed frames, patio furniture, and other bulky items that are hard to move on your own.",
  },
  {
    icon: Refrigerator,
    title: "Appliance pickup",
    description: "Old appliances like washers, dryers, refrigerators, stoves, and similar large items can be loaded up and removed as part of a single pickup or larger cleanout.",
  },
  {
    icon: Hammer,
    title: "Light construction and renovation debris",
    description: "We can handle smaller loads of debris such as wood, drywall, trim, flooring, cabinets, and leftover material from home improvement work that fits our hauling setup.",
  },
  {
    icon: Trees,
    title: "Yard waste and outdoor junk",
    description: "Branches, bagged yard waste, outdoor clutter, broken equipment, and old backyard junk can all be cleared out to free up your space.",
  },
  {
    icon: Trash2,
    title: "General trailer-load hauling",
    description: "Our 6x12 trailer with 4-foot walls gives us a solid setup for residential junk removal and flexible load sizes across many different types of jobs.",
  },
];

const Services = () => {
  return (
    <PageLayout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgOffer} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
        </div>
        <div className="relative section-container text-center max-w-3xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">Our Services</span>
            <h1 className="heading-display mb-6">What We Remove</h1>
            <p className="text-body-lg">
              Junk N Dump handles a wide range of residential junk removal jobs across Oakland County and Macomb County. If it can be loaded into our hauling setup, there is a good chance we can clear it out.
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
            <h2 className="heading-section mb-6">Not Sure If We Can Take It?</h2>
            <p className="text-body-lg mb-8">
              Send us a quick message with a photo and we can tell you if it fits the job. Free estimates make it easy to figure out pricing before booking.
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
