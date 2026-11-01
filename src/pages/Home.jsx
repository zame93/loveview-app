
import { useState } from "react";
import Logo from "../components/ui/Logo";

const inquiryUrl = "https://forms.gle/C9pJwNvVt4EM8trF9";

const heroImage =
  "https://images.unsplash.com/photo-1753161618086-21aebcb7ec5d?auto=format&fit=crop&fm=jpg&q=85&w=1800";

const photoCredit =
  "https://unsplash.com/photos/woman-is-on-the-phone-while-looking-at-clothes-vP2LADNZy18";

const services = [
  {
    number: "01",
    title: "Google Business Profile setup",
    description:
      "Set up your business profile or improve your existing one. We'll review your business name, categories, contact details, opening hours and the information customers need before visiting.",
  },
  {
    number: "02",
    title: "Verification guidance",
    description:
      "Understand the verification steps available for your business and get practical help working through them. Google controls the available methods and final verification decision.",
  },
  {
    number: "03",
    title: "Gemini setup assistance",
    description:
      "Check whether your verified Business Profile is eligible to connect with Gemini and learn how to use supported features when they're available to your account.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us about your business",
    description:
      "Share your business details and let us know whether you already have a Google Business Profile.",
  },
  {
    number: "02",
    title: "We guide your setup",
    description:
      "We review your profile, explain what needs attention and help you explore eligible Gemini features.",
  },
  {
    number: "03",
    title: "Receive your LoveView QR",
    description:
      "Get a complimentary QR experience configured for your business, making it easier for customers to share feedback.",
  },
];

const inclusions = [
  "Google Business Profile setup or optimization",
  "Business information and category review",
  "Verification guidance",
  "Gemini eligibility and setup assistance",
  "Complimentary LoveView QR setup",
];

const faqs = [
  {
    question: "What does the ₹2,000 service include?",
    answer:
      "One-time assistance for one business location: Google Business Profile setup or optimization, verification guidance, Gemini eligibility and setup assistance where supported, and one complimentary LoveView QR setup.",
  },
  {
    question: "I already have a Google Business Profile. Can you help?",
    answer:
      "Absolutely. We can review your existing profile and help improve its information. You should not create a duplicate profile for the same business location.",
  },
  {
    question: "Can you guarantee that my business will appear in Gemini?",
    answer:
      "No. We can help prepare your profile and check access to supported features. Google controls eligibility, recommendations and search results. We cannot guarantee rankings or placement in Gemini answers.",
  },
  {
    question: "Is Google Business Profile free?",
    answer:
      "Google Business Profile is a free Google service. The ₹2,000 is LoveView's one-time assistance fee, not a fee charged by Google.",
  },
  {
    question: "Is there a monthly subscription?",
    answer:
      "No. This package is a one-time ₹2,000 service for one business location. Any future optional service would be discussed separately before you agree to it.",
  },
  {
    question: "Do you need my Google password or OTP?",
    answer:
      "No. You should retain control of your Google account and complete sensitive account actions yourself. Never share your password or verification codes.",
  },
];

