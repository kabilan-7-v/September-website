import { Primary } from '@/constant/color';

export default function TechnicalInterviewsSection() {
  return (
    <section 
      className="py-20 px-6"
      style={{ backgroundColor: Primary }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-gray-900">
          Technical Interviews
        </h2>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            The novel challenges we think about at Anthropic demand diverse expertise and perspectives. Our interview process is designed to identify thoughtful candidates who bring unique strengths to our multidisciplinary team. If you think this may describe you, we'd love to hear from you regardless of your background or experience.
          </p>

          <p>
            One of the most common questions we get is about whether it is worth applying to work at Anthropic if you have not worked on modern machine learning systems in the past. <strong>Yes!</strong> For some roles, ML experience is expected, but many technical staff have arrived at Anthropic with no machine learning experience. If you aren't sure about the ML experience needed for your role, ask your recruiter.
          </p>

          <p>
            We use shared environments like Colab and Replit for our programming-focused interviews. We'll be very interested in how you think through each problem and analyze the tradeoffs between possible approaches, and we'll also expect you to write, run, and debug your solutions. You'll be allowed to look things up in documentation or on the web, just like you usually can (which is why we'll ask you to share your screen throughout each interview); but it's still important to be familiar with basic syntax, standard libraries, and common idioms in the language you're interviewing in, so that looking things up doesn't consume too much time. Your interview process will also include non-technical questions about your experience and what motivates you, and, of course, you'll have time to ask us about Anthropic! We can't wait to meet you.
          </p>
        </div>
      </div>
    </section>
  );
}
