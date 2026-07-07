import { Link } from "react-router-dom";
import { Container, Section } from "../layout-system";
import { Button, Badge } from "../ui";

export default function CTA() {
  return (
    <Section className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="light">
            Start Growing Today
          </Badge>

          <h2 className="mt-8 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Ready to Collect More Google Reviews?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-indigo-100">
            Start using LoveView in minutes to collect more Google reviews,
            capture private customer feedback, and understand every customer
            experience through one simple dashboard.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/onboarding">
              <Button
                variant="secondary"
                size="lg"
              >
                Start Free Trial
              </Button>
            </Link>

            <a
              href="https://forms.gle/C9pJwNvVt4EM8trF9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-indigo-600"
              >
                Book a Demo
              </Button>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-medium text-indigo-100">
            <span>✓ Setup in Minutes</span>
            <span>✓ Works with Google Reviews</span>
            <span>✓ Built for Local Businesses</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}