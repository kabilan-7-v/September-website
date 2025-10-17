import React from "react";
import Link from "next/link";

export default function JoinUsSection() {
  return (
    <section className="bg-black text-white py-32 text-center flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-10">
        Want to help us build <br className="hidden md:block" /> the future of safe AI?
      </h2>
      <Link
        href="/careers"
        className="bg-white text-black font-medium px-8 py-3 rounded-xl hover:bg-gray-100 transition"
      >
        Join us
      </Link>
    </section>
  );
}
