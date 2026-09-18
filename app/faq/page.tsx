import { createPageMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/container";
import { getFaqs } from "@/lib/content/supporting";

export const metadata = createPageMetadata({
  title: "FAQ",
  description: "Read practical guest information and answers about the stay and direct enquiry flow.",
  path: "/faq",
});

export default async function FaqPage() {
  const faqs = await getFaqs();

  return (
    <main id="main-content" className="inner-page">
      <section className="editorial-hero editorial-hero--stone">
        <Container>
          <p className="eyebrow eyebrow--light">FAQ</p>
          <h1>Practical answers are part of luxury.</h1>
          <p>
            Clear policies and useful guest information reduce uncertainty without adding visual
            clutter to the main story.
          </p>
        </Container>
      </section>

      <section className="section section--ivory">
        <Container>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{faq.question}</strong>
                  <i aria-hidden="true">+</i>
                </summary>
                <div className="faq-list__answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
