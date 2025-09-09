import { el } from '../utils/dom';
import { submitQuoteForm } from '../utils/forms'; // uses api.postQuote()

export default function QuoteFormSection() {
  const DRAFT_KEY = 'quoteFormDraft_v1';
  const STEP_KEY = 'quoteFormStep_v1';

  /* --------------
     BUILD DOM
     -------------- */

  const main = el('main', { class: 'container mx-auto px-6 py-12 max-w-4xl' },
    // Header
    el('div', { class: 'text-center mb-12' },
      el('h1', { class: 'text-4xl font-bold text-gray-900 mb-4' }, 'Request Your Custom Quote'),
      el('p', { class: 'text-xl text-gray-600 max-w-2xl mx-auto' },
        'Tell us about your requirements and we\'ll provide a tailored solution for your recruitment and staffing needs.'
      )
    ),

    // Card with header + form
    el('div', { class: 'bg-white rounded-xl overflow-hidden' },

      // inline top message (success / error)
      el('div', { id: 'form-message', class: 'px-8 pt-6' }),

      // Card header (title + progress)
      el('div', { class: 'p-8 border-b border-gray-200' },
        el('div', { class: 'flex items-center justify-between mb-6' },
          el('h2', { class: 'text-2xl font-semibold text-gray-900' }, 'Quote Request Form'),
          el('div', { class: 'text-sm text-gray-500' },
            'Step ', el('span', { id: 'current-step' }, '1'), ' of 4'
          )
        ),

        // Progress bar (numbers + connecting bars)
        el('div', { class: 'flex items-center space-x-4 mb-8' },
          el('div', { class: 'progress-step flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-semibold transition-colors duration-300' }, '1'),
          el('div', { class: 'progress-bar flex-1 h-1 bg-gray-200 rounded transition-all duration-300' }),
          el('div', { class: 'progress-step flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-semibold transition-colors duration-300' }, '2'),
          el('div', { class: 'progress-bar flex-1 h-1 bg-gray-200 rounded transition-all duration-300' }),
          el('div', { class: 'progress-step flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-semibold transition-colors duration-300' }, '3'),
          el('div', { class: 'progress-bar flex-1 h-1 bg-gray-200 rounded transition-all duration-300' }),
          el('div', { class: 'progress-step flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-semibold transition-colors duration-300' }, '4')
        )
      ),

      // Form
      el('form', { id: 'quote-form', class: 'p-8' },

        // Step 1
        el('div', { id: 'step-1', class: 'form-section transition-transform duration-300 ease-in-out' },
          el('h3', { class: 'text-xl font-semibold text-gray-900 mb-6' }, 'Service Selection'),
          el('p', { class: 'text-gray-600 mb-8' }, 'Select the services you\'re interested in. You can choose multiple options.'),

          el('div', { class: 'grid md:grid-cols-2 gap-6' },

            // card: Sales Representatives
            el('div', { class: 'border border-gray-200 rounded-lg p-6 hover:border-primary/30 transition-colors' },
              el('div', { class: 'flex items-start space-x-4' },
                el('input', { type: 'checkbox', id: 'sales-reps', name: 'services', value: 'sales-representatives', class: 'service-checkbox mt-1' }),
                el('div', { class: 'flex-1' },
                  el('label', { for: 'sales-reps', class: 'block font-medium text-gray-900 mb-2 cursor-pointer' }, 'Sales Representatives'),
                  el('p', { class: 'text-sm text-gray-600' }, 'Experienced sales professionals for lead generation, client acquisition, and revenue growth.')
                )
              )
            ),

            // Customer Support
            el('div', { class: 'border border-gray-200 rounded-lg p-6 hover:border-primary/30 transition-colors' },
              el('div', { class: 'flex items-start space-x-4' },
                el('input', { type: 'checkbox', id: 'customer-support', name: 'services', value: 'customer-support', class: 'service-checkbox mt-1' }),
                el('div', { class: 'flex-1' },
                  el('label', { for: 'customer-support', class: 'block font-medium text-gray-900 mb-2 cursor-pointer' }, 'Customer Support'),
                  el('p', { class: 'text-sm text-gray-600' }, '24/7 multilingual customer service teams across all communication channels.')
                )
              )
            ),

            // Virtual Assistants
            el('div', { class: 'border border-gray-200 rounded-lg p-6 hover:border-primary/30 transition-colors' },
              el('div', { class: 'flex items-start space-x-4' },
                el('input', { type: 'checkbox', id: 'virtual-assistants', name: 'services', value: 'virtual-assistants', class: 'service-checkbox mt-1' }),
                el('div', { class: 'flex-1' },
                  el('label', { for: 'virtual-assistants', class: 'block font-medium text-gray-900 mb-2 cursor-pointer' }, 'Virtual Assistants'),
                  el('p', { class: 'text-sm text-gray-600' }, 'Administrative support, project management, research, and executive assistance.')
                )
              )
            ),

            // Software Engineering
            el('div', { class: 'border border-gray-200 rounded-lg p-6 hover:border-primary/30 transition-colors' },
              el('div', { class: 'flex items-start space-x-4' },
                el('input', { type: 'checkbox', id: 'software-engineering', name: 'services', value: 'software-engineering', class: 'service-checkbox mt-1' }),
                el('div', { class: 'flex-1' },
                  el('label', { for: 'software-engineering', class: 'block font-medium text-gray-900 mb-2 cursor-pointer' }, 'Software Engineering'),
                  el('p', { class: 'text-sm text-gray-600' }, 'Full-stack developers, mobile specialists, and DevOps engineers for custom solutions.')
                )
              )
            ),

            // Admin Services
            el('div', { class: 'border border-gray-200 rounded-lg p-6 hover:border-primary/30 transition-colors' },
              el('div', { class: 'flex items-start space-x-4' },
                el('input', { type: 'checkbox', id: 'data-entry', name: 'services', value: 'data-entry', class: 'service-checkbox mt-1' }),
                el('div', { class: 'flex-1' },
                  el('label', { for: 'data-entry', class: 'block font-medium text-gray-900 mb-2 cursor-pointer' }, 'Admin Services'),
                  el('p', { class: 'text-sm text-gray-600' }, 'Accurate data processing, migration, cleansing, and digital transformation support.')
                )
              )
            ),

            // Market Research
            el('div', { class: 'border border-gray-200 rounded-lg p-6 hover:border-primary/30 transition-colors' },
              el('div', { class: 'flex items-start space-x-4' },
                el('input', { type: 'checkbox', id: 'market-research', name: 'services', value: 'market-research', class: 'service-checkbox mt-1' }),
                el('div', { class: 'flex-1' },
                  el('label', { for: 'market-research', class: 'block font-medium text-gray-900 mb-2 cursor-pointer' }, 'Market Research'),
                  el('p', { class: 'text-sm text-gray-600' }, 'Comprehensive market analysis, competitor research, and business intelligence services.')
                )
              )
            )
          ) // end grid
        ), // end step-1

        // Step 2
        el('div', { id: 'step-2', class: 'form-section transition-transform duration-300 ease-in-out' },
          el('h3', { class: 'text-xl font-semibold text-gray-900 mb-6' }, 'Project Details'),
          el('div', { class: 'space-y-6' },

            el('div', {},
              el('label', { for: 'project-scope', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Project Scope Description *'),
              el('textarea', {
                id: 'project-scope', name: 'project-scope', rows: '4',
                class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm',
                placeholder: 'Describe your project requirements, goals, and expected outcomes...'
              }, '')
            ),

            el('div', { class: 'grid md:grid-cols-2 gap-6' },
              el('div', {},
                el('label', { for: 'start-date', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Expected Start Date *'),
                el('input', { type: 'date', id: 'start-date', name: 'start-date', class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm' })
              ),
              el('div', {},
                el('label', { for: 'project-duration', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Project Duration *'),
                el('select', { id: 'project-duration', name: 'project-duration', class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm custom-select' },
                  el('option', { value: '' }, 'Select duration'),
                  el('option', { value: '1-3-months' }, '1-3 months'),
                  el('option', { value: '3-6-months' }, '3-6 months'),
                  el('option', { value: '6-12-months' }, '6-12 months'),
                  el('option', { value: '1-2-years' }, '1-2 years'),
                  el('option', { value: 'ongoing' }, 'Ongoing partnership')
                )
              )
            ),

            el('div', {},
              el('label', { for: 'budget-input', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Budget Per Hour / Month / for your project *'),
              el('input', {
                type: 'text', id: 'budget-input', name: 'budget-input',
                placeholder: 'Enter your budget (e.g., $10,000/month or $100/hour)',
                class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm'
              })
            ),

            el('div', {},
              el('label', { for: 'team-size', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Number of Resources Needed *'),
              el('input', {
                type: 'number', id: 'team-size', name: 'team-size', min: '1', max: '100',
                class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm', placeholder: 'e.g., 5'
              })
            )
          )
        ), // end step-2

        // Step 3
        el('div', { id: 'step-3', class: 'form-section transition-transform duration-300 ease-in-out' },
          el('h3', { class: 'text-xl font-semibold text-gray-900 mb-6' }, 'Company Information'),
          el('div', { class: 'space-y-6' },

            el('div', { class: 'grid md:grid-cols-2 gap-6' },
              el('div', {},
                el('label', { for: 'company-name', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Company Name *'),
                el('input', { type: 'text', id: 'company-name', name: 'company-name', class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm' })
              ),
              el('div', {},
                el('label', { for: 'industry', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Industry *'),
                el('select', { id: 'industry', name: 'industry', class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm custom-select' },
                  el('option', { value: '' }, 'Select industry'),
                  el('option', { value: 'technology' }, 'Technology'),
                  el('option', { value: 'healthcare' }, 'Healthcare'),
                  el('option', { value: 'finance' }, 'Finance'),
                  el('option', { value: 'retail' }, 'Retail'),
                  el('option', { value: 'manufacturing' }, 'Manufacturing'),
                  el('option', { value: 'education' }, 'Education'),
                  el('option', { value: 'real-estate' }, 'Real Estate'),
                  el('option', { value: 'consulting' }, 'Consulting'),
                  el('option', { value: 'other' }, 'Other')
                )
              )
            ),

            el('div', { class: 'grid md:grid-cols-2 gap-6' },
              el('div', {},
                el('label', { for: 'company-size', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Company Size *'),
                el('select', { id: 'company-size', name: 'company-size', class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm custom-select' },
                  el('option', { value: '' }, 'Select company size'),
                  el('option', { value: 'startup' }, 'Startup (1-10 employees)'),
                  el('option', { value: 'small' }, 'Small (11-50 employees)'),
                  el('option', { value: 'medium' }, 'Medium (51-200 employees)'),
                  el('option', { value: 'large' }, 'Large (201-1000 employees)'),
                  el('option', { value: 'enterprise' }, 'Enterprise (1000+ employees)')
                )
              ),
              el('div', {},
                el('label', { for: 'location', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Company Location *'),
                el('input', { type: 'text', id: 'location', name: 'location', class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm', placeholder: 'City, Country' })
              )
            ),

            el('div', { class: 'grid md:grid-cols-2 gap-6' },
              el('div', {},
                el('label', { for: 'contact-name', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Contact Person Name *'),
                el('input', { type: 'text', id: 'contact-name', name: 'contact-name', class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm' })
              ),
              el('div', {},
                el('label', { for: 'contact-title', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Job Title *'),
                el('input', { type: 'text', id: 'contact-title', name: 'contact-title', class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm' })
              )
            ),

            el('div', { class: 'grid md:grid-cols-2 gap-6' },
              el('div', {},
                el('label', { for: 'contact-email', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Email Address *'),
                el('input', { type: 'email', id: 'contact-email', name: 'contact-email', class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm' })
              ),
              el('div', {},
                el('label', { for: 'contact-phone', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Phone Number *'),
                el('input', { type: 'tel', id: 'contact-phone', name: 'contact-phone', class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm' })
              )
            )
          )
        ), // end step-3

        // Step 4
        el('div', { id: 'step-4', class: 'form-section transition-transform duration-300 ease-in-out' },
          el('h3', { class: 'text-xl font-semibold text-gray-900 mb-6' }, 'Specific Requirements'),
          el('div', { class: 'space-y-6' },

            el('div', {},
              el('label', { for: 'skills-required', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Required Skills & Qualifications'),
              el('textarea', { id: 'skills-required', name: 'skills-required', rows: '3', class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm', placeholder: 'List specific skills, certifications, or experience requirements...' }, '')
            ),

            el('div', {},
              el('label', { for: 'language-requirements', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Language Requirements'),
              el('input', { type: 'text', id: 'language-requirements', name: 'language-requirements', class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm', placeholder: 'e.g., English (Native), Spanish (Conversational)' })
            ),

            el('div', { class: 'grid md:grid-cols-2 gap-6' },
              el('div', {},
                el('label', { for: 'working-hours', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Preferred Working Hours'),
                el('select', { id: 'working-hours', name: 'working-hours', class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm custom-select' },
                  el('option', { value: '' }, 'Select working hours'),
                  el('option', { value: '9am-5pm-est' }, '9 AM - 5 PM EST'),
                  el('option', { value: '9am-5pm-pst' }, '9 AM - 5 PM PST'),
                  el('option', { value: '24-7' }, '24/7 Coverage'),
                  el('option', { value: 'flexible' }, 'Flexible Hours'),
                  el('option', { value: 'overlap-required' }, 'Overlap with our team required')
                )
              ),
              el('div', {},
                el('label', { for: 'timezone', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Time Zone Preference'),
                el('select', { id: 'timezone', name: 'timezone', class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm custom-select' },
                  el('option', { value: '' }, 'Select timezone'),
                  el('option', { value: 'est' }, 'Eastern Time (EST)'),
                  el('option', { value: 'cst' }, 'Central Time (CST)'),
                  el('option', { value: 'mst' }, 'Mountain Time (MST)'),
                  el('option', { value: 'pst' }, 'Pacific Time (PST)'),
                  el('option', { value: 'utc' }, 'UTC'),
                  el('option', { value: 'flexible' }, 'Flexible')
                )
              )
            ),

            el('div', {},
              el('label', { for: 'additional-notes', class: 'block text-sm font-medium text-gray-700 mb-2' }, 'Additional Notes or Special Requirements'),
              el('textarea', { id: 'additional-notes', name: 'additional-notes', rows: '4', class: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm', placeholder: 'Any other specific requirements, preferences, or information we should know...' }, '')
            ),

            // Referral source box
            el('div', { class: 'bg-gray-50 p-6 rounded-lg' },
              el('h4', { class: 'font-medium text-gray-900 mb-3' }, 'How did you hear about us?'),
              el('div', { class: 'space-y-2' },
                el('label', { class: 'flex items-center' },
                  el('input', { type: 'radio', name: 'referral-source', value: 'google-search', class: 'mr-3' }),
                  el('span', { class: 'text-sm text-gray-700' }, 'Google Search')
                ),
                el('label', { class: 'flex items-center' },
                  el('input', { type: 'radio', name: 'referral-source', value: 'social-media', class: 'mr-3' }),
                  el('span', { class: 'text-sm text-gray-700' }, 'Social Media')
                ),
                el('label', { class: 'flex items-center' },
                  el('input', { type: 'radio', name: 'referral-source', value: 'referral', class: 'mr-3' }),
                  el('span', { class: 'text-sm text-gray-700' }, 'Referral from colleague/friend')
                ),
                el('label', { class: 'flex items-center' },
                  el('input', { type: 'radio', name: 'referral-source', value: 'industry-event', class: 'mr-3' }),
                  el('span', { class: 'text-sm text-gray-700' }, 'Industry event/conference')
                ),
                el('label', { class: 'flex items-center' },
                  el('input', { type: 'radio', name: 'referral-source', value: 'other', class: 'mr-3' }),
                  el('span', { class: 'text-sm text-gray-700' }, 'Other')
                )
              )
            )
          )
        ), // end step-4

        // Form controls
        el('div', { class: 'flex items-center justify-between pt-8 border-t border-gray-200' },
          // Prev
          el('button', {
            type: 'button', id: 'prev-btn',
            class: 'px-6 py-3 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors whitespace-nowrap',
            style: 'display: none;'
          },
            el('div', { class: 'w-4 h-4 flex items-center justify-center mr-2 inline-block' }, el('i', { class: 'ri-arrow-left-line' })),
            'Previous'
          ),

          // Right side buttons
          el('div', { class: 'flex space-x-8' },
            el('button', { type: 'button', id: 'save-draft-btn', class: 'px-6 py-3 border border-primary text-primary rounded hover:bg-primary/5 transition-colors whitespace-nowrap' }, 'Save Draft'),
            el('button', {
              type: 'button', id: 'next-btn',
              class: 'bg-primary items-center justify-between flex text-white px-6 py-3 rounded hover:bg-secondary transition-colors whitespace-nowrap'
            },
              'Next Step',
              el('div', { class: 'w-4 ml-2' }, el('i', { class: 'ri-arrow-right-line' }))
            ),
            el('button', {
              type: 'submit', id: 'submit-btn',
              class: 'bg-primary text-white px-8 py-3 rounded hover:bg-secondary transition-colors whitespace-nowrap',
              style: 'display: none;'
            }, 'Submit Quote Request')
          )
        )
      ) // end form
    ) // end card
  ); // end main

  // Success modal (hidden by default)
  const modal = el('div', { id: 'success-modal', class: 'fixed inset-0 bg-black/50 flex items-center justify-center z-50', style: 'display: none;' },
    el('div', { class: 'bg-white rounded-xl p-8 max-w-md mx-4 text-center' },
      el('div', { class: 'w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4' }, el('i', { class: 'ri-check-line text-green-600 text-2xl' })),
      el('h3', { class: 'text-xl font-semibold text-gray-900 mb-2' }, 'Quote Request Submitted!'),
      el('p', { id: 'modal-message', class: 'text-gray-600 mb-6' }, 'Thank you for your request. Our team will review your requirements and get back to you within 24 hours with a customized quote.'),
      el('div', { class: 'space-y-3' },
        el('button', { id: 'download-summary', class: 'w-full bg-primary text-white px-6 py-3 rounded hover:bg-secondary transition-colors whitespace-nowrap' }, 'Download Summary'),
        el('a', {
          href: '/',
          'data-readdy': 'true',
          class: 'block w-full border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors whitespace-nowrap'
        }, 'Return to Home')
      )
    )
  );

  // Wrap main + modal
  const wrapper = el('div', {}, main, modal);

  /* ----------------------
     Step navigation & logic
     ---------------------- */

  const form = wrapper.querySelector<HTMLFormElement>('#quote-form')!;
  const formSections = Array.from(wrapper.querySelectorAll<HTMLElement>('.form-section'));
  const progressSteps = Array.from(wrapper.querySelectorAll<HTMLElement>('.progress-step'));
  const progressBars = Array.from(wrapper.querySelectorAll<HTMLElement>('.progress-bar'));
  const currentStepEl = wrapper.querySelector<HTMLSpanElement>('#current-step')!;
  const prevBtn = wrapper.querySelector<HTMLButtonElement>('#prev-btn')!;
  const nextBtn = wrapper.querySelector<HTMLButtonElement>('#next-btn')!;
  const submitBtn = wrapper.querySelector<HTMLButtonElement>('#submit-btn')!;
  const saveDraftBtn = wrapper.querySelector<HTMLButtonElement>('#save-draft-btn')!;
  const successModal = wrapper.querySelector<HTMLDivElement>('#success-modal')!;
  const downloadBtn = wrapper.querySelector<HTMLButtonElement>('#download-summary')!;
  const formMessage = wrapper.querySelector<HTMLDivElement>('#form-message')!;
  const modalMessage = wrapper.querySelector<HTMLParagraphElement>('#modal-message')!;

  let currentIndex = 0;

  // helper: clear inline validation messages for a section
  function clearValidation(section: HTMLElement) {
    const existing = section.querySelectorAll('.field-error');
    existing.forEach(e => e.remove());
  }

  function showInlineError(input: HTMLElement, message = 'This field is required') {
    // place error after the input (or its container)
    // don't duplicate
    const container = input.parentElement ?? input;
    if (container.querySelector('.field-error')) return;
    const err = el('p', { class: 'field-error text-red-500 text-sm mt-2' }, message);
    container.appendChild(err);
  }

  function validateStep(index: number) {
    const section = formSections[index];
    if (!section) return true;
    clearValidation(section);

    // collect required elements inside section
    const requiredEls = Array.from(section.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('[required]'));
    for (const element of requiredEls) {
      if (element instanceof HTMLInputElement && element.type === 'checkbox') {
        // if checkbox required (not used here), handle group logic
        continue;
      }
      const val = (element as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement).value;
      if (!val || val.toString().trim() === '') {
        showInlineError(element as HTMLElement, 'Please complete this field.');
        // focus first invalid
        (element as HTMLElement).focus();
        return false;
      }
    }
    return true;
  }

  function collectFormObject() {
    const fd = new FormData(form);
    const obj: Record<string, any> = {};
    for (const [k, v] of fd.entries()) {
      if (Object.prototype.hasOwnProperty.call(obj, k)) {
        if (Array.isArray(obj[k])) obj[k].push(v);
        else obj[k] = [obj[k], v];
      } else {
        obj[k] = v;
      }
    }
    return obj;
  }

  // progress UI sync
  function updateProgressUI(index: number) {
    progressSteps.forEach((p, i) => {
      if (i <= index) {
        p.classList.add('bg-primary', 'text-white');
        p.classList.remove('bg-gray-200', 'text-gray-600');
      } else {
        p.classList.remove('bg-primary', 'text-white');
        p.classList.add('bg-gray-200', 'text-gray-600');
      }
    });

    // animate connecting bars: fill bars before the current index
    progressBars.forEach((bar, i) => {
      if (i < index) {
        bar.style.width = '100%';
        bar.classList.add('bg-primary');
        bar.classList.remove('bg-gray-200');
      } else {
        bar.style.width = '';
        bar.classList.remove('bg-primary');
        bar.classList.add('bg-gray-200');
      }
    });
  }

  // show/hide sections with animation
  function showStep(index: number, skipSave = false) {
    if (index < 0) index = 0;
    if (index > formSections.length - 1) index = formSections.length - 1;
    currentIndex = index;

    formSections.forEach((s, i) => {
      if (i === index) {
        s.style.display = '';
        // animate in
        s.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
        s.classList.add('opacity-100');
      } else {
        // animate out
        s.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
        // after transition, hide to prevent tabbing
        setTimeout(() => { if (i !== currentIndex) s.style.display = 'none'; }, 300);
      }
    });

    // update progress
    updateProgressUI(index);

    // step counter text
    currentStepEl.textContent = String(index + 1);

    // buttons visibility
    prevBtn.style.display = index === 0 ? 'none' : '';
    nextBtn.style.display = index === formSections.length - 1 ? 'none' : '';
    submitBtn.style.display = index === formSections.length - 1 ? '' : 'none';

    // persist step
    if (!skipSave) localStorage.setItem(STEP_KEY, String(index));
  }

  // Draft handling
  function collectAndSaveDraft() {
    const data = collectFormObject();
    localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
    showMessage('Draft saved locally.', 'success');
  }

  function loadDraft() {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return;
    try {
      const data = JSON.parse(raw);
      Object.entries(data).forEach(([k, v]) => {
        const els = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`[name="${k}"]`));
        if (!els.length) return;
        els.forEach((el) => {
          if (el instanceof HTMLInputElement && el.type === 'checkbox') {
            if (Array.isArray(v)) el.checked = (v as string[]).includes(el.value);
            else el.checked = v === el.value;
          } else if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement) {
            el.value = String(v ?? '');
          }
        });
      });
      showMessage('Draft loaded.', 'info');
    } catch (e) {
      console.warn('Failed to load draft', e);
    }
  }

  function clearDraft() {
    localStorage.removeItem(DRAFT_KEY);
  }

  // small helper to show a message above the form (success / error / info)
  function showMessage(text: string, type: 'success' | 'error' | 'info' = 'info') {
    formMessage.innerHTML = '';
    const color = type === 'success' ? 'text-green-700 bg-green-50' : type === 'error' ? 'text-red-700 bg-red-50' : 'text-blue-800 bg-blue-50';
    const wrapper = el('div', { class: `rounded-md p-3 ${color} px-4 mb-4` }, text);
    formMessage.appendChild(wrapper);
    // auto-hide success/info after 4s
    if (type !== 'error') setTimeout(() => { if (formMessage.contains(wrapper)) wrapper.remove(); }, 4000);
  }

  // submission
  async function handleSubmit(e?: Event) {
  if (e) e.preventDefault();

  // validate all steps before submit
  for (let i = 0; i < formSections.length; i++) {
    if (!validateStep(i)) {
      showStep(i);
      showMessage('Please complete required fields in the highlighted section.', 'error');
      return;
    }
  }

  // optimistic UI: show loading
  showMessage('Submitting... Please wait.', 'info');
  // disable controls to prevent double submits
  nextBtn.disabled = true;
  prevBtn.disabled = true;
  saveDraftBtn.disabled = true;
  submitBtn.disabled = true;

  try {
    // call api wrapper which throws on non-2xx
    await submitQuoteForm(form);

    // Only show success when api.postQuote resolved (2xx)
    modalMessage.textContent = 'Thank you for your request. Our team will review your requirements and get back to you within 24 hours.';;
    successModal.style.display = '';
    clearDraft();
    localStorage.removeItem(STEP_KEY);
    showMessage('Submitted successfully.', 'success');
  } catch (err: any) {
    console.warn('Submit failed', err);

    // If the error contains useful server/body info, show it
    const serverMsg = err?.message || (err?.body && (err.body.message || JSON.stringify(err.body))) || 'Submission failed.';
    // Save draft automatically so data isn't lost
    collectAndSaveDraft();

    // If it was a timeout, show timeout-specific guidance
    if (err?.timeout) {
      showMessage('Request timed out. Draft saved locally. Please try again.', 'error');
    } else {
      showMessage(`Failed to submit: ${serverMsg}`, 'error');
    }

    // Don't show success modal in the error case
  } finally {
    // re-enable controls
    nextBtn.disabled = false;
    prevBtn.disabled = false;
    saveDraftBtn.disabled = false;
    submitBtn.disabled = false;
  }
}

  // download summary
  function downloadSummary() {
    const obj = collectFormObject();
    const text = JSON.stringify(obj, null, 2);
    const blob = new Blob([text], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quote-summary.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  /* -------------------
     wire events
     ------------------- */

  // next
  const onNext = (ev?: Event) => {
    ev?.preventDefault();
    // validate current step
    if (!validateStep(currentIndex)) {
      showMessage('Please fill required fields in this step.', 'error');
      return;
    }
    showStep(Math.min(currentIndex + 1, formSections.length - 1));
    window.scrollTo({ top: wrapper.getBoundingClientRect().top + window.scrollY - 20, behavior: 'smooth' });
  };

  // prev
  const onPrev = (ev?: Event) => {
    ev?.preventDefault();
    showStep(Math.max(currentIndex - 1, 0));
    window.scrollTo({ top: wrapper.getBoundingClientRect().top + window.scrollY - 20, behavior: 'smooth' });
  };

  nextBtn.addEventListener('click', onNext);
  prevBtn.addEventListener('click', onPrev);

  // save draft
  saveDraftBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    collectAndSaveDraft();
  });

  // submit
  submitBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    handleSubmit(ev);
  });

  // allow Enter to submit only on final step
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    if (currentIndex === formSections.length - 1) handleSubmit(ev);
    else onNext(ev);
  });

  // download
  downloadBtn.addEventListener('click', downloadSummary);

  // close modal click outside
  successModal.addEventListener('click', (ev) => {
    if (ev.target === successModal) successModal.style.display = 'none';
  });

  // load draft if present
  loadDraft();

  // restore last step if present
  const savedStep = Number(localStorage.getItem(STEP_KEY) ?? 0);
  showStep(isNaN(savedStep) ? 0 : savedStep, true);

  // initial small animation setup (hide non-active)
  formSections.forEach((s, i) => {
    if (i === currentIndex) {
      s.classList.add('opacity-100');
      s.style.display = '';
    } else {
      s.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
      s.style.display = 'none';
    }
  });

  return wrapper;
}
