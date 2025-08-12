import { el } from '../utils/dom';

export default function ContactSection() {
  return el(
    'section',
    { id: 'contact', class: 'py-20 bg-white' },
    el(
      'div',
      { class: 'container mx-auto px-6' },

      // Header
      el(
        'div',
        { class: 'text-center mb-16' },
        el('h2', { class: 'text-4xl font-bold text-gray-900 mb-4' }, 'Get In Touch'),
        el(
          'p',
          { class: 'text-xl text-gray-600' },
          'Ready to discuss your recruitment and outsourcing needs? We\'re here to help.'
        )
      ),

      // Grid
      el(
        'div',
        { class: 'grid lg:grid-cols-2 gap-12' },

        // Form column
        el(
          'div',
          {},
          el(
            'form',
            { class: 'space-y-6' },
            // Full Name
            el(
              'div',
              {},
              el('label', { for: 'name', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Full Name'),
              el('input', {
                type: 'text',
                id: 'name',
                name: 'name',
                class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent',
                required: 'true'
              })
            ),

            // Email
            el(
              'div',
              {},
              el('label', { for: 'email', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Email Address'),
              el('input', {
                type: 'email',
                id: 'email',
                name: 'email',
                class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent',
                required: 'true'
              })
            ),

            // Company
            el(
              'div',
              {},
              el('label', { for: 'company', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Company'),
              el('input', {
                type: 'text',
                id: 'company',
                name: 'company',
                class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
              })
            ),

            // Message
            el(
              'div',
              {},
              el('label', { for: 'message', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Message'),
              el('textarea', {
                id: 'message',
                name: 'message',
                rows: '5',
                class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent',
                required: 'true'
              }, '')
            ),

            // Submit
            el(
              'button',
              {
                type: 'submit',
                class: 'w-full bg-primary text-white px-6 py-3 !rounded-button font-semibold hover:bg-secondary transition-colors whitespace-nowrap'
              },
              'Send Message'
            )
          )
        ),

        // Contact info + map column
        el(
          'div',
          { class: 'space-y-8' },

          // Contact information
          el(
            'div',
            {},
            el('h3', { class: 'text-xl font-semibold mb-6' }, 'Contact Information'),
            el(
              'div',
              { class: 'space-y-4' },
              // Email row
              el(
                'div',
                { class: 'flex items-center' },
                el(
                  'div',
                  { class: 'w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4' },
                  el('i', { class: 'ri-mail-line text-primary' })
                ),
                el(
                  'div',
                  {},
                  el('p', { class: 'font-medium' }, 'Email'),
                  el('p', { class: 'text-gray-600' }, 'contact@thegoldenforce.com')
                )
              ),

              // Phone row
              el(
                'div',
                { class: 'flex items-center' },
                el(
                  'div',
                  { class: 'w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4' },
                  el('i', { class: 'ri-phone-line text-primary' })
                ),
                el(
                  'div',
                  {},
                  el('p', { class: 'font-medium' }, 'Phone'),
                  el('p', { class: 'text-gray-600' }, '+212 696-938795')
                )
              ),

              // Address row
              el(
                'div',
                { class: 'flex items-center' },
                el(
                  'div',
                  { class: 'w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4' },
                  el('i', { class: 'ri-map-pin-line text-primary' })
                ),
                el(
                  'div',
                  {},
                  el('p', { class: 'font-medium' }, 'Address'),
                  el(
                    'p',
                    { class: 'text-gray-600' },
                    '123 Business District',
                    el('br'),
                    'New York, NY 10001'
                  )
                )
              )
            )
          ),

          // Map / placeholder
          el('div', {
            class: 'bg-gray-100 rounded-lg h-64',
            style: "background-image: url('https://public.readdy.ai/gen_page/map_placeholder_1280x720.png'); background-size: cover; background-position: center;"
          })
        )
      )
    )
  );
}
