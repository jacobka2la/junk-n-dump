import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import bgProcess from "@/assets/bg-process.jpg";

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
      "Photos are optional, but they help a lot. If you attach a picture of the junk, we can better understand the load size, the type of material, and how big the cleanup will be before scheduling.",
  },
  {
    number: "03",
    title: "Get Your Free Estimate",
    description:
      "Once we have the details, we send back a straightforward estimate based on the amount of junk, the labor involved, and the type of material being hauled to the transfer station.",
  },
  {
    number: "04",
    title: "Schedule The Pickup",
    description:
      "Pick the time that works best for you. Same-day service is available when our schedule allows, and we keep communication simple so you know what to expect.",
  },
  {
    number: "05",
    title: "We Load It, Haul It, and Dump It",
    description:
      "Once we arrive, we load up the junk, haul it away, and dispose of the load at a transfer station so your space is left clear and handled.",
  },
];

const Process = () => {
  return (
    <PageLayout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgProcess} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
        </div>
        <div className="relative section-container text-center max-w-3xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">How It Works</span>
            <h1 className="heading-display mb-6">Our Junk Removal Process</h1>
            <p className="text-body-lg">
              We keep the process simple so you can get a quote fast, schedule easily, and get the junk gone without extra hassle.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />
            <div className="flex flex-col gap-12 md:gap-16">
              {steps.map((step, index) => (
                <AnimatedSection key={step.number} delay={index * 0.1}>
                  <div className="flex gap-6 md:gap-8 items-start">
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg md:text-xl shadow-lg">
                      {step.number}
                    </div>
                    <div className="pt-1 md:pt-3">
                      <h3 className="heading-card mb-3">{step.title}</h3>
                      <p className="text-body">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="section-container text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="heading-section mb-6">Ready to Clear It Out?</h2>
            <p className="text-body-lg mb-8">
              Send over the job details and we will get back to you with a free estimate as fast as we can.
            </p>
            <Link to="/get-a-quote" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-colors duration-200 shadow-lg">
              Request a Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Process;
