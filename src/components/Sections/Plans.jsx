import { Link } from "react-router-dom";
import { Container, Section, Grid } from "../layout-system";
import { Card, Badge, Button, SectionTitle } from "../ui";

export default function Plans() {
  return (
    <Section id="plans">
      <Container>
        <SectionTitle
          badge={<Badge>Pricing</Badge>}
          title="Simple Pricing for Local Businesses"
          subtitle="Everything you need to collect more Google reviews, capture private customer feedback, and understand your customers."
        />

        <Grid
          cols="grid-cols-1 lg:grid-cols-2"
          gap="gap-8"
          className="mt-16 items-stretch"
        >
          {/* Starter Plan */}
          <Card
            hover
            padding="p-10"
            shadow="shadow-2xl"
            className="h-full border-2 border-indigo-600 justify-between"
          >
            <div className="flex-1">
              <Badge>RECOMMENDED</Badge>

              <h3 className="mt-5 text-3xl font-bold">
                LoveView Starter
              </h3>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-6xl font-extrabold">
                  ₹1,999
                </span>
              </div>

              <p className="mt-2 text-slate-500">
                One-time setup
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Perfect for restaurants, cafés, salons, clinics and local
                businesses.
              </p>

              <ul className="mt-8 space-y-4 text-slate-700">
                <li>✓ Business setup</li>
                <li>✓ Review QR Code</li>
                <li>✓ Smart Review Routing</li>
                <li>✓ Google Review Collection</li>
                <li>✓ Private Customer Feedback</li>
                <li>✓ Live Business Dashboard</li>
                <li>✓ Customer Insights</li>
                <li>✓ 30 Days Support</li>
              </ul>
            </div>

            <Link to="/onboarding" className="mt-10">
              <Button
                size="lg"
                className="w-full"
              >
                Get Started
              </Button>
            </Link>
          </Card>

          {/* Growth Plan */}
          <Card
            variant="slate"
            hover
            padding="p-10"
            className="h-full justify-between"
          >
            <div className="flex-1">
              <Badge variant="neutral">
                COMING SOON
              </Badge>

              <h3 className="mt-5 text-3xl font-bold">
                LoveView Growth
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Designed for growing businesses that need advanced customer
                engagement tools.
              </p>

              <ul className="mt-8 space-y-4 text-slate-700">
                <li>✓ Multi-location support</li>
                <li>✓ AI-powered customer insights</li>
                <li>✓ WhatsApp communication</li>
                <li>✓ Loyalty & rewards</li>
                <li>✓ Advanced reporting</li>
                <li>✓ Priority support</li>
              </ul>
            </div>

            <Button
              variant="secondary"
              size="lg"
              className="mt-10 w-full"
            >
              Join the Waitlist
            </Button>
          </Card>
        </Grid>

        {/* Demo CTA */}
        <Card
          variant="primary"
          padding="p-12"
          shadow="shadow-2xl"
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold">
            Not Sure If LoveView Is Right for You?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-indigo-100">
            Book a free demo and we'll show you how LoveView can help your
            business collect more Google reviews, capture private customer
            feedback, and better understand your customers.
          </p>

          <a
            href="https://forms.gle/C9pJwNvVt4EM8trF9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block"
          >
            <Button
              variant="secondary"
              size="lg"
            >
              Book Free Demo
            </Button>
          </a>
        </Card>
      </Container>
    </Section>
  );
}