function Arrow({ diagonal = false }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="17"
      height="17"
      fill="none"
      aria-hidden="true"
    >
      {diagonal ? (
        <path
          d="M5 15 15 5M6 5h9v9"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M3.5 10h12m-5-5 5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="18"
      height="18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m4.5 10.4 3.4 3.4 7.6-7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const qrPattern = [
  "11111100111",
  "10000100101",
  "10110110111",
  "10110100001",
  "10000111101",
  "11111101010",
  "00000010101",
  "11010111011",
  "10101100100",
  "11101011101",
  "10111010111",
];

function QrArtwork() {
  return (
    <div className="lv-qr-art" aria-label="Illustrative QR code artwork">
      {qrPattern.join("").split("").map((cell, index) => (
        <span
          className={cell === "1" ? "lv-qr-cell-on" : ""}
          key={index}
        />
      ))}
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');

.lv-site {
  --lv-ink: #203047;
  --lv-muted: #657184;
  --lv-blue: #315EEA;
  --lv-teal: #138A83;
  --lv-coral: #E77B68;
  --lv-ivory: #FBF8F2;
  --lv-paper: #FFFDF9;
  --lv-line: #E9E2D8;
  --lv-font: 'DM Sans', sans-serif;
  --lv-serif: 'DM Serif Display', Georgia, serif;

  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  color: var(--lv-ink);
  background: var(--lv-ivory);
  font-family: var(--lv-font);
  font-size: 16px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

.lv-site *,
.lv-site *::before,
.lv-site *::after {
  box-sizing: border-box;
}

.lv-site img {
  display: block;
  max-width: 100%;
}

.lv-site a {
  color: inherit;
  text-decoration: none;
}

.lv-site button {
  font: inherit;
}

.lv-shell {
  width: min(1200px, calc(100% - 64px));
  margin-left: auto;
  margin-right: auto;
}

/* TOP ANNOUNCEMENT */

.lv-topline {
  min-height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  background: #EAEFEA;
  color: #53675F;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .035em;
}

/* HEADER */

.lv-header {
  position: relative;
  z-index: 30;
  background: rgba(251,248,242,.96);
  border-bottom: 1px solid rgba(32,48,71,.08);
}

.lv-nav {
  min-height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 28px;
}

.lv-brand {
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
}

.lv-brand img,
.lv-brand svg {
  max-height: 42px;
}

.lv-nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: clamp(16px, 2vw, 27px);
  margin-left: auto;
  color: #596779;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
}

.lv-nav-links a {
  white-space: nowrap;
  transition: color .2s ease;
}

.lv-nav-links a:hover {
  color: var(--lv-blue);
}

/* The mobile CTA must not appear in the laptop navigation. */
.lv-mobile-cta {
  display: none !important;
}

.lv-nav-cta,
.lv-button {
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  padding: 12px 20px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  transition: background .2s ease, transform .2s ease;
}

.lv-nav-cta {
  flex: 0 0 auto;
  min-height: 43px;
  padding-left: 17px;
  padding-right: 17px;
  background: var(--lv-ink);
  color: white !important;
}

.lv-nav-cta:hover,
.lv-button-dark:hover {
  background: #31435C;
  transform: translateY(-1px);
}

.lv-menu-toggle {
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid var(--lv-line);
  border-radius: 5px;
  background: transparent;
  color: var(--lv-ink);
}

.lv-menu-toggle span {
  display: block;
  width: 17px;
  height: 1.5px;
  margin: 5px auto;
  background: currentColor;
}

/* BUTTONS */

.lv-button-dark {
  background: var(--lv-ink);
  color: white !important;
}

.lv-button-outline {
  border-color: #C9C2B7;
  background: transparent;
  color: var(--lv-ink);
}

.lv-button-outline:hover {
  background: #F1ECE4;
}

/* HERO */

.lv-hero {
  padding: 88px 0 96px;
  background: var(--lv-ivory);
}

.lv-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(55px, 6vw, 82px);
}

.lv-hero-copy {
  min-width: 0;
  max-width: 590px;
}

.lv-overline {
  display: flex;
  align-items: center;
  gap: 11px;
  margin: 0 0 23px;
  color: var(--lv-teal);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
}

.lv-overline::before {
  content: "";
  width: 29px;
  height: 1px;
  background: var(--lv-teal);
}

.lv-hero h1 {
  max-width: 570px;
  margin: 0 0 23px;
  color: var(--lv-ink);
  font-family: var(--lv-serif);
  font-size: clamp(52px, 4.4vw, 66px);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -.035em;
}

.lv-hero h1 em {
  color: var(--lv-blue);
  font-weight: 400;
}

.lv-hero-description {
  max-width: 500px;
  margin: 0 0 28px;
  color: var(--lv-muted);
  font-size: 15px;
  line-height: 1.9;
}

.lv-hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 13px;
}

.lv-hero-points {
  display: flex;
  flex-wrap: wrap;
  gap: 9px 20px;
  margin-top: 25px;
  color: #657184;
  font-size: 11px;
  font-weight: 600;
}

.lv-hero-points span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}

.lv-hero-points svg {
  color: var(--lv-teal);
}

/* HERO PHOTO */

.lv-hero-visual {
  position: relative;
  min-width: 0;
  padding-left: 12px;
}

.lv-hero-photo-frame {
  position: relative;
  min-height: 550px;
  overflow: hidden;
  margin: 0;
  background: #D9D5CC;
}

.lv-hero-photo {
  width: 100%;
  height: 550px;
  object-fit: cover;
  object-position: center 36%;
}

.lv-photo-overlay {
  position: absolute;
  inset: auto 0 0;
  min-height: 135px;
  padding: 48px 28px 22px;
  background: linear-gradient(transparent, rgba(24,35,39,.68));
  color: white;
}

.lv-photo-overlay span {
  display: block;
  margin-bottom: 5px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .13em;
  text-transform: uppercase;
}

.lv-photo-overlay strong {
  display: block;
  max-width: 360px;
  font-family: var(--lv-serif);
  font-size: 27px;
  font-weight: 400;
  line-height: 1.15;
}

.lv-photo-credit {
  margin: 8px 0 0;
  color: #898D8D;
  font-size: 9px;
  text-align: right;
}

.lv-photo-credit a {
  text-decoration: underline;
  text-underline-offset: 2px;
}

.lv-floating-note {
  position: absolute;
  z-index: 2;
  top: 32px;
  left: -20px;
  max-width: 190px;
  padding: 14px 17px;
  background: var(--lv-paper);
  box-shadow: 0 12px 34px rgba(32,48,71,.12);
}

.lv-floating-note span {
  display: block;
  margin-bottom: 4px;
  color: var(--lv-teal);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;
}

.lv-floating-note strong {
  display: block;
  font-family: var(--lv-serif);
  font-size: 19px;
  font-weight: 400;
  line-height: 1.18;
}

/* INTRODUCTION */

.lv-intro-band {
  padding: 30px 0;
  border-top: 1px solid var(--lv-line);
  border-bottom: 1px solid var(--lv-line);
  background: #F4F0E8;
}

.lv-intro-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.lv-intro-statement {
  max-width: 650px;
  margin: 0;
  color: var(--lv-ink);
  font-family: var(--lv-serif);
  font-size: clamp(22px, 2.8vw, 32px);
  line-height: 1.3;
}

.lv-intro-side {
  max-width: 260px;
  color: var(--lv-muted);
  font-size: 11px;
  line-height: 1.7;
}

/* SHARED SECTION STYLES */

.lv-section {
  padding: 100px 0;
}

.lv-section-kicker {
  margin: 0 0 13px;
  color: var(--lv-teal);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
}

.lv-section-title {
  max-width: 690px;
  margin: 0;
  color: var(--lv-ink);
  font-family: var(--lv-serif);
  font-size: clamp(37px, 4.5vw, 56px);
  font-weight: 400;
  line-height: 1.09;
  letter-spacing: -.025em;
}

.lv-section-lead {
  max-width: 600px;
  margin: 18px 0 0;
  color: var(--lv-muted);
  font-size: 14px;
  line-height: 1.85;
}

/* SERVICES */

.lv-services {
  background: var(--lv-paper);
}

.lv-services-heading {
  display: grid;
  grid-template-columns: 1fr .72fr;
  align-items: end;
  gap: 50px;
  margin-bottom: 54px;
}

.lv-services-list {
  border-top: 1px solid var(--lv-line);
}

.lv-service-row {
  display: grid;
  grid-template-columns: 65px minmax(200px,.8fr) minmax(280px,1fr) 24px;
  align-items: start;
  gap: 25px;
  padding: 32px 0;
  border-bottom: 1px solid var(--lv-line);
}

.lv-service-number {
  color: var(--lv-coral);
  font-family: var(--lv-serif);
  font-size: 28px;
  line-height: 1.2;
}

.lv-service-row h3 {
  margin: 0;
  color: var(--lv-ink);
  font-family: var(--lv-serif);
  font-size: 25px;
  font-weight: 400;
  line-height: 1.25;
}

.lv-service-row p {
  margin: 0;
  color: var(--lv-muted);
  font-size: 13px;
  line-height: 1.8;
}

.lv-service-mark {
  color: var(--lv-teal);
  font-size: 19px;
}

/* PROCESS */

.lv-process {
  background: #F1EEE7;
}

.lv-process-heading {
  max-width: 750px;
  margin-bottom: 53px;
}

.lv-process-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  border-top: 1px solid #DCD5C9;
}

