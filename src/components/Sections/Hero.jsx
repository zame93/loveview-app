import { Link } from "react-router-dom";
import { Container, Section, Grid } from "../layout-system";
import { Button, Card, Badge } from "../ui";

export default function Hero() {
  return (
    <Section
      fullScreen
      className="flex items-center"
    >
      <Container>
        <Grid
          cols="grid-cols-1 lg:grid-cols-2"
          gap="gap-16"
          className="items-center"
        >
          {/* Left */}
          <div>
            <Badge>
              Google Reviews • Private Feedback • Customer Insights
            </Badge>

            <h1 className="mt-8 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Collect More
              <br />
              <span className="text-slate-900">
                Google Reviews.
              </span>

              <br />

              <span className="text-indigo-600">
                Capture Private Feedback Before It Becomes Public.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              LoveView helps restaurants, cafés, salons and local businesses
              collect more Google reviews, capture private customer feedback,
              and understand customer satisfaction through one simple dashboard.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/onboarding">
                <Button size="lg">
                  Start Free Trial
                </Button>
              </Link>

              <a
                href="https://forms.gle/C9pJwNvVt4EM8trF9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="lg"
                >
                  Book Demo
                </Button>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-slate-600">
              <span>✓ 2-Minute Setup</span>
              <span>✓ QR Code Included</span>
              <span>✓ No App Required</span>
              <span>✓ Works With Google Reviews</span>
            </div>
          </div>

          {/* Right */}
          <Card
            hover
            shadow="shadow-2xl"
            padding="p-10"
            className="h-full"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">
                Live Review Dashboard
              </h3>

              <Badge variant="success">
                Live
              </Badge>
            </div>

            {/* KPI Cards */}
            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="min-h-[120px] rounded-2xl bg-slate-50 p-5 flex flex-col justify-center text-center">
                <div className="text-4xl font-bold text-indigo-600">
                  4.8
                </div>

                <div className="mt-2 text-sm text-slate-500">
                  Average Rating
                </div>
              </div>

              <div className="min-h-[120px] rounded-2xl bg-slate-50 p-5 flex flex-col justify-center text-center">
                <div className="text-4xl font-bold text-indigo-600">
                  482
                </div>

                <div className="mt-2 text-sm text-slate-500">
                  Google Reviews
                </div>
              </div>

              <div className="min-h-[120px] rounded-2xl bg-slate-50 p-5 flex flex-col justify-center text-center">
                <div className="text-4xl font-bold text-green-600">
                  92%
                </div>

                <div className="mt-2 text-sm text-slate-500">
                  Satisfaction
                </div>
              </div>

              <div className="min-h-[120px] rounded-2xl bg-slate-50 p-5 flex flex-col justify-center text-center">
                <div className="text-4xl font-bold text-violet-600">
                  134
                </div>

                <div className="mt-2 text-sm text-slate-500">
                  Private Feedback
                </div>
              </div>

            </div>

            {/* Activity Feed */}
            <div className="mt-8 rounded-2xl bg-slate-50 p-8">
              <h4 className="text-sm font-semibold text-slate-700">
                Recent Customer Activity
              </h4>

              <div className="mt-6 space-y-5">

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-slate-700">
                    ⭐⭐⭐⭐⭐ Amazing food &amp; service
                  </span>

                  <Badge
                    variant="success"
                    size="sm"
                  >
                    Posted
                  </Badge>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-slate-700">
                    ⭐⭐⭐⭐ Great customer experience
                  </span>

                  <Badge
                    variant="success"
                    size="sm"
                  >
                    Posted
                  </Badge>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-slate-700">
                    ⭐⭐ Slow delivery issue
                  </span>

                  <Badge
                    variant="warning"
                    size="sm"
                  >
                    Private
                  </Badge>
                </div>

              </div>
            </div>

          </Card>
        </Grid>
      </Container>
    </Section>
  );
}