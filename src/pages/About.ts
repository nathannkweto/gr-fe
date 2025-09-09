import { el } from '../utils/dom';
import { navigate } from '../router';

export default function About() {
  const applyBtn = el(
    'button',
    {
      class:
        'bg-primary hover:bg-white hover:text-primary text-white font-semibold py-4 px-12 rounded shadow-lg transition',
      type: 'button',
    },
    'Join Our Team'
  );

  applyBtn.onclick = () => {
    window.location.href = '/jobs';
  };
  const hero = el(
    'div',
    { class: 'header-image bg-[url("/images/about-hero.jpg")]' },
    // Neutral Dark Overlay
    el('div', { class: 'absolute inset-0 bg-black/20' }),
    el(
      'div',
      { class: 'header-image-content space-y-6' },
      el('h1', { class: 'text-4xl md:text-6xl font-bold leading-tight' }, 'About Golden Force'),
      el('p', { class: 'text-lg md:text-xl text-gray-200' }, 'Pioneering excellence in recruitment and staffing since our founding, with a commitment to transforming businesses through exceptional talent solutions.'),
      applyBtn
    ),
  );

  const foundation = el(
    'section',
    { class: 'py-20 bg-white mt-8' },
    el(
      'div',
      { class: 'container mx-auto px-6' },
      el(
        'div',
        { class: 'text-center mb-16' },
        el('h2', { class: 'text-4xl font-bold text-gray-900 mb-4' }, 'Our Foundation'),
        el(
          'p',
          { class: 'text-xl text-gray-600 max-w-3xl mx-auto' },
          'The principles and values that guide every decision we make and every relationship we build.'
        )
      ),
      el(
        'div',
        { class: 'grid lg:grid-cols-3 gap-8 mb-16' },
        // Card 1: Our Mission
        el(
          'div',
          {
            class:
              'bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden',
          },
          el('img', { src: '/images/5.jpg', alt: 'Our Mission', class: 'w-full h-48 object-cover object-top' }),
          el(
            'div',
            { class: 'p-8' },
            el('div', { class: 'w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4' }, el('i', { class: 'ri-team-line text-primary text-xl' })),
            el('h3', { class: 'text-2xl font-bold text-gray-900 mb-4' }, 'Our Mission'),
            el(
              'p',
              { class: 'text-gray-600 leading-relaxed' },
              'Our mission is to empower organizations by providing access to skilled and reliable talent across various industries. We are committed to building long‑lasting partnerships through integrity, transparency, and results‑driven service.'
            )
          )
        ),
        // Card 2: Our Vision
        el(
          'div',
          {
            class:
              'bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden',
          },
          el('img', { src: '/images/4.jpg', alt: 'Our Vision', class: 'w-full h-48 object-cover object-top' }),
          el(
            'div',
            { class: 'p-8' },
            el('div', { class: 'w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4' }, el('i', { class: 'ri-eye-line text-primary text-xl' })),
            el('h3', { class: 'text-2xl font-bold text-gray-900 mb-4' }, 'Our Vision'),
            el(
              'p',
              { class: 'text-gray-600 leading-relaxed' },
              'We envision a world where every business, no matter its size or location, has seamless access to the right people at the right time—fueling innovation, growth, and positive workplace cultures everywhere.'
            )
          )
        ),
        // Card 3: Our Values
        el(
          'div',
          {
            class:
              'bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden',
          },
          el('img', { src: '/images/3.jpg', alt: 'Our Values', class: 'w-full h-48 object-cover object-top' }),
          el(
            'div',
            { class: 'p-8' },
            el('div', { class: 'w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4' }, el('i', { class: 'ri-heart-line text-primary text-xl' })),
            el('h3', { class: 'text-2xl font-bold text-gray-900 mb-4' }, 'Our Values'),
            el(
              'p',
              { class: 'text-gray-600 leading-relaxed' },
              'Excellence, integrity, innovation, and client success drive everything we do. We believe in building lasting partnerships based on trust, transparency, and mutual growth while fostering an inclusive and collaborative environment.'
            )
          )
        )
      ),
      el(
        'div',
        { class: 'bg-gray-50 rounded-2xl p-8 lg:p-12' },
        el('h3', { class: 'text-2xl font-bold text-gray-900 mb-8 text-center' }, 'Our Core Values in Action'),
        el(
          'div',
          { class: 'grid md:grid-cols-2 lg:grid-cols-4 gap-8' },
          // Excellence
          el(
            'div',
            { class: 'text-center' },
            el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4 text-2xl' },
              el('i', { class: 'ri-star-line text-primary' })
            ),
            el('h4', { class: 'text-lg font-semibold text-gray-900 mb-2' }, 'Excellence'),
            el(
              'p',
              { class: 'text-gray-600 text-sm' },
              'We strive for excellence in every aspect. From sourcing to onboarding, we go above and beyond to deliver top-tier and outstanding client service.'
            )
          ),
          // Accountability
          el(
            'div',
            { class: 'text-center' },
            el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4 text-2xl' },
              el('i', { class: 'ri-shield-check-line text-primary' })
            ),
            el('h4', { class: 'text-lg font-semibold text-gray-900 mb-2' }, 'Accountability'),
            el('p', { class: 'text-gray-600 text-sm' }, 'We take full ownership of our promises and our performance, holding ourselves responsible for our actions and outcomes.')
          ),
          // Integrity
          el(
            'div',
            { class: 'text-center' },
            el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4 text-2xl' },
              el('i', { class: 'ri-lock-line text-primary' })
            ),
            el('h4', { class: 'text-lg font-semibold text-gray-900 mb-2' }, 'Integrity'),
            el(
              'p',
              { class: 'text-gray-600 text-sm' },
              'Honesty and ethical behavior guide every aspect of our business operations, ensuring transparency and trustworthiness.'
            )
          ),
          // Human Connection
          el(
            'div',
            { class: 'text-center' },
            el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4 text-2xl' },
              el('i', { class: 'ri-heart-2-line text-primary' })
            ),
            el('h4', { class: 'text-lg font-semibold text-gray-900 mb-2' }, 'Human Connection'),
            el(
              'p',
              { class: 'text-gray-600 text-sm' },
              'Recruiting is more than filling roles—it’s about building meaningful relationships that ensure a lasting, human-first connection.'
            )
          ),
          // Respect
          el(
            'div',
            { class: 'text-center' },
            el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4 text-2xl' },
              el('i', { class: 'ri-hand-heart-line text-primary' })
            ),
            el('h4', { class: 'text-lg font-semibold text-gray-900 mb-2' }, 'Respect'),
            el(
              'p',
              { class: 'text-gray-600 text-sm' },
              'We value diversity and treat everyone with dignity and respect, fostering an inclusive environment where every voice is heard and valued.'
            )
          ),
          // Team Spirit
          el(
            'div',
            { class: 'text-center' },
            el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4 text-2xl' },
              el('i', { class: 'ri-team-line text-primary' })
            ),
            el('h4', { class: 'text-lg font-semibold text-gray-900 mb-2' }, 'Team Spirit'),
            el('p', { class: 'text-gray-600 text-sm' }, 'Collaboration is the heartbeat of our agency. We support one another and celebrate every success as a unified team.')
          ),
          // Transparency
          el(
            'div',
            { class: 'text-center' },
            el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4 text-2xl' },
              el('i', { class: 'ri-search-line text-primary' })
            ),
            el('h4', { class: 'text-lg font-semibold text-gray-900 mb-2' }, 'Transparency'),
            el('p', { class: 'text-gray-600 text-sm' }, 'We believe in open communication and honesty, building trust through clear, forthright interactions.')
          )
        )
      )
    )
  );

  const team = el(
    'section',
    { class: 'py-20 bg-white' },
    el(
      'div',
      { class: 'container mx-auto px-6' },
      el(
        'div',
        { class: 'grid lg:grid-cols-2 gap-12 items-center' },

        // Left side text content
        el(
          'div',
          {},
          el('h2', { class: 'text-4xl font-bold text-gray-900 mb-6' }, 'Our Team'),
          el(
            'p',
            { class: 'text-xl text-gray-600 mb-8 leading-relaxed' },
            'At Golden Force, we take pride in our dynamic and globally diverse team. With professionals representing more than 20 countries, each team member brings a unique set of skills, cultural insights, and industry knowledge that fuels our innovation and drives impactful staffing solutions.'
          ),
          el(
            'h3',
            { class: 'text-2xl font-bold text-gray-900 mb-4' },
            'Diversity Drives Success'
          ),
          el(
            'p',
            { class: 'text-gray-600 mb-6 leading-relaxed' },
            "Our people are more than employees—they're the foundation of everything we do. From expert recruiters and talent acquisition specialists to operations and client success professionals, our team combines experience across multiple sectors to ensure we deeply understand the needs of every client and candidate."
          ),
          el(
            'p',
            { class: 'text-gray-600 mb-6 leading-relaxed' },
            "We nurture a collaborative, inclusive culture where every voice is valued, every contribution matters, and success is shared. It's this unity in diversity that makes Golden Force a trusted partner in workforce solutions."
          ),

          el(
            'div',
            { class: 'grid grid-cols-2 gap-6 mt-6' },
            el(
              'div',
              { class: 'text-center p-4 bg-gray-50 rounded-lg' },
              el('div', { class: 'text-2xl font-bold text-primary mb-2' }, '20+'),
              el('p', { class: 'text-sm text-gray-600' }, 'Nationalities Represented')
            ),
            el(
              'div',
              { class: 'text-center p-4 bg-gray-50 rounded-lg' },
              el('div', { class: 'text-2xl font-bold text-primary mb-2' }, 'Global'),
              el('p', { class: 'text-sm text-gray-600' }, 'Talent Reach')
            )
          )
        ),

        // Right side image
        el(
          'div',
          {},
          el('img', {
            src: 'images/golden.jpg',
            alt: 'Golden Force diverse team photo',
            class: 'w-full rounded-xl shadow-lg object-cover',
          })
        )
      )
    )
  );

  const button = el(
    'button',
    {
      class:
        'bg-white hover:bg-primary hover:text-white text-primary font-semibold py-4 px-12 rounded shadow-lg transition',
      type: 'button',
    },
    'Get a Quote'
  );

  button.onclick = () => {
    window.location.href = '/quote';
  };

  const parallaxCTA = el(
    'section',
    {
      class: 'bg-primary py-32 relative',
    },
    // Content
    el('div', { class: 'relative z-10 container mx-auto px-6 text-center text-white' },
      el('h2', { class: 'text-4xl font-bold mb-4 drop-shadow-lg' }, 'Recruitment Designed for Your Growth'),
      el('p', { class: 'max-w-2xl mx-auto mb-8 text-lg drop-shadow-md' }, 'Let us find your next great team member while you focus on growing your business.'),
      button
    ),

  );

  const root = el('div', {}, hero, foundation, team, parallaxCTA);
  return root;
}
