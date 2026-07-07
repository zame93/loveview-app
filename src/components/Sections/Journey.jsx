import { Container, Section, Grid } from "../layout-system";
import { Card, Badge, SectionTitle } from "../ui";

export default function Journey() {
  return (
    <Section id="how-it-works" className="bg-slate-50">
      <Container>
        <SectionTitle
          badge={<Badge>How It Works</Badge>}
          title="How LoveView Helps Your Business"
          subtitle="Collect more Google reviews while capturing private customer feedback through one simple QR code."
        />

        <Grid
          cols="grid-cols-1 md:grid-cols-3"
          gap="gap-8"
          className="mt-16 items-stretch"
        >
          {/* Step 1 */}
          <Card
            hover
            className="h-full justify-between"
          >
            <div className="flex-1">
              <Badge>STEP 1</Badge>

              <h3 className="mt-5 text-2xl font-bold">
                Customer Scans QR
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Customers simply scan your LoveView QR code after their visit
                using their phone camera. No app download is required.
              </p>
            </div>
          </Card>

          {/* Step 2 */}
          <Card
            hover
            className="h-full justify-between"
          >
            <div className="flex-1">
              <Badge>STEP 2</Badge>

              <h3 className="mt-5 text-2xl font-bold">
                Rate Their Experience
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Customers rate their experience in seconds using an intuitive
                1–5 star rating flow designed for maximum completion.
              </p>
            </div>
          </Card>

          {/* Step 3 */}
          <Card
            hover
            className="h-full justify-between"
          >
            <div className="flex-1">
              <Badge>STEP 3</Badge>

              <h3 className="mt-5 text-2xl font-bold">
                Smart Review Routing
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Happy customers are guided to leave a Google review, while
                dissatisfied customers can privately share feedback directly
                with your business.
              </p>
            </div>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}