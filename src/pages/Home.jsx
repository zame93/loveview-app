
import { useState } from "react";
import Logo from "../components/ui/Logo";

const inquiryUrl = "https://forms.gle/C9pJwNvVt4EM8trF9";

const benefits = [
  {
    number: "01",
    icon: "reviews",
    title: "Understand what customers are saying",
    description:
      "Ask Gemini to summarize your recent reviews and identify the themes customers repeatedly mention.",
    prompt: "Summarize my recent customer reviews.",
    response:
      "Find recurring feedback themes and understand what customers appreciate or suggest improving.",
    color: "blue",
  },
  {
    number: "02",
    icon: "reply",
    title: "Write more thoughtful review replies",
    description:
      "Get help drafting responses to customer reviews instead of struggling to find the right words.",
    prompt: "Help me reply to my latest review.",
    response:
      "Use the review as context to draft a suitable response for you to review.",
    color: "teal",
  },
  {
    number: "03",
    icon: "profile",
    title: "Keep your business information current",
    description:
      "Work with supported profile details such as opening hours, contact information, menus and action links.",
    prompt: "Review my business hours and contact details.",
    response:
      "See relevant profile information and request supported updates.",
    color: "coral",
  },
  {
    number: "04",
    icon: "posts",
    title: "Create updates for your customers",
    description:
      "Get help creating, scheduling and publishing supported business updates, offers and events.",
    prompt: "Help me create a post for this week's offer.",
    response:
      "Work on an offer or update for your Business Profile.",
    color: "amber",
  },
  {
    number: "05",
    icon: "insights",
    title: "Understand how people discover you",
    description:
      "Explore available performance metrics, website clicks, direction requests, bookings and search keywords.",
    prompt: "What search keywords bring people to my business?",
    response:
      "Explore the search terms customers use to discover your business.",
    color: "purple",
  },
];

const faqs = [
  {
    question: "What happens when I connect my Business Profile to Gemini?",
    answer:
      "Gemini can work with your connected Google Business Profile. Depending on eligibility and feature availability, you can ask it about customer reviews, draft review replies, update supported business details, create profile posts and explore business performance insights.",
  },
  {
    question: "Do I need a verified Google Business Profile?",
    answer:
      "Yes. Google's current connection requirements specify that you must be an owner or manager of a verified Business Profile. We can help with profile setup and verification guidance first, but Google controls verification.",
  },
  {
    question: "Who is eligible to connect?",
    answer:
      "Google currently requires you to be at least 18, be an owner or manager of only one verified Business Profile, use a personal Google Account associated with that profile, and have Keep Activity enabled. The feature is available through the Gemini web app, not work or school accounts. Availability can vary.",
  },
  {
    question: "Can Gemini improve my Google ranking?",
    answer:
      "Connecting your profile gives you additional ways to manage it and understand its performance. It does not guarantee higher Search rankings, more customers or recommendations in Gemini answers.",
  },
  {
    question: "What does LoveView charge?",
    answer:
      "Our one-time service fee is ₹2,000 for one business location. It covers profile setup or optimization, verification guidance, eligibility checks and Gemini connection assistance where supported, plus a complimentary LoveView QR.",
  },
  {
    question: "Is Google Business Profile free?",
    answer:
      "Yes. Google Business Profile is free. The ₹2,000 is LoveView's service fee for setup and assistance, not a payment to Google.",
  },
  {
    question: "Do you need my Google password or OTP?",
    answer:
      "No. You retain control of your Google Account. We guide you through the connection steps, and you complete sensitive actions yourself. Never share your password or verification codes.",
  },
  {
    question: "What if the Gemini connection is not available for my account?",
    answer:
      "We can check the published requirements and explain what needs to be completed first. Google controls feature access and rollout, so we cannot guarantee that the connection option will be available to every account.",
  },
];

