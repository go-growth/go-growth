import React from "react";

/**
 * FlipCard Props
 */
type FlipCardProps = {
  highlight: string;
  description: string;
};

/**
 * FlipCard Component - Simple Card
 */
const FlipCard: React.FC<FlipCardProps> = ({ highlight, description }) => {
  return (
    <div className="h-[288px] md:h-[200px]">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 w-full border border-zinc-800 rounded-3xl p-6 md:px-10 md:py-0 flex flex-col justify-center items-center">
          <h4 className="text-center text-white text-3xl font-medium py-2 px-5 rounded-full tracking-wide mb-4">
            {highlight}
          </h4>
          <p className="text-base leading-relaxed text-zinc-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * Flipcard Section Component
 */
const Flipcard: React.FC = () => {
  return (
    <section className="relative max-w-7xl mx-auto w-full pt-16 pb-16">
      <div>
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-3">
            What&apos;s included in this power packed session:
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Transform your brand with our comprehensive audit and strategic
            roadmap
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <FlipCard
            highlight="Full-Scale Brand Audit"
            description="We&apos;ll look under the hood — from your website, messaging, social presence, funnel, ads, SEO, packaging, customer journey and more. You&apos;ll get honest, expert insights into what&apos;s working, what&apos;s broken, and what&apos;s missing."
          />
          <FlipCard
            highlight="Strategic Diagnosis"
            description="We&apos;ll identify the exact bottlenecks and blind spots holding your brand back — whether it&apos;s positioning, creative, conversion, or growth strategy. Think of it as a diagnostic scan for your business."
          />
          <FlipCard
            highlight="Growth Roadmap"
            description="You&apos;ll walk away with a clear, prioritized action plan — what to fix, what to double down on, and how to scale smartly. We tailor everything to your brand&apos;s stage, audience, and resources."
          />
          <FlipCard
            highlight="Hand-Holding Support"
            description="No vague tips. We guide you through what to do, why it matters, and how to implement it. Whether you&apos;re DIY-ing or working with a team, you&apos;ll have clarity on next steps."
          />
        </div>
      </div>
    </section>
  );
};

export default Flipcard;
