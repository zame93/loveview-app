import { useState } from "react";
import Logo from "../components/ui/Logo";
import "./MarketingHome.css";

const inquiryUrl = "https://forms.gle/C9pJwNvVt4EM8trF9";

const services = [
  {
    number: "01",
    title: "Google Business Profile setup",
    description:
      "Create a profile or improve the one you already have, with accurate business details, categories, hours, and contact information.",
  },
  {
    number: "02",
    title: "Verification guidance",
    description:
      "Get practical guidance through Google's available verification steps. Google controls verification methods and the final decision.",
  },
  {
    number: "03",
    title: "Gemini setup assistance",
    description:
      "We'll help you check eligibility and use supported Business Profile features with Gemini where they're available to your account.",
  },
];

const inclusions = [
  "Google Business Profile setup or optimization",
  "Business information and category review",
  "Verification guidance",
  "Gemini eligibility and setup assistance",
  "Complimentary LoveView QR setup",
  "Guidance on collecting customer feedback",
];

const faqs = [
  {
    question: "What does the ₹2,000 service include?",
    answer:
      "It includes one-time assistance with Google Business Profile setup or optimization, verification guidance, Gemini setup assistance for eligible profiles, and one complimentary LoveView QR setup for your business.",
  },
  {
    question: "Can you guarantee my business will appear in Gemini answers?",
    answer:
      "No. We help you prepare accurate business information and use supported features where available. Google controls verification, feature eligibility, recommendations, and search rankings, so placement cannot be guaranteed.",
  },
  {
    question: "What if I already have a Google Business Profile?",
    answer:
      "That's fine. We'll review your existing profile and help improve its setup. You should not create a duplicate profile for the same business location.",
  },
  {
    question: "Is there a monthly subscription?",
    answer:
      "This package is a one-time ₹2,000 setup service. Any future paid or recurring services would be explained separately before you agree to them.",
  },
  {
    question: "What is the complimentary LoveView QR?",
    answer:
      "It's a QR code configured for your business that customers can scan to share feedback through the LoveView experience. The QR does not guarantee Google reviews, ratings, or business growth.",
  },
  {
    question: "Do you need my Google password?",
    answer:
      "You should retain control of your Google account. We can guide you through the steps so you can complete sensitive actions yourself. Never share your password or verification codes.",
  },
];

function CheckIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m4.5 10.4 3.4 3.4 7.6-7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="marketing-arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4.5 15.5 15.2 4.8M6 4.8h9.2V14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProductPreview() {
  return (
    <div className="marketing-preview-wrap" aria-label="Illustration of the LoveView setup service">
      <div className="marketing-preview-glow marketing-preview-glow-one" />
      <div className="marketing-preview-glow marketing-preview-glow-two" />
      <div className="marketing-preview-card">
        <div className="marketing-preview-header">
          <div className="marketing-preview-heading">
            <span className="marketing-preview-icon" aria-hidden="true">⌖</span>
            <div>
              <strong>Your business setup</strong>
              <span>A clearer Google presence</span>
            </div>
          </div>
          <span className="marketing-status-pill"><i /> Guided setup</span>
        </div>
        <div className="marketing-profile-panel">
          <div className="marketing-profile-top">
            <span className="marketing-store-icon" aria-hidden="true">▦</span>
            <div>
              <strong>Google Business Profile</strong>
              <span>Business details · Category · Contact</span>
            </div>
          </div>
          <div className="marketing-check-list">
            {["Profile details reviewed", "Verification steps explained", "Gemini eligibility checked"].map((item) => (
              <div key={item}><span className="marketing-check-bubble"><CheckIcon /></span>{item}</div>
            ))}
          </div>
        </div>
        <div className="marketing-qr-panel">
          <div className="marketing-qr-art" aria-hidden="true">
            {Array.from({ length: 49 }, (_, i) => <span key={i} className={[0,1,2,3,7,10,14,15,17,20,21,23,24,25,27,28,30,31,33,35,36,37,38,39,42,43,45,46,47,48].includes(i) ? "marketing-qr-dark" : ""} />)}
          </div>
          <div>
            <span className="marketing-eyebrow">COMPLIMENTARY BONUS</span>
            <strong>Your LoveView QR</strong>
            <p>Make it easy for customers to share feedback.</p>
          </div>
        </div>
        <div className="marketing-preview-price">
          <div><span>One-time setup fee</span><strong>₹2,000</strong></div>
          <span className="marketing-no-monthly">No monthly fee</span>
        </div>
      </div>
      <p className="marketing-preview-note">Illustrative preview · Setup depends on your business and Google's eligibility rules.</p>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="marketing-top" className="marketing-site">
      <div className="marketing-announcement">
        A clearer Google presence for your business — with a complimentary LoveView QR
      </div>

      <header className="marketing-header">
        <nav className="marketing-nav marketing-container" aria-label="Main navigation">
          <a className="marketing-brand" href="#marketing-top" onClick={closeMenu} aria-label="LoveView home"><Logo /></a>
          <button className="marketing-menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen((open) => !open)}>
            <span /><span /><span />
          </button>
          <div className={`marketing-nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#marketing-services" onClick={closeMenu}>Our service</a>
            <a href="#marketing-how-it-works" onClick={closeMenu}>How it works</a>
            <a href="#marketing-pricing" onClick={closeMenu}>Pricing</a>
            <a href="#marketing-faq" onClick={closeMenu}>FAQs</a>
            <a className="marketing-button marketing-button-primary marketing-nav-cta" href={inquiryUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Request setup <ArrowIcon /></a>
          </div>
          <a className="marketing-button marketing-button-primary marketing-desktop-cta" href={inquiryUrl} target="_blank" rel="noreferrer">Request setup <ArrowIcon /></a>
        </nav>
      </header>

      <main>
        <section className="marketing-hero">
          <div className="marketing-hero-orb" />
          <div className="marketing-hero-grid marketing-container">
            <div className="marketing-hero-copy">
              <span className="marketing-hero-kicker"><span /> LOCAL BUSINESS VISIBILITY SETUP</span>
              <h1>Get your business <span>ready for Google</span> and Gemini.</h1>
              <p className="marketing-hero-description">
                We help local businesses set up or improve their Google Business Profile, navigate verification, and explore supported Gemini features — with a complimentary LoveView QR included.
              </p>
              <div className="marketing-hero-actions">
                <a className="marketing-button marketing-button-primary marketing-button-large" href={inquiryUrl} target="_blank" rel="noreferrer">Get started for ₹2,000 <ArrowIcon /></a>
                <a className="marketing-button marketing-button-secondary marketing-button-large" href="#marketing-services">Explore what's included</a>
              </div>
              <div className="marketing-hero-points">
                <span><CheckIcon /> One-time payment</span>
                <span><CheckIcon /> QR included</span>
                <span><CheckIcon /> Human setup guidance</span>
              </div>
              <p className="marketing-disclaimer">Google controls verification, feature eligibility, recommendations, and search results. We provide setup assistance; we don't promise rankings or placement in Gemini answers.</p>
            </div>
            <ProductPreview />
          </div>
        </section>

        <section className="marketing-value-strip" aria-label="Service highlights">
          <div className="marketing-value-strip-inner marketing-container">
            <div><strong>₹2,000</strong><span>One-time service fee</span></div>
            <div><strong>1 business</strong><span>Personalized setup guidance</span></div>
            <div><strong>₹0 extra</strong><span>Complimentary LoveView QR</span></div>
          </div>
        </section>

        <section className="marketing-section marketing-services-section" id="marketing-services">
          <div className="marketing-container">
            <div className="marketing-section-heading">
              <p className="marketing-section-label">ONE SERVICE. THREE CLEAR STEPS.</p>
              <h2>The setup your business needs to get started.</h2>
              <p>No complicated software to learn. We'll help you work through the essentials and explain what happens next.</p>
            </div>
            <div className="marketing-service-grid">
              {services.map((service) => (
                <article className="marketing-service-card" key={service.number}>
                  <span className="marketing-service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="marketing-qr-section" id="marketing-how-it-works">
          <div className="marketing-container marketing-qr-grid">
            <div className="marketing-qr-copy">
              <p className="marketing-section-label">AND A LITTLE EXTRA</p>
              <h2>Your LoveView QR comes complimentary.</h2>
              <p>After your profile setup, use a business-specific LoveView QR to make it easier for customers to share feedback. It's a practical next step after improving your online business presence.</p>
              <ul className="marketing-included-list">
                <li><CheckIcon /> A QR experience associated with your business</li>
                <li><CheckIcon /> An easy way for customers to share feedback</li>
                <li><CheckIcon /> No separate QR setup charge in this offer</li>
              </ul>
              <a className="marketing-button marketing-button-light" href={inquiryUrl} target="_blank" rel="noreferrer">Request your setup <ArrowIcon /></a>
            </div>
            <div className="marketing-feedback-demo">
              <div className="marketing-feedback-window">
                <div className="marketing-feedback-brand"><span>♡</span><div><strong>LoveView feedback</strong><small>A simple customer experience</small></div></div>
                <div className="marketing-rating-preview">
                  <strong>How was your experience?</strong>
                  <div className="marketing-stars" aria-label="Illustrative five-star display">★★★★★</div>
                  <p>A simple way to share feedback after a visit.</p>
                </div>
                <div className="marketing-included-chip"><span>Business QR setup</span><strong>Included</strong></div>
              </div>
              <p className="marketing-feedback-note">Illustrative product preview. Final experience depends on the current LoveView features.</p>
            </div>
          </div>
        </section>

        <section className="marketing-section marketing-pricing-section" id="marketing-pricing">
          <div className="marketing-container">
            <div className="marketing-section-heading">
              <p className="marketing-section-label">STRAIGHTFORWARD PRICING</p>
              <h2>One setup. One payment.</h2>
              <p>Everything in this service package for one clear price.</p>
            </div>
            <div className="marketing-pricing-card">
              <div className="marketing-pricing-top">
                <div>
                  <span className="marketing-plan-tag">LOVEVIEW BUSINESS LAUNCH</span>
                  <h3>Google Profile + Gemini setup assistance</h3>
                  <p>For one business location</p>
                </div>
                <div className="marketing-price-block"><strong>₹2,000</strong><span>One-time fee</span></div>
              </div>
              <div className="marketing-pricing-divider" />
              <div className="marketing-pricing-inclusions">
                {inclusions.map((item) => <div key={item}><CheckIcon />{item}</div>)}
              </div>
              <a className="marketing-button marketing-button-primary marketing-button-full marketing-button-large" href={inquiryUrl} target="_blank" rel="noreferrer">Request your business setup <ArrowIcon /></a>
              <p className="marketing-pricing-disclaimer">Google verification and feature eligibility are decided by Google. Search rankings and Gemini recommendations are not guaranteed.</p>
            </div>
          </div>
        </section>

        <section className="marketing-section marketing-faq-section" id="marketing-faq">
          <div className="marketing-container marketing-faq-container">
            <div className="marketing-section-heading">
              <p className="marketing-section-label">COMMON QUESTIONS</p>
              <h2>Before you get started.</h2>
            </div>
            <div className="marketing-faq-list">
              {faqs.map((faq) => (
                <details className="marketing-faq-item" key={faq.question}>
                  <summary>{faq.question}<span>+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="marketing-closing-section">
          <div className="marketing-closing-card marketing-container">
            <p className="marketing-section-label">READY WHEN YOU ARE</p>
            <h2>Make your business easier to find and understand.</h2>
            <p>Start with guided Google Business Profile setup assistance and receive your LoveView QR at no extra cost.</p>
            <a className="marketing-button marketing-button-white marketing-button-large" href={inquiryUrl} target="_blank" rel="noreferrer">Get started for ₹2,000 <ArrowIcon /></a>
          </div>
        </section>
      </main>

      <footer className="marketing-footer">
        <div className="marketing-footer-inner marketing-container">
          <div className="marketing-footer-brand"><Logo /><p>Practical Google Business Profile setup assistance for local businesses, with a LoveView customer feedback QR included.</p></div>
          <div className="marketing-footer-contact"><a href="mailto:hello@theloveview.com">hello@theloveview.com</a><span>Visakhapatnam, India</span><span>© {new Date().getFullYear()} LoveView. All rights reserved.</span></div>
        </div>
      </footer>
    </div>
  );
}
