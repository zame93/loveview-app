
import { useState } from "react";
import Logo from "../components/ui/Logo";

const inquiryUrl = "https://forms.gle/C9pJwNvVt4EM8trF9";
const googleGuide = "https://support.google.com/business/answer/17142585";

const benefits = [
  {
    number: "01",
    color: "blue",
    icon: "✳",
    title: "Understand your customer reviews",
    description:
      "Ask Gemini to summarize customer feedback, identify recurring themes and understand what people appreciate or want improved.",
    prompt: "Summarize my recent customer reviews.",
    result:
      "See recurring feedback themes and understand what customers are saying.",
  },
  {
    number: "02",
    color: "green",
    icon: "↗",
    title: "Draft replies to customer reviews",
    description:
      "Get help writing thoughtful responses to customer reviews, using the actual feedback as context.",
    prompt: "Help me reply to my latest customer review.",
    result:
      "Get a suggested response that you can review before using.",
  },
  {
    number: "03",
    color: "coral",
    icon: "⌖",
    title: "Update your business information",
    description:
      "Work with supported details such as opening hours, contact information, website links, action links and business attributes.",
    prompt: "Review my business hours and contact details.",
    result:
      "Check and update supported information on your profile.",
  },
  {
    number: "04",
    color: "amber",
    icon: "✦",
    title: "Create posts, offers and events",
    description:
      "Get help creating business updates, promotions and event posts, then schedule or publish supported posts.",
    prompt: "Help me create a post for this week's offer.",
    result:
      "Turn a business update or promotion into a profile post.",
  },
  {
    number: "05",
    color: "violet",
    icon: "⌁",
    title: "See how people discover your business",
    description:
      "Explore available performance metrics, website clicks, direction requests, bookings and the search keywords customers use.",
    prompt: "What search keywords bring people to my business?",
    result:
      "Understand how people discover and interact with your profile.",
  },
];

