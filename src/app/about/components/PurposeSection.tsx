import { lightbase } from "@/constant/color";
import React from "react";

export default function OurPurpose() {
  return (
    <section className=" py-20 px-6 md:px-16 lg:px-32 text-[#141413]"
    style={{ backgroundColor: lightbase }}
    >
      <div className="max-w-8xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12">
        {/* Left side title */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold">Our Purpose</h2>
        </div>

        {/* Right side main content */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12">
            We believe AI will have a vast impact on the world.{" "}
            <span className="block">
              Our company is dedicated to building systems that people can rely on
              and generating research about the opportunities and risks of AI.
            </span>
          </h1>

          {/* 4 columns below */}
          <div className="grid md:flex gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-2">We Build Safer Systems</h3>
              <p className="text-base leading-relaxed text-gray-700">
                We aim to build frontier AI systems that are reliable,
                interpretable, and steerable. We conduct research, develop, and
                apply a variety of safety techniques, and deploy the resulting
                systems via a set of partnerships and products.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Safety Is a Science</h3>
              <p className="text-base leading-relaxed text-gray-700">
                We treat AI safety as a systematic science, conducting research,
                applying it to our products, and sharing what we learn with the
                world along the way.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Interdisciplinary</h3>
              <p className="text-base leading-relaxed text-gray-700">
                We’re a collaborative team of researchers, engineers, policy
                experts, and business leaders who bring experience from many
                domains to our work.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                AI Companies are One Piece of a Big Puzzle
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                AI has the potential to fundamentally change how the world works.
                We see ourselves as part of a broader ecosystem of academia,
                nonprofits, and industry promoting safe AI development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full pb-10 mt-14">
         <div className="container mx-auto px-6">
            <div className="w-full border-t border-zinc-300"></div>
        </div>
      </div>
    </section>
  );
}
