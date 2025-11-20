import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Building2, Heart, Users } from "lucide-react";

export default function Contact() {
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
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground">
                Whether you're interested in donating, volunteering, partnering with us, or learning more about our work in Montego Bay, we'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Email Us</h3>
                  <a href="mailto:info@montegobayrelief.org" className="text-sm text-primary hover:underline">
                    info@montegobayrelief.org
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">
                    We respond within 24-48 hours
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Phone className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-bold mb-2">Call Us</h3>
                  <a href="tel:+1234567890" className="text-sm text-primary hover:underline">
                    +1 (234) 567-8900
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">
                    Mon-Fri, 9am-5pm EST
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-bold mb-2">Mailing Address</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Relief Way<br />
                    Miami, FL 33101<br />
                    United States
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-muted-foreground italic">
                Note: Contact information above is placeholder. Please update with actual nonprofit contact details.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Partnership Opportunities</h2>
                <p className="text-muted-foreground">
                  We're actively seeking corporate partners, foundations, and organizations committed to supporting Hurricane Melissa relief efforts in Jamaica.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Corporate Partnerships</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Partner with us through employee giving programs, matching gift campaigns, or cause marketing initiatives that support Montego Bay families.
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Matching gift programs</li>
                          <li>• Employee volunteer days</li>
                          <li>• In-kind product donations</li>
                          <li>• Sponsored relief distributions</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-secondary/10 rounded-lg">
                        <Heart className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Foundation Grants</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          We're seeking foundation partners to fund specific programs and help us scale our impact across Montego Bay and surrounding communities.
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Program-specific grants</li>
                          <li>• Multi-year commitments</li>
                          <li>• Capacity building support</li>
                          <li>• Impact measurement partnerships</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Users className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Community Organizations</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Churches, civic groups, and community organizations can partner with us to organize fundraisers, collect supplies, or coordinate volunteer efforts.
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Food and supply drives</li>
                          <li>• Fundraising events</li>
                          <li>• Awareness campaigns</li>
                          <li>• Volunteer coordination</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Jamaica-Based Partners</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          We're building partnerships with local organizations, businesses, and community leaders in Montego Bay to ensure culturally appropriate, sustainable relief.
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Local distribution networks</li>
                          <li>• Community leader collaboration</li>
                          <li>• Business recovery support</li>
                          <li>• Long-term development projects</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <p className="text-muted-foreground mb-6">
                  Interested in partnering with Montego Bay Relief, Inc.? We'd love to discuss how we can work together to support hurricane recovery efforts.
                </p>
                <Button size="lg" asChild>
                  <a href="mailto:partnerships@montegobayrelief.org">
                    Contact Our Partnership Team
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Volunteer With Us</h2>
                <p className="text-muted-foreground">
                  We're building a network of dedicated volunteers in South Florida and Jamaica to support our relief distribution efforts.
                </p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg mb-4">Current Volunteer Needs:</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-1">South Florida & Treasure Coast</h4>
                      <p className="text-sm text-muted-foreground">
                        Help organize food drives, sort donations, pack relief kits, and coordinate logistics for shipments to Jamaica.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1">Montego Bay & St. James Parish</h4>
                      <p className="text-sm text-muted-foreground">
                        Assist with distribution events, beneficiary intake, community outreach, and program coordination on the ground in Jamaica.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1">Remote Opportunities</h4>
                      <p className="text-sm text-muted-foreground">
                        Support our mission through social media management, grant writing, donor communications, website updates, and administrative tasks.
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg mb-6">
                    <p className="text-sm font-semibold mb-2">Volunteer Requirements:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Background check for in-person roles</li>
                      <li>• Commitment to our values of dignity, transparency, and community-led solutions</li>
                      <li>• Availability for regular volunteer shifts (flexible schedules available)</li>
                      <li>• Cultural sensitivity and respect for beneficiary privacy</li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <Button asChild>
                      <a href="mailto:volunteer@montegobayrelief.org">
                        Apply to Volunteer
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Are donations tax-deductible?</h3>
                    <p className="text-sm text-muted-foreground">
                      Montego Bay Relief, Inc. has applied for 501(c)(3) tax-exempt status with the IRS. While our application is pending, donations may not yet be tax-deductible. Once approved, we will notify all donors and provide documentation for tax purposes.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">How do I know my donation is being used effectively?</h3>
                    <p className="text-sm text-muted-foreground">
                      We publish quarterly impact reports with photos, beneficiary stories, and detailed financial breakdowns. Every distribution is documented and verified by local community leaders. 100% of donations go directly to programs—no overhead deductions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Can I donate supplies instead of money?</h3>
                    <p className="text-sm text-muted-foreground">
                      Yes! We accept in-kind donations of non-perishable food, hygiene products, school supplies, and building materials through our South Florida collection points. Email us at donations@montegobayrelief.org to coordinate drop-off.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">How can my company partner with Montego Bay Relief?</h3>
                    <p className="text-sm text-muted-foreground">
                      We offer corporate partnership opportunities including matching gift programs, employee volunteer days, sponsored distributions, and cause marketing campaigns. Contact partnerships@montegobayrelief.org to discuss options.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Do you work directly with families in Montego Bay?</h3>
                    <p className="text-sm text-muted-foreground">
                      Yes. We partner with local church leaders and community organizers in Montego Bay who identify families in need and coordinate distributions. Our approach is community-led to ensure culturally appropriate, dignified support.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join us in rebuilding Montego Bay. Your support—whether through donations, volunteering, or partnerships—helps families recover and thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://donate.stripe.com/7sY00k9Rh0Ee8cQ3gz63K00" target="_blank" rel="noopener noreferrer">
                    Donate Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:info@montegobayrelief.org">
                    Get in Touch
                  </a>
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
