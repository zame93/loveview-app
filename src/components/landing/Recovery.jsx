import { Container, Section, Grid } from "../layout-system";
import { Badge, Card } from "../ui";

export default function Recovery() {
  return (
    <Section className="bg-indigo-600 text-white">
      <Container>
        <Grid
          cols="grid-cols-1 lg:grid-cols-2"
          gap="gap-16"
          className="items-center"
        >
          {/* Left */}
          <div>
            <Badge variant="transparent">
              Private Customer Feedback
            </Badge>

            <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
              Recover Customers Before They Leave For Good
            </h2>

            <p className="mt-6 text-xl leading-8 text-indigo-100">
              Instead of losing unhappy customers to public reviews,
              LoveView lets them share feedback privately so your team
              can understand issues, resolve complaints, and retain
              more customers.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span>Capture private customer feedback</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span>Understand common customer issues</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span>Reduce negative public Google reviews</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span>Improve customer satisfaction and retention</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <Card
            hover
            shadow="shadow-2xl"
            padding="p-10"
          >
            <h3 className="text-2xl font-bold">
              Private Feedback Dashboard
            </h3>

            <div className="mt-8 space-y-5">

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                📝 New private feedback received
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                📌 Most reported issue: Waiting Time
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                📊 Private feedback this month: 18
              </div>

            </div>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}