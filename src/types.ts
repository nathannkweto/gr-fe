export type RouteHandler = () => Promise<HTMLElement> | HTMLElement;

export interface QuoteFormData {
  company?: string;
  fullname?: string;
  email?: string;
  services?: string[];
  details?: string;
  budget?: string;
}
