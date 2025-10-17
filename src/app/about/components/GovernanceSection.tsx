import React from "react";

export default function GovernanceSection() {
  return (
    <section className=" text-gray-800 py-24 px-6 md:px-16 lg:px-32 border-t border-gray-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Heading */}
        <div>
          <h2 className="text-3xl font-semibold">Governance</h2>
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Anthropic is a Public Benefit Corporation, whose purpose is the
            responsible development and maintenance of advanced AI for the
            long-term benefit of humanity. Our Board of Directors is elected by
            stockholders and our Long-Term Benefit Trust, as explained{" "}
            <a
              href="#"
              className="underline underline-offset-2 hover:text-gray-900"
            >
              here
            </a>
            . Current members of the Board and the Long-Term Benefit Trust
            (LTBT) are listed below.
          </p>

          <div>
            <h3 className="font-semibold text-lg mt-8">
              Anthropic Board of Directors
            </h3>
            <p className="mt-1">
              Dario Amodei, Daniela Amodei, Yasmin Razavi, Jay Kreps, and Reed
              Hastings.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mt-8">LTBT Trustees</h3>
            <p className="mt-1">
              Neil Buddy Shah, Kanika Bahl, Zach Robinson, and Richard Fontaine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
