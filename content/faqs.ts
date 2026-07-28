import type { Faq } from './services';

/** Shared FAQs that appear on every service and location page, below the
 *  service-specific and location-specific ones. */
export const sharedFaqs: Faq[] = [
  {
    q: 'Is the estimate really free?',
    a: 'Yes, and there is no obligation attached to it. We walk the job, measure, and leave you with a written, itemized number. If you want a second opinion on someone else\'s quote, we will give you an honest read on it.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Licensed, fully insured for general liability and workers\' compensation, and EPA Lead-Safe certified for work on pre-1978 homes. Certificates go to you or your property manager on request before we start.',
  },
  {
    q: 'Do you use subcontractors?',
    a: 'No. Every painter on your job is a W-2 employee on our payroll, background-checked and uniformed. The crew lead who runs your project is the person who comes back if anything needs attention under the warranty.',
  },
  {
    q: 'What does the warranty cover?',
    a: 'Five years on workmanship — peeling, blistering, or flaking traced to our prep or application. It is written, and you get a copy at the final walkthrough. Product defects are covered separately by the manufacturer and we will handle that claim for you.',
  },
  {
    q: 'How do payments work?',
    a: 'A deposit to schedule, and the balance on completion after you have walked the job and signed off. We do not ask for the full amount up front, and there are no change orders without a conversation first.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'Interior work usually schedules within two to three weeks. Exterior work in peak season — May through September — runs four to six weeks out, so book earlier than feels necessary if you want a specific window.',
  },
];