.lv-process-item {
  padding: 26px 30px 0 0;
}

.lv-process-item + .lv-process-item {
  padding-left: 30px;
  border-left: 1px solid #DCD5C9;
}

.lv-process-number {
  display: block;
  margin-bottom: 29px;
  color: var(--lv-blue);
  font-family: var(--lv-serif);
  font-size: 38px;
}

.lv-process-item h3 {
  margin: 0 0 10px;
  color: var(--lv-ink);
  font-family: var(--lv-serif);
  font-size: 23px;
  font-weight: 400;
  line-height: 1.2;
}

.lv-process-item p {
  max-width: 300px;
  margin: 0;
  color: var(--lv-muted);
  font-size: 12px;
  line-height: 1.8;
}

/* LOVEVIEW QR */

.lv-qr-section {
  padding: 100px 0;
  background: var(--lv-paper);
}

.lv-qr-layout {
  display: grid;
  grid-template-columns: minmax(0,1fr) minmax(360px,.8fr);
  align-items: center;
  gap: clamp(50px, 8vw, 110px);
}

.lv-qr-copy .lv-section-title {
  max-width: 570px;
}

.lv-qr-copy .lv-section-lead {
  margin-bottom: 25px;
}

.lv-qr-list {
  display: grid;
  gap: 12px;
  margin: 26px 0 30px;
  padding: 0;
  list-style: none;
}

