import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="on-dark bg-navy pb-28 pt-40 text-white">
      <Container className="max-w-2xl! text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">404</p>
        <h1 className="mt-4 text-4xl font-extrabold text-white! sm:text-5xl">We couldn&apos;t find that page</h1>
        <p className="mt-5 text-lg text-white/70">The page may have moved, or it isn&apos;t published yet.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" variant="accent" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost-dark" size="lg">
            Contact us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
