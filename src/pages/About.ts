import { el } from '../utils/dom';

export default function About() {
  const hero = el(
    'div',
    { class: 'header-image bg-[url("/images/about-hero.jpg")]' },
    el(
      'div',
      { class: 'header-image-content space-y-6' },
      el('h1', { class: 'text-4xl md:text-6xl font-extrabold leading-tight' }, 'Golden Recruiter'),
      el('p', { class: 'text-lg md:text-xl text-gray-200' }, 'Client-Based Business Solutions in Global Recruitment & Outsourcing.'),
      el('div', { class: 'border-l-4 border-primary pl-4' },
        el('p', { class: 'italic text-base md:text-lg text-gray-300' }, '“We don\'t just fill roles — we create tailored workforce solutions that support growth, agility, and long-term success.”')
      ),
      el(
        'ul',
        { class: 'list-disc pl-6 text-gray-300 space-y-1' },
        el('li', {}, 'Customized recruitment strategies aligned with your goals'),
        el('li', {}, 'End-to-end outsourcing across sales, support, and tech'),
        el('li', {}, 'Reliable, scalable remote teams built for performance')
      ),
      el(
        'button',
        {
          class: 'bg-primary text-white font-semibold py-3 px-10 rounded hover:bg-neutral-300 transition',
        },
        'Get Quote'
      )
    )
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
          'The principles and values that guide every decision we make and every relationship we build'
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
            el('div', { class: 'w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4' }, el('i', { class: 'ri-target-line text-primary text-xl' })),
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
            el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4 text-2xl' }, '⭐'),
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
            el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4 text-2xl' }, '✅'),
            el('h4', { class: 'text-lg font-semibold text-gray-900 mb-2' }, 'Accountability'),
            el('p', { class: 'text-gray-600 text-sm' }, 'We take full ownership of our promises and our performance, holding ourselves responsible for our actions and outcomes.')
          ),
          // Integrity
          el(
            'div',
            { class: 'text-center' },
            el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4 text-2xl' }, '🔒'),
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
            el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4 text-2xl' }, '🤝'),
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
            el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4 text-2xl' }, '🤝'),
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
            el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4 text-2xl' }, '👥'),
            el('h4', { class: 'text-lg font-semibold text-gray-900 mb-2' }, 'Team Spirit'),
            el('p', { class: 'text-gray-600 text-sm' }, 'Collaboration is the heartbeat of our agency. We support one another and celebrate every success as a unified team.')
          ),
          // Transparency
          el(
            'div',
            { class: 'text-center' },
            el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4 text-2xl' }, '🔍'),
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
          'At Golden Recruiters, we take pride in our dynamic and globally diverse team. With professionals representing more than 20 countries, each team member brings a unique set of skills, cultural insights, and industry knowledge that fuels our innovation and drives impactful staffing solutions.'
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
          "We nurture a collaborative, inclusive culture where every voice is valued, every contribution matters, and success is shared. It's this unity in diversity that makes Golden Recruiters a trusted partner in workforce solutions."
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
          src: 'images/team.jpg',
          alt: 'Golden Recruiters diverse team photo',
          class: 'w-full rounded-xl shadow-lg object-cover',
        })
      )
    )
  )
);


  const parallaxCTA = el(
    'section',
    {
      class:
        'parallax bg-[url("/images/about-cta.jpg")] bg-fixed bg-center bg-no-repeat bg-cover py-40 flex flex-col items-center justify-center text-white text-center px-6',
    },
    el('h2', { class: 'text-5xl font-extrabold mb-4 drop-shadow-lg' }, 'Recruitment Designed for Your Growth'),
    el('p', { class: 'max-w-2xl mb-8 text-lg drop-shadow-md' }, 'Let us find your next great team member while you focus on growing your business.'),
    el(
      'button',
      {
        class:
          'bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-12 rounded shadow-lg transition',
      },
      'Get a Quote'
    )
  );

  const root = el('div', {}, hero, foundation, team, parallaxCTA);
  return root;
}
