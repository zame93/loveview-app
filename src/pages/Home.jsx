
import { useState } from "react";
import Logo from "../components/ui/Logo";

const inquiryUrl = "https://forms.gle/C9pJwNvVt4EM8trF9";
const googleGuide = "https://support.google.com/business/answer/17142585";

const demoTasks = [
  {
    id: "reviews",
    label: "Reviews",
    prompt: "Summarize my recent customer reviews.",
    title: "Customer feedback summary",
    answer:
      "Gemini can help identify recurring feedback themes, highlight what customers appreciate and surface areas they mention for improvement.",
    note: "Understand the feedback behind your reviews.",
  },
  {
    id: "replies",
    label: "Reply",
    prompt: "Help me draft a reply to my latest review.",
    title: "Suggested review response",
    answer:
      "Thank you for sharing your experience with us. We appreciate your feedback and look forward to welcoming you again.",
    note: "Review and edit a suggested response before using it.",
  },
  {
    id: "profile",
    label: "Profile",
    prompt: "Help me update my business opening hours.",
    title: "Business information",
    answer:
      "Gemini can help review and update supported business details, including regular hours and special holiday schedules.",
    note: "You remain in control of profile changes.",
  },
  {
    id: "posts",
    label: "Posts",
    prompt: "Help me create a post for this week's offer.",
    title: "Business profile post",
    answer:
      "Gemini can help create supported Update, Offer and Event posts for your Business Profile.",
    note: "Turn your business news into a profile update.",
  },
  {
    id: "insights",
    label: "Insights",
    prompt: "How are people finding my business?",
    title: "Business performance",
    answer:
      "Explore available profile impressions, website clicks, direction requests, bookings and the search keywords customers use.",
    note: "Understand how customers discover your business.",
  },
];

const benefits = [
  {
    number: "01",
    color: "blue",
    icon: "✳",
    title: "Understand customer reviews",
    description:
      "Summarize customer feedback, find recurring themes and understand what people appreciate or want improved.",
    prompt: "Summarize my recent customer reviews.",
    visual: "reviews",
  },
  {
    number: "02",
    color: "green",
    icon: "↗",
    title: "Draft thoughtful review replies",
    description:
      "Get help drafting responses to customer reviews using the actual feedback as context.",
    prompt: "Help me reply to my latest review.",
    visual: "replies",
  },
  {
    number: "03",
    color: "coral",
    icon: "⌖",
    title: "Update business information",
    description:
      "Work with supported details such as business hours, contact information, action links, menus and business attributes.",
    prompt: "Review my business hours and contact details.",
    visual: "profile",
  },
  {
    number: "04",
    color: "amber",
    icon: "✦",
    title: "Create posts, offers and events",
    description:
      "Get help creating business updates, promotions and event posts, then schedule or publish supported posts.",
    prompt: "Help me create a post for this week's offer.",
    visual: "posts",
  },
  {
    number: "05",
    color: "violet",
    icon: "⌁",
    title: "Understand business performance",
    description:
      "Explore profile metrics, website clicks, direction requests, bookings and the keywords customers use.",
    prompt: "What search keywords bring people to my business?",
    visual: "insights",
  },
];

const faqs = [
  {
    question: "What exactly am I paying ₹2,000 for?",
    answer:
      "You are paying LoveView for one-time assistance at one business location. This includes Google Business Profile setup or optimization, verification guidance, a Gemini eligibility check, connection assistance where available, a practical prompts walkthrough and a complimentary LoveView QR.",
  },
  {
    question: "What happens when I connect my Business Profile to Gemini?",
    answer:
      "Gemini can work with information from your connected Google Business Profile. Depending on availability, you can ask about reviews, draft review replies, update supported business details, create profile posts and explore business performance insights.",
  },
  {
    question: "Do I need a verified Google Business Profile?",
    answer:
      "Yes. Google's current connection requirements specify that you must be an owner or manager of only one verified Business Profile. We can help with profile setup and verification guidance first, but Google controls verification.",
  },
  {
    question: "Who is eligible to connect?",
    answer:
      "Google currently requires you to be at least 18, be an owner or manager of only one verified Business Profile, use a personal Google Account associated with that profile and have Keep Activity enabled. The connection is through the Gemini web app, not work or school accounts. Feature availability also applies.",
  },
  {
    question: "What if my account is not eligible?",
    answer:
      "We will explain which requirements are not met and what steps may be needed. We cannot guarantee access to a feature that Google has not made available to your account.",
  },
  {
    question: "Can Gemini improve my Google ranking?",
    answer:
      "Connecting your profile gives you additional ways to manage it and understand its performance. It does not guarantee higher Google Search rankings, more customers or recommendations in Gemini answers.",
  },
  {
    question: "Is Google Business Profile free?",
    answer:
      "Yes. Google Business Profile is free. The ₹2,000 is LoveView's service fee for setup and assistance, not a payment to Google.",
  },
  {
    question: "Is there a monthly subscription?",
    answer:
      "No. This package is a one-time ₹2,000 service for one business location. Any future optional service would be discussed separately before you agree to it.",
  },
  {
    question: "Do you need my Google password or OTP?",
    answer:
      "No. You retain control of your Google Account. We guide you through the connection steps, and you complete sensitive actions yourself. Never share your password or verification codes.",
  },
];

