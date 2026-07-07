import { Container, Section, Grid } from "../layout-system";
import { Card, Badge, SectionTitle } from "../ui";

export default function WhyLoveView() {
  return (
    <Section id="why-loveview" className="bg-slate-50">
      <Container>
        <SectionTitle
          badge={<Badge>Why LoveView</Badge>}
          title="More Than Just a Google Review QR Code"
          subtitle="LoveView helps businesses collect more Google reviews while giving unhappy customers a safe way to share private feedback and helping you understand what really happens after every visit."
        />

        <Grid
          cols="grid-cols-1 lg:grid-cols-2"
          gap="gap-8"
          className="mt-16 items-stretch"
        >
          {/* Standard QR */}
          <Card
            hover
            className="h-full justify-between"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold">
                Standard Google Review QR
              </h3>

              <div className="mt-8 space-y-5 leading-7 text-slate-600">
                <div>✅ Sends every customer to Google Reviews</div>
                <div>❌ No private customer feedback</div>
                <div>❌ No customer satisfaction insights</div>
                <div>❌ No issue tracking</div>
                <div>❌ No business dashboard</div>
              </div>
            </div>
          </Card>

          {/* LoveView */}
          <Card
            variant="primary"
            hover
            shadow="shadow-xl"
            className="h-full justify-between"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold">
                LoveView
              </h3>

              <div className="mt-8 space-y-5 leading-7 text-white">
                <div>✅ Smart review routing</div>
                <div>✅ Private customer feedback</div>
                <div>✅ Customer satisfaction tracking</div>
                <div>✅ Common issue insights</div>
                <div>✅ Live business dashboard</div>
              </div>
            </div>
          </Card>
        </Grid>

        <Card
          hover
          className="mt-14 text-center"
          padding="p-10"
        >
          <h3 className="text-3xl font-bold">
            Every Customer Experience Matters
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            LoveView doesn't just help you collect Google reviews. It helps
            you understand your customers, resolve issues privately, and
            continuously improve your business.
          </p>
        </Card>
      </Container>
    </Section>
  );
}