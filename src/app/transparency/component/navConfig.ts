import { NavSection } from './LeftNavigation';

export const navSections: NavSection[] = [
  {
    id: '01',
    title: 'Model Report',
    subsections: [
      { id: 'model-report', title: 'Model Report' },
      { id: 'agentic-safety', title: 'Agentic Safety and Malicious Use' },
      { id: 'automated-audits', title: 'Automated Behavioral Audits' },
      { id: 'rsp-evaluations', title: 'RSP Evaluations' },
    ],
  },
  {
    id: '02',
    title: 'System Trust and Reporting',
    subsections: [
      { id: 'system-trust', title: 'System Trust and Reporting', isRoute: true, route: '/transparency/system-trust' },
    ],
  },
  {
    id: '03',
    title: 'Voluntary Commitments',
    subsections: [
      { id: 'executive-summary', title: 'Executive Summary' },
      { id: 'risk-assessment', title: 'Risk Assessment and Mitigation' },
      { id: 'cybersecurity-privacy', title: 'Cybersecurity & Privacy' },
      { id: 'public-awareness', title: 'Public Awareness' },
      { id: 'societal-impact', title: 'Societal Impact' },
      { id: 'system-safeguard', title: 'System Safeguard Commitments' },
      { id: 'image-based-abuse', title: 'Image-Based Sexual Abuse' },
      { id: 'election-integrity', title: 'Election Integrity' },
      { id: 'terrorist-content', title: 'Terrorist and Violent Extremist Content' },
      { id: 'list-commitments', title: 'List of Voluntary Commitments' },
    ],
  },
];
