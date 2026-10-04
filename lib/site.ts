/**
 * Contact details live here, in the code, so they travel with the project files
 * and do not depend on any hosting dashboard. Edit the values between the quotes.
 * Leave a value as "" to hide that line on the site.
 */
export const site = {
  name: "Mindset.i",
  tagline: "Inspire change. Awaken potential.",
  location: "Mbabane, Eswatini",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "mindsetdoteye@gmail.com", // add the business email, for example "hello@yourdomain.co.sz"
  phone: "+268 7676 0085",
  phone2: "+268 3502 5802",
  // International format, digits only. Used for the WhatsApp link.
  whatsapp: "26876760085",
};

export const interests = [
  { value: "prefects", label: "Prefect Leadership Development" },
  { value: "students", label: "Student Motivation" },
  { value: "teachers", label: "Teacher Team-Building" },
  { value: "parents", label: "Parents Workshop" },
  { value: "poetry", label: "Poetry and Spoken Word" },
  { value: "talks", label: "University, College or Church Talk" },
  { value: "corporate", label: "Corporate Team-Building (in development)" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export type InterestValue = (typeof interests)[number]["value"];