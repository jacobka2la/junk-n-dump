import { Link } from "react-router-dom";
import { MessageSquare, Clock3, FileText, MapPinned, CheckCircle, GraduationCap } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import bgWhy from "@/assets/bg-why.jpg";

const strengths = [
  {
    icon: MessageSquare,
    title: "Easy communication",
    description: "You can call, text, or use the quote form online. We keep communication simple so you can reach us the way that makes the most sense for you.",
  },
  {
    icon: Clock3,
    title: "Fast turnaround",
    description: "We know most people want junk gone as soon as possible. That is why free estimates are quick and same-day service is available when scheduling opens up.",
  },
  {
    icon: FileText,
    title: "Straightforward pricing",
    description: "No one wants a confusing process. We keep quotes simple and based on the size of the load, the type of junk, and the work needed to remove it.",
  },
  {
    icon: MapPinned,
    title: "Focused local coverage",
    description: "By concentrating on Oakland County and Macomb County, we can stay responsive and serve the areas we actually know well.",
  },
  {
    icon: CheckCircle,
    title: "Built for real cleanouts",
    description: "Our 6x12 trailer with 4-foot walls gives us a practical setup for furniture, general junk, garage cleanouts, and many smaller debris jobs.",
  },
  {
    icon: GraduationCap,
    title: "Student-owned hustle",
    description: "Junk N Dump is local and student-owned, which means customers are supporting a young business that is trying to earn repeat work the right way.",
  },
];

const WhyChooseUs = () => {
  return (
    <PageLayout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgWhy} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
        </div>
        <div className="relative section-container text-center max-w-3xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">Why Us</span>
            <h1 className="heading-display mb-6">Why People Choose Junk N Dump</h1>
            <p className="text-body-lg">
              We are built around speed, local service, clear communication, and the kind of work ethic people actually want when they need junk gone.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <div className="card-elevated h-full text-center">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary-light flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="heading-card mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="section-container text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="heading-section mb-6">Get a Free Estimate</h2>
            <p className="text-body-lg mb-8">
              Tell us what needs to go, upload a photo if you want, and we will help you figure out the next move.
            </p>
            <Link to="/get-a-quote" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-colors duration-200 shadow-lg">
              Get a Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default WhyChooseUs;
