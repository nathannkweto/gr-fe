import { el } from "../utils/dom";
import { submitJobForm } from "../utils/forms";

export default function Application() {
  const header = el("header", { class: "mb-8 text-center" },
    el("h1", { class: "text-4xl font-bold mb-2" }, "Job Application"),
    el("p", { class: "text-gray-600" }, "Please fill out the form below to apply.")
  );

  const modal = el(
    "div",
    {
      id: "success-modal",
      class: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
      style: "display: none;",
    },
    el(
      "div",
      { class: "bg-white rounded-xl p-8 max-w-md mx-4 text-center" },
      el(
        "div",
        {
          class:
            "w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4",
        },
        el("i", { class: "ri-check-line text-green-600 text-2xl" })
      ),
      el(
        "h3",
        { class: "text-xl font-semibold text-gray-900 mb-2" },
        "Application Sent"
      ),
      el(
        "p",
        { id: "modal-message", class: "text-gray-600 mb-6" },
        "Thank you for submitting your application. We will review your information and get back to you shortly."
      ),
      el(
        "div",
        { class: "space-y-3" },
        el(
          "a",
          {
            href: "/",
            "data-readdy": "true",
            class:
              "block w-full border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors whitespace-nowrap",
          },
          "Return to Home"
        )
      )
    )
  );


  const form = el("form", { id: "jobApplicationForm", class: "space-y-6 md:bg-white md:rounded-md form-section p-8" },
    el("div", {},
      el("label", { for: "fullName", class: "block text-sm font-medium text-gray-700" }, "Full Name"),
      el("input", { type: "text", id: "fullName", name: "fullName", required: true, class: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm", placeholder: 'John Doe' })
    ),
    el('div', { class: 'grid md:grid-cols-2 gap-6' },

      el("div", {},
        el("label", { for: "email", class: "block text-sm font-medium text-gray-700" }, "Email Address"),
        el("input", { type: "email", id: "email", name: "email", required: true, class: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm", placeholder: 'johndoe@example.com' })
      ),
      el("div", {},
        el("label", { for: "phone", class: "block text-sm font-medium text-gray-700" }, "Phone Number"),
        el("input", { type: "tel", id: "phone", name: "phone", class: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm", placeholder: '+212123456789' })
      ),),
    el('div', { class: 'grid md:grid-cols-2 gap-6' },
      el("div", {},
        el("label", { for: "origin", class: "block text-sm font-medium text-gray-700" }, "Country of Origin"),
        el("select", { type: "select", id: "origin", name: "origin", class: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm" },
          el("option", { value: "" }, "Select your country"),
          el("option", { value: "Bostwana" }, "Bostwana"),
          el("option", { value: "Egypt" }, "Egypt"),
          el("option", { value: "Ethiopia" }, "Ethiopia"),
          el("option", { value: "Ghana" }, "Ghana"),
          el("option", { value: "Kenya" }, "Kenya"),
          el("option", { value: "Nigeria" }, "Nigeria"),
          el("option", { value: "Rwanda" }, "Rwanda"),
          el("option", { value: "South Africa" }, "South Africa"),
          el("option", { value: "Morocco" }, "Morocco"),
          el("option", { value: "Namibia" }, "Namibia"),

        )
      ),
      el("div", {},
        el("label", { for: "job", class: "block text-sm font-medium text-gray-700" }, "Job Type"),
        el("select", { type: "select", id: "job", name: "job", class: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm" },
          el("option", { value: "" }, "Select a job type"),
          el("option", { value: "Sales Cold Calling" }, "Sales Cold Calling"),
          el("option", { value: "Admin Virtual Assistant" }, "Admin Virtual Assistant"),
          el("option", { value: "Front End Developer" }, "Front End Developer"),
          el("option", { value: "Back End Developer" }, "Back End Developer"),
          el("option", { value: "Full Stack Experts" }, "Full Stack Experts"),
          el("option", { value: "Angular Experts" }, "Angular Experts"),
          el("option", { value: "Marketing VA" }, "Marketing VA"),
          el("option", { value: "Social Media Manager" }, "Social Media Manager"),
        )
      )),
    el("div", {},
      el("label", { for: "videoUrl", class: "block text-sm font-medium text-gray-700" }, "Record a 2min introductory video about yourself, your experience, why you and your hobbies then paste the loom link of your video here"),
      el("input", { type: "url", id: "videoUrl", name: "videoUrl", required: true, class: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm", placeholder: 'video url...' })
    ),
    el("div", {},
      el("label", { for: "portfolio", class: "block text-sm font-medium text-gray-700" }, "Link to Portfolio"),
      el("input", { type: "url", id: "portfolio", name: "portfolio", class: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm", placeholder: 'portfolio url...' })
    ),
    el("div", {},
      el("label", { for: "resume", class: "block text-sm font-medium text-gray-700" }, "Resume"),
      el("input", { type: "file", id: "resume", name: "resume", accept: ".pdf,.doc,.docx", required: true, class: "mt-1 block w-full" })
    ),
    el("div", { class: "text-center" },
      el("button", {
        id: "jobSubmitBtn",
        type: "button", class: "bg-primary text-white px-4 py-5 rounded-md hover:bg-white hover:text-primary"
      }, "Submit Application")
    )
  );
  const container = el("div", { class: "md:w-2/3 py-20 md:px-20 w-full mx-auto" }, modal, header, form);

  document.body.appendChild(container);

  // attach click listener to the button AFTER it's in the DOM
  const submitBtn = document.getElementById("jobSubmitBtn") as HTMLButtonElement | null;
  if (submitBtn) {
    submitBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Submitting...";

      try {
        const formEl = document.getElementById("jobApplicationForm") as HTMLFormElement | null;
        if (!formEl) throw new Error("Form not found");
        await submitJobForm(formEl);
      } catch (err) {
        alert("Failed to submit application. Check console for details.");
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }
  return container;
}