const eligibility = [
  "You are 18 years or older.",
  "You own or manage only one verified Business Profile.",
  "You use a personal Google Account associated with that profile.",
  "Google Account Keep Activity is enabled.",
  "You connect through the Gemini web app.",
  "The feature is available to your account and in your supported language.",
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

/* Interactive demonstration */

function ConnectionVisual() {
  const [activeId, setActiveId] = useState("reviews");
  const activeTask = demoTasks.find((task) => task.id === activeId);

  return (
    <div className="lv6-connection">
      <div className="lv6-demo-heading">
        <div>
          <span className="lv6-eyebrow">SEE WHAT YOU CAN DO</span>
          <strong>One connected profile. More useful business tools.</strong>
        </div>
        <span className="lv6-demo-tag">INTERACTIVE DEMO</span>
      </div>

      <div className="lv6-app-flow">
        <div className="lv6-profile-panel">
          <div className="lv6-panel-heading">
            <div className="lv6-profile-icon">
              <BusinessPin />
            </div>
            <div>
              <strong>Google Business Profile</strong>
              <small>Your business information</small>
            </div>
          </div>

          <div className="lv6-profile-business">
            <small>EXAMPLE BUSINESS</small>
            <strong>Your business name</strong>
            <span>Business category · Location</span>
          </div>

          <div className="lv6-profile-data">
            <div><span>Business details</span><b>01</b></div>
            <div><span>Customer reviews</span><b>02</b></div>
            <div><span>Profile posts</span><b>03</b></div>
            <div><span>Performance</span><b>04</b></div>
          </div>

          <div className="lv6-app-foot">
            <span /> BUSINESS PROFILE
          </div>
        </div>

        <div className="lv6-flow-center">
          <span className="lv6-flow-line" />
          <span className="lv6-flow-arrow"><Arrow /></span>
          <span className="lv6-flow-caption">CONNECT</span>
        </div>

        <div className="lv6-gemini-panel">
          <div className="lv6-panel-heading">
            <div className="lv6-gemini-icon">
              <Sparkle size={22} />
            </div>
            <div>
              <strong>Gemini</strong>
              <small>Your business assistant</small>
            </div>
          </div>

          <div className="lv6-chat-label">YOU ASK GEMINI</div>
          <div className="lv6-chat-question" key={activeTask.id}>
            {activeTask.prompt}
          </div>

          <div className="lv6-chat-response" key={`answer-${activeTask.id}`}>
            <div>
              <Sparkle size={14} />
              <span>{activeTask.title}</span>
            </div>
            <p>{activeTask.answer}</p>
          </div>

          <div className="lv6-app-foot">
            <span /> EXAMPLE RESPONSE
          </div>
        </div>
      </div>

      <div className="lv6-task-selector">
        <span>CHOOSE A BUSINESS TASK</span>
        <div>
          {demoTasks.map((task) => (
            <button
              type="button"
              key={task.id}
              className={activeId === task.id ? "active" : ""}
              onClick={() => setActiveId(task.id)}
              aria-pressed={activeId === task.id}
            >
              {task.label}
            </button>
          ))}
        </div>
      </div>

      <p className="lv6-connection-note">
        {activeTask.note} Illustrative experience, not a live Google account.
      </p>
    </div>
  );
}

/* Benefit examples */

function BenefitIllustration({ type }) {
  if (type === "reviews") {
    return (
      <div className="lv6-illustration">
        <div className="lv6-illustration-head">
          <span>REVIEW THEMES</span>
          <b>Example summary</b>
        </div>
        <div className="lv6-review-score">
          <strong>★★★★★</strong>
          <span>Customer feedback</span>
        </div>
        {[
          ["Friendly service", "88%"],
          ["Product quality", "70%"],
          ["Waiting time", "42%"],
        ].map(([label, width]) => (
          <div className="lv6-theme" key={label}>
            <span>{label}</span>
            <i><b style={{ width }} /></i>
          </div>
        ))}
        <small>Illustrative themes, not actual customer data.</small>
      </div>
    );
  }

  if (type === "replies") {
    return (
      <div className="lv6-illustration">
        <div className="lv6-illustration-head">
          <span>CUSTOMER REVIEW</span>
          <b>Example conversation</b>
        </div>
        <div className="lv6-review-quote">
          <span>★★★★★</span>
          <p>"Lovely experience. The team was very helpful."</p>
        </div>
        <div className="lv6-reply-draft">
          <div><Sparkle size={12} /> SUGGESTED REPLY</div>
          <p>
            "Thank you for visiting us. We appreciate your kind words
            and look forward to seeing you again."
          </p>
        </div>
        <small>Review and edit the response before using it.</small>
      </div>
    );
  }

  if (type === "profile") {
    return (
      <div className="lv6-illustration">
        <div className="lv6-illustration-head">
          <span>BUSINESS INFORMATION</span>
          <b>Example profile details</b>
        </div>
        {[
          ["Opening hours", "Weekly schedule"],
          ["Website", "Business link"],
          ["Contact details", "Phone and links"],
        ].map(([label, value]) => (
          <div className="lv6-detail-row" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
        <div className="lv6-update-status"><Check /> Review supported changes</div>
      </div>
    );
  }

  if (type === "posts") {
    return (
      <div className="lv6-illustration">
        <div className="lv6-illustration-head">
          <span>BUSINESS PROFILE POST</span>
          <b>Draft preview</b>
        </div>
        <div className="lv6-post-preview">
          <div className="lv6-post-image">
            <span>THIS WEEK</span>
            <strong>Something special<br />for our customers</strong>
          </div>
          <div className="lv6-post-copy">
            <strong>Weekend offer</strong>
            <span>Update · Offer · Event</span>
          </div>
        </div>
        <small>Gemini can help create supported profile posts.</small>
      </div>
    );
  }

  return (
    <div className="lv6-illustration">
      <div className="lv6-illustration-head">
        <span>PROFILE PERFORMANCE</span>
        <b>Example insights</b>
      </div>
      <div className="lv6-chart-area">
        <div className="lv6-chart-bars">
          {[32, 48, 39, 66, 54, 78, 61, 90, 70, 84, 58, 96].map((height, i) => (
            <span key={i} style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="lv6-chart-labels">
          <span>Earlier</span><span>Recent</span>
        </div>
      </div>
      <div className="lv6-keywords">
        <span>SEARCH KEYWORDS</span>
        <b>Business type</b>
        <b>Near me</b>
      </div>
      <small>Illustrative chart, not actual business data.</small>
    </div>
  );
}

function BenefitCard({ item }) {
  return (
    <article className={`lv6-benefit lv6-${item.color}`}>
      <div className="lv6-benefit-top">
        <span>{item.number}</span>
        <span className="lv6-benefit-icon">{item.icon}</span>
      </div>

      <h3>{item.title}</h3>
      <p>{item.description}</p>

      <BenefitIllustration type={item.visual} />

      <div className="lv6-benefit-prompt">
        <small>TRY ASKING GEMINI</small>
        <strong>“{item.prompt}”</strong>
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
    <div className="lv6-qr-art" aria-label="Illustrative QR artwork">
      {pattern.join("").split("").map((cell, index) => (
        <span className={cell === "1" ? "on" : ""} key={index} />
      ))}
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');

.lv6-site {
  --ink: #203047;
  --muted: #627186;
  --blue: #3475DE;
  --green: #328B70;
  --violet: #8064C9;
  --coral: #D96759;
  --amber: #D5A13D;
  --cream: #F8FAFE;
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

.lv6-site *,
.lv6-site *::before,
.lv6-site *::after {
  box-sizing: border-box;
}

.lv6-site a {
  color: inherit;
  text-decoration: none;
}

.lv6-shell {
  width: min(1200px,calc(100% - 64px));
  margin: 0 auto;
}

.lv6-topline {
  padding: 8px 18px;
  background: #EAF1FF;
  color: #315DA9;
  border-bottom: 2px solid var(--blue);
  text-align: center;
  font-size: 11px;
  font-weight: 700;
}

.lv6-header {
  position: relative;
  z-index: 30;
  border-bottom: 1px solid rgba(32,48,71,.08);
  background: rgba(255,255,255,.97);
}

.lv6-nav {
  min-height: 78px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 27px;
}

.lv6-brand {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
}

.lv6-nav-links {
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

.lv6-nav-links a:hover {
  color: var(--blue);
}

.lv6-nav-cta,
.lv6-button {
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

.lv6-nav-cta {
  flex: 0 0 auto;
  background: var(--ink);
  color: white !important;
}

.lv6-button-primary {
  background: var(--blue);
  color: white !important;
  box-shadow: 0 8px 22px rgba(52,117,222,.18);
}

.lv6-button-primary:hover {
  background: #2862C4;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(52,117,222,.24);
}

.lv6-button-secondary {
  border-color: #CBD6E7;
  background: white;
  color: var(--ink);
}

.lv6-mobile-cta,
.lv6-menu-toggle {
  display: none;
}

.lv6-nav-cta:hover {
  background: #31435C;
  transform: translateY(-1px);
}

/* HERO */

.lv6-hero {
  padding: 84px 0 77px;
  background:
    radial-gradient(ellipse at 87% 15%,rgba(128,100,201,.12),transparent 35%),
    radial-gradient(ellipse at 10% 85%,rgba(50,139,112,.09),transparent 36%),
    #F8FAFE;
}

.lv6-hero-grid {
  display: grid;
  grid-template-columns: minmax(0,.90fr) minmax(0,1.10fr);
  align-items: center;
  gap: clamp(42px,5.5vw,78px);
}

.lv6-kicker,
.lv6-eyebrow {
  margin: 0 0 13px;
  color: var(--blue);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .13em;
  text-transform: uppercase;
}

.lv6-kicker {
  display: flex;
  align-items: center;
  gap: 10px;
}

.lv6-kicker::before {
  content: "";
  width: 27px;
  height: 2px;
  background: var(--blue);
}

.lv6-hero h1 {
  max-width: 600px;
  margin: 0 0 22px;
  font-family: var(--serif);
  font-size: clamp(48px,5.1vw,68px);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -.025em;
}

.lv6-hero h1 em {
  color: var(--violet);
  font-weight: 400;
}

.lv6-hero-copy {
  max-width: 550px;
  margin: 0 0 27px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.85;
}

.lv6-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.lv6-hero-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  margin-top: 23px;
  color: #667387;
  font-size: 11px;
  font-weight: 600;
}

.lv6-hero-trust span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.lv6-hero-trust svg {
  color: var(--green);
}

.lv6-hero-note {
  margin: 17px 0 0;
  color: #8893A2;
  font-size: 10px;
  line-height: 1.65;
}

/* INTERACTIVE CONNECTION DEMO */

.lv6-connection {
  padding: 21px;
  border: 1px solid #DCE5F3;
  border-radius: 17px;
  background: white;
  box-shadow: 0 25px 75px rgba(38,54,91,.10);
}

.lv6-demo-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 19px;
}

.lv6-demo-heading > div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.lv6-demo-heading .lv6-eyebrow {
  margin: 0;
  font-size: 8px;
}

.lv6-demo-heading strong {
  font-family: var(--serif);
  font-size: 19px;
  font-weight: 400;
  line-height: 1.25;
}

.lv6-demo-tag {
  padding: 6px 8px;
  border-radius: 5px;
  background: #EEF4FF;
  color: #3568BF;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .06em;
  white-space: nowrap;
}

.lv6-app-flow {
  display: grid;
  grid-template-columns: minmax(0,1fr) 42px minmax(0,1fr);
  align-items: stretch;
  gap: 7px;
}

.lv6-profile-panel,
.lv6-gemini-panel {
  min-width: 0;
  min-height: 300px;
  padding: 14px 12px;
  border: 1px solid #D8E4F8;
  border-radius: 11px;
  background: linear-gradient(145deg,#FFFFFF,#F2F7FF);
}

.lv6-gemini-panel {
  border-color: #E1D9F7;
  background: linear-gradient(145deg,#FFFFFF,#F5F1FF);
}

.lv6-panel-heading {
  display: flex;
  align-items: center;
  gap: 9px;
  min-height: 43px;
  padding-bottom: 11px;
  border-bottom: 1px solid #EDF0F4;
}

.lv6-profile-icon,
.lv6-gemini-icon {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border-radius: 9px;
}

.lv6-profile-icon {
  background: #E7F0FF;
  color: var(--blue);
}

.lv6-gemini-icon {
  background: linear-gradient(145deg,#E9E1FF,#E4F1FF);
  color: var(--violet);
}

.lv6-panel-heading strong {
  display: block;
  color: var(--ink);
  font-size: 10px;
  font-weight: 800;
  line-height: 1.3;
}

.lv6-panel-heading small {
  display: block;
  margin-top: 3px;
  color: #8490A0;
  font-size: 8px;
}

.lv6-profile-business {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 13px;
  padding: 11px;
  border-radius: 8px;
  background: #EAF1FF;
}

.lv6-profile-business small {
  color: #6481B1;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .1em;
}

.lv6-profile-business strong {
  color: #34445C;
  font-size: 11px;
}

.lv6-profile-business span {
  color: #8490A0;
  font-size: 8px;
}

.lv6-profile-data {
  display: grid;
  margin-top: 9px;
}

.lv6-profile-data div {
  display: flex;
  justify-content: space-between;
  gap: 5px;
  padding: 8px 0;
  border-bottom: 1px solid #E7EDF5;
}

.lv6-profile-data span {
  color: #748195;
  font-size: 8px;
}

.lv6-profile-data b {
  color: #394D69;
  font-size: 8px;
}

.lv6-app-foot {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  color: #8190A5;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv6-app-foot > span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--green);
}

.lv6-flow-center {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 9px;
  color: var(--blue);
}

.lv6-flow-line {
  width: 32px;
  height: 2px;
  position: relative;
  overflow: hidden;
  background: #CFDDF1;
}

.lv6-flow-line::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 45%;
  background: var(--blue);
  animation: lv6-flow 2s ease-in-out infinite;
}

.lv6-flow-arrow {
  width: 33px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--blue);
  color: white;
  box-shadow: 0 0 0 6px rgba(52,117,222,.09);
  animation: lv6-orb 2.8s ease-in-out infinite;
}

.lv6-flow-caption {
  color: #71809A;
  font-size: 6px;
  font-weight: 800;
  letter-spacing: .07em;
}

.lv6-chat-label {
  margin: 15px 0 6px;
  color: #8190A5;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .1em;
}

.lv6-chat-question {
  min-height: 51px;
  padding: 11px;
  border: 1px solid #E7E2F4;
  border-radius: 9px 9px 9px 2px;
  background: white;
  color: #4D5A70;
  font-size: 9px;
  font-weight: 600;
  line-height: 1.6;
  animation: lv6-appear .25s ease;
}

.lv6-chat-response {
  min-height: 106px;
  margin-top: 10px;
  padding: 11px;
  border-radius: 9px;
  background: #F0EAFF;
  animation: lv6-appear .25s ease;
}

.lv6-chat-response > div {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--violet);
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .07em;
}

.lv6-chat-response p {
  margin: 7px 0 0;
  color: #5B5277;
  font-size: 8px;
  line-height: 1.6;
}

.lv6-task-selector {
  margin-top: 17px;
  padding-top: 14px;
  border-top: 1px solid #E9EDF3;
}

.lv6-task-selector > span {
  display: block;
  margin-bottom: 8px;
  color: #818C9D;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .09em;
}

.lv6-task-selector > div {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.lv6-task-selector button {
  padding: 7px 11px;
  border: 1px solid #DFE5EF;
  border-radius: 999px;
  background: white;
  color: #67758A;
  font-family: var(--sans);
  font-size: 9px;
  font-weight: 700;
  cursor: pointer;
  transition: .18s ease;
}

.lv6-task-selector button.active {
  border-color: var(--blue);
  background: #EDF3FF;
  color: #285FB8;
  box-shadow: 0 3px 9px rgba(52,117,222,.09);
}

.lv6-connection-note {
  margin: 10px 0 0;
  color: #929BA8;
  font-size: 8px;
  line-height: 1.5;
  text-align: center;
}

@keyframes lv6-flow {
  0% { transform: translateX(-110%); }
  100% { transform: translateX(240%); }
}

@keyframes lv6-orb {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.07); }
}

@keyframes lv6-appear {
  from { opacity: .3; transform: translateY(3px); }
  to { opacity: 1; transform: translateY(0); }
}

/* INTRO BAND */

.lv6-proof {
  padding: 27px 0;
  border-top: 1px solid #E5E8EF;
  border-bottom: 1px solid #E5E8EF;
  background: #F0F4FA;
}

.lv6-proof-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}

.lv6-proof-inner strong {
  color: var(--ink);
  font-family: var(--serif);
  font-size: 25px;
  font-weight: 400;
}

.lv6-proof-inner p {
  max-width: 460px;
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
}

/* BENEFITS */

.lv6-benefits {
  padding: 92px 0;
  background: white;
}

.lv6-section-heading {
  max-width: 790px;
  margin-bottom: 43px;
}

.lv6-section-heading h2,
.lv6-notebook-copy h2,
.lv6-how-heading h2,
.lv6-eligibility-copy h2,
.lv6-qr-copy h2,
.lv6-price-copy h2,
.lv6-faq-heading h2,
.lv6-final h2 {
  margin: 0;
  color: var(--ink);
  font-family: var(--serif);
  font-size: clamp(36px,4vw,52px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -.02em;
}

.lv6-section-heading > p:last-child {
  max-width: 660px;
  margin: 15px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
}

.lv6-benefit-grid {
  display: grid;
  grid-template-columns: repeat(6,minmax(0,1fr));
  gap: 18px;
}

.lv6-benefit {
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  min-height: 380px;
  padding: 23px;
  border: 1px solid #E6EAF0;
  border-top: 3px solid var(--accent);
  border-radius: 11px;
  background: var(--surface);
  transition: transform .2s ease,box-shadow .2s ease;
}

.lv6-benefit:nth-child(4) {
  grid-column: 2 / span 2;
}

.lv6-benefit:nth-child(5) {
  grid-column: 4 / span 2;
}

.lv6-benefit:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 35px rgba(32,48,71,.08);
}

.lv6-blue {
  --accent: #3475DE;
  --surface: #FAFCFF;
  --soft: #EAF1FF;
}

.lv6-green {
  --accent: #328B70;
  --surface: #F8FCF9;
  --soft: #E6F3EB;
}

.lv6-coral {
  --accent: #D96759;
  --surface: #FFFBF9;
  --soft: #FFF0ED;
}

.lv6-amber {
  --accent: #B98223;
  --surface: #FFFCF6;
  --soft: #FFF3DD;
}

.lv6-violet {
  --accent: #8064C9;
  --surface: #FBF9FF;
  --soft: #F0EAFF;
}

.lv6-benefit-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
}

.lv6-benefit-top > span:first-child {
  color: #8994A5;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .1em;
}

.lv6-benefit-icon {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--soft);
  color: var(--accent);
  font-size: 22px;
}

.lv6-benefit h3 {
  max-width: 310px;
  margin: 0 0 9px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 23px;
  font-weight: 400;
  line-height: 1.22;
}

.lv6-benefit > p {
  min-height: 62px;
  margin: 0 0 15px;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
}

/* MINI BUSINESS WORKFLOWS */

.lv6-illustration {
  min-height: 145px;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding: 13px;
  border: 1px solid #E8EAF0;
  border-radius: 8px;
  background: white;
}

.lv6-illustration-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 11px;
}

.lv6-illustration-head span {
  color: #8792A4;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv6-illustration-head b {
  color: #67758A;
  font-size: 8px;
}

.lv6-review-score {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.lv6-review-score strong,
.lv6-review-quote > span {
  color: #D5A13D;
  font-size: 13px;
  letter-spacing: .06em;
}

.lv6-review-score span {
  color: #7C8797;
  font-size: 8px;
}

.lv6-theme {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  gap: 9px;
  margin: 5px 0;
}

.lv6-theme > span {
  color: #67758A;
  font-size: 8px;
}

.lv6-theme i {
  height: 6px;
  overflow: hidden;
  border-radius: 99px;
  background: #EDF1F5;
}

.lv6-theme i b {
  display: block;
  height: 100%;
  border-radius: 99px;
  background: var(--accent);
}

.lv6-illustration > small {
  display: block;
  margin-top: auto;
  padding-top: 8px;
  color: #99A1AC;
  font-size: 7px;
}

.lv6-review-quote {
  padding: 9px;
  border-radius: 7px;
  background: #FAF8F2;
}

.lv6-review-quote p {
  margin: 4px 0 0;
  color: #536176;
  font-size: 9px;
  line-height: 1.5;
}

.lv6-reply-draft {
  margin-top: 8px;
  padding: 9px;
  border-radius: 7px;
  background: #EAF5EF;
}

.lv6-reply-draft > div {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--green);
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .06em;
}

.lv6-reply-draft p {
  margin: 5px 0 0;
  color: #526A60;
  font-size: 8px;
  line-height: 1.5;
}

.lv6-detail-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 9px 0;
  border-bottom: 1px solid #EEF0F3;
}

.lv6-detail-row span {
  color: #7B8796;
  font-size: 8px;
}

.lv6-detail-row strong {
  color: #42536B;
  font-size: 8px;
}

.lv6-update-status {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 11px;
  color: var(--green);
  font-size: 8px;
  font-weight: 700;
}

.lv6-post-preview {
  overflow: hidden;
  border: 1px solid #EEE6D7;
  border-radius: 7px;
}

.lv6-post-image {
  min-height: 77px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  background: linear-gradient(115deg,#FCE8C7,#FFF5DF 60%,#F9EDE3);
}

.lv6-post-image span {
  color: #A4752A;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .09em;
}

.lv6-post-image strong {
  margin-top: 5px;
  color: #5C4934;
  font-family: var(--serif);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.15;
}

.lv6-post-copy {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background: white;
}

.lv6-post-copy strong {
  color: #596477;
  font-size: 8px;
}

.lv6-post-copy span {
  color: #9B854F;
  font-size: 7px;
}

.lv6-chart-area {
  padding: 7px 8px 2px;
  border-radius: 7px;
  background: #F8F6FF;
}

.lv6-chart-bars {
  height: 65px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 5px;
  border-bottom: 1px solid #E5E0F2;
}

.lv6-chart-bars span {
  width: 7%;
  min-height: 5px;
  border-radius: 3px 3px 0 0;
  background: #8064C9;
  opacity: .72;
}

.lv6-chart-bars span:nth-child(3n) {
  opacity: 1;
  background: #9C83E2;
}

.lv6-chart-labels {
  display: flex;
  justify-content: space-between;
  padding-top: 4px;
  color: #9290A2;
  font-size: 7px;
}

.lv6-keywords {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
}

.lv6-keywords span {
  width: 100%;
  color: #8792A4;
  font-size: 7px;
  font-weight: 700;
}

.lv6-keywords b {
  padding: 4px 6px;
  border-radius: 5px;
  background: #F0EAFF;
  color: #6D56AE;
  font-size: 7px;
}

.lv6-benefit-prompt {
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 7px;
  background: var(--soft);
}

.lv6-benefit-prompt small {
  display: block;
  margin-bottom: 4px;
  color: var(--accent);
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv6-benefit-prompt strong {
  display: block;
  color: #45536A;
  font-size: 9px;
  font-weight: 600;
  line-height: 1.5;
}

/* BUSINESS NOTEBOOK */

.lv6-notebook {
  padding: 88px 0;
  background:
    radial-gradient(ellipse at 88% 15%,rgba(128,100,201,.14),transparent 38%),
    #F3F0FA;
}

.lv6-notebook-grid {
  display: grid;
  grid-template-columns: .9fr 1fr;
  align-items: center;
  gap: 75px;
}

.lv6-notebook-copy h2 {
  margin: 0;
}

.lv6-notebook-copy > p:last-child {
  margin: 17px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.lv6-notebook-mockup {
  padding: 21px;
  border: 1px solid #E1D9F2;
  border-radius: 13px;
  background: white;
  box-shadow: 0 18px 50px rgba(83,62,137,.08);
}

.lv6-notebook-header {
  display: flex;
  align-items: center;
  gap: 11px;
  padding-bottom: 15px;
  border-bottom: 1px solid #EEEAF5;
}

.lv6-notebook-logo {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #F1ECFF;
  color: var(--violet);
}

.lv6-notebook-header strong {
  display: block;
  color: var(--ink);
  font-size: 12px;
}

.lv6-notebook-header small {
  display: block;
  color: #8992A2;
  font-size: 9px;
}

.lv6-insights {
  display: grid;
  gap: 10px;
  margin-top: 15px;
}

.lv6-insight {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  padding: 13px;
  border: 1px solid #EDEAF4;
  border-radius: 8px;
  background: #FCFBFE;
}

.lv6-insight-icon {
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border-radius: 8px;
  background: #F1ECFF;
  color: var(--violet);
}

.lv6-insight strong {
  display: block;
  margin-bottom: 2px;
  color: #38475D;
  font-size: 10px;
}

.lv6-insight p {
  margin: 0;
  color: #778397;
  font-size: 9px;
  line-height: 1.5;
}

.lv6-notebook-note {
  margin: 11px 0 0;
  color: #898FA0;
  font-size: 9px;
  line-height: 1.6;
}

/* HOW IT WORKS */

.lv6-how {
  padding: 90px 0;
  background: white;
}

.lv6-how-heading {
  max-width: 720px;
  margin-bottom: 40px;
}

.lv6-how-heading h2 {
  margin: 0;
}

.lv6-how-heading > p:last-child {
  margin: 15px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.lv6-how-grid {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.lv6-how-step {
  padding: 25px 28px 26px 0;
}

.lv6-how-step + .lv6-how-step {
  padding-left: 28px;
  border-left: 1px solid var(--line);
}

.lv6-step-number {
  display: block;
  margin-bottom: 21px;
  color: var(--blue);
  font-family: var(--serif);
  font-size: 34px;
}

.lv6-how-step:nth-child(2) .lv6-step-number {
  color: var(--green);
}

.lv6-how-step:nth-child(3) .lv6-step-number {
  color: var(--violet);
}

.lv6-how-step h3 {
  margin: 0 0 9px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 400;
}

.lv6-how-step p {
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.8;
}

/* ELIGIBILITY */

.lv6-eligibility {
  padding: 70px 0;
  background: #EDF5F1;
}

.lv6-eligibility-grid {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  align-items: start;
  gap: 60px;
}

.lv6-eligibility-copy h2 {
  margin: 0;
}

.lv6-eligibility-copy > p:last-child {
  margin: 15px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.lv6-eligibility-list {
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: 12px;
}

.lv6-eligibility-item {
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

.lv6-eligibility-item svg {
  flex: 0 0 auto;
  color: var(--green);
}

/* LOVEVIEW QR */

.lv6-qr {
  padding: 88px 0;
  background: #FFF9EE;
}

.lv6-qr-grid {
  display: grid;
  grid-template-columns: 1fr .75fr;
  align-items: center;
  gap: 80px;
}

.lv6-qr-copy h2 {
  margin: 0;
}

.lv6-qr-copy > p:last-child {
  margin: 17px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.lv6-qr-card {
  max-width: 390px;
  justify-self: end;
  padding: 23px;
  border: 1px solid #E8DDC8;
  background: #F4EDE0;
}

.lv6-qr-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 17px;
}

.lv6-qr-head strong {
  color: var(--ink);
  font-family: var(--serif);
  font-size: 23px;
  font-weight: 400;
}

.lv6-qr-head span {
  color: var(--green);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv6-qr-white {
  display: flex;
  justify-content: center;
  padding: 18px;
  background: white;
}

.lv6-qr-art {
  width: 152px;
  height: 152px;
  display: grid;
  grid-template-columns: repeat(11,1fr);
  grid-template-rows: repeat(11,1fr);
  gap: 3px;
  padding: 8px;
}

.lv6-qr-art span.on {
  background: var(--ink);
}

.lv6-qr-bottom {
  padding-top: 18px;
  text-align: center;
}

.lv6-qr-bottom strong {
  display: block;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 400;
}

.lv6-qr-bottom small {
  display: block;
  margin-top: 3px;
  color: #7E8490;
  font-size: 9px;
}

.lv6-qr-disclaimer {
  margin: 11px 0 0;
  color: #90949A;
  font-size: 9px;
  line-height: 1.6;
  text-align: center;
}

/* PRICING */

.lv6-pricing {
  padding: 86px 0;
  background: #EFF4FC;
}

.lv6-pricing-grid {
  display: grid;
  grid-template-columns: 1fr .8fr;
  align-items: center;
  gap: 75px;
}

.lv6-price-copy h2 {
  margin: 0;
}

.lv6-price-copy > p:last-child {
  max-width: 490px;
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.lv6-price-card {
  padding: 29px;
  border: 1px solid #D8E3F3;
  border-radius: 12px;
  background: white;
  box-shadow: 0 15px 45px rgba(42,75,128,.08);
}

.lv6-price-card > span {
  display: block;
  margin-bottom: 10px;
  color: var(--blue);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .12em;
}

.lv6-price-card h3 {
  margin: 0;
  color: var(--blue);
  font-family: var(--serif);
  font-size: 53px;
  font-weight: 400;
  line-height: 1.1;
}

.lv6-price-card small {
  display: block;
  margin: 5px 0 20px;
  color: #788394;
  font-size: 10px;
}

.lv6-price-rule {
  height: 1px;
  margin: 18px 0;
  background: #E6ECF4;
}

.lv6-price-list {
  display: grid;
  gap: 11px;
  margin: 0 0 23px;
  padding: 0;
  list-style: none;
}

.lv6-price-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: #4F5E73;
  font-size: 11px;
  line-height: 1.6;
}

.lv6-price-list svg {
  flex: 0 0 auto;
  color: var(--green);
}

.lv6-price-card .lv6-button {
  width: 100%;
}

.lv6-price-note {
  margin: 12px 0 0;
  color: #8993A0;
  font-size: 9px;
  line-height: 1.65;
  text-align: center;
}

/* FAQ */

.lv6-faq {
  padding: 90px 0;
  background: #F8FAFE;
}

.lv6-faq-grid {
  display: grid;
  grid-template-columns: .72fr 1fr;
  gap: 85px;
}

.lv6-faq-heading h2 {
  margin: 0;
}

.lv6-faq-heading > p:last-child {
  margin: 16px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.lv6-faq-heading a {
  color: var(--blue);
  font-weight: 700;
}

.lv6-faq-list {
  border-top: 1px solid var(--line);
}

.lv6-faq-item {
  border-bottom: 1px solid var(--line);
}

.lv6-faq-item summary {
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

.lv6-faq-item summary::-webkit-details-marker {
  display: none;
}

.lv6-faq-item summary span {
  color: var(--blue);
  font-size: 21px;
  font-weight: 400;
  transition: transform .2s ease;
}

.lv6-faq-item[open] summary span {
  transform: rotate(45deg);
}

.lv6-faq-item p {
  margin: 0 25px 18px 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.8;
}

/* FINAL CTA */

.lv6-final {
  padding: 0 0 84px;
  background: #F8FAFE;
}

.lv6-final-inner {
  padding: 59px 30px;
  border: 1px solid #DCE6F2;
  background: linear-gradient(120deg,#EAF1FF,#EDF6F1 55%,#FFF4E6);
  text-align: center;
}

.lv6-final-inner h2 {
  max-width: 760px;
  margin: 0 auto 16px;
}

.lv6-final-inner > p:not(.lv6-eyebrow) {
  max-width: 580px;
  margin: 0 auto 24px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

/* FOOTER */

.lv6-footer {
  padding: 30px 0 22px;
  border-top: 1px solid #E1E7F0;
  background: white;
}

.lv6-footer-top {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.lv6-footer-description {
  max-width: 390px;
  margin: 12px 0 0;
  color: #808A97;
  font-size: 10px;
  line-height: 1.7;
}

.lv6-footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 22px;
  color: #647184;
  font-size: 10px;
}

.lv6-footer-links a:hover {
  color: var(--blue);
}

.lv6-footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 24px;
  padding-top: 14px;
  border-top: 1px solid #E5E8EF;
  color: #969DA7;
  font-size: 9px;
}

.lv6-site a:focus-visible,
.lv6-site button:focus-visible,
.lv6-site summary:focus-visible {
  outline: 3px solid rgba(52,117,222,.35);
  outline-offset: 3px;
}

/* LAPTOP */

@media (max-width: 1100px) and (min-width: 761px) {
  .lv6-shell {
    width: calc(100% - 48px);
  }

  .lv6-nav {
    gap: 16px;
  }

  .lv6-nav-links {
    gap: 15px;
    font-size: 11px;
  }

  .lv6-nav-cta {
    padding: 11px 13px;
    font-size: 11px;
  }

  .lv6-hero-grid {
    gap: 30px;
  }

  .lv6-hero h1 {
    font-size: 49px;
  }

  .lv6-profile-panel,
  .lv6-gemini-panel {
    padding: 11px 8px;
  }

  .lv6-app-flow {
    grid-template-columns: minmax(0,1fr) 34px minmax(0,1fr);
    gap: 5px;
  }

  .lv6-flow-line {
    width: 25px;
  }

  .lv6-benefit {
    padding: 19px;
  }

  .lv6-notebook-grid,
  .lv6-pricing-grid,
  .lv6-faq-grid {
    gap: 42px;
  }
}

/* MOBILE */

@media (max-width: 760px) {
  .lv6-shell {
    width: calc(100% - 36px);
  }

  .lv6-topline {
    padding: 7px 12px;
    font-size: 9px;
  }

  .lv6-nav {
    min-height: 67px;
    justify-content: space-between;
  }

  .lv6-menu-toggle {
    display: block;
    width: 40px;
    height: 40px;
    border: 1px solid var(--line);
    border-radius: 7px;
    background: transparent;
  }

  .lv6-menu-toggle span {
    display: block;
    width: 17px;
    height: 2px;
    margin: 5px auto;
    background: var(--ink);
  }

  .lv6-nav-cta {
    display: none;
  }

  .lv6-nav-links {
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
    background: white;
    white-space: normal;
  }

  .lv6-nav-links.lv6-open {
    display: flex;
  }

  .lv6-nav-links > a:not(.lv6-mobile-cta) {
    padding: 12px 0;
    border-bottom: 1px solid var(--line);
  }

  .lv6-mobile-cta {
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

  .lv6-hero {
    padding: 50px 0 56px;
  }

  .lv6-hero-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .lv6-hero h1 {
    font-size: clamp(46px,11vw,60px);
  }

  .lv6-hero-copy {
    font-size: 14px;
  }

  .lv6-hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .lv6-hero-actions .lv6-button {
    width: 100%;
  }

  .lv6-connection {
    padding: 14px;
  }

  .lv6-app-flow {
    grid-template-columns: minmax(0,1fr) 27px minmax(0,1fr);
    gap: 4px;
  }

  .lv6-profile-panel,
  .lv6-gemini-panel {
    min-height: 305px;
    padding: 10px 7px;
  }

  .lv6-panel-heading {
    gap: 5px;
  }

  .lv6-panel-heading strong {
    font-size: 9px;
  }

  .lv6-panel-heading small {
    font-size: 7px;
  }

  .lv6-profile-icon,
  .lv6-gemini-icon {
    width: 28px;
    height: 28px;
  }

  .lv6-flow-line {
    width: 20px;
  }

  .lv6-flow-arrow {
    width: 25px;
    height: 25px;
  }

  .lv6-flow-caption {
    font-size: 5px;
  }

  .lv6-profile-data span,
  .lv6-profile-data b {
    font-size: 7px;
  }

  .lv6-task-selector button {
    padding: 7px 9px;
  }

  .lv6-proof-inner {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .lv6-benefits,
  .lv6-how,
  .lv6-qr,
  .lv6-faq {
    padding: 69px 0;
  }

  .lv6-section-heading {
    margin-bottom: 30px;
  }

  .lv6-section-heading h2,
  .lv6-notebook-copy h2,
  .lv6-how-heading h2,
  .lv6-eligibility-copy h2,
  .lv6-qr-copy h2,
  .lv6-price-copy h2,
  .lv6-faq-heading h2 {
    font-size: 39px;
  }

  .lv6-benefit-grid {
    grid-template-columns: 1fr;
    gap: 13px;
  }

  .lv6-benefit,
  .lv6-benefit:nth-child(4),
  .lv6-benefit:nth-child(5) {
    grid-column: 1;
    min-height: 0;
  }

  .lv6-benefit > p {
    min-height: 0;
  }

  .lv6-notebook {
    padding: 69px 0;
  }

  .lv6-notebook-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .lv6-how-heading {
    margin-bottom: 30px;
  }

  .lv6-how-grid {
    grid-template-columns: 1fr;
  }

  .lv6-how-step,
  .lv6-how-step + .lv6-how-step {
    padding: 22px 0;
    border-left: 0;
    border-bottom: 1px solid var(--line);
  }

  .lv6-step-number {
    margin-bottom: 12px;
    font-size: 29px;
  }

  .lv6-eligibility-grid {
    grid-template-columns: 1fr;
    gap: 26px;
  }

  .lv6-eligibility-list {
    grid-template-columns: 1fr;
  }

  .lv6-qr-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .lv6-qr-card {
    justify-self: center;
    width: 100%;
    max-width: 390px;
  }

  .lv6-pricing {
    padding: 69px 0;
  }

  .lv6-pricing-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .lv6-price-card {
    padding: 23px 19px;
  }

  .lv6-faq-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .lv6-final {
    padding-bottom: 60px;
  }

  .lv6-final-inner {
    padding: 42px 20px;
  }

  .lv6-final-inner h2 {
    font-size: 39px;
  }

  .lv6-footer-top,
  .lv6-footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .lv6-footer-top {
    gap: 23px;
  }

  .lv6-footer-bottom {
    gap: 8px;
  }
}

@media (max-width: 390px) {
  .lv6-shell {
    width: calc(100% - 28px);
  }

  .lv6-app-flow {
    grid-template-columns: minmax(0,1fr) 22px minmax(0,1fr);
    gap: 3px;
  }

  .lv6-profile-panel,
  .lv6-gemini-panel {
    padding: 9px 6px;
  }

  .lv6-flow-line {
    width: 16px;
  }

  .lv6-flow-arrow {
    width: 22px;
    height: 22px;
  }

  .lv6-hero h1 {
    font-size: 44px;
  }

  .lv6-demo-heading strong {
    font-size: 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .lv6-site *,
  .lv6-site *::before,
  .lv6-site *::after {
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

      <div className="lv6-site" id="lv6-top">
        <div className="lv6-topline">
          One-time help getting your Google Business Profile ready to work with Gemini.
        </div>

        <header className="lv6-header">
          <nav className="lv6-nav lv6-shell" aria-label="Main navigation">
            <a className="lv6-brand" href="#lv6-top" onClick={closeMenu}>
              <Logo />
            </a>

            <button
              className="lv6-menu-toggle"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>

            <div className={`lv6-nav-links ${menuOpen ? "lv6-open" : ""}`}>
              <a href="#lv6-benefits" onClick={closeMenu}>Gemini benefits</a>
              <a href="#lv6-how" onClick={closeMenu}>How it works</a>
              <a href="#lv6-pricing" onClick={closeMenu}>Pricing</a>
              <a href="#lv6-faq" onClick={closeMenu}>FAQs</a>

              <a
                className="lv6-mobile-cta"
                href={inquiryUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                Check eligibility & request setup <Arrow />
              </a>
            </div>

            <a
              className="lv6-nav-cta"
              href={inquiryUrl}
              target="_blank"
              rel="noreferrer"
            >
              Check eligibility <Arrow diagonal />
            </a>
          </nav>
        </header>

        <main>
          {/* HERO: WHAT THE CUSTOMER GETS */}

          <section className="lv6-hero">
            <div className="lv6-shell lv6-hero-grid">
              <div>
                <p className="lv6-kicker">
                  GOOGLE BUSINESS PROFILE + GEMINI SETUP
                </p>

                <h1>
                  Get more from your Google Business Profile with{" "}
                  <em>Gemini.</em>
                </h1>

                <p className="lv6-hero-copy">
                  LoveView helps you set up or improve your Google Business
                  Profile, check whether your account is eligible for Gemini
                  and guide you through using it to understand customer
                  reviews, draft replies, update business information,
                  create posts and explore performance.
                </p>

                <div className="lv6-hero-actions">
                  <a
                    className="lv6-button lv6-button-primary"
                    href={inquiryUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Check eligibility & request setup <Arrow />
                  </a>

                  <a
                    className="lv6-button lv6-button-secondary"
                    href="#lv6-benefits"
                  >
                    See what Gemini can do
                  </a>
                </div>

                <div className="lv6-hero-trust">
                  <span><Check /> Profile setup or optimization</span>
                  <span><Check /> Gemini eligibility check</span>
                  <span><Check /> Complimentary QR included</span>
                </div>

                <p className="lv6-hero-note">
                  Google Business Profile is free. ₹2,000 is LoveView's
                  one-time service fee for one business location, not a
                  Google fee. Gemini connection and features depend on
                  Google's requirements and availability.
                </p>
              </div>

              <ConnectionVisual />
            </div>
          </section>

          {/* CLEAR OFFER SUMMARY */}

          <section className="lv6-proof">
            <div className="lv6-shell lv6-proof-inner">
              <strong>
                One service. Four clear outcomes for your business.
              </strong>
              <p>
                Your profile reviewed or improved, Gemini eligibility checked,
                connection guidance where available, and a complimentary
                LoveView customer feedback QR.
              </p>
            </div>
          </section>

          {/* GEMINI BENEFITS */}

          <section className="lv6-benefits" id="lv6-benefits">
            <div className="lv6-shell">
              <div className="lv6-section-heading">
                <p className="lv6-eyebrow">What you can do with Gemini</p>
                <h2>
                  Here's how Gemini can help you manage your business.
                </h2>
                <p>
                  Explore practical examples of what you can do after
                  connecting an eligible Google Business Profile to Gemini.
                </p>
              </div>

              <div className="lv6-benefit-grid">
                {benefits.map((item) => (
                  <BenefitCard item={item} key={item.number} />
                ))}
              </div>
            </div>
          </section>

          {/* BUSINESS NOTEBOOK */}

          <section className="lv6-notebook">
            <div className="lv6-shell lv6-notebook-grid">
              <div className="lv6-notebook-copy">
                <p className="lv6-eyebrow">For eligible accounts</p>
                <h2>
                  A business notebook with proactive suggestions.
                </h2>
                <p>
                  Eligible businesses may also be able to create a Business
                  Notebook in Gemini. It can bring together business-related
                  chats, profile context, tailored prompts and suggestions
                  such as updating missing information, adding photos and
                  reviewing business performance.
                </p>
              </div>

              <div>
                <div className="lv6-notebook-mockup">
                  <div className="lv6-notebook-header">
                    <div className="lv6-notebook-logo">
                      <Sparkle size={22} />
                    </div>
                    <div>
                      <strong>Your business notebook</strong>
                      <small>Illustrative Gemini experience</small>
                    </div>
                  </div>

                  <div className="lv6-insights">
                    <div className="lv6-insight">
                      <span className="lv6-insight-icon">⌖</span>
                      <div>
                        <strong>Review business information</strong>
                        <p>Find missing or outdated profile details.</p>
                      </div>
                    </div>

                    <div className="lv6-insight">
                      <span className="lv6-insight-icon">▧</span>
                      <div>
                        <strong>Check business photos</strong>
                        <p>Explore suggestions for useful business photos.</p>
                      </div>
                    </div>

                    <div className="lv6-insight">
                      <span className="lv6-insight-icon">⌁</span>
                      <div>
                        <strong>Review business performance</strong>
                        <p>Explore available metrics and search terms.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="lv6-notebook-note">
                  Business Notebooks and proactive insights are subject to
                  Google's eligibility requirements and availability.
                </p>
              </div>
            </div>
          </section>

          {/* CUSTOMER PROCESS */}

          <section className="lv6-how" id="lv6-how">
            <div className="lv6-shell">
              <div className="lv6-how-heading">
                <p className="lv6-eyebrow">How LoveView helps</p>
                <h2>We guide you from profile setup to Gemini.</h2>
                <p>
                  You don't need to figure out the technical steps alone.
                  We help you understand what needs to be ready and guide
                  you through the process using your own Google Account.
                </p>
              </div>

              <div className="lv6-how-grid">
                <article className="lv6-how-step">
                  <span className="lv6-step-number">01</span>
                  <h3>Set up or review your profile</h3>
                  <p>
                    We review your existing Google Business Profile or
                    help you get started with the setup and information
                    your business needs.
                  </p>
                </article>

                <article className="lv6-how-step">
                  <span className="lv6-step-number">02</span>
                  <h3>Check Gemini eligibility</h3>
                  <p>
                    We explain Google's current requirements and help
                    you check whether your account can use the connection.
                  </p>
                </article>

                <article className="lv6-how-step">
                  <span className="lv6-step-number">03</span>
                  <h3>Connect and learn</h3>
                  <p>
                    Where available, we guide you through Gemini and
                    walk you through useful prompts for everyday business
                    tasks.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* ELIGIBILITY */}

          <section className="lv6-eligibility">
            <div className="lv6-shell lv6-eligibility-grid">
              <div className="lv6-eligibility-copy">
                <p className="lv6-eyebrow">Important before connecting</p>
                <h2>Is your business profile eligible?</h2>
                <p>
                  Google sets the connection requirements. We check these
                  before promising that the feature can be activated.
                </p>
              </div>

              <div className="lv6-eligibility-list">
                {eligibility.map((item) => (
                  <div className="lv6-eligibility-item" key={item}>
                    <Check />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* LOVEVIEW QR */}

          <section className="lv6-qr" id="lv6-qr">
            <div className="lv6-shell lv6-qr-grid">
              <div className="lv6-qr-copy">
                <p className="lv6-eyebrow">A complimentary LoveView extra</p>
                <h2>
                  Your business also gets a customer feedback QR.
                </h2>
                <p>
                  Alongside your Google Business Profile and Gemini setup
                  assistance, receive a complimentary LoveView QR configured
                  for your business. Place it at your counter or reception
                  to make it easier for customers to share honest feedback.
                </p>
              </div>

              <div>
                <div className="lv6-qr-card">
                  <div className="lv6-qr-head">
                    <strong>LoveView</strong>
                    <span>CUSTOMER FEEDBACK</span>
                  </div>

                  <div className="lv6-qr-white">
                    <QrArtwork />
                  </div>

                  <div className="lv6-qr-bottom">
                    <strong>Your experience matters.</strong>
                    <small>Scan to share your feedback</small>
                  </div>
                </div>

                <p className="lv6-qr-disclaimer">
                  Illustrative artwork only. Your unique business QR is
                  generated separately during setup.
                </p>
              </div>
            </div>
          </section>

          {/* PRICING */}

          <section className="lv6-pricing" id="lv6-pricing">
            <div className="lv6-shell lv6-pricing-grid">
              <div className="lv6-price-copy">
                <p className="lv6-eyebrow">One-time LoveView service</p>
                <h2>
                  Get your Google Business Profile ready for Gemini.
                </h2>
                <p>
                  For one business location, LoveView reviews or improves
                  your Google Business Profile, checks eligibility, guides
                  you through connecting Gemini where available and walks
                  you through practical business prompts. Your complimentary
                  LoveView QR is included.
                </p>
              </div>

              <div className="lv6-price-card">
                <span>LOVEVIEW BUSINESS SETUP</span>
                <h3>₹2,000</h3>
                <small>One-time service fee · One business location</small>

                <div className="lv6-price-rule" />

                <ul className="lv6-price-list">
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
                  className="lv6-button lv6-button-primary"
                  href={inquiryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Request my setup — ₹2,000 <Arrow />
                </a>

                <p className="lv6-price-note">
                  Google Business Profile is free. ₹2,000 is LoveView's
                  service fee. No Google ranking or Gemini recommendation
                  is guaranteed.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}

          <section className="lv6-faq" id="lv6-faq">
            <div className="lv6-shell lv6-faq-grid">
              <div className="lv6-faq-heading">
                <p className="lv6-eyebrow">Frequently asked questions</p>
                <h2>Before you get started.</h2>
                <p>
                  Understand the requirements, what is included and
                  what Gemini can actually help you do.
                </p>
                <p>
                  <a href={googleGuide} target="_blank" rel="noreferrer">
                    Read Google's official connection guide <Arrow diagonal />
                  </a>
                </p>
              </div>

              <div className="lv6-faq-list">
                {faqs.map((faq) => (
                  <details className="lv6-faq-item" key={faq.question}>
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

          {/* FINAL CTA */}

          <section className="lv6-final">
            <div className="lv6-shell lv6-final-inner">
              <p className="lv6-eyebrow">Let's get your business ready</p>
              <h2>
                Ready to make more of your Google Business Profile?
              </h2>
              <p>
                Tell us about your business. We'll help you understand
                your profile, check Gemini eligibility and explain
                the setup process.
              </p>
              <a
                className="lv6-button lv6-button-primary"
                href={inquiryUrl}
                target="_blank"
                rel="noreferrer"
              >
                Check eligibility & request setup <Arrow />
              </a>
            </div>
          </section>
        </main>

        {/* FOOTER */}

        <footer className="lv6-footer">
          <div className="lv6-shell">
            <div className="lv6-footer-top">
              <div>
                <a className="lv6-brand" href="#lv6-top">
                  <Logo />
                </a>
                <p className="lv6-footer-description">
                  Helping local businesses make better use of their
                  Google Business Profile and customer feedback.
                </p>
              </div>

              <div className="lv6-footer-links">
                <a href="#lv6-benefits">Gemini benefits</a>
                <a href="#lv6-how">How it works</a>
                <a href="#lv6-pricing">Pricing</a>
                <a href="mailto:hello@theloveview.com">Contact</a>
                <a href={googleGuide} target="_blank" rel="noreferrer">
                  Google's feature guide <Arrow diagonal />
                </a>
              </div>
            </div>

            <div className="lv6-footer-bottom">
              <span>
                © {new Date().getFullYear()} LoveView. All rights reserved.
              </span>
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
