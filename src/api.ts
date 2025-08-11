const API_BASE = import.meta.env.VITE_API_BASE || '';

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
  async postQuote(data: unknown) {
    return request('/api/quotes', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  async contactMessage(data: unknown) {
    return request('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  // add other endpoints as needed
};
