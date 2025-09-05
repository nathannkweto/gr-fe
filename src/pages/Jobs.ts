import { el } from "../utils/dom";

export default function Jobs() {
          const jobs = [
            {
                id: "sales-cold-calling",
                title: "Sales Cold Calling Specialist",
                formTitle: "Sales Cold Calling",
                location: "Fully Remote | Flexible Hours",
                icon: "fas fa-phone",
                description: {
                    about: "We are seeking a highly motivated and experienced Sales Cold Calling Specialist to join our dynamic sales team. In this role, you will be the first point of contact for potential clients, responsible for generating new leads and qualifying prospects through outbound calls. Your ability to engage confidently, overcome objections, and set qualified appointments will be critical to our sales pipeline's success.",
                    responsibilities: [
                        "Execute a high volume of outbound cold calls to prospective customers from a provided target list.",
                        "Clearly articulate our value proposition and generate interest in our products/services.",
                        "Qualify leads based on specific criteria and accurately document interactions in our CRM system.",
                        "Schedule qualified appointments and demonstrations for the account executive team.",
                        "Achieve and exceed daily and weekly call, lead, and appointment targets.",
                        "Continuously update knowledge of our offerings and target market."
                    ],
                    requirements: [
                        "Proven experience in a cold calling, telemarketing, or inside sales role.",
                        "Exceptional verbal communication and active listening skills.",
                        "Resilient personality with a proven ability to handle rejection and maintain a positive attitude.",
                        "Strong persuasive and negotiation skills with a goal-oriented mindset.",
                        "Basic computer proficiency and experience with CRM software (e.g., Salesforce, HubSpot).",
                        "Self-disciplined and able to work independently in a remote environment."
                    ]
                }
            },
            {
                id: "administrative-assistant",
                title: "Administrative Virtual Assistant",
                formTitle: "Admin Virtual Assistant",
                location: "Fully Remote | Flexible Hours",
                icon: "fas fa-laptop",
                description: {
                    about: "We are looking for a highly organized and proactive Administrative Virtual Assistant to provide comprehensive remote support to our executives and team. The ideal candidate will be a master of multitasking, possess impeccable attention to detail, and be adept at using digital tools to streamline administrative processes.",
                    responsibilities: [
                        "Manage email inboxes, filter important messages, and respond to routine inquiries.",
                        "Schedule and coordinate meetings, appointments, and travel arrangements.",
                        "Prepare reports, presentations, and documents using Google Workspace or Microsoft Office.",
                        "Perform data entry and maintain digital filing systems to ensure organization.",
                        "Handle minor bookkeeping tasks and expense reporting.",
                        "Assist with project management and team communication via tools like Slack or Asana."
                    ],
                    requirements: [
                        "Proven experience as an Administrative Assistant, Virtual Assistant, or similar role.",
                        "Excellent written and verbal communication skills.",
                        "High proficiency in G Suite (Docs, Sheets, Slides, Calendar) and/or Microsoft Office.",
                        "Strong internet research skills and tech-savviness with ability to learn new software quickly.",
                        "Exceptional time-management and organizational abilities.",
                        "Discretion and confidentiality regarding all business matters."
                    ]
                }
            },
            {
                id: "front-end-developer",
                title: "Front End Developer",
                formTitle: "Front End Developer",
                location: "Fully Remote | Flexible Hours",
                icon: "fas fa-code",
                description: {
                    about: "We are seeking a talented and passionate Front End Developer to build the user-facing side of our web applications. You will be responsible for translating UI/UX design wireframes into code, ensuring the technical feasibility of designs, and creating seamless, responsive, and engaging experiences for our users.",
                    responsibilities: [
                        "Develop new user-facing features using modern JavaScript frameworks.",
                        "Build reusable code and libraries for future use.",
                        "Ensure the technical feasibility of UI/UX designs.",
                        "Optimize application for maximum speed, scalability, and accessibility.",
                        "Collaborate with back-end developers, UX designers, and product managers.",
                        "Ensure cross-browser compatibility and mobile responsiveness."
                    ],
                    requirements: [
                        "Proven experience as a Front End Developer or similar role.",
                        "Strong proficiency in fundamental web languages: HTML5, CSS3, and modern JavaScript (ES6+).",
                        "Extensive experience with at least one modern JS framework/library such as React, Vue.js, or Angular.",
                        "Experience with CSS preprocessors (SASS, LESS) and CSS frameworks (Tailwind, Bootstrap).",
                        "Familiarity with RESTful APIs and asynchronous request handling.",
                        "Experience with version control systems, specifically Git."
                    ]
                }
            },
            {
                id: "back-end-developer",
                title: "Back End Developer",
                formTitle: "Back End Developer",
                location: "Fully Remote | Flexible Hours",
                icon: "fas fa-server",
                description: {
                    about: "We are looking for an experienced Back End Developer to build and maintain the server-side logic, databases, and APIs that power our applications. You will be responsible for integrating the front-end elements built by your colleagues into the application and ensuring high performance and responsiveness to requests from the front-end.",
                    responsibilities: [
                        "Develop and maintain all server-side network components and databases.",
                        "Ensure optimal performance of the central database and responsiveness to front-end requests.",
                        "Build robust, secure, and well-documented RESTful APIs (and/or GraphQL).",
                        "Implement data storage solutions using SQL (e.g., PostgreSQL, MySQL) and/or NoSQL (e.g., MongoDB) databases.",
                        "Collaborate with front-end developers on integrating user-facing elements.",
                        "Implement security and data protection measures."
                    ],
                    requirements: [
                        "Proven experience as a Back End Developer or similar role.",
                        "Strong proficiency with server-side languages such as Node.js, Python (Django/Flask), Ruby on Rails, Java, or PHP.",
                        "Extensive experience designing and interacting with databases (SQL & NoSQL).",
                        "Experience building and consuming RESTful APIs.",
                        "Understanding of accessibility, security compliance, and user authentication.",
                        "Proficient understanding of code versioning tools, such as Git."
                    ]
                }
            },
            {
                id: "full-stack-developer",
                title: "Full Stack Developer",
                formTitle: "Full Stack Experts",
                location: "Fully Remote | Flexible Hours",
                icon: "fas fa-laptop-code",
                description: {
                    about: "We are seeking a highly skilled Full Stack Developer to handle both front-end and back-end responsibilities. You will be involved in the entire project lifecycle, from concept to deployment, and will be crucial in building robust, end-to-end web applications.",
                    responsibilities: [
                        "Design and develop full-stack web applications from the ground up.",
                        "Work on both the front-end (client-side) and back-end (server-side) logic.",
                        "Design and develop APIs for front-end consumption.",
                        "Create database schemas that represent and support business processes.",
                        "Ensure responsiveness, performance, and security of applications.",
                        "See a project through from conception to finished product, meeting both technical and consumer needs."
                    ],
                    requirements: [
                        "Proven experience as a Full Stack Developer or similar role.",
                        "Strong front-end skills (HTML, CSS, JavaScript) and experience with a front-end framework (e. g., React, Angular, Vue).",
                        "Strong back-end skills with a server-side language (e.e., Node.js, Python, Ruby, Java).",
                        "Extensive experience working with databases (both SQL and NoSQL).",
                        "Experience with cloud services (AWS, Azure, GCP) and DevOps principles is a plus.",
                        "Ability to see the 'big picture' and understand how front-end and back-end integrate."
                    ]
                }
            },
            {
                id: "angular-developer",
                title: "Angular Developer",
                formTitle: "Angular Experts",
                location: "Fully Remote | Flexible Hours",
                icon: "fab fa-angular",
                description: {
                    about: "We are looking for a dedicated Angular Expert to design and build sophisticated single-page applications (SPAs). The ideal candidate will have deep, hands-on experience with the Angular framework and a passion for creating dynamic, high-performance user interfaces.",
                    responsibilities: [
                        "Develop user interfaces for modern web applications using the Angular framework.",
                        "Build efficient and reusable front-end components and modules.",
                        "Implement complex application state management (e.g., using NgRx).",
                        "Ensure high performance and SEO-friendliness of applications.",
                        "Collaborate with back-end developers to integrate with APIs and web services.",
                        "Write tested, documented, and clean code following best practices."
                    ],
                    requirements: [
                        "Proven, in-depth experience developing production applications with Angular (v2+).",
                        "Strong understanding of TypeScript, RxJS, and the Angular CLI.",
                        "Experience with state management patterns and libraries (e.g., NgRx, Akita).",
                        "Proficiency in HTML5, CSS3, and preprocessors like SASS.",
                        "Experience with testing frameworks (Jasmine, Karma) and writing unit/e2e tests.",
                        "Familiarity with server-side rendering (Angular Universal) is a major plus."
                    ]
                }
            },
            {
                id: "marketing-assistant",
                title: "Marketing Virtual Assistant",
                formTitle: "Marketing VA",
                location: "Fully Remote | Flexible Hours",
                icon: "fas fa-bullhorn",
                description: {
                    about: "We need a savvy Marketing Virtual Assistant to support our marketing team with a variety of digital tasks. This role is perfect for someone with hands-on experience in executing marketing campaigns, managing social media, and analyzing basic metrics to drive growth.",
                    responsibilities: [
                        "Assist in the creation and scheduling of content across social media platforms.",
                        "Conduct market research and analyze competitors.",
                        "Draft and proofread marketing copy for emails, blogs, and social posts.",
                        "Manage and update website content using a CMS (e.g., WordPress).",
                        "Assist with email marketing campaigns, including list management and basic segmentation.",
                        "Track and report on key marketing metrics (engagement, traffic, leads)."
                    ],
                    requirements: [
                        "Proven experience in a marketing support role, either as a VA, coordinator, or specialist.",
                        "Hands-on experience with major social media platforms for business (Meta, Instagram, LinkedIn, etc.).",
                        "Familiarity with email marketing tools (e.g., Mailchimp, ConvertKit).",
                        "Basic knowledge of SEO principles and content creation.",
                        "Excellent writing, editing, and communication skills.",
                        "Ability to analyze data and draw basic insights."
                    ]
                }
            },
            {
                id: "social-media-manager",
                title: "Social Media Manager",
                formTitle: "Social Media Manager",
                location: "Fully Remote | Flexible Hours",
                icon: "fas fa-hashtag",
                description: {
                    about: "We are looking for a strategic and creative Social Media Manager to take ownership of our brand's presence across all social channels. You will be responsible for developing and executing a social media strategy to increase brand awareness, improve marketing efforts, and drive engagement and growth.",
                    responsibilities: [
                        "Develop and implement a comprehensive social media strategy across all relevant platforms.",
                        "Create, curate, and manage all published content (images, video, written).",
                        "Schedule and publish daily content, fostering community engagement and conversation.",
                        "Monitor, listen, and respond to users while cultivating leads and customer satisfaction.",
                        "Analyze key metrics and compile reports on campaign performance and ROI.",
                        "Stay up-to-date with the latest social media best practices, tools, and trends."
                    ],
                    requirements: [
                        "Proven experience as a Social Media Manager, with a portfolio of successful campaigns.",
                        "Excellent knowledge of Facebook, Twitter, LinkedIn, Pinterest, Instagram, TikTok, and other emerging platforms.",
                        "Experience with social media management and analytics tools (e.g., Hootsuite, Buffer, Sprout Social).",
                        "Strong copywriting and visual storytelling skills.",
                        "Experience with social advertising and paid campaigns.",
                        "Data-driven mindset with strong analytical skills to translate metrics into strategy."
                    ]
                }
            },
            {
                id: "ui-ux-designer",
                title: "UI/UX Designer",
                formTitle: "UI/UX Designer",
                location: "Fully Remote | Flexible Hours",
                icon: "fas fa-pencil-alt",
                description: {
                    about: "We are seeking a talented UI/UX Designer to create amazing user experiences. The ideal candidate should have an eye for clean and intuitive design, possess superior UI skills, and be able to translate high-level requirements into seamless, user-friendly workflows and beautiful interfaces.",
                    responsibilities: [
                        "Conduct user research and evaluate user feedback to inform design decisions.",
                        "Create user flows, wireframes, prototypes, and high-fidelity mockups.",
                        "Design all UI elements, such as navigation menus, search boxes, tabs, and widgets.",
                        "Create and maintain style guides and design systems for consistency.",
                        "Collaborate effectively with product managers, developers, and other stakeholders.",
                        "Iterate on designs based on user testing and feedback."
                    ],
                    requirements: [
                        "Proven UI/UX design experience with a strong portfolio showcasing your process and finished work.",
                        "Proficiency in design and prototyping tools such as Figma, Sketch, Adobe XD, or InVision.",
                        "Strong understanding of user-centered design, testing methodologies, and accessibility standards.",
                        "Ability to present your designs and sell your solutions to various stakeholders.",
                        "Excellent visual design skills with sensitivity to user-system interaction.",
                        "Experience working in an Agile/Scrum development process is a plus."
                    ]
                }
            }
        ];


  let currentJobId: string | null = null;

  // Header
  const header = el("div", { class: "grid text-center" },
    el("h1", { class: "text-3xl font-bold text-gray-800" }, "Remote Job Opportunities"),
    el("p", { class: "text-gray-400 px-4 py-2" }, "Join our team of talented professionals working from around the world")
  );

  // Job list view (visible by default)
  const jobsListView = el("div", { 
    id: "jobsListView", 
    class: "grid grid-flow-row grid-cols-1 gap-5 py-5 m-5" 
  });

  // Job detail view (hidden by default)
  const jobDetailView = el("div", { 
      id: "jobDetailView", 
      class: "job-detail-view hidden grid grid-flow-row grid-cols-1 p-5 m-5 rounded-xl shadow-md bg-white" 
    },
    el("button", { id: "backBtn", class: "apply-btn bg-gray-800 text-white text-center px-8 py-3 font-bold my-5 rounded-md hover:bg-white hover:text-gray-800 transition" }, "← Back"),
    el("div", { id: "jobDetailContent" })
  );

  // Render job list
  function renderJobListings() {
    jobsListView.innerHTML = "";

    jobs.forEach(job => {
      const jobCard = el("div", { class: "rounded-xl shadow-sm bg-white p-5 md:flex grid grid-cols-1 items-center md:justify-between" },
        el("div", { class: "job-info" },
          el("h3", { class: "text-gray-800 font-bold mb-2 text-xl" }, job.title),
          el("p", { class: "text-gray-400" }, job.location)
        ),
        el("button", { 
          class: "view-job bg-primary text-white text-center px-8 py-3 my-5 rounded-md font-bold hover:bg-secondary transition", 
          "data-id": job.id 
        }, "Apply")
      );

      jobCard.querySelector(".view-job")!.addEventListener("click", (e) => {
        e.preventDefault();
        currentJobId = job.id;
        showJobDetail(job.id);
      });

      jobsListView.appendChild(jobCard);
    });
  }

  // Render job detail
function showJobDetail(jobId: string) {
  const job = jobs.find(j => j.id === jobId);

  if (job) {
    const jobDetailContent = document.getElementById("jobDetailContent")!;
    jobDetailContent.innerHTML = "";

    // About the role
    const aboutSection = el("div", { class: "mb-5" },
      el("h3", { class:"font-bold text-xl mb-2 border-b pb-3" }, "About the Role"),
      el("p", { class: "py-2" }, job.description.about)
    );

    // Responsibilities
    const responsibilitiesSection = el("div", { class: "mb-5" },
      el("h3", { class:"font-bold text-xl mb-2 border-b pb-3" }, "Key Responsibilities"),
      el("ul", { class: "responsibilities list-disc px-5" },
        ...job.description.responsibilities.map(resp =>
          el("li", { class: "py-2" }, resp)
        )
      )
    );

    // Requirements
    const requirementsSection = el("div", { class: "mb-5" },
      el("h3", { class:"font-bold text-xl mb-2 border-b pb-3" }, "Required Experience & Skills"),
      el("ul", { class: "requirements list-disc px-5" },
        ...job.description.requirements.map(req =>
          el("li", { class: "py-2" }, req)
        )
      )
    );

    // Apply button
    const applyBtn = el("div", { class: "text-center" },
        el("a", {
      href: "/jobs/apply",
      class: "apply-btn bg-primary text-white text-center px-8 py-3 my-5 rounded-md font-bold hover:bg-secondary transition",
      "data-job": job.formTitle
    }, "Apply Now"));

    //applyBtn.addEventListener("click", (e) => {
    //  e.preventDefault();
    //  const jobType = applyBtn.getAttribute("data-job");
    //});

    // Full job detail container
    const jobElement = el("div", { class: "job-category" },
      el("div", { class: "job-header bg-primary mb-5 p-3 text-white rounded-lg py-3 md:flex grid grid-cols-1 items-center md:justify-between" },
        el("h2", { class: "text-2xl font-bold p-5 flex items-center justify-center" },
          el("i", { class: `${job.icon} icon` }),
          " ",
          job.title
        ),
        el("div", { class: "job-type bg-gray-600 text-white text-center p-2 rounded-full" }, "Remote")
      ),
      el("div", { class: "job-content" },
        aboutSection,
        responsibilitiesSection,
        requirementsSection,
        applyBtn
      )
    );

    jobDetailContent.appendChild(jobElement);

    // Toggle visibility
    jobsListView.style.display = "none";
    jobDetailView.style.display = "block";
  }
}


  // Back button handler
  jobDetailView.querySelector("#backBtn")!.addEventListener("click", (e) => {
    e.preventDefault();
    jobDetailView.classList.add("hidden");
    jobsListView.classList.remove("hidden");
  });

  // Initial render
  renderJobListings();

  // Return root container
  return el("div", { class: "md:w-3/4 w-full md:px-20 mx-auto my-20" }, header, jobsListView, jobDetailView);
}