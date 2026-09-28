/** Shared copy for the homepage and other pages. Edit text here without touching components. */

export const hero = {
  headline: "Your learners already carry what they need.",
  body: "Motivation and leadership programmes for schools in Eswatini. We help learners, prefects, teachers and parents see what they already have, term by term.",
};

/** Term-level timing only. Confirm against the Ministry of Education calendar before publishing exact dates. */
export const terms = [
  {
    id: "term-1",
    label: "Term 1",
    months: "January to April",
    summary: "A new year, and often a new prefect body.",
    items: [
      { who: "Prefects", text: "Training for newly appointed prefects, ideally before or just as the year begins." },
      { who: "Learners", text: "Sessions that set the tone for the year." },
      { who: "Teachers", text: "A start-of-year day for staff." },
      { who: "Parents", text: "An evening workshop alongside start-of-year parents' meetings." },
    ],
  },
  {
    id: "term-2",
    label: "Term 2",
    months: "May to August",
    summary: "The long middle of the year.",
    items: [
      { who: "Learners", text: "A reset session after a hard first term." },
      { who: "Teachers", text: "A mid-year day, when staffrooms most need it." },
      { who: "Parents", text: "A workshop in the weeks before exams." },
    ],
  },
  {
    id: "term-3",
    label: "Term 3",
    months: "September to November",
    summary: "Exam season.",
    items: [
      { who: "Learners", text: "Sessions that help learners see what they already carry before they sit down to write." },
      { who: "Parents", text: "An evening on supporting learners at home during exams." },
      { who: "Prefects", text: "Planning next year's prefect training while schools choose their new prefects." },
    ],
  },
] as const;

export const wholeSchool = {
  heading: "One agreement for the whole school.",
  body: "A Whole-School Partnership brings every group in your school community into the same conversation, under a single agreement.",
  groups: [
    { name: "Prefects", text: "An Activate Day for the leadership team.", href: "/programmes/prefect-training" },
    { name: "Learners", text: "A year-long Student Transformation Partnership.", href: "/programmes/student-motivation" },
    { name: "Teachers", text: "A full staff day.", href: "/programmes/teacher-team-building" },
    { name: "Parents", text: "A Home Team evening.", href: "/programmes/the-home-team" },
  ],
};

export const process = [
  { title: "You get in touch", text: "Use the form or message us on WhatsApp. Tell us about your school and what you have in mind." },
  { title: "We talk it through", text: "A short conversation about your learners, your calendar and what would help most." },
  { title: "You receive a written proposal", text: "Clear scope, dates and cost, so it can go to your headteacher or committee." },
  { title: "The session, then a report", text: "We deliver the session and follow it with a short impact report, including feedback from those who took part." },
] as const;

/**
 * Schools we have visited. Names only, with each school's permission.
 * Leave empty to hide the section. Do not use "served" or "worked with" unless true.
 */
export const visitedSchools: string[] = [];

export const testimonials: { quote: string; name: string; role: string; school: string }[] = [];

export const poetry = {
  headline: "Words that make the moment.",
  body: "Spoken word for events where the words matter: year-end functions, weddings, launches, ceremonies and church services.",
  who: "Event organisers, corporates, churches and couples.",
  occasions: [
    { title: "Year-end functions", text: "A performance that gives the evening a shape people remember." },
    { title: "Weddings", text: "Words written for the couple and the day." },
    { title: "Launches and ceremonies", text: "An opening or a close that gives the moment weight." },
    { title: "Church services", text: "Spoken word for services and special occasions." },
  ],
};
