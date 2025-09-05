import { el } from "../utils/dom";

export default function Application() {
  const header = el("header", { class: "" },
    el("h1", { class: "" }, "Job Application"),
    el("p", { class: "" }, "Please fill out the form below to apply.")
  );
  
  const form = el("form", { id: "jobApplicationForm", class: "" },
  );
  return el("div", { class: "w-2/3 md:px-20 mx-auto" }, header, form);
}
