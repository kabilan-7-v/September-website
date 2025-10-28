export default function ArticleContent() {
  return (
    <article className="max-w-3xl mx-auto text-gray-800 space-y-8 py-12">
      {/* Introduction */}
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Today we are publishing a significant update to our Responsible Scaling Policy (RSP), the risk governance framework we use to mitigate potential catastrophic risks from frontier AI systems. This update introduces a more flexible and nuanced approach to assessing and managing AI risks while maintaining our commitment not to train or deploy models unless we have implemented adequate safeguards. Key improvements include new capability thresholds to indicate when we will upgrade our safeguards, refined processes for evaluating model capabilities and the adequacy of our safeguards (inspired by safety case methodologies), and new measures for internal governance and external input. By learning from our implementation experiences and drawing on risk management practices used in other high-consequence industries, we aim to better prepare for the rapid pace of AI advancement.
        </p>
      </section>

      {/* The promise and challenge of advanced AI */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold font-serif text-gray-900">
          The promise and challenge of advanced AI
        </h2>
        <p className="text-lg leading-relaxed">
          As frontier AI models advance, they have the potential to bring about transformative benefits for our society and economy. AI could accelerate scientific discoveries, revolutionize healthcare, enhance our education system, and create entirely new domains for human creativity and innovation. However, frontier AI systems also present new challenges and risks that warrant careful study and effective safeguards.
        </p>
        <p className="text-lg leading-relaxed">
          In September 2023, we released our Responsible Scaling Policy, a framework for managing risks from increasingly capable AI systems. After a year of implementation and learning, we are now sharing a significantly updated version that reflects practical insights and accounts for advancing technological capabilities.
        </p>
        <p className="text-lg leading-relaxed">
          Although this policy focuses on catastrophic risks like the categories listed below, they are not the only risks that we monitor and prepare for. Our Usage Policy sets forth our standards for the use of our products, including rules that prohibit using our models to spread misinformation, incite violence or hateful behavior, or engage in fraudulent or abusive practices. We continually refine our technical measures for enforcing our trust and safety standards at scale. Further, we conduct research to understand the broader societal impacts of our models. Our Responsible Scaling Policy complements our work in these areas, contributing to our understanding of current and potential risks.
        </p>
      </section>

      {/* A framework for proportional safeguards */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold font-serif text-gray-900">
          A framework for proportional safeguards
        </h2>
        <p className="text-lg leading-relaxed">
          As before, we maintain our core commitment: we will not train or deploy models unless we have implemented safety and security measures that keep risks below acceptable levels. Our RSP is based on the principle of proportional protection: safeguards that scale with potential risks. To do this, we use AI Safety Level Standards (ASL Standards), graduated sets of safety and security measures that become more stringent as model capabilities increase. Inspired by Biosafety Levels, these begin at ASL-1 for models that have very basic capabilities (for example, chess-playing bots) and progress through ASL-2, ASL-3, and so on.
        </p>
        <p className="text-lg leading-relaxed">
          In our updated policy, we have refined our methodology for assessing specific capabilities (and their associated risks) and implementing proportional safety and security measures. Our updated framework has two key components:
        </p>
        <ul className="list-none space-y-3 pl-6">
          <li className="text-lg leading-relaxed">
            <strong>Capability Thresholds:</strong> Specific AI abilities that, if reached, would require stronger safeguards than our current baseline.
          </li>
          <li className="text-lg leading-relaxed">
            <strong>Required Safeguards:</strong> The specific ASL Standards needed to mitigate risks once a Capability Threshold has been reached.
          </li>
        </ul>
        <p className="text-lg leading-relaxed">
          At present, all of our models operate under ASL-2 Standards, which reflect current industry best practices. Our updated policy defines two key Capability Thresholds that would require upgraded safeguards:
        </p>
        <ul className="list-none space-y-4 pl-6">
          <li className="text-lg leading-relaxed">
            <strong>Autonomous AI Research and Development:</strong> If a model can independently conduct complex AI research tasks typically requiring human expertise—potentially significantly accelerating AI development in an unpredictable way—we require elevated security standards (potentially ASL-4 or higher standards) and additional safety assurances to avoid a situation where development outpaces our ability to address emerging risks.
          </li>
          <li className="text-lg leading-relaxed">
            <strong>Chemical, Biological, Radiological, and Nuclear (CBRN) weapons:</strong> If a model can meaningfully assist someone with a basic technical background in creating or deploying CBRN weapons, we require enhanced security and deployment safeguards (ASL-3 standards).
          </li>
        </ul>
        <p className="text-lg leading-relaxed">
          ASL-3 safeguards involve enhanced security measures and deployment controls. On the security side, this will include internal access controls and more robust protection of model weights. For deployment risks, we plan to implement a multi-layered approach to prevent misuse, including real-time and asynchronous monitoring, rapid response protocols, and thorough pre-deployment red teaming.
        </p>
      </section>

      {/* Implementation and oversight */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold font-serif text-gray-900">
          Implementation and oversight
        </h2>
        <p className="text-lg leading-relaxed">
          To contribute to effective implementation of the policy, we have established:
        </p>
        <ul className="list-none space-y-4 pl-6">
          <li className="text-lg leading-relaxed">
            <strong>Capability assessments:</strong> Routine model evaluations based on our Capability Thresholds to determine whether our current safeguards are still appropriate. (Summaries of past assessments are available here.)
          </li>
          <li className="text-lg leading-relaxed">
            <strong>Safeguard assessments:</strong> Routine evaluation of the effectiveness of our security and deployment safety measures to assess whether we have met the Required Safeguards bar. (Summaries of these decisions will be available here.)
          </li>
          <li className="text-lg leading-relaxed">
            <strong>Documentation and decision-making:</strong> Processes for documenting the capability and safeguard assessments, inspired by procedures (such as safety case methodologies) common in high-reliability industries.
          </li>
          <li className="text-lg leading-relaxed">
            <strong>Measures for internal governance and external input:</strong> Our assessment methodology will be backed up by internal stress-testing in addition to our existing internal reporting process for safety issues. We are also soliciting external expert feedback on our methodologies.<sup>1</sup>
          </li>
        </ul>
      </section>

      {/* Learning from experience */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold font-serif text-gray-900">
          Learning from experience
        </h2>
        <p className="text-lg leading-relaxed">
          We have learned a lot in our first year with the previous RSP in effect, and are using this update as an opportunity to reflect on what has worked well and what makes sense to update in the policy. As part of this, we conducted our first review of how well we adhered to the framework and identified a small number of instances where we fell short of meeting the full letter of its requirements. These included procedural issues such as completing a set of evaluations three days later than scheduled or a lack of clarity on how and where we should note any changes to our placeholder evaluations. We also flagged some evaluations where we may have been able to elicit slightly better model performance through implementing standard techniques (such as chain-of-thought or best-of-N).
        </p>
        <p className="text-lg leading-relaxed">
          In all cases, we found these instances posed minimal risk to the safety of our models. We used the additional three days to refine and improve our evaluations; the different set of evaluations we used provided a more accurate assessment than the placeholder evaluations; and our evaluation methodology still showed we were sufficiently far from the thresholds. From this, we learned two valuable lessons to incorporate into our updated framework: we needed to incorporate more flexibility into our policies, and we needed to improve our process for tracking compliance with the RSP. You can read more here.
        </p>
        <p className="text-lg leading-relaxed">
          Since we first released the RSP a year ago, our goal has been to offer an example of a framework that others might draw inspiration from when crafting their own AI risk governance policies. We hope that proactively sharing our experiences implementing our own policy will help other companies in implementing their own risk management frameworks and contribute to the establishment of best practices across the AI ecosystem.
        </p>
      </section>

      {/* Looking ahead */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold font-serif text-gray-900">
          Looking ahead
        </h2>
        <p className="text-lg leading-relaxed">
          The frontier of AI is advancing rapidly, making it challenging to anticipate what safety measures will be appropriate for future systems. All aspects of our safety program will continue to evolve: our policies, evaluation methodology, safeguards, and our research into potential risks and mitigations.
        </p>
        <p className="text-lg leading-relaxed">
          Additionally, Co-Founder and Chief Science Officer Jared Kaplan will serve as Anthropic's Responsible Scaling Officer, succeeding Co-Founder and Chief Technology Officer Sam McCandlish who held this role over the last year. Sam oversaw the RSP's initial implementation and will continue to focus on his duties as Chief Technology Officer. As we work to scale up our efforts on implementing the RSP, we're also opening a position for a Head of Responsible Scaling. This role will be responsible for coordinating the many teams needed to iterate on and successfully comply with the RSP.
        </p>
        <p className="text-lg leading-relaxed">
          If you would like to contribute to AI risk management at Anthropic, we are hiring! Many of our teams now contribute to risk management via the RSP, including:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-6 text-lg leading-relaxed">
          <li>Frontier Red Team (responsible for threat modeling and capability assessments)</li>
          <li>Trust & Safety (responsible for developing deployment safeguards)</li>
          <li>Security and Compliance (responsible for security safeguards and risk management)</li>
          <li>Alignment Science (including sub-teams responsible for developing ASL-3+ safety measures, for misalignment-focused capability evaluations, and for our internal alignment stress-testing program)</li>
          <li>RSP Team (responsible for policy drafting, assurance, and cross-company execution)</li>
        </ul>
        <p className="text-lg leading-relaxed mt-6">
          Read the updated policy at anthropic.com/rsp, and supplementary information at anthropic.com/rsp-updates.
        </p>
        <p className="text-sm text-gray-600 italic mt-6">
          We extend our sincere gratitude to the many external groups that provided invaluable feedback on the development and refinement of our Responsible Scaling Policy.
        </p>
      </section>
    </article>
  );
}
