import type { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Container } from "@/components/ui/container";
import { getRooms } from "@/lib/content/rooms";

export const metadata: Metadata = {
  title: "Check Availability",
  description: "Send dates and guest details through the direct availability enquiry flow.",
};

export default async function AvailabilityPage() {
  const rooms = await getRooms();

  return (
    <main id="main-content" className="inner-page">
      <section className="editorial-hero editorial-hero--lake">
        <Container>
          <p className="eyebrow eyebrow--light">Check availability</p>
          <h1>Start with your dates.</h1>
          <p>
            A short direct-enquiry flow for guests who are ready to move from inspiration to a real
            conversation.
          </p>
        </Container>
      </section>

      <section className="section section--ivory">
        <Container>
          <div className="form-page-grid">
            <div>
              <p className="eyebrow">Direct enquiry</p>
              <h2 className="display-heading">Keep booking intent simple.</h2>
              <p className="form-page-copy">
                The final production site can keep this enquiry mode or hand the selected dates to a
                hotel booking engine later.
              </p>
              <div className="trust-note">
                <strong>Demo safety</strong>
                <span>
                  No payment is collected here. Room labels remain concept data until confirmed.
                </span>
              </div>
            </div>
            <EnquiryForm
              kind="availability"
              rooms={rooms.map((room) => ({ slug: room.slug, title: room.title }))}
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
