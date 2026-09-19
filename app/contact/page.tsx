import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Container } from "@/components/ui/container";
import { propertyPublicSnapshot } from "@/lib/property-public-snapshot";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact the property through the premium hotel website enquiry experience.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content" className="inner-page">
      <section className="editorial-hero editorial-hero--forest">
        <Container>
          <p className="eyebrow eyebrow--light">Contact</p>
          <h1>Plan the next step directly.</h1>
          <p>
            Call the property, view the location, or send a direct enquiry with your preferred dates
            and questions.
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
                {propertyPublicSnapshot.address}
              </p>
              <div className="contact-actions">
                <a className="button button--dark" href={propertyPublicSnapshot.phoneHref}>
                  Call {propertyPublicSnapshot.phoneDisplay}
                </a>
                <a
                  className="text-link"
                  href={propertyPublicSnapshot.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on map <span>↗</span>
                </a>
              </div>
              <p className="contact-meta">
                Public details checked {propertyPublicSnapshot.checkedAt}. Owner confirmation is
                required before public launch.
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
