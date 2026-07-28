// ---------------------------------------------------------------------------
// ⚠ PLACEHOLDER REVIEWS — REPLACE BEFORE LAUNCH
// ---------------------------------------------------------------------------
// These are written samples showing the shape and tone of the review data, NOT
// real customer feedback. Publishing invented reviews as genuine is a fake-
// endorsement problem and an FTC issue in the US.
//
// Before this site goes live, replace every entry below with real reviews
// pulled from Google, Facebook, BBB, or Angi, and update the aggregateRating
// numbers in content/site.ts (stats.googleRating, stats.reviewsLabel) to match
// what the review profiles actually say.
// ---------------------------------------------------------------------------

export type Review = {
  name: string;
  location: string;
  project: string;
  quote: string;
  rating: number;
  /** Optional photo — path resolved directly, add files to /public/reviews/ */
  image?: string;
};

export const reviews: Review[] = [
  {
    name: 'Sample Review 1',
    location: 'Hyde Park, OH',
    project: 'Whole-House Interior',
    quote:
      'Placeholder text. Replace with a real customer review before launch — see the note at the top of content/reviews.ts.',
    rating: 5,
  },
  {
    name: 'Sample Review 2',
    location: 'Anderson Township, OH',
    project: 'Exterior Repaint',
    quote:
      'Placeholder text. Replace with a real customer review before launch — see the note at the top of content/reviews.ts.',
    rating: 5,
  },
  {
    name: 'Sample Review 3',
    location: 'Covington, KY',
    project: 'Kitchen Cabinet Refinishing',
    quote:
      'Placeholder text. Replace with a real customer review before launch — see the note at the top of content/reviews.ts.',
    rating: 5,
  },
  {
    name: 'Sample Review 4',
    location: 'Mason, OH',
    project: 'Interior Painting',
    quote:
      'Placeholder text. Replace with a real customer review before launch — see the note at the top of content/reviews.ts.',
    rating: 5,
  },
  {
    name: 'Sample Review 5',
    location: 'Norwood, OH',
    project: 'Exterior + Trim',
    quote:
      'Placeholder text. Replace with a real customer review before launch — see the note at the top of content/reviews.ts.',
    rating: 5,
  },
  {
    name: 'Sample Review 6',
    location: 'Fort Thomas, KY',
    project: 'Deck Staining',
    quote:
      'Placeholder text. Replace with a real customer review before launch — see the note at the top of content/reviews.ts.',
    rating: 5,
  },
];

/**
 * Whether the review data is still placeholder content. Guards the
 * AggregateRating JSON-LD so we never publish schema for invented reviews —
 * flip to false once real reviews are in place above.
 */
export const reviewsArePlaceholder = true;
