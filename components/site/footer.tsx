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
          <a className="button button--light" href="#availability">
            Plan your stay
          </a>
        </div>
        <div className="footer__grid">
          <div>
            <p className="footer__label">Explore</p>
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <p className="footer__label">Contact</p>
            <p>Contact details will be connected after client verification.</p>
          </div>
          <div>
            <p className="footer__label">Concept status</p>
            <p>Private sales concept. Property facts and media require client approval before public launch.</p>
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
