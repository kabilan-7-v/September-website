export default function ValuesSection() {
  const values = [
    {
      number: "01",
      title: "Act for the global good.",
      description: "We strive to make decisions that maximize positive outcomes for humanity in the long run. This means we're willing to be very bold in the actions we take to ensure our technology is a robustly positive force for good. We take seriously the task of safely guiding the world through a technological revolution that has the potential to change the course of human history, and are committed to helping make this transition go well."
    },
    {
      number: "02",
      title: "Hold light and shade.",
      description: "AI has the potential to pose unprecedented risks to humanity if things go badly. It also has the potential to create unprecedented benefits for humanity if things go well. We need shade to understand and protect against the potential for bad outcomes. We need light to realize the good outcomes."
    },
    {
      number: "03",
      title: "Be good to our users.",
      description: "At Anthropic, we define 'users' broadly. Users are our customers, policy-makers, Ants, and anyone impacted by the technology we build or the actions we take. We cultivate generosity and kindness in all our interactions—with each other, with our users, and with the world at large. Going above and beyond for each other, our customers, and all of the people affected by our technology is meeting expectations."
    },
    {
      number: "04",
      title: "Ignite a race to the top on safety.",
      description: "As a safety-first company, we believe that building reliable, trustworthy, and secure systems is our collective responsibility—and the market agrees. We work to inspire a 'race to the top' dynamic where AI developers must compete to develop the most safe and secure AI systems. We want to constantly set the industry bar for AI safety and security and drive others to do the same."
    },
    {
      number: "05",
      title: "Do the simple thing that works.",
      description: "We take an empirical approach to problems and care about the size of our impact and not the sophistication of our methods. This doesn't mean we throw together haphazard solutions. It means we try to identify the simplest solution and iterate from there. We don't invent a spaceship if all we need is a bicycle."
    },
    {
      number: "06",
      title: "Be helpful, honest, and harmless.",
      description: "Anthropic is a high-trust, low-ego organization. We communicate kindly and directly, assuming good intentions even in disagreement. We are thoughtful about our actions, avoiding harm and repairing relationships when needed. Everyone contributes, regardless of role. If something urgently needs to be done, the right person to do it is probably you!"
    },
    {
      number: "07",
      title: "Put the mission first.",
      description: "At the end of the day, the mission is what we're all here for. It gives us a shared purpose and allows us to act swiftly together, rather than being pulled in multiple directions by competing goals. It engenders trust and collaboration and is the final arbiter in our decisions. When it comes to our mission, none of us are bystanders. We each take personal ownership over making our mission successful."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-gray-900">
          What we value and how we act
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
          Every day, we make critical decisions that inform our ability to achieve our mission. Shaping the future of AI and, in turn, the future of our world is a responsibility and a privilege. Our values guide how we work together, the decisions we make, and ultimately how we show up for each other and work toward our mission.
        </p>
      </div>

      <div className="space-y-12">
        {values.map((value, index) => (
          <div key={index} className="flex gap-8 border-b border-gray-200 pb-12 last:border-b-0">
            <div className="flex-shrink-0">
              <span className="text-5xl font-bold text-gray-300">
                {value.number}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                {value.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