.lv-qr-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #4C5B69;
  font-size: 13px;
}

.lv-qr-list svg {
  flex: 0 0 auto;
  margin-top: 2px;
  color: var(--lv-teal);
}

.lv-qr-card {
  position: relative;
  width: 100%;
  max-width: 430px;
  justify-self: end;
  padding: 30px;
  background: #F2EEE6;
  border: 1px solid #E7E0D5;
}

.lv-qr-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 27px;
}

.lv-qr-card-brand {
  color: var(--lv-ink);
  font-family: var(--lv-serif);
  font-size: 25px;
}

.lv-qr-card-label {
  color: var(--lv-teal);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .12em;
}

.lv-qr-card-center {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  background: white;
}

.lv-qr-art {
  width: 174px;
  height: 174px;
  display: grid;
  grid-template-columns: repeat(11,1fr);
  grid-template-rows: repeat(11,1fr);
  gap: 3px;
  padding: 8px;
  background: white;
}

.lv-qr-art span {
  background: transparent;
}

.lv-qr-art span.lv-qr-cell-on {
  background: var(--lv-ink);
}

.lv-qr-card-bottom {
  padding-top: 23px;
  text-align: center;
}

.lv-qr-card-bottom strong {
  display: block;
  color: var(--lv-ink);
  font-family: var(--lv-serif);
  font-size: 21px;
  font-weight: 400;
}

.lv-qr-card-bottom span {
  display: block;
  margin-top: 4px;
  color: #7C817F;
  font-size: 10px;
}

.lv-qr-disclaimer {
  margin: 13px 0 0;
  color: #8C8A83;
  font-size: 9px;
  line-height: 1.6;
  text-align: center;
}

/* PRICING */

.lv-price-section {
  padding: 90px 0;
  background: var(--lv-ink);
  color: white;
}

.lv-price-layout {
  display: grid;
  grid-template-columns: 1fr .78fr;
  align-items: center;
  gap: 80px;
}

.lv-price-copy .lv-section-kicker {
  color: #A9D5CC;
}

.lv-price-copy .lv-section-title {
  max-width: 570px;
  color: white;
}

.lv-price-copy > p:last-child {
  max-width: 480px;
  margin: 20px 0 0;
  color: #C2C9D0;
  font-size: 13px;
  line-height: 1.8;
}

.lv-price-card {
  padding: 30px;
  background: var(--lv-paper);
  color: var(--lv-ink);
}

.lv-price-card-label {
  margin: 0 0 13px;
  color: var(--lv-teal);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .14em;
}

.lv-price-amount {
  margin: 0;
  font-family: var(--lv-serif);
  font-size: 58px;
  line-height: 1.05;
}

.lv-price-caption {
  margin: 7px 0 21px;
  color: #78818B;
  font-size: 11px;
}

.lv-price-rule {
  height: 1px;
  margin: 20px 0;
  background: #E8E2D9;
}

.lv-price-includes {
  display: grid;
  gap: 11px;
  margin: 0 0 25px;
  padding: 0;
  list-style: none;
}

.lv-price-includes li {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  color: #4B596A;
  font-size: 12px;
}

.lv-price-includes svg {
  flex: 0 0 auto;
  color: var(--lv-teal);
}

.lv-price-card .lv-button {
  width: 100%;
}

.lv-price-note {
  margin: 12px 0 0;
  color: #89919A;
  font-size: 9px;
  line-height: 1.6;
  text-align: center;
}

/* FAQ */

.lv-faq {
  background: var(--lv-ivory);
}

.lv-faq-layout {
  display: grid;
  grid-template-columns: .7fr 1fr;
  gap: 90px;
}

.lv-faq-heading {
  position: sticky;
  top: 35px;
  align-self: start;
}

.lv-faq-list {
  border-top: 1px solid var(--lv-line);
}

.lv-faq-item {
  border-bottom: 1px solid var(--lv-line);
}

.lv-faq-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 21px 0;
  color: var(--lv-ink);
  font-family: var(--lv-font);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  list-style: none;
}