const faqs = [
  {
    question: "What does connecting my Business Profile to Gemini do?",
    answer:
      "It lets Gemini work with information from your connected Google Business Profile. Depending on availability, you can ask about reviews, draft review replies, update supported business details, create profile posts and explore performance insights.",
  },
  {
    question: "Do I need a verified Google Business Profile?",
    answer:
      "Yes. Google's current connection requirements specify that you must be an owner or manager of one verified Business Profile. We can help with setup and verification guidance first, but Google controls verification.",
  },
  {
    question: "Who is eligible to connect?",
    answer:
      "Google currently requires you to be at least 18, be an owner or manager of only one verified Business Profile, use a personal Google Account associated with that profile, and have Keep Activity enabled. The connection is available through the Gemini web app, not work or school accounts.",
  },
  {
    question: "Can Gemini improve my Google ranking?",
    answer:
      "Connecting your profile gives you additional ways to manage it and understand its performance. It does not guarantee higher Google Search rankings, more customers or recommendations in Gemini answers.",
  },
  {
    question: "What is a Gemini Business Notebook?",
    answer:
      "For eligible users, a Business Notebook can provide a dedicated place for business-related chats, profile context, tailored prompts and proactive suggestions. Availability and features are controlled by Google.",
  },
  {
    question: "What does LoveView charge?",
    answer:
      "Our one-time service fee is ₹2,000 for one business location. It covers profile setup or optimization, verification guidance, eligibility checks, Gemini connection assistance where supported and a complimentary LoveView QR.",
  },
  {
    question: "Is Google Business Profile free?",
    answer:
      "Yes. Google Business Profile is free. The ₹2,000 is LoveView's service fee for setup and assistance, not a fee charged by Google.",
  },
  {
    question: "Do you need my Google password or OTP?",
    answer:
      "No. You retain control of your Google Account. We guide you through the connection steps, and you complete sensitive actions yourself. Never share your password or verification codes.",
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
    <svg viewBox="0 0 20 20" width="17" height="17" fill="none" aria-hidden="true">
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

function Sparkle({ size = 24 }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} fill="none" aria-hidden="true">
      <path
        d="M20 3c2.5 9.5 7 14 17 17-10 2.5-14.5 7-17 17C17.5 27 13 22.5 3 20 13 17.5 17.5 13 20 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BusinessPin() {
  return (
    <svg viewBox="0 0 40 40" width="32" height="32" fill="none" aria-hidden="true">
      <path
        d="M20 35s12-12 12-21a12 12 0 1 0-24 0c0 9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="2.3"
      />
      <circle cx="20" cy="14" r="4.5" stroke="currentColor" strokeWidth="2.3" />
    </svg>
  );
}

function ConnectionVisual() {
  return (
    <div className="lv4-connection">
      <div className="lv4-connection-heading">
        <span className="lv4-live-dot" />
        YOUR BUSINESS INFORMATION, READY TO WORK WITH GEMINI
      </div>

      <div className="lv4-apps">
        <div className="lv4-profile">
          <div className="lv4-app-heading">
            <div className="lv4-app-logo lv4-profile-logo">
              <BusinessPin />
            </div>
            <div>
              <strong>Google Business Profile</strong>
              <small>Your business information</small>
            </div>
          </div>

          <div className="lv4-profile-name">
            <small>YOUR BUSINESS</small>
            <strong>Business name</strong>
            <span>Category · Location</span>
          </div>

          <div className="lv4-profile-items">
            <div><span>Opening hours</span><b>Profile details</b></div>
            <div><span>Customer reviews</span><b>Feedback</b></div>
            <div><span>Website and contact</span><b>Information</b></div>
            <div><span>Performance</span><b>Insights</b></div>
          </div>

          <div className="lv4-app-foot">
            <span className="lv4-green-dot" />
            YOUR BUSINESS PROFILE
          </div>
        </div>

        <div className="lv4-connector">
          <div className="lv4-connector-line" />
          <div className="lv4-connector-circle"><Arrow /></div>
          <span>CONNECT</span>
        </div>

        <div className="lv4-gemini">
          <div className="lv4-app-heading">
            <div className="lv4-app-logo lv4-gemini-logo">
              <Sparkle size={22} />
            </div>
            <div>
              <strong>Gemini</strong>
              <small>Your business AI assistant</small>
            </div>
          </div>

          <div className="lv4-question">
            <small>YOU ASK</small>
            <p>Summarize my recent customer reviews.</p>
          </div>

          <div className="lv4-answer">
            <div><Sparkle size={14} /> GEMINI CAN HELP</div>
            <p>
              Identify common feedback themes and help you understand
              what customers are saying.
            </p>
          </div>

          <div className="lv4-app-foot">
            <span className="lv4-violet-dot" />
            EXAMPLE CONVERSATION
          </div>
        </div>
      </div>

      <div className="lv4-connected-label">
        <span />
        <strong>Business Profile + Gemini</strong>
        <small>One connected experience</small>
      </div>

      <p className="lv4-visual-note">
        Illustrative interface, not a live Google or Gemini account.
      </p>
    </div>
  );
}

function BenefitCard({ item }) {
  return (
    <article className={`lv4-benefit lv4-${item.color}`}>
      <div className="lv4-benefit-top">
        <span>{item.number}</span>
        <span className="lv4-benefit-icon">{item.icon}</span>
      </div>

      <h3>{item.title}</h3>
      <p>{item.description}</p>

      <div className="lv4-prompt">
        <small>TRY ASKING GEMINI</small>
        <strong>“{item.prompt}”</strong>
      </div>

      <div className="lv4-result">
        <Sparkle size={14} />
        <span>{item.result}</span>
      </div>
    </article>
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
    <div className="lv4-qr-art" aria-label="Illustrative QR artwork">
      {pattern.join("").split("").map((cell, index) => (
        <span className={cell === "1" ? "on" : ""} key={index} />
      ))}
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');

.lv4-site {
  --ink: #203047;
  --muted: #627186;
  --blue: #3475DE;
  --blue-soft: #EDF3FF;
  --green: #328B70;
  --green-soft: #EAF5EF;
  --violet: #8064C9;
  --violet-soft: #F1EDFC;
  --coral: #D96759;
  --coral-soft: #FFF0ED;
  --amber: #D5A13D;
  --amber-soft: #FFF5E3;
  --cream: #F8FAFE;
  --paper: #FFFFFF;
  --line: #E2E8F0;
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

.lv4-site *,
.lv4-site *::before,
.lv4-site *::after {
  box-sizing: border-box;
}

.lv4-site a {
  color: inherit;
  text-decoration: none;
}

.lv4-shell {
  width: min(1200px,calc(100% - 64px));
  margin: 0 auto;
}

.lv4-topline {
  padding: 8px 18px;
  background: #EAF1FF;
  color: #315DA9;
  border-bottom: 2px solid var(--blue);
  text-align: center;
  font-size: 11px;
  font-weight: 700;
}

.lv4-header {
  position: relative;
  z-index: 30;
  border-bottom: 1px solid rgba(32,48,71,.08);
  background: rgba(255,255,255,.97);
}

.lv4-nav {
  min-height: 78px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 27px;
}

.lv4-brand {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
}

.lv4-nav-links {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: clamp(16px,2vw,27px);
  margin-left: auto;
  color: #5E6A7C;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
}

.lv4-nav-links a:hover {
  color: var(--blue);
}

.lv4-nav-cta,
.lv4-button {
  min-height: 47px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 19px;
  border: 1px solid transparent;
  border-radius: 7px;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  text-align: center;
  transition: background .2s ease,transform .2s ease,box-shadow .2s ease;
}

.lv4-nav-cta {
  flex: 0 0 auto;
  background: var(--ink);
  color: white !important;
}

.lv4-button-primary {
  background: var(--blue);
  color: white !important;
  box-shadow: 0 8px 22px rgba(52,117,222,.18);
}

.lv4-button-primary:hover {
  background: #2862C4;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(52,117,222,.24);
}

.lv4-button-secondary {
  border-color: #CBD6E7;
  background: white;
  color: var(--ink);
}

.lv4-mobile-cta,
.lv4-menu-toggle {
  display: none;
}

/* HERO */

.lv4-hero {
  padding: 84px 0 76px;
  background:
    radial-gradient(ellipse at 87% 15%,rgba(128,100,201,.12),transparent 35%),
    radial-gradient(ellipse at 10% 85%,rgba(50,139,112,.09),transparent 36%),
    #F8FAFE;
}

.lv4-hero-grid {
  display: grid;
  grid-template-columns: minmax(0,.92fr) minmax(0,1.08fr);
  align-items: center;
  gap: clamp(45px,6vw,82px);
}

.lv4-kicker,
.lv4-eyebrow {
  margin: 0 0 13px;
  color: var(--blue);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .13em;
  text-transform: uppercase;
}

.lv4-kicker {
  display: flex;
  align-items: center;
  gap: 10px;
}

.lv4-kicker::before {
  content: "";
  width: 27px;
  height: 2px;
  background: var(--blue);
}

.lv4-hero h1 {
  max-width: 590px;
  margin: 0 0 22px;
  font-family: var(--serif);
  font-size: clamp(48px,5.1vw,68px);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -.025em;
}

.lv4-hero h1 em {
  color: var(--violet);
  font-weight: 400;
}

.lv4-hero-copy {
  max-width: 550px;
  margin: 0 0 27px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.85;
}

.lv4-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.lv4-hero-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  margin-top: 23px;
  color: #667387;
  font-size: 11px;
  font-weight: 600;
}

.lv4-hero-trust span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.lv4-hero-trust svg {
  color: var(--green);
}

.lv4-hero-note {
  margin: 17px 0 0;
  color: #8893A2;
  font-size: 10px;
  line-height: 1.65;
}

/* PROFILE + GEMINI VISUAL */

.lv4-connection {
  padding: 21px;
  border: 1px solid #DCE5F3;
  border-radius: 17px;
  background: white;
  box-shadow: 0 25px 75px rgba(38,54,91,.10);
}

.lv4-connection-heading {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 19px;
  color: #6B778B;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .095em;
}

.lv4-live-dot,
.lv4-green-dot,
.lv4-violet-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex: 0 0 auto;
}

.lv4-live-dot,
.lv4-green-dot {
  background: var(--green);
}

.lv4-apps {
  display: grid;
  grid-template-columns: minmax(0,1fr) 43px minmax(0,1fr);
  align-items: center;
  gap: 8px;
}

.lv4-profile,
.lv4-gemini {
  min-width: 0;
  min-height: 285px;
  padding: 15px 12px;
  border: 1px solid #D8E4F8;
  border-radius: 12px;
  background: linear-gradient(145deg,#FFFFFF,#F2F7FF);
}

.lv4-gemini {
  border-color: #E1D9F7;
  background: linear-gradient(145deg,#FFFFFF,#F4F0FF);
}

.lv4-app-heading {
  display: flex;
  align-items: center;
  gap: 9px;
  min-height: 43px;
  padding-bottom: 11px;
  border-bottom: 1px solid #EDF0F4;
}

.lv4-app-logo {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border-radius: 9px;
}

.lv4-profile-logo {
  background: #E7F0FF;
  color: var(--blue);
}

.lv4-gemini-logo {
  background: linear-gradient(145deg,#E9E1FF,#E4F1FF);
  color: var(--violet);
}

.lv4-app-heading strong {
  display: block;
  color: var(--ink);
  font-size: 10px;
  font-weight: 800;
  line-height: 1.3;
}

.lv4-app-heading small {
  display: block;
  margin-top: 3px;
  color: #8490A0;
  font-size: 8px;
  line-height: 1.3;
}

.lv4-profile-name {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 13px;
  padding: 10px;
  border-radius: 8px;
  background: #EAF1FF;
}

.lv4-profile-name small,
.lv4-question small {
  color: #8190A5;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .1em;
}

.lv4-profile-name strong {
  color: #34445C;
  font-size: 11px;
}

.lv4-profile-name span {
  color: #8490A0;
  font-size: 8px;
}

.lv4-profile-items {
  display: grid;
  margin-top: 9px;
}

.lv4-profile-items div {
  display: flex;
  justify-content: space-between;
  gap: 4px;
  padding: 8px 0;
  border-bottom: 1px solid #E7EDF5;
}

.lv4-profile-items span {
  color: #748195;
  font-size: 8px;
}

.lv4-profile-items b {
  color: #394D69;
  font-size: 8px;
  font-weight: 700;
}

.lv4-app-foot {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  color: #8190A5;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv4-connector {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 9px;
  color: var(--blue);
}

.lv4-connector-line {
  width: 33px;
  height: 2px;
  position: relative;
  overflow: hidden;
  background: #CFDDF1;
}

.lv4-connector-line::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 45%;
  background: var(--blue);
  animation: lv4-flow 2s ease-in-out infinite;
}

.lv4-connector-circle {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--blue);
  color: white;
  box-shadow: 0 0 0 6px rgba(52,117,222,.09);
  animation: lv4-orb 2.8s ease-in-out infinite;
}

.lv4-connector > span {
  color: #71809A;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv4-question {
  margin-top: 13px;
  padding: 10px;
  border: 1px solid #E7E2F4;
  border-radius: 9px 9px 9px 2px;
  background: white;
}

.lv4-question p {
  margin: 4px 0 0;
  color: #4D5A70;
  font-size: 9px;
  font-weight: 600;
  line-height: 1.5;
}

.lv4-answer {
  margin-top: 9px;
  padding: 10px;
  border-radius: 9px;
  background: #F0EAFF;
}

.lv4-answer div {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--violet);
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv4-answer p {
  margin: 6px 0 0;
  color: #5B5277;
  font-size: 8px;
  line-height: 1.55;
}

.lv4-violet-dot {
  background: var(--violet);
}

.lv4-connected-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-top: 17px;
  padding: 11px;
  border: 1px solid #DCEAE2;
  border-radius: 8px;
  background: #EFF7F2;
  font-size: 9px;
}

.lv4-connected-label > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 0 4px rgba(50,139,112,.1);
  animation: lv4-pulse 2s infinite;
}

.lv4-connected-label strong {
  color: var(--ink);
}

.lv4-connected-label small {
  color: #83918A;
}

.lv4-visual-note {
  margin: 10px 0 0;
  color: #929BA8;
  font-size: 8px;
  text-align: center;
}

@keyframes lv4-flow {
  0% { transform: translateX(-110%); }
  100% { transform: translateX(240%); }
}

@keyframes lv4-orb {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.07); }
}