function Arrow({ diagonal = false }) {
  return (
    <svg viewBox="0 0 20 20" width="17" height="17" fill="none" aria-hidden="true">
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
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
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

function PinIcon() {
  return (
    <svg viewBox="0 0 40 40" width="35" height="35" fill="none" aria-hidden="true">
      <path d="M20 35s12-12 12-21a12 12 0 1 0-24 0c0 9 12 21 12 21Z"
        stroke="currentColor" strokeWidth="2.3" />
      <circle cx="20" cy="14" r="4.5" stroke="currentColor" strokeWidth="2.3" />
    </svg>
  );
}

function SparkleIcon({ size = 25 }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} fill="none" aria-hidden="true">
      <path
        d="M20 3c2.5 9.5 7 14 17 17-10 2.5-14.5 7-17 17C17.5 27 13 22.5 3 20 13 17.5 17.5 13 20 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function QrArtwork() {
  const pattern = [
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

  return (
    <div className="lv3-qr-art" aria-label="Illustrative QR artwork">
      {pattern.join("").split("").map((cell, index) => (
        <span className={cell === "1" ? "on" : ""} key={index} />
      ))}
    </div>
  );
}

function ConnectionVisual() {
  return (
    <div className="lv3-connection">
      <div className="lv3-visual-caption">
        <span className="lv3-caption-dot" />
        HOW YOUR BUSINESS AND GEMINI WORK TOGETHER
      </div>

      <div className="lv3-app-grid">
        <div className="lv3-profile-card">
          <div className="lv3-app-top">
            <div className="lv3-app-icon lv3-profile-icon">
              <PinIcon />
            </div>
            <div>
              <strong>Google Business Profile</strong>
              <span>Your business information</span>
            </div>
          </div>

          <div className="lv3-profile-example">
            <span className="lv3-mini-label">ILLUSTRATIVE PROFILE</span>
            <strong>Your business name</strong>
            <span>Business category · Location</span>
          </div>

          <div className="lv3-profile-lines">
            <div><span>Business hours</span><b>Profile details</b></div>
            <div><span>Customer reviews</span><b>Feedback</b></div>
            <div><span>Website & contact</span><b>Links</b></div>
          </div>

          <div className="lv3-profile-footer">
            <span className="lv3-green-dot" />
            YOUR BUSINESS PROFILE
          </div>
        </div>

        <div className="lv3-connector">
          <div className="lv3-connector-line" />
          <div className="lv3-connector-orb">
            <Arrow />
          </div>
          <span>CONNECT</span>
        </div>

        <div className="lv3-gemini-card">
          <div className="lv3-gemini-top">
            <div className="lv3-gemini-symbol">
              <SparkleIcon size={21} />
            </div>
            <div>
              <strong>Gemini</strong>
              <span>Work with your business profile</span>
            </div>
          </div>

          <div className="lv3-chat-example">
            <span className="lv3-chat-label">YOU ASK</span>
            <p>Summarize my recent customer reviews.</p>
          </div>

          <div className="lv3-gemini-answer">
            <div className="lv3-answer-heading">
              <SparkleIcon size={15} />
              <span>GEMINI CAN HELP</span>
            </div>
            <p>
              Identify common feedback themes and help you understand what
              customers are saying.
            </p>
          </div>

          <div className="lv3-gemini-footer">
            <span className="lv3-purple-dot" />
            EXAMPLE CONVERSATION
          </div>
        </div>
      </div>

      <div className="lv3-connection-status">
        <span className="lv3-status-pulse" />
        <strong>Business Profile + Gemini</strong>
        <span>One connected experience</span>
      </div>

      <p className="lv3-visual-disclaimer">
        Illustrative interface — not a live Google or Gemini account.
      </p>
    </div>
  );
}

function BenefitCard({ item }) {
  return (
    <article className={`lv3-benefit lv3-${item.color}`}>
      <div className="lv3-benefit-top">
        <span>{item.number}</span>
        <span className="lv3-benefit-mark">
          {item.icon === "reviews" ? "✳" :
           item.icon === "reply" ? "↗" :
           item.icon === "profile" ? "⌖" :
           item.icon === "posts" ? "✦" : "⌁"}
        </span>
      </div>

      <h3>{item.title}</h3>
      <p>{item.description}</p>

      <div className="lv3-example-prompt">
        <span>TRY ASKING GEMINI</span>
        <strong>“{item.prompt}”</strong>
      </div>
    </article>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');

.lv3-site {
  --ink: #203047;
  --muted: #627186;
  --blue: #315EEA;
  --blue-soft: #EDF3FF;
  --teal: #138A83;
  --teal-soft: #E8F5F2;
  --purple: #7954D8;
  --purple-soft: #F1ECFF;
  --coral: #E77B68;
  --amber: #D89A32;
  --cream: #FBF9F5;
  --paper: #FFFFFF;
  --line: #E5E8EF;
  --serif: 'DM Serif Display', Georgia, serif;
  --sans: 'DM Sans', sans-serif;

  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: var(--cream);
  color: var(--ink);
  font-family: var(--sans);
  font-size: 15px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

.lv3-site *,
.lv3-site *::before,
.lv3-site *::after {
  box-sizing: border-box;
}

.lv3-site a {
  color: inherit;
  text-decoration: none;
}

.lv3-site button {
  font: inherit;
}

.lv3-shell {
  width: min(1200px, calc(100% - 64px));
  margin: 0 auto;
}

.lv3-topline {
  padding: 8px 18px;
  background: #E9F0FF;
  color: #344E96;
  text-align: center;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .025em;
}

.lv3-header {
  position: relative;
  z-index: 30;
  border-bottom: 1px solid rgba(32,48,71,.08);
  background: rgba(251,249,245,.97);
}

.lv3-nav {
  min-height: 78px;
  display: flex;
  align-items: center;
  gap: 30px;
}

.lv3-brand {
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
}

.lv3-nav-links {
  display: flex;
  align-items: center;
  gap: 27px;
  margin-left: auto;
  color: #5E6A7C;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
}

.lv3-nav-links a:hover {
  color: var(--blue);
}

.lv3-nav-cta,
.lv3-button {
  min-height: 47px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 19px;
  border: 1px solid transparent;
  border-radius: 7px;
  font-family: var(--sans);
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  transition: .2s ease;
}

.lv3-nav-cta {
  flex: 0 0 auto;
  background: var(--ink);
  color: white !important;
}

.lv3-button-primary {
  background: var(--blue);
  color: white !important;
  box-shadow: 0 8px 22px rgba(49,94,234,.16);
}

.lv3-button-primary:hover,
.lv3-nav-cta:hover {
  transform: translateY(-2px);
  filter: brightness(.95);
}

.lv3-button-secondary {
  border-color: #CCD5E5;
  background: rgba(255,255,255,.65);
  color: var(--ink);
}

.lv3-button-secondary:hover {
  background: white;
}

.lv3-mobile-cta,
.lv3-menu-toggle {
  display: none;
}

.lv3-hero {
  padding: 83px 0 75px;
  background:
    radial-gradient(ellipse at 82% 28%, rgba(121,84,216,.09), transparent 33%),
    radial-gradient(ellipse at 15% 82%, rgba(19,138,131,.08), transparent 38%),
    var(--cream);
}

.lv3-hero-grid {
  display: grid;
  grid-template-columns: minmax(0,.92fr) minmax(0,1.08fr);
  align-items: center;
  gap: clamp(45px,6vw,82px);
}

.lv3-kicker {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 20px;
  color: var(--blue);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
}

.lv3-kicker::before {
  content: "";
  width: 26px;
  height: 2px;
  background: var(--blue);
}

.lv3-hero h1 {
  max-width: 590px;
  margin: 0 0 22px;
  font-family: var(--serif);
  font-size: clamp(48px,5.15vw,68px);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -.025em;
}

.lv3-hero h1 em {
  color: var(--blue);
  font-weight: 400;
}

.lv3-hero-copy {
  max-width: 550px;
  margin: 0 0 27px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.85;
}

.lv3-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.lv3-hero-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  margin-top: 24px;
  color: #667387;
  font-size: 11px;
  font-weight: 600;
}

.lv3-hero-trust span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.lv3-hero-trust svg {
  color: var(--teal);
}

.lv3-hero-note {
  margin-top: 18px;
  color: #8992A0;
  font-size: 10px;
  line-height: 1.6;
}

/* THE PROFILE-TO-GEMINI DEMONSTRATION */

.lv3-connection {
  position: relative;
  padding: 21px;
  border: 1px solid #E3E6F0;
  border-radius: 19px;
  background: rgba(255,255,255,.76);
  box-shadow: 0 25px 80px rgba(38,54,91,.09);
}

.lv3-visual-caption {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 19px;
  color: #6B778B;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .095em;
}

.lv3-caption-dot,
.lv3-green-dot,
.lv3-purple-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex: 0 0 auto;
}

.lv3-caption-dot,
.lv3-green-dot {
  background: #169B83;
}

.lv3-app-grid {
  display: grid;
  grid-template-columns: 1fr 42px 1fr;
  align-items: center;
  gap: 9px;
}

.lv3-profile-card,
.lv3-gemini-card {
  min-width: 0;
  min-height: 280px;
  padding: 16px 13px;
  border: 1px solid #E2E7F0;
  border-radius: 13px;
  background: white;
}

.lv3-gemini-card {
  border-color: #E4DDF6;
  background: linear-gradient(145deg,#FFFFFF,#F7F4FF);
}

.lv3-app-top,
.lv3-gemini-top {
  min-height: 43px;
  display: flex;
  align-items: center;
  gap: 9px;
  padding-bottom: 12px;
  border-bottom: 1px solid #EDF0F4;
}

.lv3-app-icon {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border-radius: 10px;
}

.lv3-profile-icon {
  color: var(--blue);
  background: var(--blue-soft);
}

.lv3-app-top strong,
.lv3-gemini-top strong {
  display: block;
  color: var(--ink);
  font-size: 10px;
  font-weight: 800;
  line-height: 1.3;
}

.lv3-app-top span,
.lv3-gemini-top span {
  display: block;
  margin-top: 3px;
  color: #8490A0;
  font-size: 8px;
  line-height: 1.3;
}

.lv3-profile-example {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 13px;
  padding: 10px;
  border-radius: 8px;
  background: #F6F8FC;
}

.lv3-mini-label,
.lv3-chat-label {
  color: #8190A5;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .1em;
}

.lv3-profile-example strong {
  color: #34445C;
  font-size: 11px;
}

.lv3-profile-example > span:last-child {
  color: #8490A0;
  font-size: 8px;
}

.lv3-profile-lines {
  display: grid;
  gap: 0;
  margin-top: 10px;
}

.lv3-profile-lines div {
  display: flex;
  justify-content: space-between;
  gap: 4px;
  padding: 8px 0;
  border-bottom: 1px solid #F0F1F4;
}

.lv3-profile-lines span {
  color: #748195;
  font-size: 8px;
}

.lv3-profile-lines b {
  color: #394D69;
  font-size: 8px;
  font-weight: 700;
}

.lv3-profile-footer,
.lv3-gemini-footer {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  color: #8190A5;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv3-connector {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  color: var(--blue);
}

.lv3-connector-line {
  width: 32px;
  height: 2px;
  position: relative;
  overflow: hidden;
  background: #D6DEEF;
}

.lv3-connector-line::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 45%;
  background: var(--blue);
  animation: lv3-flow 2s ease-in-out infinite;
}

.lv3-connector-orb {
  width: 33px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--blue);
  color: white;
  box-shadow: 0 0 0 6px rgba(49,94,234,.09);
  animation: lv3-orb 2.8s ease-in-out infinite;
}

.lv3-connector > span {
  color: #71809A;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv3-gemini-symbol {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border-radius: 10px;
  background: linear-gradient(145deg,#E9E3FF,#E3F2FC);
  color: var(--purple);
}

.lv3-chat-example {
  margin-top: 13px;
  padding: 10px;
  border: 1px solid #E7E2F4;
  border-radius: 9px 9px 9px 2px;
  background: white;
}

.lv3-chat-example p {
  margin: 4px 0 0;
  color: #4D5A70;
  font-size: 9px;
  font-weight: 600;
  line-height: 1.5;
}

.lv3-gemini-answer {
  margin-top: 9px;
  padding: 10px;
  border-radius: 9px;
  background: #F1ECFF;
}

.lv3-answer-heading {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--purple);
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv3-gemini-answer p {
  margin: 6px 0 0;
  color: #5B5277;
  font-size: 8px;
  line-height: 1.55;
}

.lv3-purple-dot {
  background: var(--purple);
}

.lv3-connection-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-top: 17px;
  padding: 11px;
  border: 1px solid #E2E7F0;
  border-radius: 8px;
  background: #F8FAFD;
  font-size: 9px;
}

.lv3-connection-status strong {
  color: var(--ink);
}

.lv3-connection-status > span:last-child {
  color: #8A94A3;
}

.lv3-status-pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #169B83;
  box-shadow: 0 0 0 4px rgba(22,155,131,.12);
  animation: lv3-pulse 2s ease-in-out infinite;
}

.lv3-visual-disclaimer {
  margin: 10px 0 0;
  color: #929BA8;
  font-size: 8px;
  text-align: center;
}

@keyframes lv3-flow {
  0% { transform: translateX(-110%); }
  100% { transform: translateX(240%); }
}

@keyframes lv3-orb {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.07); }
}

