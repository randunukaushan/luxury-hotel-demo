import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navigation, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <div>
            <p className="eyebrow">A quieter side of Kandy</p>
            <h2>{siteConfig.shortName}</h2>
          </div>
          <Link className="button button--light" href="/availability">
            Plan your stay
          </Link>
        </div>
        <div className="footer__grid">
          <div>
            <p className="footer__label">Explore</p>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <p className="footer__label">Guest help</p>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/availability">Check availability</Link>
          </div>
          <div>
            <p className="footer__label">Concept status</p>
            <p>
              Private sales concept. Property facts, contact channels and media require client
              approval before public launch.
            </p>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <span>Premium hospitality website concept</span>
        </div>
      </Container>
    </footer>
  );
}
