import { el } from '../utils/dom';

export default function Footer() {
  return el('div', { class: 'bg-gray-900 mx-auto px-6 py-10' },

    // Main grid
    el('div', { class: 'grid md:grid-cols-4 gap-8' },

      // Company info + socials
      el('div', {},
        el('div', { class: 'flex items-center space-x-2 mb-6' },
          el('div', { class: 'w-8 h-8 flex items-center justify-center' },
            el('i', { class: 'ri-building-line text-primary text-xl' })
          ),
          el('span', { class: 'text-xl font-bold text-white' }, 'Golden Recruiter')
        ),
        el('p', { class: 'text-gray-400 mb-6' },
          'Your trusted partner in professional recruitment and outsourcing solutions, delivering excellence across all industries.'
        ),
        el('div', { class: 'flex space-x-4' },
          el('a', {
            href: 'https://www.linkedin.com/in/samuel-mumba-57b05a24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
            target: '_blank',
            rel: 'noopener noreferrer',
            class: 'w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition-colors'
          }, el('i', { class: 'ri-linkedin-fill text-white' })),
          el('a', {
            href: '#',
            class: 'w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition-colors'
          }, el('i', { class: 'ri-facebook-fill text-white' })),
          el('a', {
            href: '#',
            class: 'w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition-colors'
          }, el('i', { class: 'ri-twitter-fill text-white' })),
          el('a', {
            href: 'https://www.instagram.com/the_golden_recruiter?igsh=ZzE1dTY0ZXM1ZnA%3D&utm_source=qr',
            target: '_blank',
            rel: 'noopener noreferrer',
            class: 'w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition-colors'
          }, el('i', { class: 'ri-instagram-fill text-white' }))
        )
      ),

      // Services
      el('div', {},
        el('h3', { class: 'text-lg font-semibold mb-6 text-white' }, 'Services'),
        el('ul', { class: 'space-y-3 text-gray-400' },
          el('li', {}, el('a', { href: '#', class: 'hover:text-white transition-colors' }, 'Sales Representatives')),
          el('li', {}, el('a', { href: '#', class: 'hover:text-white transition-colors' }, 'Customer Support')),
          el('li', {}, el('a', { href: '#', class: 'hover:text-white transition-colors' }, 'Virtual Assistants')),
          el('li', {}, el('a', { href: '#', class: 'hover:text-white transition-colors' }, 'Software Engineering')),
          el('li', {}, el('a', { href: '#', class: 'hover:text-white transition-colors' }, 'Data Entry'))
        )
      ),

      // Company links
      el('div', {},
        el('h3', { class: 'text-lg font-semibold mb-6 text-white' }, 'Company'),
        el('ul', { class: 'space-y-3 text-gray-400' },
          el('li', {}, el('a', { href: 'about.html', class: 'hover:text-white transition-colors' }, 'About Us')),
          el('li', {}, el('a', { href: 'services.html', class: 'hover:text-white transition-colors' }, 'Services')),
          el('li', {}, el('a', { href: 'contact.html', class: 'hover:text-white transition-colors' }, 'Contact')),
          el('li', {}, el('a', { href: '#', class: 'hover:text-white transition-colors' }, 'Privacy Policy'))
        )
      ),

      // Newsletter
      el('div', {},
        el('h3', { class: 'text-lg font-semibold mb-6 text-white' }, 'Newsletter'),
        el('p', { class: 'text-gray-400 mb-4' },
          'Stay updated with the latest industry insights and company news.'
        ),
        el('div', { class: 'flex' },
          el('input', {
            type: 'email',
            placeholder: 'Enter your email',
            class: 'bg-gray-800 flex-1 px-4 py-2 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm'
          }),
          el('button', {
            class: 'bg-primary px-4 py-2 rounded-r-lg hover:bg-secondary transition-colors whitespace-nowrap'
          }, el('i', { class: 'ri-send-plane-line text-white' }))
        )
      )
    ),

    // Footer bottom
    el('div', { class: 'border-t border-primary mt-12 pt-8 text-center text-gray-400' },
      el('p', {}, '©' + new Date().getFullYear() + ' Golden Recruiter. All rights reserved.')
    )
  );
}
