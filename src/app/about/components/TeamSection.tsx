import React from "react";

export default function TeamSection() {
    return (
        <section className="bg-[#F9F7F2] py-20 px-6 md:px-16 lg:px-32 text-[#141413]">
            <div className="max-w-8xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12">
                {/* Left side */}
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">The Team</h2>

                </div>

                {/* Right side cards */}
                <div>
                    <h1 className="text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-12">
                        We conduct frontier AI research across a variety of modalities, and
                        explore novel and emerging safety research areas from
                        interpretability to RL from human feedback to policy and societal
                        impacts analysis.
                    </h1>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Research */}
                        <div>

                            <img
                                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
                                alt="Research team"
                                className="rounded-2xl mb-4 w-full h-52 object-cover"
                            />
                            <h3 className="text-lg font-semibold mb-2">Research</h3>
                            <p className="text-base text-gray-700 leading-relaxed">
                                We conduct frontier AI research across a variety of modalities, and
                                explore novel and emerging safety research areas from
                                interpretability to RL from human feedback to policy and societal
                                impacts analysis.
                            </p>
                            </div>

                            {/* Policy */}
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
                                    alt="Policy team"
                                    className="rounded-2xl mb-4 w-full h-52 object-cover"
                                />
                                <h3 className="text-lg font-semibold mb-2">Policy</h3>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    We think about the impacts of our work and strive to communicate what
                                    we’re seeing at the frontier to policymakers and civil society in the
                                    US and abroad to help promote safe and reliable AI.
                                </p>
                            </div>

                            {/* Engineering */}
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80"
                                    alt="Engineering team"
                                    className="rounded-2xl mb-4 w-full h-52 object-cover"
                                />
                                <h3 className="text-lg font-semibold mb-2">Engineering</h3>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    Our engineering team translates ideas into scalable systems and tools
                                    that advance research and ensure that safety and reliability principles
                                    are built into every product.
                                </p>
                            </div>

                            {/* Operations */}
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                                    alt="Operations team"
                                    className="rounded-2xl mb-4 w-full h-52 object-cover"
                                />
                                <h3 className="text-lg font-semibold mb-2">Operations</h3>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    Our operations and leadership teams keep the organization running
                                    smoothly, supporting collaboration and helping scale our mission
                                    responsibly.
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
