// ---------------------------------------------------------------------------
// ⚠ PLACEHOLDER VIDEO TESTIMONIALS — REPLACE BEFORE LAUNCH
// ---------------------------------------------------------------------------
// These are NOT real customers. The names, quotes, and posters are stand-ins so
// the section can be built and reviewed; the posters are stock photographs of
// people who have no connection to Bulldog Painters.
//
// A video testimonial is a named, identifiable person vouching for the company.
// Publishing invented ones — or putting a stock photo next to a made-up quote —
// is a fake-endorsement problem, and a worse one than fake written reviews
// because it implies a real filmed person.
//
// Before launch: film real customers, drop the clips in /public/videos/, set
// `src` and a real `poster` on each entry, replace every name and quote with
// what that person actually said, then set videoTestimonialsArePlaceholder to
// false. Get written release from anyone appearing on camera.
// ---------------------------------------------------------------------------

export type VideoTestimonial = {
  id: string;
  /** Path to the mp4. Empty string until a real clip exists — the card then
   *  renders as a still with no play control rather than a dead button. */
  src: string;
  poster: string;
  name: string;
  location: string;
  project: string;
  quote: string;
};

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 'placeholder-1',
    src: '',
    poster: '/photos/video-poster-1.jpg',
    name: 'Customer name',
    location: 'Neighborhood, OH',
    project: 'Whole-House Interior',
    quote: 'Placeholder — replace with a real filmed testimonial before launch.',
  },
  {
    id: 'placeholder-2',
    src: '',
    poster: '/photos/video-poster-2.jpg',
    name: 'Customer name',
    location: 'Neighborhood, KY',
    project: 'Exterior Repaint',
    quote: 'Placeholder — replace with a real filmed testimonial before launch.',
  },
  {
    id: 'placeholder-3',
    src: '',
    poster: '/photos/video-poster-3.jpg',
    name: 'Customer name',
    location: 'Neighborhood, OH',
    project: 'Kitchen Cabinet Refinishing',
    quote: 'Placeholder — replace with a real filmed testimonial before launch.',
  },
  {
    id: 'placeholder-4',
    src: '',
    poster: '/photos/video-poster-4.jpg',
    name: 'Customer name',
    location: 'Neighborhood, OH',
    project: 'Deck Staining',
    quote: 'Placeholder — replace with a real filmed testimonial before launch.',
  },
];

/** Guards the build note and keeps the cards non-interactive while the
 *  entries above are stand-ins. Flip to false once real clips are in. */
export const videoTestimonialsArePlaceholder = true;
