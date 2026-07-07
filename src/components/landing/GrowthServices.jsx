import { Container, Section, Grid } from "../layout-system";
import { Card, Badge, SectionTitle } from "../ui";

export default function GrowthServices() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <SectionTitle
          badge={<Badge>Coming Soon</Badge>}
          title="LoveView Is Just Getting Started"
          subtitle="We're continuously building new features to help local businesses collect more reviews, understand customers, and grow with confidence."
        />

        <Grid
          cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          gap="gap-8"
          className="mt-16 items-stretch"
        >
          <Card
            hover
            className="h-full justify-between"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold">
                AI Review Insights
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Discover patterns in customer feedback, identify recurring
                issues, and uncover opportunities to improve your business.
              </p>
            </div>
          </Card>

          <Card
            hover
            className="h-full justify-between"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold">
                Google Business Profile Audit
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Receive a comprehensive audit with actionable recommendations
                to improve your local visibility and Google ranking.
              </p>
            </div>
          </Card>

          <Card
            hover
            className="h-full justify-between"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold">
                Multi-Location Dashboard
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Manage reviews, ratings, and customer feedback across multiple
                business locations from one centralized dashboard.
              </p>
            </div>
          </Card>

          <Card
            hover
            className="h-full justify-between"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold">
                WhatsApp Communication
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Send review requests, follow up with customers, and build
                stronger relationships through WhatsApp.
              </p>
            </div>
          </Card>

          <Card
            hover
            className="h-full justify-between"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold">
                Customer Loyalty
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Encourage repeat visits with loyalty programs, exclusive
                rewards, and personalized customer engagement.
              </p>
            </div>
          </Card>

          <Card
            hover
            className="h-full justify-between"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold">
                Advanced Analytics
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Gain deeper insights into ratings, trends, customer behaviour,
                and business performance through advanced analytics.
              </p>
            </div>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}