@keyframes lv3-pulse {
  0%,100% { box-shadow: 0 0 0 4px rgba(22,155,131,.12); }
  50% { box-shadow: 0 0 0 7px rgba(22,155,131,.04); }
}

/* BENEFIT INTRO */

.lv3-proof-band {
  padding: 26px 0;
  border-top: 1px solid #E5E8EF;
  border-bottom: 1px solid #E5E8EF;
  background: #F1F4FA;
}

.lv3-proof-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.lv3-proof-inner strong {
  color: var(--ink);
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 400;
}

.lv3-proof-inner p {
  max-width: 430px;
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
}

/* BENEFITS */

.lv3-benefits {
  padding: 92px 0;
  background: #FFFFFF;
}

.lv3-section-heading {
  max-width: 760px;
  margin-bottom: 44px;
}

.lv3-eyebrow {
  margin: 0 0 12px;
  color: var(--blue);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .13em;
  text-transform: uppercase;
}

.lv3-section-heading h2,
.lv3-how-heading h2,
.lv3-notebook-copy h2,
.lv3-price-copy h2,
.lv3-eligibility-copy h2,
.lv3-qr-copy h2,
.lv3-faq-heading h2,
.lv3-final h2 {
  margin: 0;
  color: var(--ink);
  font-family: var(--serif);
  font-size: clamp(36px,4vw,52px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -.02em;
}

.lv3-section-heading > p:last-child {
  max-width: 620px;
  margin: 15px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
}

.lv3-benefit-grid {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  gap: 17px;
}

.lv3-benefit {
  display: flex;
  flex-direction: column;
  min-height: 305px;
  padding: 24px;
  border: 1px solid #E7EAF0;
  border-top: 3px solid var(--benefit-accent);
  border-radius: 12px;
  background: #FFFFFF;
  transition: transform .2s ease, box-shadow .2s ease;
}

.lv3-benefit:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 35px rgba(32,48,71,.08);
}

