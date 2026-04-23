import { useState, FormEvent } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import quoteBanner from "@/assets/junk-quote-banner.jpg";
import { toast } from "sonner";

const GetAQuote = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkgzebrb", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success("Your quote request has been submitted. We will get back to you as soon as possible.");
        form.reset();
      } else {
        toast.error("There was an issue submitting your request. Please try again.");
      }
    } catch {
      toast.error("A network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 text-base font-body bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200";
  const labelClasses = "block text-sm font-semibold font-body text-foreground mb-2";

  return (
    <PageLayout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={quoteBanner} alt="Get a quote for junk removal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
        </div>
        <div className="relative section-container text-center max-w-3xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">Free Estimates</span>
            <h1 className="heading-display mb-6">Get a Quote</h1>
            <p className="text-body-lg">
              Fill out the form below and tell us what needs to be removed. You can upload a photo if you want to help us price the job faster, but it is not required.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-2xl">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="card-elevated space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClasses}>Full Name *</label>
                  <input type="text" id="name" name="name" required maxLength={100} className={inputClasses} placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClasses}>Email Address</label>
                  <input type="email" id="email" name="email" maxLength={255} className={inputClasses} placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className={labelClasses}>Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required maxLength={20} className={inputClasses} placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label htmlFor="city" className={labelClasses}>City / Area *</label>
                  <input type="text" id="city" name="city" required maxLength={120} className={inputClasses} placeholder="Rochester, Sterling Heights, Troy..." />
                </div>
              </div>

              <div>
                <label htmlFor="address" className={labelClasses}>Pickup Address</label>
                <input type="text" id="address" name="address" maxLength={300} className={inputClasses} placeholder="123 Main Street, City, State, ZIP" />
              </div>

              <div>
                <label htmlFor="junkType" className={labelClasses}>What needs to be removed? *</label>
                <select id="junkType" name="junkType" required className={inputClasses}>
                  <option value="">Select a job type</option>
                  <option value="General Junk Removal">General Junk Removal</option>
                  <option value="Garage Cleanout">Garage Cleanout</option>
                  <option value="House Cleanout">House Cleanout</option>
                  <option value="Furniture Removal">Furniture Removal</option>
                  <option value="Appliance Removal">Appliance Removal</option>
                  <option value="Yard Waste">Yard Waste</option>
                  <option value="Light Construction Debris">Light Construction Debris</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="timeline" className={labelClasses}>When do you want it gone?</label>
                  <select id="timeline" name="timeline" className={inputClasses}>
                    <option value="">Select timing</option>
                    <option value="Same Day">Same Day</option>
                    <option value="Next Day">Next Day</option>
                    <option value="This Week">This Week</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contactPreference" className={labelClasses}>Preferred contact method</label>
                  <select id="contactPreference" name="contactPreference" className={inputClasses}>
                    <option value="">Select one</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Email">Email</option>
                    <option value="Any">Any of them</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="jobDetails" className={labelClasses}>Job Details *</label>
                <textarea id="jobDetails" name="jobDetails" required maxLength={1200} rows={5} className={inputClasses} placeholder="Tell us what you have, where it is located, and anything else we should know before the pickup." />
              </div>

              <div>
                <label htmlFor="photo" className={labelClasses}>Upload a photo (optional)</label>
                <input type="file" id="photo" name="photo" accept="image/*" className={inputClasses + " file:mr-4 file:rounded-md file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-foreground hover:file:bg-primary-dark"} />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark disabled:opacity-60 transition-colors duration-200 shadow-lg">
                {isSubmitting ? "Submitting..." : "Request Free Quote"}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                We will reach back out as soon as possible after you send your request.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default GetAQuote;
