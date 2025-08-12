const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

async function request<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const res = await fetch(API_BASE + path, {
    headers: { 'Content-Type': 'application/json', ...(opts.headers || {}) },
    ...opts
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}

export const api = {
  async postQuote(payload: Record<string, any>, timeoutMs = 12000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const res = await fetch(API_BASE + '/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(id);

      // try parse JSON safely
      let json: any = null;
      try { json = await res.json(); } catch (_) { json = null; }

      if (!res.ok) {
        // Prefer explicit server message, then fallback to status
        const message = json && (json.message || json.error) ? (json.message || json.error) : `Request failed (${res.status})`;
        const err: any = new Error(message);
        err.status = res.status;
        err.body = json;
        throw err;
      }

      // Successful; return parsed body (or a default)
      return json ?? { message: 'Quote request submitted successfully.' };
    } catch (err: any) {
      if (err.name === 'AbortError') {
        const ae: any = new Error('Request timed out. Please try again.');
        ae.timeout = true;
        throw ae;
      }
      throw err;
    }
  },
  async contactMessage(data: unknown) {
    return request('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  // add other endpoints as needed
};