@keyframes lv4-pulse {
  0%,100% { box-shadow: 0 0 0 4px rgba(50,139,112,.1); }
  50% { box-shadow: 0 0 0 7px rgba(50,139,112,.035); }
}

/* INTRO BAND */

.lv4-proof {
  padding: 27px 0;
  border-top: 1px solid #E5E8EF;
  border-bottom: 1px solid #E5E8EF;
  background: #F0F4FA;
}

.lv4-proof-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}

.lv4-proof-inner strong {
  color: var(--ink);
  font-family: var(--serif);
  font-size: 25px;
  font-weight: 400;
}

.lv4-proof-inner p {
  max-width: 450px;
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
}

/* BENEFITS */

.lv4-benefits {
  padding: 92px 0;
  background: white;
}

.lv4-section-heading {
  max-width: 780px;
  margin-bottom: 43px;
}

.lv4-section-heading h2,
.lv4-notebook-copy h2,
.lv4-how-heading h2,
.lv4-eligibility-copy h2,
.lv4-qr-copy h2,
.lv4-price-copy h2,
.lv4-faq-heading h2,
.lv4-final h2 {
  margin: 0;
  color: var(--ink);
  font-family: var(--serif);
  font-size: clamp(36px,4vw,52px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -.02em;
}

.lv4-section-heading > p:last-child {
  max-width: 660px;
  margin: 15px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
}

.lv4-benefit-grid {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  gap: 18px;
}

.lv4-benefit {
  min-height: 315px;
  display: flex;
  flex-direction: column;
  padding: 23px;
  border: 1px solid #E6EAF0;
  border-top: 3px solid var(--accent);
  border-radius: 11px;
  background: var(--surface);
  transition: transform .2s ease,box-shadow .2s ease;
}

.lv4-benefit:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 35px rgba(32,48,71,.08);
}

