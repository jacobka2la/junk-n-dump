import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Truck, Clock3, Camera, MapPinned, ShieldCheck, Recycle, House, Wrench } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import cityBg from "@/assets/city-bg.jpg";
import patternBg from "@/assets/pattern-bg.jpg";

const coreValues = [
  { icon: Truck, title: "Reliable hauling", description: "We show up ready to load, haul, and clear out junk without wasting your whole day." },
  { icon: Clock3, title: "Fast response", description: "Same-day availability and quick communication help you get the junk gone when you need it gone." },
  { icon: Camera, title: "Easy estimates", description: "Customers can send photos with their quote request to make pricing faster and more accurate." },
  { icon: MapPinned, title: "Local service", description: "We focus on Oakland County and Macomb County so you are working with a crew that actually knows the area." },
];

const credibilityItems = [
  { icon: House, title: "Homes & garages" },
  { icon: Wrench, title: "Light debris hauling" },
  { icon: ShieldCheck, title: "Student-owned" },
  { icon: Recycle, title: "Transfer station disposal" },
];

const Home = () => {
  return (
    <PageLayout>
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={cityBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/65 to-background" />
        </div>
        <div className="relative section-container text-center py-28 md:py-40 lg:py-48">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <span className="badge-accent mb-6 inline-block">Local • Student-Owned • Same-Day</span>
            <h1 className="font-heading max-w-5xl mx-auto mb-6 text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-none tracking-tight text-foreground">
              Junk Removal That Is Fast, Straightforward, and Built for Real Cleanouts
            </h1>
            <p className="text-body-lg max-w-3xl mx-auto mb-10">
              Junk N Dump helps homeowners, renters, landlords, and small contractors clear out unwanted junk across Oakland and Macomb County. We offer free estimates and make it easy to send photos so you can get a quote faster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-colors duration-200 shadow-lg">
                View Services
              </Link>
              <Link to="/get-a-quote" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                Get a Free Quote
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {credibilityItems.map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }} className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 mb-3 rounded-full bg-primary-light/50 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container text-center max-w-4xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">About Junk N Dump</span>
            <h2 className="heading-section mb-8">Who We Are</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-body mb-6">
              Junk N Dump is a local, student-owned junk removal business built around one simple goal: make it easy for people to get rid of unwanted junk without dealing with a long, annoying process. Whether it is an old couch, garage junk, yard debris, or a full cleanout, we keep things simple and move fast.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-body mb-6">
We serve Oakland and Macomb County with fast, reliable junk removal. From pickup to proper disposal, we take care of the entire process so you can enjoy a clean, stress-free space.            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-body">
              Our focus is straightforward service, fair communication, and showing up ready to work. If you want a free estimate, same-day availability when possible, and the option to send a photo of your junk before booking, Junk N Dump is built for exactly that.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="section-container text-center">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">Why People Call Us</span>
            <h2 className="heading-section mb-12">What Sets Us Apart</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <AnimatedSection key={value.title} delay={0.1 + index * 0.08}>
                <div className="card-elevated text-center h-full">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary-light flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="heading-card mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={patternBg} alt="" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative section-container text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="heading-section mb-6">Need Junk Gone Fast?</h2>
            <p className="text-body-lg mb-8">
              Send over a few details, attach a photo if you want, and we will get back to you with a free estimate. Same-day service is available when scheduling allows.
            </p>
            <Link to="/get-a-quote" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-colors duration-200 shadow-lg">
              Request a Free Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
