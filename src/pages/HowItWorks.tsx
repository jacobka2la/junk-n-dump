import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import processImage from "@/assets/junk-disposal-process.png";

const steps = [
  {
    number: "01",
    title: "Reach Out However You Want",
    description:
      "Call, text, or submit the quote form online. Whatever is easiest for you works. If you already know what needs to go, send over the details and we can start pricing the job right away.",
  },
  {
    number: "02",
    title: "Send Photos For a Faster Estimate",
    description:
      "Photos are optional, but they help a lot. If you attach a picture of the junk, we can better understand the load size, type of material, and scope of the cleanup before scheduling.",
  },
  {
    number: "03",
    title: "Get Your Free Estimate",
    description:
      "Once we have the details, we send back a straightforward estimate based on the amount of junk, the labor involved, and the type of material being hauled away.",
  },
  {
    number: "04",
    title: "Schedule The Pickup",
    description:
      "Pick the time that works best for you. Same-day service is available when our schedule allows, and we keep communication simple so you know what to expect.",
  },
  {
    number: "05",
    title: "We Load It and Haul It Away",
    description:
      "Once we arrive, we load up the junk, haul it away, and handle disposal so your space is left clear and ready to use again.",
  },
];

const HowItWorks = () => {
  return (
    <PageLayout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={processImage} alt="Transfer station for junk disposal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
        </div>
        <div className="relative section-container text-center max-w-3xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">How It Works</span>
            <h1 className="heading-display mb-6">A Simple Process From First Message to Final Pickup</h1>
            <p className="text-body-lg">
              We keep the process clear, fast, and easy so you can get your space cleaned out without a bunch of back and forth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.08}>
                <div className="card-elevated h-full">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mb-5">
                    {step.number}
                  </div>
                  <h3 className="heading-card mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="section-container text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="heading-section mb-6">Ready To Get Started?</h2>
            <p className="text-body-lg mb-8">
              Send us a few details about the job, and if you want, attach a photo so we can get you a free estimate faster.
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

export default HowItWorks;
