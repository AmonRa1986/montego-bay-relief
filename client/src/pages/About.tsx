import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Montego Bay Relief, Inc.
              </h1>
              <p className="text-xl text-muted-foreground">
                A grassroots nonprofit organization dedicated to providing disaster relief and sustainable development support to the Montego Bay community in Jamaica.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#008B8B]/10 rounded-lg">
                      <Target className="h-6 w-6 text-[#008B8B]" />
                    </div>
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide immediate disaster relief and long-term community development support to families in Montego Bay, Jamaica, through transparent, locally-led programs that honor dignity and empower sustainable recovery.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#F7A520]/10 rounded-lg">
                      <Heart className="h-6 w-6 text-[#F7A520]" />
                    </div>
                    <h2 className="text-2xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    A thriving Montego Bay community where every family has access to emergency relief, quality education, and the resources needed to rebuild stronger after disasters—supported by a global network of committed donors and partners.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Our Story */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Montego Bay Relief, Inc. was born from a deeply personal connection to the Montego Bay community. When Hurricane Melissa devastated Jamaica in 2024, we witnessed firsthand the urgent need for coordinated, transparent relief efforts that truly serve the people most affected.
                </p>
                <p>
                   What began as a small grassroots effort to support families in our home community is growing into a formal nonprofit organization. We have homes in Montego Bay and understand the unique challenges facing families in the region. Our approach is rooted in cultural understanding, local partnerships, and a commitment to ensuring every dollar donated directly supports relief and rebuilding efforts.
                </p>
                <p>
                   As an organization in formation, we are building a sustainable nonprofit that can respond to immediate crises while investing in long-term community development. Our programs focus on emergency relief kits, educational support for students, and community rebuilding initiatives that empower local leaders and volunteers.
                </p>
                <p>
                  We believe in radical transparency, hyper-local focus, and the power of community-led solutions. Every distribution is coordinated with local leaders, every program is designed with input from beneficiaries, and every donor receives clear reporting on how their contribution makes an impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 501(c)(3) Status */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#008B8B]/10 rounded-lg">
                      <Shield className="h-8 w-8 text-[#008B8B]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-3">Organization in Formation</h2>
                      <p className="text-muted-foreground mb-4">
                        Montego Bay Relief is a nonprofit organization currently in formation. We are building a platform to provide food and essential support to communities in need. Our Florida incorporation filings are underway, and we will pursue federal 501(c)(3) status upon approval.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        <strong>What this means for donors:</strong> As we are in formation, donations are not yet tax-deductible. We are committed to transparency throughout our formation process and will update our status as we complete incorporation and pursue 501(c)(3) approval. Every dollar donated goes directly toward relief efforts in Montego Bay.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Status:</strong> Formation in progress | <strong>Planned State:</strong> Florida | <strong>Target:</strong> 501(c)(3) nonprofit
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="h-8 w-8 text-[#008B8B]" />
                <h2 className="text-3xl font-bold">Our Officers</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our leadership team brings deep community ties, nonprofit expertise, and a shared commitment to serving Montego Bay families with integrity and transparency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-[#008B8B]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#008B8B]">DH</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">Duke Hines</h3>
                  <p className="text-sm text-[#008B8B] mb-3">President & Founder</p>
                  <p className="text-sm text-muted-foreground">
                    Retired electrical contractor born and raised in Jamaica. After a distinguished career in Florida, Duke returned home to Montego Bay where he has resided for over 10 years. His deep roots in the community and commitment to rebuilding his homeland drive our mission forward.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-[#F7A520]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#F7A520]">NM</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">Neil Martin</h3>
                  <p className="text-sm text-[#008B8B] mb-3">Treasurer</p>
                  <p className="text-sm text-muted-foreground">
                    Jamaican-born financial expert with over 20 years of experience in financial management. Now residing in the United States, Neil brings rigorous fiscal oversight and nonprofit financial expertise to ensure every dollar serves our mission with integrity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-[#2D5016]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#2D5016]">SH</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">Shomari Hines</h3>
                  <p className="text-sm text-[#008B8B] mb-3">Executive Director</p>
                  <p className="text-sm text-muted-foreground">
                    Brings over 10 years of community outreach and program development experience, combined with a decade as a senior marketing manager specializing in public relations. Shomari's strategic vision and grassroots expertise ensure our programs reach those who need them most.
                  </p>
                </CardContent>
              </Card>
            </div>


          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#008B8B]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-[#008B8B]" />
                </div>
                <h3 className="font-bold mb-2">Transparency</h3>
                <p className="text-sm text-muted-foreground">
                  Every dollar tracked, every distribution documented, every impact reported.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7A520]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#F7A520]" />
                </div>
                <h3 className="font-bold mb-2">Community-Led</h3>
                <p className="text-sm text-muted-foreground">
                  Local leaders guide our work, ensuring culturally appropriate and dignified support.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-bold mb-2">Dignity</h3>
                <p className="text-sm text-muted-foreground">
                  Relief delivered with respect, honoring the strength and resilience of every family.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#2D5016]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-[#2D5016]" />
                </div>
                <h3 className="font-bold mb-2">Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Measurable outcomes, sustainable solutions, and long-term community thriving.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Join Us in Rebuilding Montego Bay</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether through donations, volunteering, or partnerships, your support helps families recover and thrive.
              </p>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg" asChild>
                    <a href="https://donate.stripe.com/7sY00k9Rh0Ee8cQ3gz63K00" target="_blank" rel="noopener noreferrer">
                      Donate with Stripe
                    </a>
                  </Button>
                  <Button size="lg" asChild className="bg-[#0070ba] hover:bg-[#005ea6] text-white">
                    <a href="https://www.paypal.com/ncp/payment/EPU97Q58HQN36" target="_blank" rel="noopener noreferrer">
                      Donate with PayPal
                    </a>
                  </Button>
                </div>
                <div className="flex justify-center">
                  <Button size="lg" variant="outline" asChild>
                    <a href="/contact">Partner With Us</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
