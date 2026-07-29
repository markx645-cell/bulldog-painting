import { process } from '@/content/site';

export default function ProcessSteps({
  heading = 'The Bulldog Way',
  lead = 'Four steps, one crew, no surprises. Most of it happens before any paint is opened.',
  tone = 'light',
}: {
  heading?: string;
  lead?: string;
  tone?: 'light' | 'dark';
}) {
  const dark = tone === 'dark';
  return (
    <section className={`section ${dark ? 'bg-ink' : 'bg-white'}`}>
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className={dark ? 'eyebrow' : 'eyebrow-dark'}>How it works</p>
          <h2
            className={`mt-2 font-display text-3xl font-bold sm:text-4xl ${
              dark ? 'text-white' : 'text-ink'
            }`}
          >
            {heading}
          </h2>
          <p className={`mt-4 ${dark ? 'text-steel-300' : 'text-steel'}`}>{lead}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
          {process.map((s) => (
            <div
              key={s.step}
              className={`rounded-xl border p-6 transition-colors ${
                dark
                  ? 'border-white/15 bg-white/5 hover:border-crimson'
                  : 'border-steel-200 bg-cream shadow-card hover:border-crimson'
              }`}
            >
              <span className="font-display text-4xl font-bold text-crimson">{s.step}</span>
              <h3
                className={`mt-3 font-display text-lg font-bold ${dark ? 'text-white' : 'text-crimson'}`}
              >
                {s.title}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-steel-300' : 'text-steel'}`}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
