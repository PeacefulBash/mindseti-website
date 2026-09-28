export const site = {
  name: "Mindset.i",
  tagline: "Inspire change. Awaken potential.",
  location: "Mbabane, Eswatini",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
};

export const interests = [
  { value: "students", label: "Student motivation" },
  { value: "prefects", label: "Prefect training" },
  { value: "teachers", label: "Teacher team-building" },
  { value: "parents", label: "Parents' workshop (The Home Team)" },
  { value: "whole-school", label: "Whole-School Partnership" },
  { value: "poetry", label: "Poetry and spoken word" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export type InterestValue = (typeof interests)[number]["value"];