.lv3-blue { --benefit-accent: #315EEA; --benefit-soft: #EDF3FF; }
.lv3-teal { --benefit-accent: #138A83; --benefit-soft: #E8F5F2; }
.lv3-coral { --benefit-accent: #E77B68; --benefit-soft: #FFF0EC; }
.lv3-amber { --benefit-accent: #D89A32; --benefit-soft: #FFF6E5; }
.lv3-purple { --benefit-accent: #7954D8; --benefit-soft: #F1ECFF; }

.lv3-benefit-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.lv3-benefit-top > span:first-child {
  color: #8994A5;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .1em;
}

.lv3-benefit-mark {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--benefit-soft);
  color: var(--benefit-accent);
  font-size: 22px;
}

.lv3-benefit h3 {
  max-width: 300px;
  margin: 0 0 10px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
}

.lv3-benefit > p {
  margin: 0 0 19px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.75;
}

.lv3-example-prompt {
  margin-top: auto;
  padding: 12px;
  border-radius: 8px;
  background: var(--benefit-soft);
}

.lv3-example-prompt span {
  display: block;
  margin-bottom: 5px;
  color: var(--benefit-accent);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv3-example-prompt strong {
  display: block;
  color: #45536A;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.5;
}

/* BUSINESS NOTEBOOK */

.lv3-notebook {
  padding: 86px 0;
  background:
    radial-gradient(ellipse at 90% 20%, rgba(121,84,216,.10), transparent 38%),
    #F5F2FA;
}

.lv3-notebook-grid {
  display: grid;
  grid-template-columns: .9fr 1fr;
  align-items: center;
  gap: 80px;
}

.lv3-notebook-copy .lv3-eyebrow {
  color: var(--purple);
}

.lv3-notebook-copy > p:last-child {
  max-width: 510px;
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.lv3-notebook-mockup {
  padding: 22px;
  border: 1px solid #E3DDF0;
  border-radius: 15px;
  background: white;
  box-shadow: 0 18px 50px rgba(68,48,112,.08);
}

.lv3-notebook-top {
  display: flex;
  align-items: center;
  gap: 11px;
  padding-bottom: 15px;
  border-bottom: 1px solid #EEEAF5;
}

.lv3-notebook-icon {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #F1ECFF;
  color: var(--purple);
}

.lv3-notebook-top strong {
  display: block;
  color: var(--ink);
  font-size: 12px;
}

.lv3-notebook-top span {
  display: block;
  color: #8992A2;
  font-size: 9px;
}

.lv3-insight-list {
  display: grid;
  gap: 10px;
  margin-top: 16px;
}

.lv3-insight {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  padding: 13px;
  border: 1px solid #EDEAF4;
  border-radius: 9px;
  background: #FCFBFE;
}

.lv3-insight-marker {
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border-radius: 8px;
  background: #F1ECFF;
  color: var(--purple);
  font-size: 13px;
}

.lv3-insight strong {
  display: block;
  margin-bottom: 2px;
  color: #38475D;
  font-size: 10px;
}

.lv3-insight p {
  margin: 0;
  color: #778397;
  font-size: 9px;
  line-height: 1.5;
}

.lv3-notebook-note {
  margin: 12px 0 0;
  color: #898FA0;
  font-size: 9px;
  line-height: 1.6;
}

/* HOW THE CONNECTION WORKS */

.lv3-how {
  padding: 92px 0;
  background: #FFFFFF;
}

.lv3-how-heading {
  max-width: 690px;
  margin-bottom: 42px;
}

.lv3-how-heading > p:last-child {
  margin: 15px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.lv3-how-grid {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.lv3-how-step {
  padding: 26px 27px 28px 0;
}

.lv3-how-step + .lv3-how-step {
  padding-left: 27px;
  border-left: 1px solid var(--line);
}

.lv3-step-number {
  display: block;
  margin-bottom: 22px;
  color: var(--blue);
  font-family: var(--serif);
  font-size: 34px;
}

.lv3-how-step h3 {
  margin: 0 0 9px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 400;
  line-height: 1.25;
}

.lv3-how-step p {
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.8;
}

/* ELIGIBILITY */

.lv3-eligibility {
  padding: 68px 0;
  background: #EEF3FA;
}

.lv3-eligibility-grid {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  align-items: start;
  gap: 65px;
}

.lv3-eligibility-copy h2 {
  font-size: clamp(32px,3.6vw,43px);
}

.lv3-eligibility-copy > p:last-child {
  margin: 15px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.lv3-eligibility-list {
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: 12px;
}

.lv3-eligibility-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px;
  border: 1px solid #DFE6F0;
  border-radius: 8px;
  background: white;
  color: #4F5F74;
  font-size: 10px;
  line-height: 1.6;
}

.lv3-eligibility-item svg {
  flex: 0 0 auto;
  color: var(--teal);
}

/* LOVEVIEW QR BONUS */

.lv3-qr-section {
  padding: 88px 0;
  background: #FBF9F5;
}

.lv3-qr-grid {
  display: grid;
  grid-template-columns: 1fr .75fr;
  align-items: center;
  gap: 85px;
}

.lv3-qr-copy h2 {
  max-width: 570px;
}

.lv3-qr-copy > p:last-of-type {
  max-width: 520px;
  margin: 17px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.lv3-qr-card {
  max-width: 390px;
  justify-self: end;
  padding: 23px;
  border: 1px solid #E4DED4;
  background: #F1ECE3;
}

.lv3-qr-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
}

.lv3-qr-head strong {
  color: var(--ink);
  font-family: var(--serif);
  font-size: 23px;
  font-weight: 400;
}

.lv3-qr-head span {
  color: var(--teal);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv3-qr-white {
  display: flex;
  justify-content: center;
  padding: 18px;
  background: white;
}

.lv3-qr-art {
  width: 152px;
  height: 152px;
  display: grid;
  grid-template-columns: repeat(11,1fr);
  grid-template-rows: repeat(11,1fr);
  gap: 3px;
  padding: 8px;
}

.lv3-qr-art span.on {
  background: var(--ink);
}

.lv3-qr-bottom {
  padding-top: 18px;
  text-align: center;
}

.lv3-qr-bottom strong {
  display: block;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 400;
}

.lv3-qr-bottom span {
  display: block;
  margin-top: 3px;
  color: #7E8490;
  font-size: 9px;
}

.lv3-qr-disclaimer {
  margin: 11px 0 0;
  color: #90949A;
  font-size: 9px;
  line-height: 1.6;
  text-align: center;
}

/* PRICING */

.lv3-pricing {
  padding: 86px 0;
  background: #203047;
}

.lv3-pricing-grid {
  display: grid;
  grid-template-columns: 1fr .8fr;
  align-items: center;
  gap: 75px;
}

.lv3-price-copy .lv3-eyebrow {
  color: #ABD9D0;
}

.lv3-price-copy h2 {
  color: white;
}

.lv3-price-copy > p:last-child {
  max-width: 490px;
  margin: 18px 0 0;
  color: #C5CED9;
  font-size: 13px;
  line-height: 1.8;
}

.lv3-price-card {
  padding: 29px;
  background: white;
}

.lv3-price-card > span {
  display: block;
  margin-bottom: 10px;
  color: var(--teal);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .12em;
}

.lv3-price-card h3 {
  margin: 0;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 53px;
  font-weight: 400;
  line-height: 1.1;
}

.lv3-price-card small {
  display: block;
  margin: 5px 0 20px;
  color: #788394;
  font-size: 10px;
}

.lv3-price-rule {
  height: 1px;
  margin: 18px 0;
  background: #E9EDF2;
}

.lv3-price-list {
  display: grid;
  gap: 11px;
  margin: 0 0 23px;
  padding: 0;
  list-style: none;
}

.lv3-price-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: #4F5E73;
  font-size: 11px;
  line-height: 1.6;
}

.lv3-price-list svg {
  flex: 0 0 auto;
  color: var(--teal);
}

.lv3-price-card .lv3-button {
  width: 100%;
}

.lv3-price-note {
  margin: 12px 0 0;
  color: #8993A0;
  font-size: 9px;
  line-height: 1.65;
  text-align: center;
}

/* FAQ */

.lv3-faq {
  padding: 90px 0;
  background: #FBF9F5;
}

.lv3-faq-grid {
  display: grid;
  grid-template-columns: .72fr 1fr;
  gap: 85px;
}

.lv3-faq-heading {
  align-self: start;
}

.lv3-faq-heading > p:last-child {
  margin: 16px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.lv3-faq-list {
  border-top: 1px solid var(--line);
}

.lv3-faq-item {
  border-bottom: 1px solid var(--line);
}

.lv3-faq-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 19px 0;
  color: var(--ink);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  list-style: none;
}

.lv3-faq-item summary::-webkit-details-marker {
  display: none;
}

.lv3-faq-item summary span {
  color: var(--blue);
  font-size: 21px;
  font-weight: 400;
  transition: transform .2s ease;
}

.lv3-faq-item[open] summary span {
  transform: rotate(45deg);
}

.lv3-faq-item p {
  margin: 0 25px 18px 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.8;
}

/* FINAL CTA */

.lv3-final {
  padding: 0 0 84px;
  background: #FBF9F5;
}

.lv3-final-inner {
  padding: 59px 30px;
  border: 1px solid #E0E8E5;
  background: linear-gradient(120deg,#EAF1FF,#EDF7F4 55%,#F7F0E6);
  text-align: center;
}

.lv3-final-inner h2 {
  max-width: 720px;
  margin: 0 auto 16px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: clamp(37px,4vw,51px);
  font-weight: 400;
  line-height: 1.1;
}

.lv3-final-inner > p:not(.lv3-eyebrow) {
  max-width: 560px;
  margin: 0 auto 24px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

/* FOOTER */

.lv3-footer {
  padding: 30px 0 22px;
  border-top: 1px solid #E5E2DA;
  background: #FBF9F5;
}

.lv3-footer-top {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.lv3-footer-description {
  max-width: 390px;
  margin: 12px 0 0;
  color: #808A97;
  font-size: 10px;
  line-height: 1.7;
}

.lv3-footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 22px;
  color: #647184;
  font-size: 10px;
}

.lv3-footer-links a:hover {
  color: var(--blue);
}

.lv3-footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 24px;
  padding-top: 14px;
  border-top: 1px solid #E5E2DA;
  color: #969DA7;
  font-size: 9px;
}

@media (max-width: 1050px) and (min-width: 761px) {
  .lv3-shell {
    width: calc(100% - 48px);
  }

  .lv3-nav {
    gap: 16px;
  }

  .lv3-nav-links {
    gap: 15px;
    font-size: 11px;
  }

  .lv3-nav-cta {
    padding: 11px 13px;
    font-size: 11px;
  }

  .lv3-hero-grid {
    gap: 35px;
  }

  .lv3-hero h1 {
    font-size: 49px;
  }

  .lv3-profile-card,
  .lv3-gemini-card {
    padding: 12px 9px;
  }

  .lv3-app-grid {
    grid-template-columns: 1fr 32px 1fr;
    gap: 5px;
  }

  .lv3-connector-line {
    width: 25px;
  }

  .lv3-notebook-grid,
  .lv3-pricing-grid,
  .lv3-faq-grid {
    gap: 40px;
  }
}

@media (max-width: 760px) {
  .lv3-shell {
    width: calc(100% - 36px);
  }

  .lv3-topline {
    padding: 7px 12px;
    font-size: 9px;
  }

  .lv3-nav {
    min-height: 67px;
    justify-content: space-between;
  }

  .lv3-menu-toggle {
    display: block;
    width: 40px;
    height: 40px;
    border: 1px solid var(--line);
    border-radius: 7px;
    background: transparent;
  }

  .lv3-menu-toggle span {
    display: block;
    width: 17px;
    height: 2px;
    margin: 5px auto;
    background: var(--ink);
  }

  .lv3-nav-cta {
    display: none;
  }

  .lv3-nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    margin: 0;
    padding: 10px 20px 18px;
    border-bottom: 1px solid var(--line);
    background: #FBF9F5;
    white-space: normal;
  }

  .lv3-nav-links.lv3-open {
    display: flex;
  }

  .lv3-nav-links a {
    padding: 12px 0;
    border-bottom: 1px solid var(--line);
  }

  .lv3-mobile-cta {
    display: flex !important;
    justify-content: center;
    margin-top: 12px;
    padding: 12px;
    border: 0;
    border-radius: 6px;
    background: var(--ink);
    color: white !important;
  }

  .lv3-hero {
    padding: 49px 0 56px;
  }

  .lv3-hero-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .lv3-hero h1 {
    font-size: clamp(46px,11vw,60px);
  }

  .lv3-hero-copy {
    font-size: 14px;
  }

  .lv3-hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .lv3-hero-actions .lv3-button {
    width: 100%;
  }

  .lv3-connection {
    padding: 14px;
  }

  .lv3-app-grid {
    grid-template-columns: 1fr 30px 1fr;
    gap: 5px;
  }

  .lv3-profile-card,
  .lv3-gemini-card {
    min-height: 265px;
    padding: 11px 8px;
  }

  .lv3-app-top,
  .lv3-gemini-top {
    gap: 6px;
  }

  .lv3-app-top strong,
  .lv3-gemini-top strong {
    font-size: 9px;
  }

  .lv3-app-top span,
  .lv3-gemini-top span {
    font-size: 7px;
  }

  .lv3-app-icon,
  .lv3-gemini-symbol {
    width: 29px;
    height: 29px;
  }

  .lv3-connector-orb {
    width: 27px;
    height: 27px;
  }

  .lv3-connector-line {
    width: 23px;
  }

  .lv3-connector > span {
    font-size: 6px;
  }

  .lv3-profile-lines span,
  .lv3-profile-lines b {
    font-size: 7px;
  }

  .lv3-proof-inner {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .lv3-benefits,
  .lv3-how,
  .lv3-qr-section,
  .lv3-faq {
    padding: 69px 0;
  }

  .lv3-section-heading {
    margin-bottom: 30px;
  }

  .lv3-section-heading h2,
  .lv3-how-heading h2,
  .lv3-notebook-copy h2,
  .lv3-price-copy h2,
  .lv3-eligibility-copy h2,
  .lv3-qr-copy h2,
  .lv3-faq-heading h2 {
    font-size: 39px;
  }

  .lv3-benefit-grid {
    grid-template-columns: 1fr;
    gap: 13px;
  }

  .lv3-benefit {
    min-height: 0;
  }

  .lv3-notebook {
    padding: 69px 0;
  }

  .lv3-notebook-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .lv3-how-heading {
    margin-bottom: 30px;
  }

  .lv3-how-grid {
    grid-template-columns: 1fr;
  }

  .lv3-how-step,
  .lv3-how-step + .lv3-how-step {
    padding: 22px 0;
    border-left: 0;
    border-bottom: 1px solid var(--line);
  }

  .lv3-step-number {
    margin-bottom: 12px;
    font-size: 29px;
  }

  .lv3-eligibility-grid {
    grid-template-columns: 1fr;
    gap: 26px;
  }

  .lv3-eligibility-list {
    grid-template-columns: 1fr;
  }

  .lv3-qr-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .lv3-qr-card {
    justify-self: center;
    width: 100%;
    max-width: 390px;
  }

  .lv3-pricing {
    padding: 69px 0;
  }

  .lv3-pricing-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .lv3-price-card {
    padding: 23px 19px;
  }

  .lv3-faq-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .lv3-final {
    padding-bottom: 60px;
  }

  .lv3-final-inner {
    padding: 42px 20px;
  }

  .lv3-final-inner h2 {
    font-size: 39px;
  }

  .lv3-footer-top,
  .lv3-footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .lv3-footer-top {
    gap: 23px;
  }

  .lv3-footer-bottom {
    gap: 8px;
  }
}

@media (max-width: 390px) {
  .lv3-shell {
    width: calc(100% - 28px);
  }

  .lv3-app-grid {
    grid-template-columns: 1fr 23px 1fr;
    gap: 3px;
  }

  .lv3-profile-card,
  .lv3-gemini-card {
    padding: 9px 6px;
  }

  .lv3-connector-line {
    width: 18px;
  }

  .lv3-connector-orb {
    width: 23px;
    height: 23px;
  }

  .lv3-connection-status {
    flex-wrap: wrap;
  }

  .lv3-hero h1 {
    font-size: 44px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .lv3-site *,
  .lv3-site *::before,
  .lv3-site *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
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

      <div className="lv3-site" id="lv3-top">
        <div className="lv3-topline">
          Connect your Google Business Profile to Gemini — and do more with it.
        </div>

        <header className="lv3-header">
          <nav className="lv3-nav lv3-shell" aria-label="Main navigation">
            <a className="lv3-brand" href="#lv3-top" onClick={closeMenu}>
              <Logo />
            </a>

            <button
              className="lv3-menu-toggle"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>

            <div className={`lv3-nav-links ${menuOpen ? "lv3-open" : ""}`}>
              <a href="#lv3-benefits" onClick={closeMenu}>Gemini benefits</a>
              <a href="#lv3-how" onClick={closeMenu}>How it works</a>
              <a href="#lv3-pricing" onClick={closeMenu}>Pricing</a>
              <a href="#lv3-faq" onClick={closeMenu}>FAQs</a>
              <a
                className="lv3-mobile-cta"
                href={inquiryUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                Get setup help <Arrow />
              </a>
            </div>

            <a
              className="lv3-nav-cta"
              href={inquiryUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get setup help <Arrow diagonal />
            </a>
          </nav>
        </header>

        <main>
          <section className="lv3-hero">
            <div className="lv3-shell lv3-hero-grid">
              <div>
                <p className="lv3-kicker">
                  Your business profile, connected to Gemini
                </p>

                <h1>
                  Your Google Business Profile can do more with{" "}
                  <em>Gemini.</em>
                </h1>

                <p className="lv3-hero-copy">
                  Connect your verified Business Profile and use Gemini to
                  understand customer reviews, draft replies, update business
                  details, create posts and explore how people find your
                  business.
                </p>

                <div className="lv3-hero-actions">
                  <a
                    className="lv3-button lv3-button-primary"
                    href={inquiryUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Gemini setup help — ₹2,000 <Arrow />
                  </a>

                  <a className="lv3-button lv3-button-secondary" href="#lv3-benefits">
                    Explore the benefits
                  </a>
                </div>

                <div className="lv3-hero-trust">
                  <span><Check /> One-time service</span>
                  <span><Check /> One business location</span>
                  <span><Check /> LoveView QR included</span>
                </div>

                <p className="lv3-hero-note">
                  LoveView helps with profile setup, eligibility checks and
                  connection guidance. Actual Gemini access and features
                  depend on Google's requirements and availability.
                </p>
              </div>

              <ConnectionVisual />
            </div>
          </section>

          <section className="lv3-proof-band">
            <div className="lv3-shell lv3-proof-inner">
              <strong>
                Don't just maintain your profile. Put it to work.
              </strong>
              <p>
                Ask questions about your business, work with customer feedback
                and explore the information behind your online presence.
              </p>
            </div>
          </section>

          <section className="lv3-benefits" id="lv3-benefits">
            <div className="lv3-shell">
              <div className="lv3-section-heading">
                <p className="lv3-eyebrow">What you can do with Gemini</p>
                <h2>
                  Real business tasks. Made easier with a connected profile.
                </h2>
                <p>
                  Instead of searching through menus, you can ask Gemini
                  questions about your connected Business Profile and get help
                  with supported actions.
                </p>
              </div>

              <div className="lv3-benefit-grid">
                {benefits.map((item) => (
                  <BenefitCard item={item} key={item.number} />
                ))}
              </div>
            </div>
          </section>

          <section className="lv3-notebook">
            <div className="lv3-shell lv3-notebook-grid">
              <div className="lv3-notebook-copy">
                <p className="lv3-eyebrow">For eligible accounts</p>
                <h2>
                  Go further with a Gemini business notebook.
                </h2>
                <p>
                  Eligible businesses may also be able to create a business
                  notebook in Gemini. It can offer tailored prompts and
                  proactive suggestions, such as reviewing missing profile
                  information, adding photos and checking business performance.
                </p>
              </div>

              <div>
                <div className="lv3-notebook-mockup">
                  <div className="lv3-notebook-top">
                    <div className="lv3-notebook-icon">
                      <SparkleIcon size={22} />
                    </div>
                    <div>
                      <strong>Your business notebook</strong>
                      <span>Illustrative Gemini experience</span>
                    </div>
                  </div>

                  <div className="lv3-insight-list">
                    <div className="lv3-insight">
                      <span className="lv3-insight-marker">⌖</span>
                      <div>
                        <strong>Check your business information</strong>
                        <p>Review missing or outdated business details.</p>
                      </div>
                    </div>

                    <div className="lv3-insight">
                      <span className="lv3-insight-marker">▧</span>
                      <div>
                        <strong>Review your business photos</strong>
                        <p>Explore suggestions for adding useful photos.</p>
                      </div>
                    </div>

                    <div className="lv3-insight">
                      <span className="lv3-insight-marker">⌁</span>
                      <div>
                        <strong>Understand your performance</strong>
                        <p>Explore profile performance and search terms.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="lv3-notebook-note">
                  Business notebooks and connected features are subject to
                  Google's eligibility requirements and gradual availability.
                </p>
              </div>
            </div>
          </section>

          <section className="lv3-how" id="lv3-how">
            <div className="lv3-shell">
              <div className="lv3-how-heading">
                <p className="lv3-eyebrow">How LoveView helps</p>
                <h2>From your existing profile to Gemini.</h2>
                <p>
                  We help you understand what needs to be ready, then guide
                  you through the connection process using your own Google
                  Account.
                </p>
              </div>

              <div className="lv3-how-grid">
                <article className="lv3-how-step">
                  <span className="lv3-step-number">01</span>
                  <h3>Review your profile</h3>
                  <p>
                    We check whether your Business Profile is verified and
                    review its basic information and setup.
                  </p>
                </article>

                <article className="lv3-how-step">
                  <span className="lv3-step-number">02</span>
                  <h3>Check Gemini eligibility</h3>
                  <p>
                    We explain Google's current requirements and help you
                    check whether your account can use the connection.
                  </p>
                </article>

                <article className="lv3-how-step">
                  <span className="lv3-step-number">03</span>
                  <h3>Connect and learn</h3>
                  <p>
                    We guide you through the Gemini web app and show you
                    practical prompts for the supported business tasks.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="lv3-eligibility">
            <div className="lv3-shell lv3-eligibility-grid">
              <div className="lv3-eligibility-copy">
                <p className="lv3-eyebrow">Important before connecting</p>
                <h2>Is your business profile eligible?</h2>
                <p>
                  Google sets the connection requirements. We check these
                  before promising that the feature can be activated.
                </p>
              </div>

              <div className="lv3-eligibility-list">
                {[
                  "You are 18 or older.",
                  "You are an owner or manager of one verified Business Profile only.",
                  "You use a personal Google Account associated with that profile.",
                  "Google Account Keep Activity is enabled.",
                  "You connect through the Gemini web app.",
                  "The feature is available for your account, region and language.",
                ].map((item) => (
                  <div className="lv3-eligibility-item" key={item}>
                    <Check /> <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="lv3-qr-section" id="lv3-qr">
            <div className="lv3-shell lv3-qr-grid">
              <div className="lv3-qr-copy">
                <p className="lv3-eyebrow">A LoveView bonus</p>
                <h2>
                  And your business gets a customer feedback QR, too.
                </h2>
                <p>
                  Alongside your Google Business Profile and Gemini setup
                  assistance, receive a complimentary LoveView QR configured
                  for your business. Place it at your counter or reception to
                  make sharing feedback easier.
                </p>
              </div>

              <div>
                <div className="lv3-qr-card">
                  <div className="lv3-qr-head">
                    <strong>LoveView</strong>
                    <span>CUSTOMER FEEDBACK</span>
                  </div>
                  <div className="lv3-qr-white">
                    <QrArtwork />
                  </div>
                  <div className="lv3-qr-bottom">
                    <strong>Your experience matters.</strong>
                    <span>Scan to share your feedback</span>
                  </div>
                </div>
                <p className="lv3-qr-disclaimer">
                  Illustrative artwork only. Your unique business QR is
                  generated separately during setup.
                </p>
              </div>
            </div>
          </section>

          <section className="lv3-pricing" id="lv3-pricing">
            <div className="lv3-shell lv3-pricing-grid">
              <div className="lv3-price-copy">
                <p className="lv3-eyebrow">One-time setup assistance</p>
                <h2>
                  Make more of the business profile you already have.
                </h2>
                <p>
                  We help prepare your Google Business Profile, check
                  connection eligibility, guide you through Gemini and show
                  you useful ways to work with your business information.
                </p>
              </div>

              <div className="lv3-price-card">
                <span>LOVEVIEW BUSINESS SETUP</span>
                <h3>₹2,000</h3>
                <small>One-time service fee · One business location</small>

                <div className="lv3-price-rule" />

                <ul className="lv3-price-list">
                  {[
                    "Google Business Profile setup or optimization",
                    "Business information review",
                    "Verification guidance",
                    "Gemini eligibility check",
                    "Gemini connection assistance where available",
                    "Practical prompts walkthrough",
                    "Complimentary LoveView QR setup",
                  ].map((item) => (
                    <li key={item}><Check /> {item}</li>
                  ))}
                </ul>

                <a
                  className="lv3-button lv3-button-primary"
                  href={inquiryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get setup assistance <Arrow />
                </a>

                <p className="lv3-price-note">
                  Google Business Profile is free. ₹2,000 is LoveView's
                  service fee. No Google ranking or Gemini recommendation
                  is guaranteed.
                </p>
              </div>
            </div>
          </section>

          <section className="lv3-faq" id="lv3-faq">
            <div className="lv3-shell lv3-faq-grid">
              <div className="lv3-faq-heading">
                <p className="lv3-eyebrow">Frequently asked questions</p>
                <h2>Before you connect.</h2>
                <p>
                  Understand the requirements, the service and what Gemini
                  can actually help you do.
                </p>
              </div>

              <div className="lv3-faq-list">
                {faqs.map((faq) => (
                  <details className="lv3-faq-item" key={faq.question}>
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

          <section className="lv3-final">
            <div className="lv3-shell lv3-final-inner">
              <p className="lv3-eyebrow">Let's get your business ready</p>
              <h2>
                Your business information. Your customer feedback. More useful with Gemini.
              </h2>
              <p>
                Start with a Google Business Profile review and find out
                whether your business is ready to connect with Gemini.
              </p>
              <a
                className="lv3-button lv3-button-primary"
                href={inquiryUrl}
                target="_blank"
                rel="noreferrer"
              >
                Check my setup eligibility — ₹2,000 <Arrow />
              </a>
            </div>
          </section>
        </main>

        <footer className="lv3-footer">
          <div className="lv3-shell">
            <div className="lv3-footer-top">
              <div>
                <a className="lv3-brand" href="#lv3-top">
                  <Logo />
                </a>
                <p className="lv3-footer-description">
                  Helping local businesses make better use of their
                  Google Business Profile and customer feedback.
                </p>
              </div>

              <div className="lv3-footer-links">
                <a href="#lv3-benefits">Gemini benefits</a>
                <a href="#lv3-how">How it works</a>
                <a href="#lv3-pricing">Pricing</a>
                <a href="mailto:hello@theloveview.com">Contact</a>
                <a
                  href="https://support.google.com/business/answer/17142585"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google's feature guide <Arrow diagonal />
                </a>
              </div>
            </div>

            <div className="lv3-footer-bottom">
              <span>© {new Date().getFullYear()} LoveView. All rights reserved.</span>
              <span>
                LoveView is an independent service, not affiliated with
                or endorsed by Google.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
