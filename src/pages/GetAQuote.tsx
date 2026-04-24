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
      const response = await fetch("https://formspree.io/f/xgorrboy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Quote sent. We’ll hit you back soon.");
        form.reset();
      } else {
        console.log(data);
        toast.error("Upload failed. Try again or send without photo.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Network error. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 text-base bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30";

  const labelClasses = "block text-sm font-semibold mb-2";

  return (
    <PageLayout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={quoteBanner} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative section-container text-center max-w-3xl">
          <AnimatedSection>
            <h1 className="heading-display mb-4">Get a Quote</h1>
            <p>
              Send us details + photos and we’ll get you a price fast.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 rounded-xl shadow"
          >
            <input type="hidden" name="_subject" value="New Junk Quote" />

            <div>
              <label className={labelClasses}>Name *</label>
              <input name="name" required className={inputClasses} />
            </div>

            <div>
              <label className={labelClasses}>Phone *</label>
              <input name="phone" required className={inputClasses} />
            </div>

            <div>
              <label className={labelClasses}>Email</label>
              <input name="email" className={inputClasses} />
            </div>

            <div>
              <label className={labelClasses}>City *</label>
              <input name="city" required className={inputClasses} />
            </div>

            <div>
              <label className={labelClasses}>What needs to be removed? *</label>
              <textarea
                name="jobDetails"
                required
                rows={4}
                className={inputClasses}
              />
            </div>

            <div>
              <label className={labelClasses}>Upload Photo (optional)</label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                className="w-full"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold"
            >
              {isSubmitting ? "Sending..." : "Get My Quote"}
            </button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

export default GetAQuote;