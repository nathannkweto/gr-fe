import { el } from '../utils/dom';

export default function QuoteModal() {
  const modal = el('main', { className: 'container mx-auto px-6 py-12 max-w-4xl' },
    el('div', { className: 'text-center mb-12' }, 
      el('h1', { className: 'text-4xl font-bold text-gray-900 mb-4' }, 'Request Your Custom Quote'),
      el('p', { className: 'text-xl text-gray-600 max-w-2xl mx-auto' }, 
        "Tell us about your requirements and we'll provide a tailored solution for your recruitment and outsourcing needs."
      )
    ),

    el('div', { className: 'bg-white rounded-xl shadow-lg overflow-hidden' }, 
      el('div', { className: 'p-8 border-b border-gray-200' }, 
        el('div', { className: 'flex items-center justify-between mb-6' }, 
          el('h2', { className: 'text-2xl font-semibold text-gray-900' }, 'Quote Request Form'),
          el('div', { className: 'text-sm text-gray-500' }, 
            'Step ',
            el('span', { id: 'current-step' }, '1'),
            ' of 4'
          )
        ),

        el('div', { className: 'flex items-center space-x-4 mb-8' }, 
          el('div', { className: 'progress-step active flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-semibold' }, '1'),
          el('div', { className: 'flex-1 h-1 bg-gray-200 rounded' }),
          el('div', { className: 'progress-step flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-semibold' }, '2'),
          el('div', { className: 'flex-1 h-1 bg-gray-200 rounded' }),
          el('div', { className: 'progress-step flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-semibold' }, '3'),
          el('div', { className: 'flex-1 h-1 bg-gray-200 rounded' }),
          el('div', { className: 'progress-step flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-semibold' }, '4'),
        )
      ),

      el('form', { id: 'quote-form', className: 'p-8' }, 
        // Step 1
        el('div', { id: 'step-1', className: 'form-section active' }, 
          el('h3', { className: 'text-xl font-semibold text-gray-900 mb-6' }, 'Service Selection'),
          el('p', { className: 'text-gray-600 mb-8' }, "Select the services you're interested in. You can choose multiple options."),

          el('div', { className: 'grid md:grid-cols-2 gap-6' }, 
            ...[
              {
                id: 'sales-reps',
                name: 'services',
                value: 'sales-representatives',
                title: 'Sales Representatives',
                description: 'Experienced sales professionals for lead generation, client acquisition, and revenue growth.'
              }],
              {
                id: 'customer-support',
                name: 'services',
                value: 'customer-support',
                title: 'Customer Support',
                description: '24/7 multilingual customer service teams across all communication channels.'
              },
              {
                id: 'virtual-assistants',
                name: 'services',
                value: 'virtual-assistants',
                title: 'Virtual Assistants',
                description: 'Administrative support, project management, research, and executive assistance.'
              },
              {
                id: 'software-engineering',
                name: 'services',
                value: 'software-engineering',
                title: 'Software Engineering',
                description: 'Full-stack developers, mobile specialists, and DevOps engineers for custom solutions.'
              },
              {
                id: 'data-entry',
                name: 'services',
                value: 'data-entry',
                title: 'Data Entry',
                description: 'Accurate data processing, migration, cleansing, and digital transformation support.'
              },
              {
                id: 'market-research',
                name: 'services',
                value: 'market-research',
                title: 'Market Research',
                description: 'Comprehensive market analysis, competitor research, and business intelligence services.'
              }
            .map(({ id, name, value, title, description }) =>
              el('div', { className: 'border border-gray-200 rounded-lg p-6 hover:border-primary/30 transition-colors' }, 
                el('div', { className: 'flex items-start space-x-4' }, 
                  el('input', { type: 'checkbox', id, name, value, className: 'service-checkbox mt-1' }),
                  el('div', { className: 'flex-1' }, 
                    el('label', { htmlFor: id, className: 'block font-medium text-gray-900 mb-2 cursor-pointer' }, title),
                    el('p', { className: 'text-sm text-gray-600' }, description)
                  )
                )
              )
            )
          )
        ),

        // Step 2
        el('div', { id: 'step-2', className: 'form-section' }, 
          el('h3', { className: 'text-xl font-semibold text-gray-900 mb-6' }, 'Project Details'),

          el('div', { className: 'space-y-6' }, 
            el('div', {}, 
              el('label', { htmlFor: 'project-scope', className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Project Scope Description *'),
              el('textarea', {
                id: 'project-scope',
                name: 'project-scope',
                rows: 4,
                required: true,
                placeholder: 'Describe your project requirements, goals, and expected outcomes...',
                className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm'
              })
            ),

            el('div', { className: 'grid md:grid-cols-2 gap-6' }, 
              el('div', {}, 
                el('label', { htmlFor: 'start-date', className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Expected Start Date *'),
                el('input', {
                  type: 'date',
                  id: 'start-date',
                  name: 'start-date',
                  required: true,
                  className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm'
                })
              ),
              el('div', {}, 
                el('label', { htmlFor: 'project-duration', className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Project Duration *'),
                el('select', {
                  id: 'project-duration',
                  name: 'project-duration',
                  required: true,
                  className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm custom-select'
                }, 
                  el('option', { value: '' }, 'Select duration'),
                  el('option', { value: '1-3-months' }, '1-3 months'),
                  el('option', { value: '3-6-months' }, '3-6 months'),
                  el('option', { value: '6-12-months' }, '6-12 months'),
                  el('option', { value: '1-2-years' }, '1-2 years'),
                  el('option', { value: 'ongoing' }, 'Ongoing partnership'),
                )
              )
            ),

            el('div', {}, 
              el('label', { htmlFor: 'budget-input', className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Budget Per Hour / Month / for your project *'),
              el('input', {
                type: 'text',
                id: 'budget-input',
                name: 'budget-input',
                placeholder: 'Enter your budget (e.g., $10,000/month or $100/hour)',
                required: true,
                className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm'
              })
            ),

            el('div', {}, 
              el('label', { htmlFor: 'team-size', className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Number of Resources Needed *'),
              el('input', {
                type: 'number',
                id: 'team-size',
                name: 'team-size',
                min: 1,
                max: 100,
                required: true,
                placeholder: 'Enter the number of team members required',
                className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm'
              })
            )
          )
        ),

        // Step 3
        el('div', { id: 'step-3', className: 'form-section' }, 
          el('h3', { className: 'text-xl font-semibold text-gray-900 mb-6' }, 'Company Information'),

          el('div', { className: 'space-y-6' }, 
            el('div', {}, 
              el('label', { htmlFor: 'company-name', className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Company Name *'),
              el('input', {
                type: 'text',
                id: 'company-name',
                name: 'company-name',
                required: true,
                placeholder: 'Your company name',
                className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm'
              })
            ),

            el('div', {}, 
              el('label', { htmlFor: 'contact-name', className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Contact Person *'),
              el('input', {
                type: 'text',
                id: 'contact-name',
                name: 'contact-name',
                required: true,
                placeholder: 'Name of the primary contact person',
                className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm'
              })
            ),

            el('div', {}, 
              el('label', { htmlFor: 'contact-email', className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Email Address *'),
              el('input', {
                type: 'email',
                id: 'contact-email',
                name: 'contact-email',
                required: true,
                placeholder: 'contact@company.com',
                className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm'
              })
            ),

            el('div', {}, 
              el('label', { htmlFor: 'contact-phone', className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Phone Number *'),
              el('input', {
                type: 'tel',
                id: 'contact-phone',
                name: 'contact-phone',
                required: true,
                placeholder: '+1 (555) 123-4567',
                className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm'
              })
            ),
          )
        ),

        // Step 4
        el('div', { id: 'step-4', className: 'form-section' }, 
          el('h3', { className: 'text-xl font-semibold text-gray-900 mb-6' }, 'Specific Requirements'),

          el('div', { className: 'space-y-6' }, 
            el('div', {}, 
              el('label', { htmlFor: 'skills', className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Skills & Qualifications'),
              el('textarea', {
                id: 'skills',
                name: 'skills',
                rows: 4,
                placeholder: 'List any required skills, certifications, or qualifications',
                className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm'
              })
            ),

            el('div', {}, 
              el('label', { htmlFor: 'industry-experience', className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Industry Experience'),
              el('textarea', {
                id: 'industry-experience',
                name: 'industry-experience',
                rows: 4,
                placeholder: 'Mention relevant industry experience or sector knowledge',
                className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm'
              })
            ),

            el('div', {}, 
              el('label', { htmlFor: 'languages', className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Languages Required'),
              el('textarea', {
                id: 'languages',
                name: 'languages',
                rows: 2,
                placeholder: 'Specify any language proficiency needed',
                className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm'
              })
            ),

            el('div', {}, 
              el('label', { htmlFor: 'availability', className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Availability & Work Hours'),
              el('textarea', {
                id: 'availability',
                name: 'availability',
                rows: 2,
                placeholder: 'Preferred work schedule or time zone considerations',
                className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm'
              })
            ),

            el('div', {}, 
              el('label', { htmlFor: 'additional-notes', className: 'block text-sm font-medium text-gray-700 mb-2' }, 'Additional Notes'),
              el('textarea', {
                id: 'additional-notes',
                name: 'additional-notes',
                rows: 3,
                placeholder: 'Any other details or expectations',
                className: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm'
              })
            ),
          )
        ),

        // Navigation buttons
        el('div', { className: 'flex justify-between mt-8' }, 
          el('button', {
            type: 'button',
            id: 'prev-btn',
            disabled: true,
            className: 'px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50',
          }, 'Previous'),

          el('button', {
            type: 'button',
            id: 'next-btn',
            className: 'px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark',
          }, 'Next'),

          el('button', {
            type: 'submit',
            id: 'submit-btn',
            className: 'px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark hidden',
          }, 'Submit'),
        ),
      )
    )
  )
}