.lv-faq-item summary::-webkit-details-marker {
  display: none;
}

.lv-faq-item summary span {
  color: var(--lv-blue);
  font-size: 22px;
  font-weight: 400;
}

.lv-faq-item[open] summary span {
  transform: rotate(45deg);
}

.lv-faq-item p {
  max-width: 600px;
  margin: -2px 28px 20px 0;
  color: var(--lv-muted);
  font-size: 12px;
  line-height: 1.8;
}

/* FINAL CTA */

.lv-final {
  padding: 35px 0 100px;
  background: var(--lv-ivory);
}

.lv-final-inner {
  position: relative;
  overflow: hidden;
  padding: 65px 35px;
  background: #E9EEE7;
  text-align: center;
}

.lv-final-inner::before,
.lv-final-inner::after {
  content: "";
  position: absolute;
  width: 220px;
  height: 220px;
  border: 1px solid rgba(19,138,131,.15);
  border-radius: 50%;
  pointer-events: none;
}

.lv-final-inner::before {
  top: -130px;
  left: -80px;
}

.lv-final-inner::after {
  right: -110px;
  bottom: -150px;
}

.lv-final-inner .lv-section-kicker {
  position: relative;
}

.lv-final-inner h2 {
  position: relative;
  max-width: 710px;
  margin: 0 auto 17px;
  color: var(--lv-ink);
  font-family: var(--lv-serif);
  font-size: clamp(36px,4.5vw,54px);
  font-weight: 400;
  line-height: 1.1;
}

.lv-final-inner p:not(.lv-section-kicker) {
  position: relative;
  max-width: 560px;
  margin: 0 auto 25px;
  color: var(--lv-muted);
  font-size: 13px;
  line-height: 1.8;
}

.lv-final-inner .lv-button {
  position: relative;
}

/* FOOTER */

.lv-footer {
  padding: 33px 0 28px;
  border-top: 1px solid var(--lv-line);
  background: var(--lv-ivory);
}

.lv-footer-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
}

.lv-footer-description {
  max-width: 390px;
  margin: 12px 0 0;
  color: #7A828B;
  font-size: 11px;
  line-height: 1.7;
}

.lv-footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  color: #667184;
  font-size: 11px;
}

.lv-footer-links a:hover {
  color: var(--lv-blue);
}

.lv-footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 28px;
  padding-top: 16px;
  border-top: 1px solid var(--lv-line);
  color: #969A9D;
  font-size: 9px;
}

/* FOCUS STATES */

.lv-site a:focus-visible,
.lv-site button:focus-visible,
.lv-site summary:focus-visible {
  outline: 3px solid rgba(49,94,234,.35);
  outline-offset: 3px;
}

/* LAPTOP AND TABLET */

@media (max-width: 1100px) and (min-width: 701px) {
  .lv-shell {
    width: calc(100% - 52px);
  }

  .lv-nav {
    gap: 17px;
  }

  .lv-nav-links {
    gap: 15px;
    font-size: 12px;
  }

  .lv-nav-cta {
    padding-left: 13px;
    padding-right: 13px;
    font-size: 12px;
  }

  .lv-hero-grid {
    gap: 45px;
  }

  .lv-hero h1 {
    font-size: clamp(48px,5.3vw,60px);
  }

  .lv-hero-photo-frame,
  .lv-hero-photo {
    height: 480px;
    min-height: 480px;
  }

  .lv-services-heading {
    gap: 28px;
  }

  .lv-service-row {
    grid-template-columns: 50px minmax(170px,.8fr) minmax(230px,1fr) 20px;
    gap: 17px;
  }

  .lv-price-layout {
    gap: 45px;
  }

  .lv-faq-layout {
    gap: 48px;
  }
}

/* MOBILE */

