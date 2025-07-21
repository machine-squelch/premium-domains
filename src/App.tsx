import Galaxy from "./components/Galaxy";

const domains = {
  premium: [
    { name: "starparty.ai", price: "$6K – $15K", tagline: "The Future of Kids’ Parties is AI." },
    { name: "wordcoin.ai", price: "$5K – $12K", tagline: "The Language of the Future is Currency." },
    { name: "yieldpunk.com", price: "$4K – $10K", tagline: "Punk Your Portfolio." },
    { name: "wallgraphics.art", price: "$1K – $3K", tagline: "Walls Deserve Personality." },
    { name: "skullform.com", price: "$1.5K – $5K", tagline: "Form Meets Death." },
  ],
  mid: [
    { name: "thinkazoo.com", price: "$1K – $4K", tagline: "Creative + AI synergy branding." },
    { name: "fridayify.com", price: "$1K – $3K", tagline: "SaaS-ready, fun and modern." },
    { name: "fridayified.com", price: "$1K – $3K", tagline: "Your week ends in style." },
    { name: "protonfield.com", price: "$800 – $2.5K", tagline: "Perfect for tech or energy startups." },
    { name: "honorism.com", price: "$700 – $2K", tagline: "Lifestyle or philosophy brand." },
    { name: "jaxencoin.com", price: "$700 – $2K", tagline: "Crypto token branding potential." },
  ],
  moderate: [
    { name: "agent-army.com", price: "$200 – $500" },
    { name: "spragent.com", price: "$200 – $500" },
    { name: "spongeagent.com", price: "$200 – $500" },
    { name: "operator512.com", price: "$200 – $500" },
    { name: "gearaz.com", price: "$200 – $500" },
    { name: "localbrandpro.com", price: "$200 – $500" },
    { name: "peopleorchestra.com", price: "$200 – $500" },
    { name: "otter-mate.com", price: "$200 – $500" },
    { name: "promptomato.com", price: "$200 – $500" },
    { name: "pre-prompt.com", price: "$200 – $500" },
  ]
};

function GlassCard({ domain, category }: { domain: any; category: string }) {
  const gradientClass =
    category === "premium"
      ? "from-premiumStart to-premiumEnd"
      : category === "mid"
      ? "from-midStart to-midEnd"
      : "from-modStart to-modEnd";

  return (
    <div className="border-animate relative backdrop-blur-xl bg-white/10 rounded-2xl p-6 text-center hover:scale-105 transition">
      <h3 className="text-2xl font-bold">{domain.name}</h3>
      {domain.tagline && <p className="text-gray-300 mt-2">{domain.tagline}</p>}
      <p className="text-lg font-semibold mt-3">{domain.price}</p>
      <a
        href={`mailto:Adam@thinkazoo.com?subject=${domain.name} Inquiry`}
        className={`inline-block mt-4 px-5 py-3 rounded-xl bg-gradient-to-r ${gradientClass} text-white font-bold`}
      >
        Inquire Now
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Galaxy Background */}
      <div className="absolute inset-0 z-0">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.6}
          saturation={0.8}
          hueShift={240}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-premiumStart to-premiumEnd text-transparent bg-clip-text">
            Premium Domains for Sale
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Secure your future brand with premium, mid-tier, and unique domain names.
          </p>
        </header>

        {/* Sections */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-pink-400">Premium Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.premium.map((d) => (
              <GlassCard key={d.name} domain={d} category="premium" />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">Mid-Tier Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.mid.map((d) => (
              <GlassCard key={d.name} domain={d} category="mid" />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-300">Other Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.moderate.map((d) => (
              <GlassCard key={d.name} domain={d} category="moderate" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}