.lv4-blue {
  --accent: #3475DE;
  --surface: #F8FAFF;
  --soft: #EAF1FF;
}

.lv4-green {
  --accent: #328B70;
  --surface: #F5FBF7;
  --soft: #E6F3EB;
}

.lv4-coral {
  --accent: #D96759;
  --surface: #FFFAF8;
  --soft: #FFF0ED;
}

.lv4-amber {
  --accent: #B98223;
  --surface: #FFFCF5;
  --soft: #FFF3DD;
}

.lv4-violet {
  --accent: #8064C9;
  --surface: #FAF8FF;
  --soft: #F0EAFF;
}

.lv4-benefit-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.lv4-benefit-top > span:first-child {
  color: #8994A5;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .1em;
}

.lv4-benefit-icon {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--soft);
  color: var(--accent);
  font-size: 23px;
}

.lv4-benefit h3 {
  max-width: 300px;
  margin: 0 0 10px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 400;
  line-height: 1.22;
}

.lv4-benefit > p {
  margin: 0 0 17px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.75;
}

.lv4-prompt {
  margin-top: auto;
  padding: 12px;
  border-radius: 7px;
  background: var(--soft);
}

.lv4-prompt small {
  display: block;
  margin-bottom: 5px;
  color: var(--accent);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv4-prompt strong {
  display: block;
  color: #45536A;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.5;
}

.lv4-result {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  margin-top: 12px;
  color: #778397;
  font-size: 9px;
  line-height: 1.5;
}

.lv4-result svg {
  flex: 0 0 auto;
  color: var(--accent);
}

/* BUSINESS NOTEBOOK */

.lv4-notebook {
  padding: 88px 0;
  background:
    radial-gradient(ellipse at 88% 15%,rgba(128,100,201,.14),transparent 38%),
    #F3F0FA;
}

.lv4-notebook-grid {
  display: grid;
  grid-template-columns: .9fr 1fr;
  align-items: center;
  gap: 75px;
}

.lv4-notebook-copy > p:last-child {
  max-width: 500px;
  margin: 17px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.lv4-notebook-mockup {
  padding: 21px;
  border: 1px solid #E1D9F2;
  border-radius: 13px;
  background: white;
  box-shadow: 0 18px 50px rgba(83,62,137,.08);
}

.lv4-notebook-header {
  display: flex;
  align-items: center;
  gap: 11px;
  padding-bottom: 15px;
  border-bottom: 1px solid #EEEAF5;
}

.lv4-notebook-logo {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--violet-soft);
  color: var(--violet);
}

.lv4-notebook-header strong {
  display: block;
  color: var(--ink);
  font-size: 12px;
}

.lv4-notebook-header small {
  display: block;
  color: #8992A2;
  font-size: 9px;
}

.lv4-insights {
  display: grid;
  gap: 10px;
  margin-top: 15px;
}

.lv4-insight {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  padding: 13px;
  border: 1px solid #EDEAF4;
  border-radius: 8px;
  background: #FCFBFE;
}

.lv4-insight-icon {
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border-radius: 8px;
  background: var(--violet-soft);
  color: var(--violet);
}

.lv4-insight strong {
  display: block;
  margin-bottom: 2px;
  color: #38475D;
  font-size: 10px;
}

.lv4-insight p {
  margin: 0;
  color: #778397;
  font-size: 9px;
  line-height: 1.5;
}

.lv4-notebook-note {
  margin: 11px 0 0;
  color: #898FA0;
  font-size: 9px;
  line-height: 1.6;
}

/* HOW IT WORKS */

.lv4-how {
  padding: 90px 0;
  background: white;
}

.lv4-how-heading {
  max-width: 720px;
  margin-bottom: 40px;
}

.lv4-how-heading > p:last-child {
  margin: 15px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.lv4-how-grid {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.lv4-how-step {
  padding: 25px 28px 26px 0;
}

.lv4-how-step + .lv4-how-step {
  padding-left: 28px;
  border-left: 1px solid var(--line);
}

.lv4-step-number {
  display: block;
  margin-bottom: 21px;
  color: var(--blue);
  font-family: var(--serif);
  font-size: 34px;
}

.lv4-how-step:nth-child(2) .lv4-step-number {
  color: var(--green);
}

.lv4-how-step:nth-child(3) .lv4-step-number {
  color: var(--violet);
}

.lv4-how-step h3 {
  margin: 0 0 9px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 400;
}

.lv4-how-step p {
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.8;
}

/* ELIGIBILITY */

.lv4-eligibility {
  padding: 70px 0;
  background: #EDF5F1;
}

.lv4-eligibility-grid {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  align-items: start;
  gap: 60px;
}

.lv4-eligibility-copy h2 {
  font-size: clamp(32px,3.5vw,43px);
}

.lv4-eligibility-copy > p:last-child {
  margin: 15px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.lv4-eligibility-list {
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: 12px;
}

.lv4-eligibility-item {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  padding: 14px;
  border: 1px solid #DDEBE2;
  border-radius: 8px;
  background: white;
  color: #4F5F74;
  font-size: 10px;
  line-height: 1.6;
}

.lv4-eligibility-item svg {
  flex: 0 0 auto;
  color: var(--green);
}

/* LOVEVIEW QR */

.lv4-qr {
  padding: 88px 0;
  background: #FFF9EE;
}

.lv4-qr-grid {
  display: grid;
  grid-template-columns: 1fr .75fr;
  align-items: center;
  gap: 80px;
}

.lv4-qr-copy > p:last-child {
  max-width: 520px;
  margin: 17px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.lv4-qr-card {
  max-width: 390px;
  justify-self: end;
  padding: 23px;
  border: 1px solid #E8DDC8;
  background: #F4EDE0;
}

.lv4-qr-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 17px;
}

.lv4-qr-head strong {
  color: var(--ink);
  font-family: var(--serif);
  font-size: 23px;
  font-weight: 400;
}

.lv4-qr-head span {
  color: var(--green);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv4-qr-white {
  display: flex;
  justify-content: center;
  padding: 18px;
  background: white;
}

.lv4-qr-art {
  width: 152px;
  height: 152px;
  display: grid;
  grid-template-columns: repeat(11,1fr);
  grid-template-rows: repeat(11,1fr);
  gap: 3px;
  padding: 8px;
}

.lv4-qr-art span.on {
  background: var(--ink);
}

.lv4-qr-bottom {
  padding-top: 18px;
  text-align: center;
}

.lv4-qr-bottom strong {
  display: block;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 400;
}

.lv4-qr-bottom small {
  display: block;
  margin-top: 3px;
  color: #7E8490;
  font-size: 9px;
}

.lv4-qr-disclaimer {
  margin: 11px 0 0;
  color: #90949A;
  font-size: 9px;
  line-height: 1.6;
  text-align: center;
}

/* PRICING */

.lv4-pricing {
  padding: 86px 0;
  background: #EFF4FC;
}

.lv4-pricing-grid {
  display: grid;
  grid-template-columns: 1fr .8fr;
  align-items: center;
  gap: 75px;
}

.lv4-price-copy h2 {
  color: var(--ink);
}

.lv4-price-copy > p:last-child {
  max-width: 490px;
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.lv4-price-card {
  padding: 29px;
  border: 1px solid #D8E3F3;
  border-radius: 12px;
  background: white;
  box-shadow: 0 15px 45px rgba(42,75,128,.08);
}

.lv4-price-card > span {
  display: block;
  margin-bottom: 10px;
  color: var(--blue);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .12em;
}

.lv4-price-card h3 {
  margin: 0;
  color: var(--blue);
  font-family: var(--serif);
  font-size: 53px;
  font-weight: 400;
  line-height: 1.1;
}

.lv4-price-card small {
  display: block;
  margin: 5px 0 20px;
  color: #788394;
  font-size: 10px;
}

.lv4-price-rule {
  height: 1px;
  margin: 18px 0;
  background: #E6ECF4;
}

.lv4-price-list {
  display: grid;
  gap: 11px;
  margin: 0 0 23px;
  padding: 0;
  list-style: none;
}

.lv4-price-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: #4F5E73;
  font-size: 11px;
  line-height: 1.6;
}

.lv4-price-list svg {
  flex: 0 0 auto;
  color: var(--green);
}

.lv4-price-card .lv4-button {
  width: 100%;
}

.lv4-price-note {
  margin: 12px 0 0;
  color: #8993A0;
  font-size: 9px;
  line-height: 1.65;
  text-align: center;
}

/* FAQ */

.lv4-faq {
  padding: 90px 0;
  background: #F8FAFE;
}

.lv4-faq-grid {
  display: grid;
  grid-template-columns: .72fr 1fr;
  gap: 85px;
}

.lv4-faq-heading > p:last-child {
  margin: 16px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.lv4-faq-list {
  border-top: 1px solid var(--line);
}

.lv4-faq-item {
  border-bottom: 1px solid var(--line);
}

.lv4-faq-item summary {
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

.lv4-faq-item summary::-webkit-details-marker {
  display: none;
}

.lv4-faq-item summary span {
  color: var(--blue);
  font-size: 21px;
  font-weight: 400;
  transition: transform .2s ease;
}

.lv4-faq-item[open] summary span {
  transform: rotate(45deg);
}

.lv4-faq-item p {
  margin: 0 25px 18px 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.8;
}

/* FINAL CTA */

.lv4-final {
  padding: 0 0 84px;
  background: #F8FAFE;
}

.lv4-final-inner {
  padding: 59px 30px;
  border: 1px solid #DCE6F2;
  background: linear-gradient(120deg,#EAF1FF,#EDF6F1 55%,#FFF4E6);
  text-align: center;
}

.lv4-final-inner h2 {
  max-width: 760px;
  margin: 0 auto 16px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: clamp(37px,4vw,51px);
  font-weight: 400;
  line-height: 1.1;
}

.lv4-final-inner > p:not(.lv4-eyebrow) {
  max-width: 580px;
  margin: 0 auto 24px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

/* FOOTER */

.lv4-footer {
  padding: 30px 0 22px;
  border-top: 1px solid #E1E7F0;
  background: white;
}

.lv4-footer-top {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.lv4-footer-description {
  max-width: 390px;
  margin: 12px 0 0;
  color: #808A97;
  font-size: 10px;
  line-height: 1.7;
}

.lv4-footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 22px;
  color: #647184;
  font-size: 10px;
}

.lv4-footer-links a:hover {
  color: var(--blue);
}

.lv4-footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 24px;
  padding-top: 14px;
  border-top: 1px solid #E5E8EF;
  color: #969DA7;
  font-size: 9px;
}

.lv4-site a:focus-visible,
.lv4-site button:focus-visible,
.lv4-site summary:focus-visible {
  outline: 3px solid rgba(52,117,222,.35);
  outline-offset: 3px;
}

/* LAPTOP */

@media (max-width: 1100px) and (min-width: 761px) {
  .lv4-shell {
    width: calc(100% - 48px);
  }

  .lv4-nav {
    gap: 16px;
  }

  .lv4-nav-links {
    gap: 15px;
    font-size: 11px;
  }

  .lv4-nav-cta {
    padding: 11px 13px;
    font-size: 11px;
  }

  .lv4-hero-grid {
    gap: 36px;
  }

  .lv4-hero h1 {
    font-size: 49px;
  }

  .lv4-profile,
  .lv4-gemini {
    padding: 12px 8px;
  }

  .lv4-apps {
    grid-template-columns: minmax(0,1fr) 34px minmax(0,1fr);
    gap: 5px;
  }

  .lv4-connector-line {
    width: 25px;
  }

  .lv4-notebook-grid,
  .lv4-pricing-grid,
  .lv4-faq-grid {
    gap: 42px;
  }
}

/* MOBILE */

@media (max-width: 760px) {
  .lv4-shell {
    width: calc(100% - 36px);
  }

  .lv4-topline {
    padding: 7px 12px;
    font-size: 9px;
  }

  .lv4-nav {
    min-height: 67px;
    justify-content: space-between;
  }

  .lv4-menu-toggle {
    display: block;
    width: 40px;
    height: 40px;
    border: 1px solid var(--line);
    border-radius: 7px;
    background: transparent;
  }

  .lv4-menu-toggle span {
    display: block;
    width: 17px;
    height: 2px;
    margin: 5px auto;
    background: var(--ink);
  }

  .lv4-nav-cta {
    display: none;
  }

  .lv4-nav-links {
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
    background: #FFFFFF;
    white-space: normal;
  }

  .lv4-nav-links.lv4-open {
    display: flex;
  }

  .lv4-nav-links > a:not(.lv4-mobile-cta) {
    padding: 12px 0;
    border-bottom: 1px solid var(--line);
  }

  .lv4-mobile-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    margin-top: 12px;
    padding: 12px;
    border-radius: 6px;
    background: var(--ink);
    color: white !important;
  }

  .lv4-hero {
    padding: 50px 0 56px;
  }

  .lv4-hero-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .lv4-hero h1 {
    font-size: clamp(46px,11vw,60px);
  }

  .lv4-hero-copy {
    font-size: 14px;
  }

  .lv4-hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .lv4-hero-actions .lv4-button {
    width: 100%;
  }

  .lv4-connection {
    padding: 14px;
  }

  .lv4-apps {
    grid-template-columns: minmax(0,1fr) 29px minmax(0,1fr);
    gap: 4px;
  }

  .lv4-profile,
  .lv4-gemini {
    min-height: 270px;
    padding: 11px 7px;
  }

  .lv4-app-heading {
    gap: 5px;
  }

  .lv4-app-heading strong {
    font-size: 9px;
  }

  .lv4-app-heading small {
    font-size: 7px;
  }

  .lv4-app-logo {
    width: 28px;
    height: 28px;
  }

  .lv4-connector-line {
    width: 21px;
  }

  .lv4-connector-circle {
    width: 27px;
    height: 27px;
  }

  .lv4-connector > span {
    font-size: 6px;
  }

  .lv4-profile-items span,
  .lv4-profile-items b {
    font-size: 7px;
  }

  .lv4-connected-label {
    flex-wrap: wrap;
  }

  .lv4-proof-inner {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .lv4-benefits,
  .lv4-how,
  .lv4-qr,
  .lv4-faq {
    padding: 69px 0;
  }

  .lv4-section-heading {
    margin-bottom: 30px;
  }

  .lv4-section-heading h2,
  .lv4-notebook-copy h2,
  .lv4-how-heading h2,
  .lv4-eligibility-copy h2,
  .lv4-qr-copy h2,
  .lv4-price-copy h2,
  .lv4-faq-heading h2 {
    font-size: 39px;
  }

  .lv4-benefit-grid {
    grid-template-columns: 1fr;
    gap: 13px;
  }

  .lv4-benefit {
    min-height: 0;
  }

  .lv4-notebook {
    padding: 69px 0;
  }

  .lv4-notebook-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .lv4-how-heading {
    margin-bottom: 30px;
  }

  .lv4-how-grid {
    grid-template-columns: 1fr;
  }

  .lv4-how-step,
  .lv4-how-step + .lv4-how-step {
    padding: 22px 0;
    border-left: 0;
    border-bottom: 1px solid var(--line);
  }

  .lv4-step-number {
    margin-bottom: 12px;
    font-size: 29px;
  }

  .lv4-eligibility-grid {
    grid-template-columns: 1fr;
    gap: 26px;
  }

  .lv4-eligibility-list {
    grid-template-columns: 1fr;
  }

  .lv4-qr-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .lv4-qr-card {
    justify-self: center;
    width: 100%;
    max-width: 390px;
  }

  .lv4-pricing {
    padding: 69px 0;
  }

  .lv4-pricing-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .lv4-price-card {
    padding: 23px 19px;
  }

  .lv4-faq-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .lv4-final {
    padding-bottom: 60px;
  }

  .lv4-final-inner {
    padding: 42px 20px;
  }

  .lv4-final-inner h2 {
    font-size: 39px;
  }

  .lv4-footer-top,
  .lv4-footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .lv4-footer-top {
    gap: 23px;
  }

  .lv4-footer-bottom {
    gap: 8px;
  }
}

@media (max-width: 390px) {
  .lv4-shell {
    width: calc(100% - 28px);
  }

  .lv4-apps {
    grid-template-columns: minmax(0,1fr) 23px minmax(0,1fr);
    gap: 3px;
  }

  .lv4-profile,
  .lv4-gemini {
    padding: 9px 6px;
  }

  .lv4-connector-line {
    width: 17px;
  }

  .lv4-connector-circle {
    width: 23px;
    height: 23px;
  }

  .lv4-hero h1 {
    font-size: 44px;
  }

  .lv4-connected-label {
    font-size: 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .lv4-site *,
  .lv4-site *::before,
  .lv4-site *::after {
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

      <div className="lv4-site" id="lv4-top">
        <div className="lv4-topline">
          Connect your Google Business Profile to Gemini — and do more with it.
        </div>

        <header className="lv4-header">
          <nav className="lv4-nav lv4-shell" aria-label="Main navigation">
            <a className="lv4-brand" href="#lv4-top" onClick={closeMenu}>
              <Logo />
            </a>

            <button
              className="lv4-menu-toggle"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>

            <div className={`lv4-nav-links ${menuOpen ? "lv4-open" : ""}`}>
              <a href="#lv4-benefits" onClick={closeMenu}>Gemini benefits</a>
              <a href="#lv4-how" onClick={closeMenu}>How it works</a>
              <a href="#lv4-pricing" onClick={closeMenu}>Pricing</a>
              <a href="#lv4-faq" onClick={closeMenu}>FAQs</a>

              <a
                className="lv4-mobile-cta"
                href={inquiryUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                Get setup help <Arrow />
              </a>
            </div>

            <a
              className="lv4-nav-cta"
              href={inquiryUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get setup help <Arrow diagonal />
            </a>
          </nav>
        </header>

        <main>
          <section className="lv4-hero">
            <div className="lv4-shell lv4-hero-grid">
              <div>
                <p className="lv4-kicker">
                  Your business profile, connected to Gemini
                </p>

                <h1>
                  Your Google Business Profile can do more with{" "}
                  <em>Gemini.</em>
                </h1>

                <p className="lv4-hero-copy">
                  Connect your verified Business Profile and use Gemini to
                  understand customer reviews, draft replies, update business
                  details, create posts and explore how people find your
                  business.
                </p>

                <div className="lv4-hero-actions">
                  <a
                    className="lv4-button lv4-button-primary"
                    href={inquiryUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Gemini setup help — ₹2,000 <Arrow />
                  </a>

                  <a className="lv4-button lv4-button-secondary" href="#lv4-benefits">
                    Explore the benefits
                  </a>
                </div>

                <div className="lv4-hero-trust">
                  <span><Check /> One-time service</span>
                  <span><Check /> One business location</span>
                  <span><Check /> LoveView QR included</span>
                </div>

                <p className="lv4-hero-note">
                  LoveView helps with profile setup, eligibility checks and
                  connection guidance. Actual Gemini access and features
                  depend on Google's requirements and availability.
                </p>
              </div>

              <ConnectionVisual />
            </div>
          </section>

          <section className="lv4-proof">
            <div className="lv4-shell lv4-proof-inner">
              <strong>
                Don't just maintain your profile. Put it to work.
              </strong>
              <p>
                Work with customer feedback, update supported information
                and understand how people discover your business.
              </p>
            </div>
          </section>

          <section className="lv4-benefits" id="lv4-benefits">
            <div className="lv4-shell">
              <div className="lv4-section-heading">
                <p className="lv4-eyebrow">What you can do with Gemini</p>
                <h2>
                  Five ways a connected profile can help with everyday business tasks.
                </h2>
                <p>
                  Ask Gemini questions about your connected Business Profile
                  and get help with supported actions. Here are practical
                  examples of what you can ask.
                </p>
              </div>

              <div className="lv4-benefit-grid">
                {benefits.map((item) => (
                  <BenefitCard item={item} key={item.number} />
                ))}
              </div>
            </div>
          </section>

          <section className="lv4-notebook">
            <div className="lv4-shell lv4-notebook-grid">
              <div className="lv4-notebook-copy">
                <p className="lv4-eyebrow">For eligible accounts</p>
                <h2>
                  A business notebook that knows your business context.
                </h2>
                <p>
                  Eligible businesses may also be able to create a Business
                  Notebook in Gemini. It can bring together business-related
                  chats, profile context, tailored prompts and proactive
                  suggestions to help you spot what needs attention.
                </p>
              </div>

              <div>
                <div className="lv4-notebook-mockup">
                  <div className="lv4-notebook-header">
                    <div className="lv4-notebook-logo">
                      <Sparkle size={22} />
                    </div>
                    <div>
                      <strong>Your business notebook</strong>
                      <small>Illustrative Gemini experience</small>
                    </div>
                  </div>

                  <div className="lv4-insights">
                    <div className="lv4-insight">
                      <span className="lv4-insight-icon">⌖</span>
                      <div>
                        <strong>Review your business information</strong>
                        <p>Find missing or outdated profile details.</p>
                      </div>
                    </div>

                    <div className="lv4-insight">
                      <span className="lv4-insight-icon">▧</span>
                      <div>
                        <strong>Check your business photos</strong>
                        <p>Explore suggestions for useful business photos.</p>
                      </div>
                    </div>

                    <div className="lv4-insight">
                      <span className="lv4-insight-icon">⌁</span>
                      <div>
                        <strong>Review business performance</strong>
                        <p>Explore available metrics and search terms.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="lv4-notebook-note">
                  Business Notebooks and proactive insights are subject to
                  Google's eligibility requirements and availability.
                </p>
              </div>
            </div>
          </section>

          <section className="lv4-how" id="lv4-how">
            <div className="lv4-shell">
              <div className="lv4-how-heading">
                <p className="lv4-eyebrow">How LoveView helps</p>
                <h2>
                  From your existing profile to Gemini.
                </h2>
                <p>
                  We help you understand what needs to be ready, then guide
                  you through the connection process using your own
                  Google Account.
                </p>
              </div>

              <div className="lv4-how-grid">
                <article className="lv4-how-step">
                  <span className="lv4-step-number">01</span>
                  <h3>Review your profile</h3>
                  <p>
                    We check whether your Business Profile is verified and
                    review its basic information and setup.
                  </p>
                </article>

                <article className="lv4-how-step">
                  <span className="lv4-step-number">02</span>
                  <h3>Check Gemini eligibility</h3>
                  <p>
                    We explain Google's current requirements and help you
                    check whether your account can use the connection.
                  </p>
                </article>

                <article className="lv4-how-step">
                  <span className="lv4-step-number">03</span>
                  <h3>Connect and learn</h3>
                  <p>
                    We guide you through the Gemini web app and show you
                    practical prompts for supported business tasks.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="lv4-eligibility">
            <div className="lv4-shell lv4-eligibility-grid">
              <div className="lv4-eligibility-copy">
                <p className="lv4-eyebrow">Important before connecting</p>
                <h2>Is your business profile eligible?</h2>
                <p>
                  Google sets the connection requirements. We check these
                  before promising that the feature can be activated.
                </p>
              </div>

              <div className="lv4-eligibility-list">
                {[
                  "You are 18 or older.",
                  "You own or manage only one verified Business Profile.",
                  "You use a personal Google Account associated with the profile.",
                  "Google Account Keep Activity is enabled.",
                  "You connect through the Gemini web app.",
                  "You have access to the Gemini feature in your account.",
                ].map((item) => (
                  <div className="lv4-eligibility-item" key={item}>
                    <Check />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="lv4-qr" id="lv4-qr">
            <div className="lv4-shell lv4-qr-grid">
              <div className="lv4-qr-copy">
                <p className="lv4-eyebrow">A LoveView bonus</p>
                <h2>
                  And your business gets a customer feedback QR, too.
                </h2>
                <p>
                  Alongside your Google Business Profile and Gemini setup
                  assistance, receive a complimentary LoveView QR configured
                  for your business. Place it at your counter or reception
                  to make sharing feedback easier.
                </p>
              </div>

              <div>
                <div className="lv4-qr-card">
                  <div className="lv4-qr-head">
                    <strong>LoveView</strong>
                    <span>CUSTOMER FEEDBACK</span>
                  </div>

                  <div className="lv4-qr-white">
                    <QrArtwork />
                  </div>

                  <div className="lv4-qr-bottom">
                    <strong>Your experience matters.</strong>
                    <small>Scan to share your feedback</small>
                  </div>
                </div>

                <p className="lv4-qr-disclaimer">
                  Illustrative artwork only. Your unique business QR is
                  generated separately during setup.
                </p>
              </div>
            </div>
          </section>

          <section className="lv4-pricing" id="lv4-pricing">
            <div className="lv4-shell lv4-pricing-grid">
              <div className="lv4-price-copy">
                <p className="lv4-eyebrow">One-time setup assistance</p>
                <h2>
                  Make more of the business profile you already have.
                </h2>
                <p>
                  We help prepare your Google Business Profile, check
                  connection eligibility, guide you through Gemini and show
                  you useful ways to work with your business information.
                </p>
              </div>

              <div className="lv4-price-card">
                <span>LOVEVIEW BUSINESS SETUP</span>
                <h3>₹2,000</h3>
                <small>One-time service fee · One business location</small>

                <div className="lv4-price-rule" />

                <ul className="lv4-price-list">
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
                  className="lv4-button lv4-button-primary"
                  href={inquiryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get setup assistance <Arrow />
                </a>

                <p className="lv4-price-note">
                  Google Business Profile is free. ₹2,000 is LoveView's
                  service fee. No Google ranking or Gemini recommendation
                  is guaranteed.
                </p>
              </div>
            </div>
          </section>

          <section className="lv4-faq" id="lv4-faq">
            <div className="lv4-shell lv4-faq-grid">
              <div className="lv4-faq-heading">
                <p className="lv4-eyebrow">Frequently asked questions</p>
                <h2>Before you connect.</h2>
                <p>
                  Understand the requirements, the service and what Gemini
                  can actually help you do.
                </p>
                <p>
                  <a href={googleGuide} target="_blank" rel="noreferrer">
                    Read Google's official connection guide <Arrow diagonal />
                  </a>
                </p>
              </div>

              <div className="lv4-faq-list">
                {faqs.map((faq) => (
                  <details className="lv4-faq-item" key={faq.question}>
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

          <section className="lv4-final">
            <div className="lv4-shell lv4-final-inner">
              <p className="lv4-eyebrow">Let's get your business ready</p>
              <h2>
                Your business profile. Your customer insights. More useful with Gemini.
              </h2>
              <p>
                Start with a Google Business Profile review and find out
                whether your business is ready to connect with Gemini.
              </p>
              <a
                className="lv4-button lv4-button-primary"
                href={inquiryUrl}
                target="_blank"
                rel="noreferrer"
              >
                Check my setup eligibility — ₹2,000 <Arrow />
              </a>
            </div>
          </section>
        </main>

        <footer className="lv4-footer">
          <div className="lv4-shell">
            <div className="lv4-footer-top">
              <div>
                <a className="lv4-brand" href="#lv4-top">
                  <Logo />
                </a>
                <p className="lv4-footer-description">
                  Helping local businesses make better use of their
                  Google Business Profile and customer feedback.
                </p>
              </div>

              <div className="lv4-footer-links">
                <a href="#lv4-benefits">Gemini benefits</a>
                <a href="#lv4-how">How it works</a>
                <a href="#lv4-pricing">Pricing</a>
                <a href="mailto:hello@theloveview.com">Contact</a>
                <a href={googleGuide} target="_blank" rel="noreferrer">
                  Google's feature guide <Arrow diagonal />
                </a>
              </div>
            </div>

            <div className="lv4-footer-bottom">
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
