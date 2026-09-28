import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-10">
        <h1 className="text-5xl text-white md:text-7xl">That page does not exist.</h1>
        <p className="mt-6 text-xl text-[#eef6f3]">The link may be old or mistyped. Start again from the homepage.</p>
        <div className="mt-9">
          <LinkButton href="/">Go to the homepage</LinkButton>
        </div>
      </div>
    </section>
  );
}
