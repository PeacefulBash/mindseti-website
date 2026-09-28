import type { SceneName } from "@/components/ui/Scene";

/**
 * Programme pages. Names come from the Mindset.i strategy document.
 * No prices are shown: schools request a proposal instead.
 * Descriptions marked "confirm" need the client to check the wording.
 */
export type Programme = {
  slug: string;
  interest: string;
  name: string;
  audience: string;
  headline: string;
  summary: string;
  scene: SceneName;
  shape: "arch" | "leaf" | "blob";
  facts: { label: string; text: string }[];
  moments: { title: string; text: string }[];
  momentsHeading: string;
  receives: string[];
  cardText: string;
};

export const programmes: Programme[] = [
  {
    slug: "student-motivation",
    interest: "students",
    name: "Student motivation",
    audience: "Learners",
    headline: "Your learners already carry what they need.",
    summary:
      "Sessions for learners that follow the school year: setting the tone at the start, resetting after a hard term, and steadying nerves before exams. We help them see what they already have, term by term.",
    scene: "students",
    shape: "arch",
    cardText: "Sessions timed to the school year, from the first week back to exam season.",
    facts: [
      { label: "Who usually books", text: "The headteacher, with the guidance teacher or Form 5 teacher as champion." },
      { label: "When schools book", text: "Ignite in Term 1, Reset in Term 2 and Rise From Within before exams." },
      { label: "Ways to book", text: "A single session, a Growth package, or the year-long Student Transformation Partnership." },
    ],
    momentsHeading: "Three moments in the year",
    moments: [
      { title: "Ignite", text: "Sets the tone at the start of the year." },
      { title: "Reset", text: "Helps a class recover from a hard term and recommit." },
      { title: "Rise From Within", text: "Prepares learners for exam season." },
    ],
    receives: [
      "Feedback results from the learners who took part",
      "A short impact report after the session",
      "A conversation about what should come next",
    ],
  },
  {
    slug: "prefect-training",
    interest: "prefects",
    name: "Prefect training",
    audience: "Prefects",
    headline: "Every prefect leaves knowing what the role demands.",
    summary:
      "Training for the moment a new prefect body is appointed. Every prefect learns the minimum the role demands, and the leader in them builds on that.",
    scene: "prefects",
    shape: "leaf",
    cardText: "For the moment a new prefect body is appointed, before the year gets busy.",
    facts: [
      { label: "Who usually books", text: "The deputy head or prefect coordinator, approved by the headteacher." },
      { label: "When schools book", text: "When new prefects are appointed, usually at the end of one year or the start of the next." },
      { label: "Ways to book", text: "An Activate Day, an Anchor Year, or a two-year Legacy Partnership." },
    ],
    momentsHeading: "Three ways to work together",
    moments: [
      { title: "Activate Day", text: "A single training day for the new prefect body." },
      { title: "Anchor Year", text: "Support that carries the prefects through the year." },
      { title: "Legacy Partnership", text: "Two years of work, and the only option that includes the Prefect Bluebook." },
    ],
    receives: [
      "A programme built around the role your prefects are stepping into",
      "The Prefect Bluebook, with the Legacy Partnership",
      "A short impact report and feedback from participants",
    ],
  },
  {
    slug: "teacher-team-building",
    interest: "teachers",
    name: "Teacher team-building",
    audience: "Teachers",
    headline: "A day for teachers to refill their own cup.",
    summary:
      "Teachers pour into learners all year. This is a full day for the staff to step back, connect and recover together, so they return to the classroom ready.",
    scene: "teachers",
    shape: "blob",
    cardText: "A full day for staff, at the start of the year, the mid-year break or the end.",
    facts: [
      { label: "Who usually books", text: "The headteacher." },
      { label: "When schools book", text: "The start of the year, the mid-year break and the end of the year." },
      { label: "Format", text: "One full day at your school." },
    ],
    momentsHeading: "When staffrooms need it most",
    moments: [
      { title: "Start of the year", text: "Bring the team together before the term gets busy." },
      { title: "Mid-year break", text: "Recover and reset when energy is lowest." },
      { title: "End of the year", text: "Close the year well and look ahead." },
    ],
    receives: [
      "A full day facilitated at your school",
      "A short impact report and staff feedback",
      "A conversation about what would help the staffroom next",
    ],
  },
  {
    slug: "the-home-team",
    interest: "parents",
    name: "The Home Team",
    audience: "Parents",
    headline: "Your child already carries what they need to succeed.",
    summary:
      "A workshop for parents, so they hear the same language their children hear at school. Parents shape a learner's habits, confidence and belief more than anyone else.",
    scene: "parents",
    shape: "arch",
    cardText: "A two-hour evening or Saturday workshop that brings parents into the same conversation.",
    facts: [
      { label: "Who usually books", text: "The headteacher, often with the school committee or parents' association." },
      { label: "When schools book", text: "Start-of-year parents' meetings, parents' days, and the term before exams." },
      { label: "Format", text: "A two-hour evening or Saturday workshop at the school." },
    ],
    momentsHeading: "What parents leave with",
    moments: [
      { title: "Support for study", text: "Practical ways to help with study at home." },
      { title: "Confidence and discipline", text: "Ways to build both, day to day." },
      { title: "A family commitment card", text: "A short card the family can keep." },
    ],
    receives: [
      "A workshop delivered at your school",
      "Feedback forms from parents",
      "Works well alongside student sessions in the same term",
    ],
  },
];

export const getProgramme = (slug: string) => programmes.find((p) => p.slug === slug);
