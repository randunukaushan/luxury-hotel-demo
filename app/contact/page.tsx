import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the property through the premium website concept.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="inner-page">
      <section className="editorial-hero editorial-hero--forest">
        <Container>
          <p className="eyebrow eyebrow--light">Contact</p>
          <h1>Make the next step feel personal.</h1>
          <p>
            Verified phone, WhatsApp, email and map details will be added after owner confirmation.
            The form architecture is ready now.
          </p>
        </Container>
      </section>

      <section className="section section--ivory">
        <Container>
          <div className="form-page-grid">
            <div>
              <p className="eyebrow">General enquiry</p>
              <h2 className="display-heading">Tell us what you need.</h2>
              <p className="form-page-copy">
                This private demo validates submissions. Email delivery switches on when the
                property's receiving address and secure Resend credentials are configured.
              </p>
              <Link className="text-link" href="/availability">
                Looking for dates? Check availability <span>↗</span>
              </Link>
            </div>
            <EnquiryForm kind="contact" />
          </div>
        </Container>
      </section>
    </main>
  );
}
