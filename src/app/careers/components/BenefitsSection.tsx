import { Primary } from '@/constant/color';

export default function BenefitsSection() {
  return (
    <section 
      className="py-20 px-6"
      style={{ backgroundColor: Primary }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 font-serif text-gray-900">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Health & Wellness */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Health & Wellness
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Anthropic, we believe that supporting our employees is crucial to our collective success and wellbeing. That's why we offer a range of benefits to best support you and your family, now and in the future.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• Comprehensive health, dental, and vision insurance for you and your dependents</li>
              <li>• Inclusive fertility benefits via Carrot Fertility</li>
              <li>• 22 weeks of paid parental leave</li>
              <li>• Flexible paid time off and absence policies</li>
              <li>• Generous mental health support for you and your dependents</li>
            </ul>
          </div>

          {/* Compensation & Support */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Compensation & Support
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our goal is to foster an environment where you can thrive professionally while feeling confident that you and your loved ones are taken care of.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• Competitive salary and equity packages</li>
              <li>• Optional equity donation matching at a 1:1 ratio, up to 25% of your equity grant</li>
              <li>• Robust retirement plans and salary sacrifice programs with market competitive matching</li>
              <li>• Life and income protection plans</li>
            </ul>
          </div>

          {/* Additional Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Additional Benefits
            </h3>
            <ul className="space-y-3 text-gray-700 pt-12">
              <li>• $500/month flexible wellness and time saver stipend</li>
              <li>• Commuter benefits</li>
              <li>• Annual education stipend</li>
              <li>• Home office stipends</li>
              <li>• Relocation support for those moving for Anthropic</li>
              <li>• Daily meals and snacks in the office</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