@media (max-width: 700px) {
  .lv-shell {
    width: calc(100% - 36px);
  }

  .lv-topline {
    min-height: 31px;
    font-size: 9px;
  }

  .lv-nav {
    min-height: 67px;
    justify-content: space-between;
  }

  .lv-menu-toggle {
    display: block;
    margin-left: auto;
  }

  .lv-nav-cta {
    display: none;
  }

  .lv-nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    margin: 0;
    padding: 10px 22px 20px;
    border-bottom: 1px solid var(--lv-line);
    background: var(--lv-ivory);
    white-space: normal;
  }

  .lv-nav-links.lv-menu-open {
    display: flex;
  }

  .lv-nav-links > a:not(.lv-mobile-cta) {
    padding: 12px 0;
    border-bottom: 1px solid var(--lv-line);
  }

  .lv-nav-links .lv-mobile-cta {
    display: flex !important;
    justify-content: center;
    margin-top: 12px;
    padding: 13px 18px;
    border: 0;
    background: var(--lv-ink);
    color: white;
  }

  .lv-hero {
    padding: 50px 0 55px;
  }

  .lv-hero-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .lv-hero-copy {
    max-width: none;
  }

  .lv-hero h1 {
    max-width: 520px;
    font-size: clamp(47px,12vw,62px);
  }

  .lv-hero-description {
    font-size: 14px;
  }

  .lv-hero-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .lv-hero-actions .lv-button {
    width: 100%;
  }

  .lv-hero-photo-frame,
  .lv-hero-photo {
    min-height: 390px;
    height: 390px;
  }

  .lv-hero-visual {
    padding-left: 8px;
  }

  .lv-floating-note {
    top: 18px;
    left: -8px;
    max-width: 155px;
    padding: 11px 13px;
  }

  .lv-floating-note strong {
    font-size: 17px;
  }

  .lv-photo-overlay {
    padding: 40px 19px 18px;
  }

  .lv-photo-overlay strong {
    font-size: 24px;
  }

  .lv-intro-inner {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }

  .lv-intro-side {
    max-width: 400px;
  }

  .lv-section {
    padding: 70px 0;
  }

  .lv-section-title {
    font-size: clamp(37px,9vw,47px);
  }

  .lv-services-heading {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 34px;
  }

  .lv-service-row {
    grid-template-columns: 42px minmax(0,1fr) 20px;
    gap: 12px;
    padding: 23px 0;
  }

  .lv-service-row h3 {
    font-size: 22px;
  }

  .lv-service-row p {
    grid-column: 2 / 4;
    margin-top: -4px;
  }

  .lv-service-number {
    font-size: 24px;
  }

  .lv-process-heading {
    margin-bottom: 35px;
  }

  .lv-process-grid {
    grid-template-columns: 1fr;
  }

  .lv-process-item,
  .lv-process-item + .lv-process-item {
    padding: 22px 0;
    border-left: 0;
    border-bottom: 1px solid #DCD5C9;
  }

  .lv-process-number {
    margin-bottom: 13px;
    font-size: 32px;
  }

  .lv-process-item p {
    max-width: 440px;
  }

  .lv-qr-layout {
    grid-template-columns: 1fr;
    gap: 38px;
  }

  .lv-qr-card {
    max-width: 430px;
    justify-self: center;
    padding: 23px;
  }

  .lv-qr-art {
    width: 155px;
    height: 155px;
  }

  .lv-price-section {
    padding: 70px 0;
  }

  .lv-price-layout {
    grid-template-columns: 1fr;
    gap: 34px;
  }

  .lv-price-card {
    padding: 25px 21px;
  }

  .lv-price-amount {
    font-size: 53px;
  }

  .lv-faq-layout {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .lv-faq-heading {
    position: static;
  }

  .lv-final {
    padding: 10px 0 65px;
  }

  .lv-final-inner {
    width: calc(100% - 36px);
    padding: 43px 20px;
  }

  .lv-final-inner h2 {
    font-size: 39px;
  }

  .lv-footer-top,
  .lv-footer-bottom {
    align-items: flex-start;
    flex-direction: column;
  }

  .lv-footer-top {
    gap: 23px;
  }

  .lv-footer-links {
    gap: 11px 18px;
  }

  .lv-footer-bottom {
    gap: 8px;
  }
}

