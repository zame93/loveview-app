
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
    note: "Understand the feedback behind your ratings.",
  },
  {
    id: "replies",
    label: "Reply",
    prompt: "Help me draft a reply to my latest review.",
    title: "Suggested review response",
    answer:
      "Thanks for sharing your experience with us. We appreciate your feedback and are glad you took the time to visit.",
    note: "Review the suggested response before using it.",
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
      "Work with supported details such as hours, contact information, website links, action links and business attributes.",
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
      "Google currently requires you to be at least 18, be an owner or manager of only one verified Business Profile, use a personal Google Account associated with that profile and have Keep Activity enabled. The connection is through the Gemini web app, not work or school accounts. Availability and supported languages also apply.",
  },
  {
    question: "Can Gemini improve my Google ranking?",
    answer:
      "Connecting your profile gives you additional ways to manage it and understand its performance. It does not guarantee higher Google Search rankings, more customers or recommendations in Gemini answers.",
  },
  {
    question: "What is a Gemini Business Notebook?",
    answer:
      "For eligible users, a Business Notebook can provide a dedicated place for business-related chats, profile context, tailored prompts and proactive suggestions such as reviewing missing profile information, photos and performance.",
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

/* Interactive hero demonstration */

function ConnectionVisual() {
  const [activeId, setActiveId] = useState("reviews");
  const activeTask = demoTasks.find((task) => task.id === activeId);

  return (
    <div className="lv5-connection">
      <div className="lv5-demo-heading">
        <div>
          <span className="lv5-eyebrow">SEE WHAT CHANGES</span>
          <strong>One connected business profile. More ways to work.</strong>
        </div>
        <span className="lv5-demo-indicator">INTERACTIVE DEMO</span>
      </div>

      <div className="lv5-app-flow">
        <div className="lv5-profile-panel">
          <div className="lv5-panel-heading">
            <div className="lv5-profile-icon">
              <BusinessPin />
            </div>
            <div>
              <strong>Google Business Profile</strong>
              <small>Your business information</small>
            </div>
          </div>

          <div className="lv5-profile-business">
            <span>EXAMPLE BUSINESS</span>
            <strong>Your business name</strong>
            <small>Business category · Location</small>
          </div>

          <div className="lv5-profile-data">
            <div><span>Business details</span><b>01</b></div>
            <div><span>Customer reviews</span><b>02</b></div>
            <div><span>Profile posts</span><b>03</b></div>
            <div><span>Performance</span><b>04</b></div>
          </div>
          <div className="lv5-profile-foot">
            <span /> BUSINESS PROFILE
          </div>
        </div>

        <div className="lv5-flow-center">
          <span className="lv5-flow-line" />
          <span className="lv5-flow-arrow"><Arrow /></span>
          <span className="lv5-flow-caption">CONNECTED APP</span>
        </div>

        <div className="lv5-gemini-panel">
          <div className="lv5-panel-heading">
            <div className="lv5-gemini-icon">
              <Sparkle size={23} />
            </div>
            <div>
              <strong>Gemini</strong>
              <small>Your business assistant</small>
            </div>
          </div>

          <div className="lv5-chat-label">YOU ASK GEMINI</div>
          <div className="lv5-chat-question">
            {activeTask.prompt}
          </div>

          <div className="lv5-chat-response">
            <div>
              <Sparkle size={14} />
              <span>{activeTask.title}</span>
            </div>
            <p>{activeTask.answer}</p>
          </div>
          <div className="lv5-gemini-foot">
            <span /> EXAMPLE RESPONSE
          </div>
        </div>
      </div>

      <div className="lv5-task-selector">
        <span>EXPLORE A BUSINESS TASK</span>
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

      <p className="lv5-connection-note">
        {activeTask.note} Illustrative experience, not a live Google account.
      </p>
    </div>
  );
}

/* Benefit-specific visual examples */

function BenefitIllustration({ type }) {
  if (type === "reviews") {
    return (
      <div className="lv5-illustration lv5-review-demo">
        <div className="lv5-illustration-title">
          <span>REVIEW THEMES</span>
          <b>Example summary</b>
        </div>
        <div className="lv5-review-score">
          <strong>★★★★★</strong>
          <span>Customer feedback</span>
        </div>
        <div className="lv5-theme">
          <span>Friendly service</span>
          <i><b style={{ width: "88%" }} /></i>
        </div>
        <div className="lv5-theme">
          <span>Product quality</span>
          <i><b style={{ width: "70%" }} /></i>
        </div>
        <div className="lv5-theme">
          <span>Waiting time</span>
          <i><b style={{ width: "42%" }} /></i>
        </div>
        <small>Illustrative themes, not actual customer data.</small>
      </div>
    );
  }

  if (type === "replies") {
    return (
      <div className="lv5-illustration lv5-reply-demo">
        <div className="lv5-illustration-title">
          <span>CUSTOMER REVIEW</span>
          <b>Example conversation</b>
        </div>
        <div className="lv5-review-quote">
          <span>★★★★★</span>
          <p>"Lovely experience. The team was very helpful."</p>
        </div>
        <div className="lv5-reply-draft">
          <div><Sparkle size={13} /> SUGGESTED REPLY</div>
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
      <div className="lv5-illustration lv5-profile-demo">
        <div className="lv5-illustration-title">
          <span>BUSINESS INFORMATION</span>
          <b>Example profile details</b>
        </div>
        <div className="lv5-detail-row">
          <span>Opening hours</span>
          <strong>Review schedule</strong>
        </div>
        <div className="lv5-detail-row">
          <span>Website</span>
          <strong>Business link</strong>
        </div>
        <div className="lv5-detail-row">
          <span>Contact details</span>
          <strong>Phone and links</strong>
        </div>
        <div className="lv5-update-status">
          <Check /> Review supported changes
        </div>
      </div>
    );
  }

  if (type === "posts") {
    return (
      <div className="lv5-illustration lv5-post-demo">
        <div className="lv5-illustration-title">
          <span>BUSINESS PROFILE POST</span>
          <b>Draft preview</b>
        </div>
        <div className="lv5-post-preview">
          <div className="lv5-post-image">
            <span>THIS WEEK</span>
            <strong>Something special<br />for our customers</strong>
          </div>
          <div className="lv5-post-copy">
            <strong>Weekend offer</strong>
            <span>Update · Offer · Event</span>
          </div>
        </div>
        <small>Gemini can help create supported profile posts.</small>
      </div>
    );
  }

  return (
    <div className="lv5-illustration lv5-insight-demo">
      <div className="lv5-illustration-title">
        <span>PROFILE PERFORMANCE</span>
        <b>Example insights</b>
      </div>
      <div className="lv5-chart-area">
        <div className="lv5-chart-bars">
          {[32, 48, 39, 66, 54, 78, 61, 90, 70, 84, 58, 96].map((height, i) => (
            <span key={i} style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="lv5-chart-labels">
          <span>Earlier</span>
          <span>Recent</span>
        </div>
      </div>
      <div className="lv5-keywords">
        <span>Search keywords</span>
        <b>Business type</b>
        <b>Near me</b>
      </div>
      <small>Illustrative chart. Explore your account's actual available metrics.</small>
    </div>
  );
}

function BenefitCard({ item }) {
  return (
    <article className={`lv5-benefit lv5-${item.color}`}>
      <div className="lv5-benefit-top">
        <span>{item.number}</span>
        <span className="lv5-benefit-icon">{item.icon}</span>
      </div>

      <h3>{item.title}</h3>
      <p>{item.description}</p>

      <BenefitIllustration type={item.visual} />

      <div className="lv5-benefit-prompt">
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
    <div className="lv5-qr-art" aria-label="Illustrative QR artwork">
      {pattern.join("").split("").map((cell, index) => (
        <span className={cell === "1" ? "on" : ""} key={index} />
      ))}
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');

.lv5-site {
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

.lv5-site *,
.lv5-site *::before,
.lv5-site *::after {
  box-sizing: border-box;
}

.lv5-site a {
  color: inherit;
  text-decoration: none;
}

.lv5-shell {
  width: min(1200px,calc(100% - 64px));
  margin: 0 auto;
}

.lv5-topline {
  padding: 8px 18px;
  background: #EAF1FF;
  color: #315DA9;
  border-bottom: 2px solid var(--blue);
  text-align: center;
  font-size: 11px;
  font-weight: 700;
}

.lv5-header {
  position: relative;
  z-index: 30;
  border-bottom: 1px solid rgba(32,48,71,.08);
  background: rgba(255,255,255,.97);
}

.lv5-nav {
  min-height: 78px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 27px;
}

.lv5-brand {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
}

.lv5-nav-links {
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

.lv5-nav-links a:hover {
  color: var(--blue);
}

.lv5-nav-cta,
.lv5-button {
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

.lv5-nav-cta {
  flex: 0 0 auto;
  background: var(--ink);
  color: white !important;
}

.lv5-button-primary {
  background: var(--blue);
  color: white !important;
  box-shadow: 0 8px 22px rgba(52,117,222,.18);
}

.lv5-button-primary:hover {
  background: #2862C4;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(52,117,222,.24);
}

.lv5-button-secondary {
  border-color: #CBD6E7;
  background: white;
  color: var(--ink);
}

.lv5-mobile-cta,
.lv5-menu-toggle {
  display: none;
}

.lv5-nav-cta:hover {
  background: #31435C;
  transform: translateY(-1px);
}

/* HERO */

.lv5-hero {
  padding: 84px 0 77px;
  background:
    radial-gradient(ellipse at 87% 15%,rgba(128,100,201,.12),transparent 35%),
    radial-gradient(ellipse at 10% 85%,rgba(50,139,112,.09),transparent 36%),
    #F8FAFE;
}

.lv5-hero-grid {
  display: grid;
  grid-template-columns: minmax(0,.90fr) minmax(0,1.10fr);
  align-items: center;
  gap: clamp(42px,5.5vw,78px);
}

.lv5-kicker,
.lv5-eyebrow {
  margin: 0 0 13px;
  color: var(--blue);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .13em;
  text-transform: uppercase;
}

.lv5-kicker {
  display: flex;
  align-items: center;
  gap: 10px;
}

.lv5-kicker::before {
  content: "";
  width: 27px;
  height: 2px;
  background: var(--blue);
}

.lv5-hero h1 {
  max-width: 600px;
  margin: 0 0 22px;
  font-family: var(--serif);
  font-size: clamp(48px,5.1vw,68px);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -.025em;
}

.lv5-hero h1 em {
  color: var(--violet);
  font-weight: 400;
}

.lv5-hero-copy {
  max-width: 550px;
  margin: 0 0 27px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.85;
}

.lv5-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.lv5-hero-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  margin-top: 23px;
  color: #667387;
  font-size: 11px;
  font-weight: 600;
}

.lv5-hero-trust span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.lv5-hero-trust svg {
  color: var(--green);
}

.lv5-hero-note {
  margin: 17px 0 0;
  color: #8893A2;
  font-size: 10px;
  line-height: 1.65;
}

/* INTERACTIVE PROFILE-TO-GEMINI DEMO */

.lv5-connection {
  padding: 21px;
  border: 1px solid #DCE5F3;
  border-radius: 17px;
  background: #FFFFFF;
  box-shadow: 0 25px 75px rgba(38,54,91,.10);
}

.lv5-demo-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 19px;
}

.lv5-demo-heading > div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.lv5-demo-heading .lv5-eyebrow {
  margin-bottom: 2px;
  font-size: 8px;
}

.lv5-demo-heading strong {
  font-family: var(--serif);
  font-size: 19px;
  font-weight: 400;
  line-height: 1.25;
}

.lv5-demo-indicator {
  padding: 6px 8px;
  border-radius: 5px;
  background: #EEF4FF;
  color: #3568BF;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .06em;
  white-space: nowrap;
}

.lv5-app-flow {
  display: grid;
  grid-template-columns: minmax(0,1fr) 42px minmax(0,1fr);
  align-items: stretch;
  gap: 7px;
}

.lv5-profile-panel,
.lv5-gemini-panel {
  min-width: 0;
  min-height: 300px;
  padding: 14px 12px;
  border: 1px solid #D8E4F8;
  border-radius: 11px;
  background: linear-gradient(145deg,#FFFFFF,#F2F7FF);
}

.lv5-gemini-panel {
  border-color: #E1D9F7;
  background: linear-gradient(145deg,#FFFFFF,#F5F1FF);
}

.lv5-panel-heading {
  display: flex;
  align-items: center;
  gap: 9px;
  min-height: 43px;
  padding-bottom: 11px;
  border-bottom: 1px solid #EDF0F4;
}

.lv5-profile-icon,
.lv5-gemini-icon {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border-radius: 9px;
}

.lv5-profile-icon {
  background: #E7F0FF;
  color: var(--blue);
}

.lv5-gemini-icon {
  background: linear-gradient(145deg,#E9E1FF,#E4F1FF);
  color: var(--violet);
}

.lv5-panel-heading strong {
  display: block;
  color: var(--ink);
  font-size: 10px;
  font-weight: 800;
  line-height: 1.3;
}

.lv5-panel-heading small {
  display: block;
  margin-top: 3px;
  color: #8490A0;
  font-size: 8px;
}

.lv5-profile-business {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 13px;
  padding: 11px;
  border-radius: 8px;
  background: #EAF1FF;
}

.lv5-profile-business span {
  color: #6481B1;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .1em;
}

.lv5-profile-business strong {
  color: #34445C;
  font-size: 11px;
}

.lv5-profile-business small {
  color: #8490A0;
  font-size: 8px;
}

.lv5-profile-data {
  display: grid;
  margin-top: 9px;
}

.lv5-profile-data div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 8px 0;
  border-bottom: 1px solid #E7EDF5;
}

.lv5-profile-data span {
  color: #748195;
  font-size: 8px;
}

.lv5-profile-data b {
  color: #394D69;
  font-size: 8px;
  font-weight: 700;
}

.lv5-profile-foot,
.lv5-gemini-foot {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  color: #8190A5;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv5-profile-foot > span,
.lv5-gemini-foot > span {
  width: 6px;
  height: 6px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--green);
}

.lv5-gemini-foot > span {
  background: var(--violet);
}

.lv5-flow-center {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 9px;
  color: var(--blue);
}

.lv5-flow-line {
  width: 32px;
  height: 2px;
  position: relative;
  overflow: hidden;
  background: #CFDDF1;
}

.lv5-flow-line::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 45%;
  background: var(--blue);
  animation: lv5-flow 2s ease-in-out infinite;
}

.lv5-flow-arrow {
  width: 33px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--blue);
  color: white;
  box-shadow: 0 0 0 6px rgba(52,117,222,.09);
  animation: lv5-orb 2.8s ease-in-out infinite;
}

.lv5-flow-caption {
  color: #71809A;
  font-size: 6px;
  font-weight: 800;
  letter-spacing: .07em;
  text-align: center;
}

.lv5-chat-label {
  margin: 15px 0 6px;
  color: #8190A5;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .1em;
}

.lv5-chat-question {
  padding: 11px;
  border: 1px solid #E7E2F4;
  border-radius: 9px 9px 9px 2px;
  background: white;
  color: #4D5A70;
  font-size: 9px;
  font-weight: 600;
  line-height: 1.6;
  animation: lv5-appear .25s ease;
}

.lv5-chat-response {
  min-height: 106px;
  margin-top: 10px;
  padding: 11px;
  border-radius: 9px;
  background: #F0EAFF;
  animation: lv5-appear .25s ease;
}

.lv5-chat-response > div {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--violet);
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .07em;
}

.lv5-chat-response p {
  margin: 7px 0 0;
  color: #5B5277;
  font-size: 8px;
  line-height: 1.6;
}

.lv5-task-selector {
  margin-top: 17px;
  padding-top: 14px;
  border-top: 1px solid #E9EDF3;
}

.lv5-task-selector > span {
  display: block;
  margin-bottom: 8px;
  color: #818C9D;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .09em;
}

.lv5-task-selector > div {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.lv5-task-selector button {
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

.lv5-task-selector button.active {
  border-color: var(--blue);
  background: #EDF3FF;
  color: #285FB8;
  box-shadow: 0 3px 9px rgba(52,117,222,.09);
}

.lv5-connection-note {
  margin: 10px 0 0;
  color: #929BA8;
  font-size: 8px;
  line-height: 1.5;
  text-align: center;
}

@keyframes lv5-flow {
  0% { transform: translateX(-110%); }
  100% { transform: translateX(240%); }
}

@keyframes lv5-orb {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.07); }
}

@keyframes lv5-appear {
  from { opacity: .3; transform: translateY(3px); }
  to { opacity: 1; transform: translateY(0); }
}

/* PROOF BAND */

.lv5-proof {
  padding: 27px 0;
  border-top: 1px solid #E5E8EF;
  border-bottom: 1px solid #E5E8EF;
  background: #F0F4FA;
}

.lv5-proof-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}

.lv5-proof-inner strong {
  color: var(--ink);
  font-family: var(--serif);
  font-size: 25px;
  font-weight: 400;
}

.lv5-proof-inner p {
  max-width: 450px;
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
}

/* BENEFITS */

.lv5-benefits {
  padding: 92px 0;
  background: white;
}

.lv5-section-heading {
  max-width: 790px;
  margin-bottom: 43px;
}

.lv5-section-heading h2,
.lv5-notebook-copy h2,
.lv5-how-heading h2,
.lv5-eligibility-copy h2,
.lv5-qr-copy h2,
.lv5-price-copy h2,
.lv5-faq-heading h2,
.lv5-final h2 {
  margin: 0;
  color: var(--ink);
  font-family: var(--serif);
  font-size: clamp(36px,4vw,52px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -.02em;
}

.lv5-section-heading > p:last-child {
  max-width: 660px;
  margin: 15px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
}

.lv5-benefit-grid {
  display: grid;
  grid-template-columns: repeat(6,minmax(0,1fr));
  gap: 18px;
}

.lv5-benefit {
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  min-height: 390px;
  padding: 23px;
  border: 1px solid #E6EAF0;
  border-top: 3px solid var(--accent);
  border-radius: 11px;
  background: var(--surface);
  transition: transform .2s ease,box-shadow .2s ease;
}

.lv5-benefit:nth-child(4) {
  grid-column: 2 / span 2;
}

.lv5-benefit:nth-child(5) {
  grid-column: 4 / span 2;
}

.lv5-benefit:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 35px rgba(32,48,71,.08);
}

.lv5-blue {
  --accent: #3475DE;
  --surface: #FAFCFF;
  --soft: #EAF1FF;
}

.lv5-green {
  --accent: #328B70;
  --surface: #F8FCF9;
  --soft: #E6F3EB;
}

.lv5-coral {
  --accent: #D96759;
  --surface: #FFFBF9;
  --soft: #FFF0ED;
}

.lv5-amber {
  --accent: #B98223;
  --surface: #FFFCF6;
  --soft: #FFF3DD;
}

.lv5-violet {
  --accent: #8064C9;
  --surface: #FBF9FF;
  --soft: #F0EAFF;
}

.lv5-benefit-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
}

.lv5-benefit-top > span:first-child {
  color: #8994A5;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .1em;
}

.lv5-benefit-icon {
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

.lv5-benefit h3 {
  max-width: 310px;
  margin: 0 0 9px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 23px;
  font-weight: 400;
  line-height: 1.22;
}

.lv5-benefit > p {
  min-height: 62px;
  margin: 0 0 15px;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
}

/* BENEFIT MINI INTERFACES */

.lv5-illustration {
  min-height: 145px;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding: 13px;
  border: 1px solid #E8EAF0;
  border-radius: 8px;
  background: white;
}

.lv5-illustration-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 11px;
}

.lv5-illustration-title span {
  color: #8792A4;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv5-illustration-title b {
  color: #67758A;
  font-size: 8px;
  font-weight: 700;
}

.lv5-review-score {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.lv5-review-score strong,
.lv5-review-quote > span {
  color: #D5A13D;
  font-size: 13px;
  letter-spacing: .06em;
}

.lv5-review-score span {
  color: #7C8797;
  font-size: 8px;
}

.lv5-theme {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  gap: 9px;
  margin: 5px 0;
}

.lv5-theme > span {
  color: #67758A;
  font-size: 8px;
}

.lv5-theme i {
  height: 6px;
  overflow: hidden;
  border-radius: 99px;
  background: #EDF1F5;
}

.lv5-theme i b {
  display: block;
  height: 100%;
  border-radius: 99px;
  background: var(--accent);
}

.lv5-illustration > small {
  display: block;
  margin-top: auto;
  padding-top: 8px;
  color: #99A1AC;
  font-size: 7px;
}

.lv5-review-quote {
  padding: 9px;
  border-radius: 7px;
  background: #FAF8F2;
}

.lv5-review-quote p {
  margin: 4px 0 0;
  color: #536176;
  font-size: 9px;
  line-height: 1.5;
}

.lv5-reply-draft {
  margin-top: 8px;
  padding: 9px;
  border-radius: 7px;
  background: #EAF5EF;
}

.lv5-reply-draft > div {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--green);
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .06em;
}

.lv5-reply-draft p {
  margin: 5px 0 0;
  color: #526A60;
  font-size: 8px;
  line-height: 1.5;
}

.lv5-detail-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 9px 0;
  border-bottom: 1px solid #EEF0F3;
}

.lv5-detail-row span {
  color: #7B8796;
  font-size: 8px;
}

.lv5-detail-row strong {
  color: #42536B;
  font-size: 8px;
}

.lv5-update-status {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 11px;
  color: var(--green);
  font-size: 8px;
  font-weight: 700;
}

.lv5-post-preview {
  overflow: hidden;
  border: 1px solid #EEE6D7;
  border-radius: 7px;
}

.lv5-post-image {
  min-height: 77px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  background: linear-gradient(115deg,#FCE8C7,#FFF5DF 60%,#F9EDE3);
}

.lv5-post-image span {
  color: #A4752A;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .09em;
}

.lv5-post-image strong {
  margin-top: 5px;
  color: #5C4934;
  font-family: var(--serif);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.15;
}

.lv5-post-copy {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background: white;
}

.lv5-post-copy strong {
  color: #596477;
  font-size: 8px;
}

.lv5-post-copy span {
  color: #9B854F;
  font-size: 7px;
}

.lv5-chart-area {
  padding: 7px 8px 2px;
  border-radius: 7px;
  background: #F8F6FF;
}

.lv5-chart-bars {
  height: 65px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 5px;
  border-bottom: 1px solid #E5E0F2;
}

.lv5-chart-bars span {
  width: 7%;
  min-height: 5px;
  border-radius: 3px 3px 0 0;
  background: #8064C9;
  opacity: .72;
}

.lv5-chart-bars span:nth-child(3n) {
  opacity: 1;
  background: #9C83E2;
}

.lv5-chart-labels {
  display: flex;
  justify-content: space-between;
  padding-top: 4px;
  color: #9290A2;
  font-size: 7px;
}

.lv5-keywords {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
}

.lv5-keywords span {
  width: 100%;
  color: #8792A4;
  font-size: 7px;
  font-weight: 700;
}

.lv5-keywords b {
  padding: 4px 6px;
  border-radius: 5px;
  background: #F0EAFF;
  color: #6D56AE;
  font-size: 7px;
}

.lv5-benefit-prompt {
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 7px;
  background: var(--soft);
}

.lv5-benefit-prompt small {
  display: block;
  margin-bottom: 4px;
  color: var(--accent);
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv5-benefit-prompt strong {
  display: block;
  color: #45536A;
  font-size: 9px;
  font-weight: 600;
  line-height: 1.5;
}

/* BUSINESS NOTEBOOK */

.lv5-notebook {
  padding: 88px 0;
  background:
    radial-gradient(ellipse at 88% 15%,rgba(128,100,201,.14),transparent 38%),
    #F3F0FA;
}

.lv5-notebook-grid {
  display: grid;
  grid-template-columns: .9fr 1fr;
  align-items: center;
  gap: 75px;
}

.lv5-notebook-copy > p:last-child {
  margin: 17px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.lv5-notebook-mockup {
  padding: 21px;
  border: 1px solid #E1D9F2;
  border-radius: 13px;
  background: white;
  box-shadow: 0 18px 50px rgba(83,62,137,.08);
}

.lv5-notebook-header {
  display: flex;
  align-items: center;
  gap: 11px;
  padding-bottom: 15px;
  border-bottom: 1px solid #EEEAF5;
}

.lv5-notebook-logo {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--violet-soft);
  color: var(--violet);
}

.lv5-notebook-header strong {
  display: block;
  color: var(--ink);
  font-size: 12px;
}

.lv5-notebook-header small {
  display: block;
  color: #8992A2;
  font-size: 9px;
}

.lv5-insights {
  display: grid;
  gap: 10px;
  margin-top: 15px;
}

.lv5-insight {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  padding: 13px;
  border: 1px solid #EDEAF4;
  border-radius: 8px;
  background: #FCFBFE;
}

.lv5-insight-icon {
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

.lv5-insight strong {
  display: block;
  margin-bottom: 2px;
  color: #38475D;
  font-size: 10px;
}

.lv5-insight p {
  margin: 0;
  color: #778397;
  font-size: 9px;
  line-height: 1.5;
}

.lv5-notebook-note {
  margin: 11px 0 0;
  color: #898FA0;
  font-size: 9px;
  line-height: 1.6;
}

/* HOW IT WORKS */

.lv5-how {
  padding: 90px 0;
  background: white;
}

.lv5-how-heading {
  max-width: 720px;
  margin-bottom: 40px;
}

.lv5-how-heading > p:last-child {
  margin: 15px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.lv5-how-grid {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.lv5-how-step {
  padding: 25px 28px 26px 0;
}

.lv5-how-step + .lv5-how-step {
  padding-left: 28px;
  border-left: 1px solid var(--line);
}

.lv5-step-number {
  display: block;
  margin-bottom: 21px;
  color: var(--blue);
  font-family: var(--serif);
  font-size: 34px;
}

.lv5-how-step:nth-child(2) .lv5-step-number {
  color: var(--green);
}

.lv5-how-step:nth-child(3) .lv5-step-number {
  color: var(--violet);
}

.lv5-how-step h3 {
  margin: 0 0 9px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 400;
}

.lv5-how-step p {
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.8;
}

/* ELIGIBILITY */

.lv5-eligibility {
  padding: 70px 0;
  background: #EDF5F1;
}

.lv5-eligibility-grid {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  align-items: start;
  gap: 60px;
}

.lv5-eligibility-copy h2 {
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(32px,3.5vw,43px);
  font-weight: 400;
  line-height: 1.12;
}

.lv5-eligibility-copy > p:last-child {
  margin: 15px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.lv5-eligibility-list {
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: 12px;
}

.lv5-eligibility-item {
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

.lv5-eligibility-item svg {
  flex: 0 0 auto;
  color: var(--green);
}

/* LOVEVIEW QR */

.lv5-qr {
  padding: 88px 0;
  background: #FFF9EE;
}

.lv5-qr-grid {
  display: grid;
  grid-template-columns: 1fr .75fr;
  align-items: center;
  gap: 80px;
}

.lv5-qr-copy h2 {
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(36px,4vw,52px);
  font-weight: 400;
  line-height: 1.1;
}

.lv5-qr-copy > p:last-child {
  margin: 17px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.lv5-qr-card {
  max-width: 390px;
  justify-self: end;
  padding: 23px;
  border: 1px solid #E8DDC8;
  background: #F4EDE0;
}

.lv5-qr-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 17px;
}

.lv5-qr-head strong {
  color: var(--ink);
  font-family: var(--serif);
  font-size: 23px;
  font-weight: 400;
}

.lv5-qr-head span {
  color: var(--green);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .08em;
}

.lv5-qr-white {
  display: flex;
  justify-content: center;
  padding: 18px;
  background: white;
}

.lv5-qr-art {
  width: 152px;
  height: 152px;
  display: grid;
  grid-template-columns: repeat(11,1fr);
  grid-template-rows: repeat(11,1fr);
  gap: 3px;
  padding: 8px;
}

.lv5-qr-art span.on {
  background: var(--ink);
}

.lv5-qr-bottom {
  padding-top: 18px;
  text-align: center;
}

.lv5-qr-bottom strong {
  display: block;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 400;
}

.lv5-qr-bottom small {
  display: block;
  margin-top: 3px;
  color: #7E8490;
  font-size: 9px;
}

.lv5-qr-disclaimer {
  margin: 11px 0 0;
  color: #90949A;
  font-size: 9px;
  line-height: 1.6;
  text-align: center;
}

/* PRICING */

.lv5-pricing {
  padding: 86px 0;
  background: #EFF4FC;
}

.lv5-pricing-grid {
  display: grid;
  grid-template-columns: 1fr .8fr;
  align-items: center;
  gap: 75px;
}

.lv5-price-copy h2 {
  margin: 0;
  color: var(--ink);
  font-family: var(--serif);
  font-size: clamp(36px,4vw,52px);
  font-weight: 400;
  line-height: 1.1;
}

.lv5-price-copy > p:last-child {
  max-width: 490px;
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.lv5-price-card {
  padding: 29px;
  border: 1px solid #D8E3F3;
  border-radius: 12px;
  background: white;
  box-shadow: 0 15px 45px rgba(42,75,128,.08);
}

.lv5-price-card > span {
  display: block;
  margin-bottom: 10px;
  color: var(--blue);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .12em;
}

.lv5-price-card h3 {
  margin: 0;
  color: var(--blue);
  font-family: var(--serif);
  font-size: 53px;
  font-weight: 400;
  line-height: 1.1;
}

.lv5-price-card small {
  display: block;
  margin: 5px 0 20px;
  color: #788394;
  font-size: 10px;
}

.lv5-price-rule {
  height: 1px;
  margin: 18px 0;
  background: #E6ECF4;
}

.lv5-price-list {
  display: grid;
  gap: 11px;
  margin: 0 0 23px;
  padding: 0;
  list-style: none;
}

.lv5-price-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: #4F5E73;
  font-size: 11px;
  line-height: 1.6;
}

.lv5-price-list svg {
  flex: 0 0 auto;
  color: var(--green);
}

.lv5-price-card .lv5-button {
  width: 100%;
}

.lv5-price-note {
  margin: 12px 0 0;
  color: #8993A0;
  font-size: 9px;
  line-height: 1.65;
  text-align: center;
}

/* FAQ */

.lv5-faq {
  padding: 90px 0;
  background: #F8FAFE;
}

.lv5-faq-grid {
  display: grid;
  grid-template-columns: .72fr 1fr;
  gap: 85px;
}

.lv5-faq-heading h2 {
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(36px,4vw,52px);
  font-weight: 400;
  line-height: 1.1;
}

.lv5-faq-heading > p:last-child {
  margin: 16px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.lv5-faq-list {
  border-top: 1px solid var(--line);
}

.lv5-faq-item {
  border-bottom: 1px solid var(--line);
}

.lv5-faq-item summary {
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

.lv5-faq-item summary::-webkit-details-marker {
  display: none;
}

.lv5-faq-item summary span {
  color: var(--blue);
  font-size: 21px;
  font-weight: 400;
  transition: transform .2s ease;
}

.lv5-faq-item[open] summary span {
  transform: rotate(45deg);
}

.lv5-faq-item p {
  margin: 0 25px 18px 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.8;
}

/* FINAL CTA */

.lv5-final {
  padding: 0 0 84px;
  background: #F8FAFE;
}

.lv5-final-inner {
  padding: 59px 30px;
  border: 1px solid #DCE6F2;
  background: linear-gradient(120deg,#EAF1FF,#EDF6F1 55%,#FFF4E6);
  text-align: center;
}

.lv5-final-inner h2 {
  max-width: 760px;
  margin: 0 auto 16px;
  color: var(--ink);
  font-family: var(--serif);
  font-size: clamp(37px,4vw,51px);
  font-weight: 400;
  line-height: 1.1;
}

.lv5-final-inner > p:not(.lv5-eyebrow) {
  max-width: 580px;
  margin: 0 auto 24px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

/* FOOTER */

.lv5-footer {
  padding: 30px 0 22px;
  border-top: 1px solid #E1E7F0;
  background: white;
}

.lv5-footer-top {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.lv5-footer-description {
  max-width: 390px;
  margin: 12px 0 0;
  color: #808A97;
  font-size: 10px;
  line-height: 1.7;
}

.lv5-footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 22px;
  color: #647184;
  font-size: 10px;
}

.lv5-footer-links a:hover {
  color: var(--blue);
}

.lv5-footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 24px;
  padding-top: 14px;
  border-top: 1px solid #E5E8EF;
  color: #969DA7;
  font-size: 9px;
}

.lv5-site a:focus-visible,
.lv5-site button:focus-visible,
.lv5-site summary:focus-visible {
  outline: 3px solid rgba(52,117,222,.35);
  outline-offset: 3px;
}

/* TABLET */

@media (max-width: 1050px) and (min-width: 761px) {
  .lv5-shell {
    width: calc(100% - 48px);
  }

  .lv5-nav {
    gap: 16px;
  }

  .lv5-nav-links {
    gap: 15px;
    font-size: 11px;
  }

  .lv5-nav-cta {
    padding: 11px 13px;
    font-size: 11px;
  }

  .lv5-hero-grid {
    gap: 30px;
  }

  .lv5-hero h1 {
    font-size: 49px;
  }

  .lv5-profile-panel,
  .lv5-gemini-panel {
    padding: 11px 8px;
  }

  .lv5-app-flow {
    grid-template-columns: minmax(0,1fr) 34px minmax(0,1fr);
    gap: 5px;
  }

  .lv5-flow-line {
    width: 25px;
  }

  .lv5-benefit {
    padding: 19px;
  }

  .lv5-notebook-grid,
  .lv5-pricing-grid,
  .lv5-faq-grid {
    gap: 42px;
  }
}

/* MOBILE */

@media (max-width: 760px) {
  .lv5-shell {
    width: calc(100% - 36px);
  }

  .lv5-topline {
    padding: 7px 12px;
    font-size: 9px;
  }

  .lv5-nav {
    min-height: 67px;
    justify-content: space-between;
  }

  .lv5-menu-toggle {
    display: block;
    width: 40px;
    height: 40px;
    border: 1px solid var(--line);
    border-radius: 7px;
    background: transparent;
  }

  .lv5-menu-toggle span {
    display: block;
    width: 17px;
    height: 2px;
    margin: 5px auto;
    background: var(--ink);
  }

  .lv5-nav-cta {
    display: none;
  }

  .lv5-nav-links {
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

  .lv5-nav-links.lv5-open {
    display: flex;
  }

  .lv5-nav-links > a:not(.lv5-mobile-cta) {
    padding: 12px 0;
    border-bottom: 1px solid var(--line);
  }

  .lv5-mobile-cta {
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

  .lv5-hero {
    padding: 50px 0 56px;
  }

  .lv5-hero-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .lv5-hero h1 {
    font-size: clamp(46px,11vw,60px);
  }

  .lv5-hero-copy {
    font-size: 14px;
  }

  .lv5-hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .lv5-hero-actions .lv5-button {
    width: 100%;
  }

  .lv5-connection {
    padding: 14px;
  }

  .lv5-app-flow {
    grid-template-columns: minmax(0,1fr) 27px minmax(0,1fr);
    gap: 4px;
  }

  .lv5-profile-panel,
  .lv5-gemini-panel {
    min-height: 305px;
    padding: 10px 7px;
  }

  .lv5-panel-heading {
    gap: 5px;
  }

  .lv5-panel-heading strong {
    font-size: 9px;
  }

  .lv5-panel-heading small {
    font-size: 7px;
  }

  .lv5-profile-icon,
  .lv5-gemini-icon {
    width: 28px;
    height: 28px;
  }

  .lv5-flow-line {
    width: 20px;
  }

  .lv5-flow-arrow {
    width: 25px;
    height: 25px;
  }

  .lv5-flow-caption {
    font-size: 5px;
  }

  .lv5-profile-data span,
  .lv5-profile-data b {
    font-size: 7px;
  }

  .lv5-task-selector button {
    padding: 7px 9px;
  }

  .lv5-connected-label {
    flex-wrap: wrap;
  }

  .lv5-proof-inner {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .lv5-benefits,
  .lv5-how,
  .lv5-qr,
  .lv5-faq {
    padding: 69px 0;
  }

  .lv5-section-heading {
    margin-bottom: 30px;
  }

  .lv5-section-heading h2,
  .lv5-notebook-copy h2,
  .lv5-how-heading h2,
  .lv5-eligibility-copy h2,
  .lv5-qr-copy h2,
  .lv5-price-copy h2,
  .lv5-faq-heading h2 {
    font-size: 39px;
  }

  .lv5-benefit-grid {
    grid-template-columns: 1fr;
    gap: 13px;
  }

  .lv5-benefit,
  .lv5-benefit:nth-child(4),
  .lv5-benefit:nth-child(5) {
    grid-column: 1;
    min-height: 0;
  }

  .lv5-benefit > p {
    min-height: 0;
  }

  .lv5-notebook {
    padding: 69px 0;
  }

  .lv5-notebook-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .lv5-how-heading {
    margin-bottom: 30px;
  }

  .lv5-how-grid {
    grid-template-columns: 1fr;
  }

  .lv5-how-step,
  .lv5-how-step + .lv5-how-step {
    padding: 22px 0;
    border-left: 0;
    border-bottom: 1px solid var(--line);
  }

  .lv5-step-number {
    margin-bottom: 12px;
    font-size: 29px;
  }

  .lv5-eligibility-grid {
    grid-template-columns: 1fr;
    gap: 26px;
  }

  .lv5-eligibility-list {
    grid-template-columns: 1fr;
  }

  .lv5-qr-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .lv5-qr-card {
    justify-self: center;
    width: 100%;
    max-width: 390px;
  }

  .lv5-pricing {
    padding: 69px 0;
  }

  .lv5-pricing-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .lv5-price-card {
    padding: 23px 19px;
  }

  .lv5-faq-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .lv5-final {
    padding-bottom: 60px;
  }

  .lv5-final-inner {
    padding: 42px 20px;
  }

  .lv5-final-inner h2 {
    font-size: 39px;
  }

  .lv5-footer-top,
  .lv5-footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .lv5-footer-top {
    gap: 23px;
  }

  .lv5-footer-bottom {
    gap: 8px;
  }
}

@media (max-width: 390px) {
  .lv5-shell {
    width: calc(100% - 28px);
  }

  .lv5-app-flow {
    grid-template-columns: minmax(0,1fr) 22px minmax(0,1fr);
    gap: 3px;
  }

  .lv5-profile-panel,
  .lv5-gemini-panel {
    padding: 9px 6px;
  }

  .lv5-flow-line {
    width: 16px;
  }

  .lv5-flow-arrow {
    width: 22px;
    height: 22px;
  }

  .lv5-hero h1 {
    font-size: 44px;
  }

  .lv5-demo-heading strong {
    font-size: 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .lv5-site *,
  .lv5-site *::before,
  .lv5-site *::after {
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

      <div className="lv5-site" id="lv5-top">
        <div className="lv5-topline">
          Connect your Google Business Profile to Gemini — and do more with it.
        </div>

        <header className="lv5-header">
          <nav className="lv5-nav lv5-shell" aria-label="Main navigation">
            <a className="lv5-brand" href="#lv5-top" onClick={closeMenu}>
              <Logo />
            </a>

            <button
              className="lv5-menu-toggle"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>

            <div className={`lv5-nav-links ${menuOpen ? "lv5-open" : ""}`}>
              <a href="#lv5-benefits" onClick={closeMenu}>Gemini benefits</a>
              <a href="#lv5-how" onClick={closeMenu}>How it works</a>
              <a href="#lv5-pricing" onClick={closeMenu}>Pricing</a>
              <a href="#lv5-faq" onClick={closeMenu}>FAQs</a>

              <a
                className="lv5-mobile-cta"
                href={inquiryUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                Get setup help <Arrow />
              </a>
            </div>

            <a
              className="lv5-nav-cta"
              href={inquiryUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get setup help <Arrow diagonal />
            </a>
          </nav>
        </header>

        <main>
          <section className="lv5-hero">
            <div className="lv5-shell lv5-hero-grid">
              <div>
                <p className="lv5-kicker">
                  Your business profile, connected to Gemini
                </p>

                <h1>
                  Your Google Business Profile can do more with{" "}
                  <em>Gemini.</em>
                </h1>

                <p className="lv5-hero-copy">
                  Connect your verified Business Profile and use Gemini to
                  understand customer reviews, draft replies, update supported
                  business details, create posts and explore how people find
                  your business.
                </p>

                <div className="lv5-hero-actions">
                  <a
                    className="lv5-button lv5-button-primary"
                    href={inquiryUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Gemini setup help — ₹2,000 <Arrow />
                  </a>

                  <a
                    className="lv5-button lv5-button-secondary"
                    href="#lv5-benefits"
                  >
                    Explore the benefits
                  </a>
                </div>

                <div className="lv5-hero-trust">
                  <span><Check /> One-time service</span>
                  <span><Check /> One business location</span>
                  <span><Check /> LoveView QR included</span>
                </div>

                <p className="lv5-hero-note">
                  LoveView helps with profile setup, eligibility checks and
                  connection guidance. Actual Gemini access and features
                  depend on Google's requirements and availability.
                </p>
              </div>

              <ConnectionVisual />
            </div>
          </section>

          <section className="lv5-proof">
            <div className="lv5-shell lv5-proof-inner">
              <strong>
                Don't just maintain your profile. Put it to work.
              </strong>
              <p>
                Work with customer feedback, update supported information
                and understand how people discover your business.
              </p>
            </div>
          </section>

          <section className="lv5-benefits" id="lv5-benefits">
            <div className="lv5-shell">
              <div className="lv5-section-heading">
                <p className="lv5-eyebrow">What you can do with Gemini</p>
                <h2>
                  Real business tasks. Clear examples of what Gemini can help you do.
                </h2>
                <p>
                  Explore each example to understand how a connected
                  Business Profile can be useful in your everyday work.
                </p>
              </div>

              <div className="lv5-benefit-grid">
                {benefits.map((item) => (
                  <BenefitCard item={item} key={item.number} />
                ))}
              </div>
            </div>
          </section>

          <section className="lv5-notebook">
            <div className="lv5-shell lv5-notebook-grid">
              <div className="lv5-notebook-copy">
                <p className="lv5-eyebrow">For eligible accounts</p>
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
                <div className="lv5-notebook-mockup">
                  <div className="lv5-notebook-header">
                    <div className="lv5-notebook-logo">
                      <Sparkle size={22} />
                    </div>
                    <div>
                      <strong>Your business notebook</strong>
                      <small>Illustrative Gemini experience</small>
                    </div>
                  </div>

                  <div className="lv5-insights">
                    <div className="lv5-insight">
                      <span className="lv5-insight-icon">⌖</span>
                      <div>
                        <strong>Review your business information</strong>
                        <p>Find missing or outdated profile details.</p>
                      </div>
                    </div>

                    <div className="lv5-insight">
                      <span className="lv5-insight-icon">▧</span>
                      <div>
                        <strong>Check your business photos</strong>
                        <p>Explore suggestions for useful business photos.</p>
                      </div>
                    </div>

                    <div className="lv5-insight">
                      <span className="lv5-insight-icon">⌁</span>
                      <div>
                        <strong>Review business performance</strong>
                        <p>Explore available metrics and search terms.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="lv5-notebook-note">
                  Business Notebooks and proactive insights are subject to
                  Google's eligibility requirements and availability.
                </p>
              </div>
            </div>
          </section>

          <section className="lv5-how" id="lv5-how">
            <div className="lv5-shell">
              <div className="lv5-how-heading">
                <p className="lv5-eyebrow">How LoveView helps</p>
                <h2>From your existing profile to Gemini.</h2>
                <p>
                  We help you understand what needs to be ready, then guide
                  you through the connection process using your own Google
                  Account.
                </p>
              </div>

              <div className="lv5-how-grid">
                <article className="lv5-how-step">
                  <span className="lv5-step-number">01</span>
                  <h3>Review your profile</h3>
                  <p>
                    We check whether your Business Profile is verified and
                    review its basic information and setup.
                  </p>
                </article>

                <article className="lv5-how-step">
                  <span className="lv5-step-number">02</span>
                  <h3>Check Gemini eligibility</h3>
                  <p>
                    We explain Google's current requirements and help you
                    check whether your account can use the connection.
                  </p>
                </article>

                <article className="lv5-how-step">
                  <span className="lv5-step-number">03</span>
                  <h3>Connect and learn</h3>
                  <p>
                    We guide you through the Gemini web app and show you
                    practical prompts for supported business tasks.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="lv5-eligibility">
            <div className="lv5-shell lv5-eligibility-grid">
              <div className="lv5-eligibility-copy">
                <p className="lv5-eyebrow">Important before connecting</p>
                <h2>Is your business profile eligible?</h2>
                <p>
                  Google sets the connection requirements. We check these
                  before promising that the feature can be activated.
                </p>
              </div>

              <div className="lv5-eligibility-list">
                {[
                  "You are 18 or older.",
                  "You own or manage only one verified Business Profile.",
                  "You use a personal Google Account associated with the profile.",
                  "Google Account Keep Activity is enabled.",
                  "You connect through the Gemini web app.",
                  "The feature and supported language are available to your account.",
                ].map((item) => (
                  <div className="lv5-eligibility-item" key={item}>
                    <Check />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="lv5-qr" id="lv5-qr">
            <div className="lv5-shell lv5-qr-grid">
              <div className="lv5-qr-copy">
                <p className="lv5-eyebrow">A LoveView bonus</p>
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
                <div className="lv5-qr-card">
                  <div className="lv5-qr-head">
                    <strong>LoveView</strong>
                    <span>CUSTOMER FEEDBACK</span>
                  </div>
                  <div className="lv5-qr-white">
                    <QrArtwork />
                  </div>
                  <div className="lv5-qr-bottom">
                    <strong>Your experience matters.</strong>
                    <small>Scan to share your feedback</small>
                  </div>
                </div>
                <p className="lv5-qr-disclaimer">
                  Illustrative artwork only. Your unique business QR is
                  generated separately during setup.
                </p>
              </div>
            </div>
          </section>

          <section className="lv5-pricing" id="lv5-pricing">
            <div className="lv5-shell lv5-pricing-grid">
              <div className="lv5-price-copy">
                <p className="lv5-eyebrow">One-time setup assistance</p>
                <h2>
                  Make more of the business profile you already have.
                </h2>
                <p>
                  We help prepare your Google Business Profile, check
                  connection eligibility, guide you through Gemini and show
                  you useful ways to work with your business information.
                </p>
              </div>

              <div className="lv5-price-card">
                <span>LOVEVIEW BUSINESS SETUP</span>
                <h3>₹2,000</h3>
                <small>One-time service fee · One business location</small>

                <div className="lv5-price-rule" />

                <ul className="lv5-price-list">
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
                  className="lv5-button lv5-button-primary"
                  href={inquiryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get setup assistance <Arrow />
                </a>

                <p className="lv5-price-note">
                  Google Business Profile is free. ₹2,000 is LoveView's
                  service fee. No Google ranking or Gemini recommendation
                  is guaranteed.
                </p>
              </div>
            </div>
          </section>

          <section className="lv5-faq" id="lv5-faq">
            <div className="lv5-shell lv5-faq-grid">
              <div className="lv5-faq-heading">
                <p className="lv5-eyebrow">Frequently asked questions</p>
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

              <div className="lv5-faq-list">
                {faqs.map((faq) => (
                  <details className="lv5-faq-item" key={faq.question}>
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

          <section className="lv5-final">
            <div className="lv5-shell lv5-final-inner">
              <p className="lv5-eyebrow">Let's get your business ready</p>
              <h2>
                Your business profile. Your customer insights. More useful with Gemini.
              </h2>
              <p>
                Start with a Google Business Profile review and find out
                whether your business is ready to connect with Gemini.
              </p>
              <a
                className="lv5-button lv5-button-primary"
                href={inquiryUrl}
                target="_blank"
                rel="noreferrer"
              >
                Check my setup eligibility — ₹2,000 <Arrow />
              </a>
            </div>
          </section>
        </main>

        <footer className="lv5-footer">
          <div className="lv5-shell">
            <div className="lv5-footer-top">
              <div>
                <a className="lv5-brand" href="#lv5-top">
                  <Logo />
                </a>
                <p className="lv5-footer-description">
                  Helping local businesses make better use of their
                  Google Business Profile and customer feedback.
                </p>
              </div>

              <div className="lv5-footer-links">
                <a href="#lv5-benefits">Gemini benefits</a>
                <a href="#lv5-how">How it works</a>
                <a href="#lv5-pricing">Pricing</a>
                <a href="mailto:hello@theloveview.com">Contact</a>
                <a href={googleGuide} target="_blank" rel="noreferrer">
                  Google's feature guide <Arrow diagonal />
                </a>
              </div>
            </div>

            <div className="lv5-footer-bottom">
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
