import React from "react";

const values = [
  {
    id: "01",
    title: "Act for the global good.",
    description:
      "We strive to make decisions that maximize positive outcomes for humanity in the long run. This means we’re willing to be very bold in the actions we take to ensure our technology is a robustly positive force for good. We take seriously the task of safely guiding the world through a technological revolution that has the potential to change the course of human history, and are committed to helping make this transition go well.",
  },
  {
    id: "02",
    title: "Hold light and shade.",
    description:
      "AI has the potential to pose unprecedented risks to humanity if things go badly. It also has the potential to create unprecedented benefits for humanity if things go well. We need shade to understand and protect against the potential for bad outcomes. We need light to realize the good outcomes.",
  },
  {
    id: "03",
    title: "Be good to our users.",
    description:
      "At Anthropic, we define “users” broadly. Users are our customers, policy-makers, Ants, and anyone impacted by the technology we build or the actions we take. We cultivate generosity and kindness in our relationships with them.",
  },
  {
    id: "04",
    title: "Ignite a race to the top on safety.",
    description:
      "As a safety-first company, we believe that building reliable, trustworthy, and secure systems is our collective responsibility — and the market agrees.",
  },
];

export default function ValuesSection() {
  return (
    <section className=" text-gray-800 py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-8xl mx-auto grid md:grid-cols-[1fr_2fr]">
        {/* Left Heading */}
        <div className="">
          <h2 className="text-2xl font-semibold leading-snug mb-6">
            What we value <br /> and how we act
          </h2>
        </div>

        {/* Right Intro Paragraph */}
        <div className="text-gray-700 text-lg leading-relaxed">
          <p>
            Every day, we make critical decisions that inform our ability to
            achieve our mission. Shaping the future of AI and, in turn, the
            future of our world is a responsibility and a privilege. Our values
            guide how we work together, the decisions we make, and ultimately
            how we show up for each other and work toward our mission.
          </p>
          <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-16">
            {values.map((item) => (
              <div key={item.id}>
                <p className="text-gray-500 font-semibold text-sm">{item.id}</p>
                <h3 className="text-xl font-bold mt-1 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Values Grid */}

    </section>
  );
}
