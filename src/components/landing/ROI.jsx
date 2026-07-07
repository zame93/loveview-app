import { Container, Section, Grid } from "../layout-system";
import { Card, Badge, SectionTitle } from "../ui";

export default function ROI() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionTitle
          badge={<Badge>Dashboard Insights</Badge>}
          title="Understand What Your Customers Are Really Saying"
          subtitle="LoveView turns customer ratings and private feedback into actionable insights that help you improve every customer experience."
        />

        {/* Feature Cards */}
        <Grid
          cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          gap="gap-8"
          className="mt-16 items-stretch"
        >
          <Card hover className="h-full flex flex-col">
            <h3 className="text-2xl font-bold text-indigo-600">
              Average Rating
            </h3>

            <p className="mt-3 flex-1 text-slate-600 leading-7">
              Know how customers rate their experience.
            </p>
          </Card>

          <Card hover className="h-full flex flex-col">
            <h3 className="text-2xl font-bold text-indigo-600">
              Customer Satisfaction
            </h3>

            <p className="mt-3 flex-1 text-slate-600 leading-7">
              Track customer satisfaction over time.
            </p>
          </Card>

          <Card hover className="h-full flex flex-col">
            <h3 className="text-2xl font-bold text-indigo-600">
              Private Feedback
            </h3>

            <p className="mt-3 flex-1 text-slate-600 leading-7">
              Understand what customers don't share publicly.
            </p>
          </Card>

          <Card hover className="h-full flex flex-col">
            <h3 className="text-2xl font-bold text-indigo-600">
              Rating Trends
            </h3>

            <p className="mt-3 flex-1 text-slate-600 leading-7">
              Monitor improvements in customer experience over time.
            </p>
          </Card>
        </Grid>

        {/* Dashboard Preview */}
        <Card
          variant="primary"
          padding="p-12"
          shadow="shadow-2xl"
          className="mt-16"
        >
          <h3 className="text-3xl font-bold">
            LoveView Dashboard
          </h3>

          <Grid
            cols="grid-cols-1 md:grid-cols-2"
            gap="gap-6"
            className="mt-10"
          >
            <div className="rounded-2xl bg-white/10 p-6">
              <div className="text-3xl font-bold">
                4.8 ★
              </div>

              <div className="mt-2 text-indigo-100">
                Average Rating
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <div className="text-3xl font-bold">
                92%
              </div>

              <div className="mt-2 text-indigo-100">
                Customer Satisfaction
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <div className="text-3xl font-bold">
                482
              </div>

              <div className="mt-2 text-indigo-100">
                Google Reviews
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <div className="text-3xl font-bold">
                18
              </div>

              <div className="mt-2 text-indigo-100">
                Private Feedback
              </div>
            </div>
          </Grid>

          <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-8 text-indigo-100">
            View customer ratings, satisfaction trends, and private feedback
            from one simple dashboard designed specifically for local businesses.
          </p>
        </Card>
      </Container>
    </Section>
  );
}