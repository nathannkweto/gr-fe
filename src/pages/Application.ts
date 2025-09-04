// helper function
function el<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id);
  if (!element) throw new Error(`Element with id "${id}" not found`);
  return element as T;
}

// Form container + form
const applicationForm = el<HTMLDivElement>("applicationForm");
const jobApplicationForm = el<HTMLFormElement>("jobApplicationForm");

// Personal Information
const fullName = el<HTMLInputElement>("full-name");
const email = el<HTMLInputElement>("email");
const phone = el<HTMLInputElement>("phone");
const country = el<HTMLSelectElement>("country");
const jobType = el<HTMLSelectElement>("job-type");

// Loom Video
const loomLink = el<HTMLInputElement>("loom-link");

// Portfolio
const portfolio = el<HTMLInputElement>("portfolio");

// Resume Upload
const resume = el<HTMLInputElement>("resume");

// Example: reading values from form
interface JobApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  jobType: string;
  loomLink: string;
  portfolio: string;
  resume: File | null;
}

function getFormData(): JobApplicationFormData {
  return {
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    phone: phone.value.trim(),
    country: country.value,
    jobType: jobType.value,
    loomLink: loomLink.value.trim(),
    portfolio: portfolio.value.trim(),
    resume: resume.files ? resume.files[0] : null,
  };
}

// Handle submit
jobApplicationForm.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();

  const data = getFormData();
  console.log("Form submitted:", data);

  if (!data.resume) {
    alert("❌ Please upload your resume.");
    return;
  }

  alert("✅ Application submitted successfully!");
});
