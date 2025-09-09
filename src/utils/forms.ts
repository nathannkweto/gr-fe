// forms.ts

const scriptUrl =
  "https://script.google.com/macros/s/AKfycbzrCbK6bHBJw29Ur-hC_EuRaaofXN7QSxaPpevtDCYMZmDOqa5w5xJmpKI4xHHfCkNhBA/exec";

// convert ArrayBuffer -> base64 (chunked to avoid argument limits)
function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000; // 32KB
  let binary = "";
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const sub = bytes.subarray(i, Math.min(i + chunkSize, bytes.length));
    let chunkStr = "";
    for (let j = 0; j < sub.length; j++) chunkStr += String.fromCharCode(sub[j]);
    binary += chunkStr;
  }
  return btoa(binary);
}

// Upload file to Drive via Apps Script
export async function uploadFile(file: File): Promise<string> {
  console.log("uploadFile: starting upload for", file.name);

  const arrayBuffer = await file.arrayBuffer();
  const base64 = arrayBufferToBase64(arrayBuffer);

  const payload = {
    action: "uploadFile",
    filename: file.name,
    mimeType: file.type || "application/octet-stream",
    content: base64,
  };

  const res = await fetch(scriptUrl, {
    redirect: "follow", // 👈 required for Apps Script
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "text/plain;charset=utf-8", // 👈 avoid preflight
    },
  });

  const text = await res.text();
  console.log("uploadFile: server response raw:", text);

  if (!res.ok) {
    throw new Error(
      `File upload failed: ${res.status} ${res.statusText} - ${text}`,
    );
  }

  let json: any;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`Invalid JSON from upload endpoint: ${text}`);
  }

  if (!json.fileUrl) {
    throw new Error(`Upload endpoint returned no fileUrl: ${text}`);
  }

  console.log("uploadFile: success fileUrl=", json.fileUrl);
  return json.fileUrl;
}

// Submit the job form (uploads file first, then submits form)
export async function submitJobForm(form: HTMLFormElement): Promise<void> {
  console.log("submitJobForm: started", form);

  const fullName = form.querySelector<HTMLInputElement>("input[name='fullName']")?.value || "";
  const email = form.querySelector<HTMLInputElement>("input[name='email']")?.value || "";
  const phone = form.querySelector<HTMLInputElement>("input[name='phone']")?.value || "";
  const origin = form.querySelector<HTMLSelectElement>("select[name='origin']")?.value || "";
  const job = form.querySelector<HTMLSelectElement>("select[name='job']")?.value || "";
  const videoUrl = form.querySelector<HTMLInputElement>("input[name='videoUrl']")?.value || "";
  const portfolio = form.querySelector<HTMLInputElement>("input[name='portfolio']")?.value || "";
  const resumeInput = form.querySelector<HTMLInputElement>("input[name='resume']");

  try {
    let resumeUrl = "";

    if (resumeInput?.files?.length) {
      const f = resumeInput.files[0];
      const maxMB = 10;
      if (f.size > maxMB * 1024 * 1024) {
        throw new Error(`File too large. Max ${maxMB} MB.`);
      }
      resumeUrl = await uploadFile(f);
    }

    const payload = {
      formType: "jobApplication",
      fullName,
      email,
      phone,
      origin,
      job,
      videoUrl,
      portfolio,
      resumeUrl,
    };

    console.log("submitJobForm: sending payload", payload);

    const res = await fetch(scriptUrl, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      redirect: "follow", // ✅ important for Apps Script
    });

    const text = await res.text().catch(() => "");
    console.log("submitJobForm: server response raw:", text);

    if (!res.ok) {
      throw new Error(`Form submission failed: ${res.status} ${res.statusText} - ${text}`);
    }

    try {
      const json = JSON.parse(text);
      console.log("submitJobForm: server json response:", json);
    } catch {
      // ignore parse errors
    }

    // ✅ Instead of alert, show the success modal
    const modal = document.getElementById("success-modal");
    if (modal) modal.style.display = "flex";

    form.reset();
  } catch (err) {
    console.error("submitJobForm error:", err);
    throw err;
  }
}

