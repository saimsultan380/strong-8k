import { Container } from "@/components/layout/container";

export function RefundPolicySection() {
  return (
    <section
      id="refund-policy"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl">
          <h2
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--hero-heading)" }}
          >
            Refunds and Our{" "}
            <span style={{ color: "var(--hero-accent)" }}>Seven-Day Money-Back Guarantee</span>
          </h2>
          <div
            className="mt-6 space-y-5 text-sm leading-[1.8] sm:text-[15px]"
            style={{ color: "var(--hero-muted)" }}
          >
            <p>
              We offer a 7-day money-back guarantee, starting from the activation of your paid
              subscription. Within those 7 days you can ask for a refund if you change your mind,
              or if the service is not working as you wanted.
            </p>
            <p>
              Contact support with your order reference, device and app details, and a short
              description of the problem. After 7 days, this guarantee no longer applies and we
              do not offer a refund under it.
            </p>
            <p>
              We continue to provide technical support throughout your active subscription,
              including after the first 7 days. If a problem continues, contact us and we will
              investigate and help where the issue is within our service, your device, your app
              or your connection.
            </p>
            <p>
              If you bought more than one account in the same order and only one account is
              affected, contact support before you pay if you want the refund worked out for that
              account. We confirm the amount for the affected account when you request the refund.
            </p>
            <p>
              This consumer guarantee applies to paid viewing subscriptions. It does not
              automatically apply to wholesale reseller credit purchases. Nothing in this policy
              removes statutory rights that apply to you.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