@media (max-width: 370px) {
  .lv-shell {
    width: calc(100% - 28px);
  }

  .lv-hero h1 {
    font-size: 44px;
  }

  .lv-hero-photo-frame,
  .lv-hero-photo {
    min-height: 340px;
    height: 340px;
  }

  .lv-service-row {
    grid-template-columns: 33px minmax(0,1fr) 18px;
    gap: 9px;
  }

  .lv-qr-card {
    padding: 17px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .lv-site *,
  .lv-site *::before,
  .lv-site *::after {
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }
}
`;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{styles}</style>

      <div className="lv-site" id="lv-top">
        <div className="lv-topline">
          A hands-on Google presence setup service for local businesses
        </div>

        <header className="lv-header">
          <nav className="lv-nav lv-shell" aria-label="Main navigation">
            <a
              className="lv-brand"
              href="#lv-top"
              onClick={closeMenu}
              aria-label="LoveView home"
            >
              <Logo />
            </a>

            <button
              className="lv-menu-toggle"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>

            <div className={`lv-nav-links ${menuOpen ? "lv-menu-open" : ""}`}>
              <a href="#lv-service" onClick={closeMenu}>Our service</a>
              <a href="#lv-process" onClick={closeMenu}>How it works</a>
              <a href="#lv-qr" onClick={closeMenu}>LoveView QR</a>
              <a href="#lv-faq" onClick={closeMenu}>FAQs</a>

              <a
                className="lv-mobile-cta"
                href={inquiryUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                Talk to LoveView <Arrow />
              </a>
            </div>

            <a
              className="lv-nav-cta"
              href={inquiryUrl}
              target="_blank"
              rel="noreferrer"
            >
              Talk to LoveView <Arrow diagonal />
            </a>
          </nav>
        </header>

        <main>
          <section className="lv-hero">
            <div className="lv-shell lv-hero-grid">
              <div className="lv-hero-copy">
                <p className="lv-overline">
                  For independent and local businesses
                </p>

                <h1>
                  Make your business easier to find on{" "}
                  <em>Google.</em>
                </h1>

                <p className="lv-hero-description">
                  We help local businesses set up or improve their Google
                  Business Profile, get guidance with verification and check
                  eligibility for supported Gemini features. Your business
                  also gets a complimentary LoveView customer feedback QR.
                </p>

                <div className="lv-hero-actions">
                  <a
                    className="lv-button lv-button-dark"
                    href={inquiryUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get your Google profile set up — ₹2,000 <Arrow />
                  </a>

                  <a className="lv-button lv-button-outline" href="#lv-service">
                    See what's included
                  </a>
                </div>

                <div className="lv-hero-points">
                  <span><Check /> One-time service</span>
                  <span><Check /> One business location</span>
                  <span><Check /> QR included</span>
                </div>
              </div>

              <div className="lv-hero-visual">
                <div className="lv-floating-note">
                  <span>A better first impression</span>
                  <strong>Start with the basics, done right.</strong>
                </div>

                <figure className="lv-hero-photo-frame">
                  <img
                    className="lv-hero-photo"
                    src={heroImage}
                    alt="A boutique owner working in her clothing store"
                    fetchPriority="high"
                  />

                  <figcaption className="lv-photo-overlay">
                    <span>Behind every local business</span>
                    <strong>
                      There is a person who put their heart into it.
                    </strong>
                  </figcaption>
                </figure>

                <p className="lv-photo-credit">
                  Photo:{" "}
                  <a href={photoCredit} target="_blank" rel="noreferrer">
                    Vitaly Gariev / Unsplash
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="lv-intro-band">
            <div className="lv-shell lv-intro-inner">
              <p className="lv-intro-statement">
                Good work deserves an online presence that reflects it.
              </p>

              <p className="lv-intro-side">
                A practical service for boutiques, clinics, cafés, studios
                and the local businesses people rely on.
              </p>
            </div>
          </section>

          <section className="lv-section lv-services" id="lv-service">
            <div className="lv-shell">
              <div className="lv-services-heading">
                <div>
                  <p className="lv-section-kicker">What we help you with</p>
                  <h2 className="lv-section-title">
                    The important details, taken care of.
                  </h2>
                </div>

                <p className="lv-section-lead">
                  No complicated software to learn. LoveView gives you
                  practical, one-to-one assistance with the essentials
                  of your business presence online.
                </p>
              </div>

              <div className="lv-services-list">
                {services.map((service) => (
                  <article className="lv-service-row" key={service.number}>
                    <span className="lv-service-number">{service.number}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="lv-service-mark" aria-hidden="true">↗</span>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="lv-section lv-process" id="lv-process">
            <div className="lv-shell">
              <div className="lv-process-heading">
                <p className="lv-section-kicker">Simple from the start</p>
                <h2 className="lv-section-title">
                  Three steps. A clearer starting point.
                </h2>
                <p className="lv-section-lead">
                  You know your business. We'll help you work through the
                  online setup without the technical confusion.
                </p>
              </div>

              <div className="lv-process-grid">
                {steps.map((step) => (
                  <article className="lv-process-item" key={step.number}>
                    <span className="lv-process-number">{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="lv-qr-section" id="lv-qr">
            <div className="lv-shell lv-qr-layout">
              <div className="lv-qr-copy">
                <p className="lv-section-kicker">A complimentary extra</p>
                <h2 className="lv-section-title">
                  A little more connection. Included.
                </h2>

                <p className="lv-section-lead">
                  Your setup also includes a business-specific LoveView QR.
                  Place it at your counter or reception so customers can
                  quickly share their experience with your business.
                </p>

                <ul className="lv-qr-list">
                  <li><Check /> A QR experience associated with your business</li>
                  <li><Check /> A simple way for customers to share feedback</li>
                  <li><Check /> No separate QR setup charge in this offer</li>
                </ul>

                <a
                  className="lv-button lv-button-dark"
                  href={inquiryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ask about your QR <Arrow />
                </a>
              </div>

              <div>
                <div className="lv-qr-card">
                  <div className="lv-qr-card-top">
                    <span className="lv-qr-card-brand">LoveView</span>
                    <span className="lv-qr-card-label">CUSTOMER FEEDBACK</span>
                  </div>

                  <div className="lv-qr-card-center">
                    <QrArtwork />
                  </div>

                  <div className="lv-qr-card-bottom">
                    <strong>Your experience matters.</strong>
                    <span>Scan to share your feedback</span>
                  </div>
                </div>

                <p className="lv-qr-disclaimer">
                  Illustrative QR artwork only. Your business QR is generated
                  separately during setup.
                </p>
              </div>
            </div>
          </section>

          <section className="lv-price-section" id="lv-pricing">
            <div className="lv-shell lv-price-layout">
              <div className="lv-price-copy">
                <p className="lv-section-kicker">One clear price</p>
                <h2 className="lv-section-title">
                  Let's get your business presence in better shape.
                </h2>
                <p>
                  One-time assistance for one business location. No monthly
                  subscription attached to this package and no Google fee
                  hidden inside the price.
                </p>
              </div>

              <div className="lv-price-card">
                <p className="lv-price-card-label">LOVEVIEW BUSINESS SETUP</p>
                <p className="lv-price-amount">₹2,000</p>
                <p className="lv-price-caption">
                  One-time LoveView service fee · One location
                </p>

                <div className="lv-price-rule" />

                <ul className="lv-price-includes">
                  {inclusions.map((item) => (
                    <li key={item}><Check /> {item}</li>
                  ))}
                </ul>

                <a
                  className="lv-button lv-button-dark"
                  href={inquiryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Request your setup <Arrow />
                </a>

                <p className="lv-price-note">
                  Google controls verification, eligibility and search
                  recommendations. No ranking or Gemini placement is promised.
                </p>
              </div>
            </div>
          </section>

          <section className="lv-section lv-faq" id="lv-faq">
            <div className="lv-shell lv-faq-layout">
              <div className="lv-faq-heading">
                <p className="lv-section-kicker">Before we begin</p>
                <h2 className="lv-section-title">
                  A few things you may be wondering.
                </h2>
                <p className="lv-section-lead">
                  Still have a question? Send it to us and we'll explain
                  before you decide.
                </p>
              </div>

              <div className="lv-faq-list">
                {faqs.map((faq) => (
                  <details className="lv-faq-item" key={faq.question}>
                    <summary>
                      {faq.question}
                      <span aria-hidden="true">+</span>
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="lv-final">
            <div className="lv-shell lv-final-inner">
              <p className="lv-section-kicker">Whenever you're ready</p>
              <h2>
                You've built the business. Let's help people find it.
              </h2>
              <p>
                Start with a clearer Google Business Profile, practical setup
                guidance and a complimentary LoveView QR.
              </p>
              <a
                className="lv-button lv-button-dark"
                href={inquiryUrl}
                target="_blank"
                rel="noreferrer"
              >
                Get started for ₹2,000 <Arrow />
              </a>
            </div>
          </section>
        </main>

        <footer className="lv-footer">
          <div className="lv-shell">
            <div className="lv-footer-top">
              <div>
                <a className="lv-brand" href="#lv-top" aria-label="LoveView home">
                  <Logo />
                </a>

                <p className="lv-footer-description">
                  Helping local businesses build a clearer online presence
                  and make customer feedback easier to collect.
                </p>
              </div>

              <div className="lv-footer-links">
                <a href="#lv-service">Our service</a>
                <a href="#lv-qr">LoveView QR</a>
                <a href="#lv-faq">FAQs</a>
                <a href="mailto:hello@theloveview.com">Email us</a>
              </div>
            </div>

            <div className="lv-footer-bottom">
              <span>
                © {new Date().getFullYear()} LoveView. All rights reserved.
              </span>
              <span>
                LoveView is an independent service and is not affiliated
                with or endorsed by Google.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
