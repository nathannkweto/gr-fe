import { el } from '../utils/dom';

export default function Home() {
  const hero = el(
  'div',
  { 
    class: 'header-image bg-[url("/images/home-hero.jpg")]' 
  },
  el(
    'div',
    { class: 'header-image-content space-y-6' },
    el('h1', { class: 'text-4xl md:text-6xl font-extrabold leading-tight' }, 'Golden Force'),
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

  const whyChooseSection = el('section', { class: 'py-20 bg-gray-50' },
    el('div', { class: 'container mx-auto px-6' },

      // Title & description
      el('div', { class: 'text-center mb-16' },
        el('h2', { class: 'text-4xl font-bold text-gray-900 mb-4' }, 'Why Choose Golden Force'),
        el('p', { class: 'text-xl text-gray-600 max-w-3xl mx-auto' },
          'What sets us apart is our people-first approach. We take the time to understand each client’s unique requirements and each candidate’s strengths — ensuring the perfect match. Our global reach, combined with local market expertise, enables us to deliver results quickly and effectively.'
        )
      ),

      // Grid
      el('div', { class: 'grid md:grid-cols-3 gap-8' },

        // Card 1
        el('div', { class: 'text-center p-8 bg-white rounded-xl shadow-sm' },
          el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-6' },
            el('i', { class: 'ri-award-line text-primary text-2xl' })
          ),
          el('h3', { class: 'text-xl font-semibold mb-4' }, 'People-First Approach'),
          el('p', { class: 'text-gray-600' },
            'We build lasting relationships by aligning talent with business needs through personalized, thoughtful recruitment.'
          )
        ),

        // Card 2
        el('div', { class: 'text-center p-8 bg-white rounded-xl shadow-sm' },
          el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-6' },
            el('i', { class: 'ri-global-line text-primary text-2xl' })
          ),
          el('h3', { class: 'text-xl font-semibold mb-4' }, 'Global Reach, Local Insight'),
          el('p', { class: 'text-gray-600' },
            'Our international network and local market knowledge ensure fast, effective hiring — wherever you operate.'
          )
        ),

        // Card 3
        el('div', { class: 'text-center p-8 bg-white rounded-xl shadow-sm' },
          el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-6' },
            el('i', { class: 'ri-user-search-line text-primary text-2xl' })
          ),
          el('h3', { class: 'text-xl font-semibold mb-4' }, 'Perfect Fit, Every Time'),
          el('p', { class: 'text-gray-600' },
            'We go beyond resumes to match roles with the right people — ensuring skill, culture, and value alignment.'
          )
        )
      )
    )
  );

  const factsAndFigures = el('section', { class: 'py-20 bg-white' },
    el('div', { class: 'container mx-auto px-6' },

      // Title & description
      el('div', { class: 'text-center mb-16' },
        el('h2', { class: 'text-4xl font-bold text-gray-900 mb-4' }, 'Facts & Figures'),
        el('p', { class: 'text-xl text-gray-600' }, 'Numbers that speak to our commitment and success in the industry')
      ),

      // Stats grid
      el('div', { class: 'grid md:grid-cols-4 gap-8', id: 'stats-section' },

        // Active Agent
        el('div', { class: 'text-center p-6' },
          el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4' },
            el('i', { class: 'ri-user-line text-primary text-2xl' })
          ),
          el('div', { class: 'text-4xl font-bold text-primary mb-2 counter', 'data-target': '150' }, '0'),
          el('p', { class: 'text-gray-600 font-medium' }, 'Active Agent')
        ),

        // Call Center Geographies
        el('div', { class: 'text-center p-6' },
          el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4' },
            el('i', { class: 'ri-map-pin-line text-primary text-2xl' })
          ),
          el('div', { class: 'text-4xl font-bold text-primary mb-2 counter', 'data-target': '7' }, '0'),
          el('p', { class: 'text-gray-600 font-medium' }, 'Call Center Geographies')
        ),

        // Languages
        el('div', { class: 'text-center p-6' },
          el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4' },
            el('i', { class: 'ri-translate-2 text-primary text-2xl' })
          ),
          el('div', { class: 'text-4xl font-bold text-primary mb-2 counter', 'data-target': '8' }, '0'),
          el('p', { class: 'text-gray-600 font-medium' }, 'Languages')
        ),

        // Client Satisfaction
        el('div', { class: 'text-center p-6' },
          el('div', { class: 'w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-4' },
            el('i', { class: 'ri-thumb-up-line text-primary text-2xl' })
          ),
          el('div', { class: 'text-4xl font-bold text-primary mb-2 counter', 'data-target': '98' }, '0'),
          el('p', { class: 'text-gray-600 font-medium' }, 'Client Satisfaction %')
        )
      )
    )
  );

  const parallax = el(
    'section',
    {
      class: 'parallax-bg bg-fixed py-32 relative',
      style: "background-image: url('images/home-hero.jpg')",
    },
    // Neutral Dark Overlay
    el('div', { class: 'absolute inset-0 bg-black/60' }),

    // Content
    el(
      'div',
      { class: 'relative z-10 container mx-auto px-6 text-center text-white' },
      el(
        'h2',
        { class: 'text-4xl md:text-5xl font-bold mb-6' },
        "Don't Believe it? Hear For Yourself"
      ),
      el(
        'h3',
        { class: 'text-lg md:text-xl max-w-3xl mx-auto' },
        "Talents from our pool is your secret weapon to your company's excellent workforce"
      ),

      // Audio players
      el(
        'section',
        { class: 'max-w-4xl mx-auto' },
        el(
          'div',
          { class: 'grid md:grid-cols-3 gap-8 mt-12' },

          // Yolanda
          el(
            'div',
            { class: 'p-6 text-center' },
            el(
              'audio',
              { controls: 'true', class: 'w-full max-w-xs mx-auto' },
              el('source', { src: 'audio/Yolanda.m4a', type: 'audio/mpeg' }),
              'Your browser does not support the audio element.'
            )
          ),

          // Mitchelle
          el(
            'div',
            { class: 'p-6 text-center' },
            el(
              'audio',
              { controls: 'true', class: 'w-full max-w-xs mx-auto' },
              el('source', { src: 'audio/Mitchelle.m4a', type: 'audio/mpeg' }),
              'Your browser does not support the audio element.'
            )
          ),

          // Richard
          el(
            'div',
            { class: 'p-6 text-center' },
            el(
              'audio',
              { controls: 'true', class: 'w-full max-w-xs mx-auto' },
              el('source', { src: 'audio/richard.mp3', type: 'audio/mpeg' }),
              'Your browser does not support the audio element.'
            )
          )
        )
      )
    )
  );

  const testimonials = el(
    'section',
    { class: 'py-20 bg-gradient-to-b from-primary/5 to-white' },
    el(
      'div',
      { class: 'container mx-auto px-6' },
      el(
        'div',
        { class: 'text-center mb-16' },
        el('h2', { class: 'text-4xl font-bold text-gray-900 mb-4' }, 'Client Success Stories'),
        el(
          'p',
          { class: 'text-xl text-gray-600' },
          'Hear from companies who have transformed their operations with our services'
        )
      ),

      el(
        'div',
        { class: 'grid md:grid-cols-3 gap-8' },

        el(
          'div',
          {
            class:
              'testimonial-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2',
          },
          el(
            'div',
            { class: 'flex items-center mb-6' },
            /* avatar or icon could go here */
            el('div', {}, el('h4', { class: 'font-semibold' }, 'Sarah Chen'), el('p', { class: 'text-sm text-gray-600' }, 'CEO, TechFlow Solutions'))
          ),
          el(
            'p',
            { class: 'text-gray-700 italic' },
            `"Golden Recruiter transformed our customer support operations. Their team delivered exceptional talent that reduced our response times by 60% while maintaining the highest quality standards."`
          )
        ),

        el(
          'div',
          {
            class:
              'testimonial-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2',
          },
          el(
            'div',
            { class: 'flex items-center mb-6' },
            el('div', {}, el('h4', { class: 'font-semibold' }, 'Marcus Rodriguez'), el('p', { class: 'text-sm text-gray-600' }, 'VP Sales, GrowthCorp'))
          ),
          el(
            'p',
            { class: 'text-gray-700 italic' },
            `"The sales representatives they provided exceeded all expectations. Our revenue increased by 40% in the first quarter, and their professionalism is unmatched."`
          )
        ),

        el(
          'div',
          {
            class:
              'testimonial-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2',
          },
          el(
            'div',
            { class: 'flex items-center mb-6' },
            el('div', {}, el('h4', { class: 'font-semibold' }, 'Emily Watson'), el('p', { class: 'text-sm text-gray-600' }, 'Founder, InnovateHub'))
          ),
          el(
            'p',
            { class: 'text-gray-700 italic' },
            `"Their software engineering team became an integral part of our development process. The quality of work and communication has been outstanding from day one."`
          )
        )
      )
    )
  );

  const button = el('button', {
  class: 'bg-white text-primary px-8 py-4 !rounded-button text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap',
}, 'Request a Quote');

button.onclick = () => {
  window.location.href = '/quote';
};

const ctaSection = el('section', { class: 'py-20 bg-primary' },
  el('div', { class: 'container mx-auto px-6 text-center' },
    el('h2', { class: 'text-4xl font-bold text-white mb-6' }, 'Ready to Transform Your Business?'),
    el('p', { class: 'text-xl text-gray-100 mb-8 max-w-2xl mx-auto' },
      'Join hundreds of companies who have already revolutionized their ' +
      'operations with our expert recruitment and outsourcing solutions.'
    ),
    button
  )
);

  return el(
    'div',
    {},
    hero,
    whyChooseSection,
    factsAndFigures,
    parallax,
    testimonials,
    ctaSection
  );
}
