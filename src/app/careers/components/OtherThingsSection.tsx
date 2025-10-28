import Link from 'next/link';

export default function OtherThingsSection() {
  const faqs = [
    {
      title: "Engineers here do lots of research, and researchers do lots of engineering",
      content: (
        <>
          <p>
            While there's historically been a division between engineering and research in machine learning, we think that boundary has dissolved with the advent of large models. The distribution of candidates we interview is strongly bimodal in both engineering and research experience however, and we have necessarily tailored our interview structure to that.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>If you've an engineering background, please apply as an engineer. You'll perform much better in the interviews, and if you join you'll have as much input to Anthropic's direction and interests as anyone else.</li>
            <li>As evidence towards this: all of our papers have engineers as authors, and often as first author. Research and engineering hires all share a single title — 'Member of Technical Staff'.</li>
          </ul>
        </>
      )
    },
    {
      title: "We value direct evidence of ability",
      content: "If you've done interesting independent research, written an insightful blog post, or made substantial contributions to open-source software, put that at the top of your resume!"
    },
    {
      title: "Feedback",
      content: "We do not provide feedback on resumes or interviews."
    },
    {
      title: "Visas",
      content: "Anthropic sponsors visas! We aren't able to sponsor them for every role and every candidate; operations roles are especially difficult to support. But if we make you an offer, we will make every effort to get you into the United States, and we retain an immigration lawyer to help with this."
    },
    {
      title: "Green cards",
      content: "Once you're eligible, we're also keen to sponsor green cards!"
    },
    {
      title: "Educational backgrounds and experience vary across our team and across our roles",
      content: "We do not require PhDs or previous ML experience — About half of Anthropic technical staff have a PhD of some sort; about half had prior experience in ML. We have several brilliant colleagues who never went to college."
    },
    {
      title: "Remote interviewing",
      content: "All our interviews are conducted over Google Meet. We prefer PST office hours, but we can be flexible if that's difficult for you."
    },
    {
      title: "Re-applying",
      content: "Similarly, if interviews don't work out this time, you're welcome to re-apply after 12 months, and earlier if something materially changes about your experience or skills."
    },
    {
      title: "Remote work",
      content: "Anthropic staff all come to the office regularly. Most staff live in the Bay Area, though a few live further away and come in for one week a month. We also understand that moving can take time, so as a transitional phase some folks start while fully remote."
    },
    {
      title: "Offer timing",
      content: "If we make an offer, we're happy to give you time to think about it and finish up any other interview processes you're going through."
    },
    {
      title: "Candidate Privacy Policy",
      content: (
        <div className="space-y-2">
          <div><a href="#" className="text-blue-600 hover:underline">US Candidate Privacy Policy</a></div>
          <div><a href="#" className="text-blue-600 hover:underline">UK, EU, CH, and JP Employee and Candidate Privacy Policy</a></div>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><a href="#" className="text-blue-600 hover:underline">UK, EU, CH, and JP Employee and Candidate Privacy Policy (in French)</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">UK, EU, CH, and JP Employee and Candidate Privacy Policy (in Japanese)</a></li>
          </ul>
        </div>
      )
    },
    {
      title: "Internships",
      content: "We do not offer internships."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 font-serif text-gray-900">
        Other Things
      </h2>

      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
              {faq.title}
            </h3>
            <div className="text-lg text-gray-700 leading-relaxed">
              {typeof faq.content === 'string' ? <p>{faq.content}</p> : faq.content}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 pt-16 border-t border-gray-300">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Guidance on Candidates' AI Usage
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Learn about <a href="#" className="text-blue-600 hover:underline">our policy</a> for using AI in our application process.
          </p>
          
          <div className="mt-12">
            <p className="text-xl md:text-2xl font-semibold mb-6 text-gray-900">
              Want to help us build the future of safe AI?
            </p>
            <Link 
              href="/jobs"
              className="inline-block px-8 py-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-lg"
            >
              See open roles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
