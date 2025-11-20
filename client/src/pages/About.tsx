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
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Target className="h-6 w-6 text-primary" />
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
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Heart className="h-6 w-6 text-secondary" />
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
                  What began as a small grassroots effort to support families in our home community has grown into an incorporated nonprofit organization. We have homes in Montego Bay and understand the unique challenges facing families in the region. Our approach is rooted in cultural understanding, local partnerships, and a commitment to ensuring every dollar donated directly supports relief and rebuilding efforts.
                </p>
                <p>
                  As a newly incorporated nonprofit with pending 501(c)(3) status, we are building a sustainable organization that can respond to immediate crises while investing in long-term community development. Our programs focus on emergency relief kits, educational support for students, and community rebuilding initiatives that empower local leaders and volunteers.
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
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-3">501(c)(3) Tax-Exempt Status Pending</h2>
                      <p className="text-muted-foreground mb-4">
                        Montego Bay Relief, Inc. is an incorporated nonprofit organization that has applied for 501(c)(3) tax-exempt status with the Internal Revenue Service. Our application is currently pending approval.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        <strong>What this means for donors:</strong> While our 501(c)(3) application is under review, donations may not yet be tax-deductible. Once our status is approved, we will notify all donors and provide documentation for tax purposes. We are committed to full compliance with IRS regulations and nonprofit best practices.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>EIN:</strong> [To be added] | <strong>Incorporation Date:</strong> 2024 | <strong>State:</strong> Florida
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
                <Users className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Board of Directors</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our board brings deep community ties, nonprofit expertise, and a shared commitment to serving Montego Bay families with integrity and transparency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">JD</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">John Doe</h3>
                  <p className="text-sm text-primary mb-3">President & Founder</p>
                  <p className="text-sm text-muted-foreground">
                    Montego Bay native with 15+ years in nonprofit management and community development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondary">JS</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">Jane Smith</h3>
                  <p className="text-sm text-primary mb-3">Treasurer</p>
                  <p className="text-sm text-muted-foreground">
                    CPA with expertise in nonprofit financial management and regulatory compliance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-foreground">MB</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">Maria Brown</h3>
                  <p className="text-sm text-primary mb-3">Secretary</p>
                  <p className="text-sm text-muted-foreground">
                    Community organizer and educator with deep roots in the Montego Bay area.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground italic">
                Note: Board member names and details are placeholder examples. Please update with actual board information.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Transparency</h3>
                <p className="text-sm text-muted-foreground">
                  Every dollar tracked, every distribution documented, every impact reported.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-secondary" />
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
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://donate.stripe.com/7sY00k9Rh0Ee8cQ3gz63K00" target="_blank" rel="noopener noreferrer">
                    Make a Donation
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/contact">Partner With Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
