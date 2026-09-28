import { process } from "@/content/home";

export function Process() {
  return (
    <ol className="relative mx-auto max-w-3xl">
      {/* Glowing lime spine that the steps hang from */}
      <span
        aria-hidden="true"
        className="absolute bottom-6 left-[1.6rem] top-6 w-1 rounded-full bg-lime shadow-[0_0_18px_rgba(141,186,11,0.9)]"
      />
      {process.map((step, i) => (
        <li key={step.title} className="relative grid grid-cols-[3.4rem_1fr] gap-5 pb-8 last:pb-0">
          <span
            aria-hidden="true"
            className="relative z-10 flex h-[3.4rem] w-[3.4rem] items-center justify-center rounded-full border-2 border-lime bg-deep font-display text-2xl font-extrabold text-lime shadow-[0_0_22px_rgba(141,186,11,0.6)]"
          >
            {i + 1}
          </span>
          <div className={`glow ${i % 2 ? "glow-aqua" : ""} shape-card p-6`}>
            <h3 className="text-xl text-white">
              <span className="sr-only">Step {i + 1}: </span>
              {step.title}
            </h3>
            <p className="mt-2 text-base text-[#eef6f3]">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
