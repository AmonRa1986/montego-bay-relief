import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, GraduationCap, Home, Heart } from "lucide-react";

export default function Programs() {
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
                Our Hurricane Relief Programs
              </h1>
              <p className="text-xl text-muted-foreground">
                Three core programs designed to provide immediate relief and long-term recovery support for families affected by Hurricane Melissa in Montego Bay, Jamaica.
              </p>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#008B8B]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Package className="h-8 w-8 text-[#008B8B]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">50%</h3>
                  <p className="text-sm text-muted-foreground">Emergency Relief Kits</p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#F7A520]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-[#F7A520]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">25%</h3>
                  <p className="text-sm text-muted-foreground">Education Support</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#2D5016]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Home className="h-8 w-8 text-[#2D5016]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">25%</h3>
                  <p className="text-sm text-muted-foreground">Community Rebuilding</p>
                </CardContent>
              </Card>
            </div>

            {/* Program 1: Emergency Relief Kits */}
            <div className="max-w-5xl mx-auto mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#008B8B]/10 rounded-lg">
                      <Package className="h-8 w-8 text-[#008B8B]" />
                    </div>
                    <h2 className="text-3xl font-bold">Emergency Relief Kits</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    Immediate disaster relief for families who lost everything to Hurricane Melissa. Each kit provides essential supplies to help families survive and begin recovery.
                  </p>
                  
                  <h3 className="font-bold text-lg mb-3">What's Included:</h3>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[#008B8B] mt-1">•</span>
                      <span><strong>Food staples:</strong> Rice, beans, canned goods, cooking oil (2-week supply for family of 4)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#008B8B] mt-1">•</span>
                      <span><strong>Water purification:</strong> Filtration tablets and storage containers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#008B8B] mt-1">•</span>
                      <span><strong>Hygiene supplies:</strong> Soap, toothpaste, sanitary products, diapers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#008B8B] mt-1">•</span>
                      <span><strong>First aid:</strong> Bandages, antiseptic, pain relievers, prescription support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#008B8B] mt-1">•</span>
                      <span><strong>Emergency shelter:</strong> Tarps, rope, flashlights, batteries</span>
                    </li>
                  </ul>

                  <div className="bg-muted/50 p-4 rounded-lg mb-6">
                    <p className="text-sm font-semibold mb-1">Program Goal:</p>
                    <p className="text-sm text-muted-foreground">
                      Distribute <strong>500 relief kits</strong> to families in Montego Bay and surrounding areas within the first 6 months of operation.
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    <strong>Distribution Method:</strong> Working with local church leaders and community organizers to identify families in greatest need and ensure dignified, culturally appropriate delivery.
                  </p>
                </div>

                <div>
                  <img
                    src="/community_distribution.jpg"
                    alt="Volunteers organizing relief supplies"
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </div>
            </div>

            {/* Program 2: Education Support */}
            <div className="max-w-5xl mx-auto mb-20 bg-muted/30 p-8 md:p-12 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <img
                    src="/education_classroom.jpg"
                    alt="Students in classroom"
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>

                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#F7A520]/10 rounded-lg">
                      <GraduationCap className="h-8 w-8 text-[#F7A520]" />
                    </div>
                    <h2 className="text-3xl font-bold">Education Support</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    Hurricane Melissa destroyed schools and left families unable to afford basic school supplies. We're ensuring students can continue their education despite the crisis.
                  </p>
                  
                  <h3 className="font-bold text-lg mb-3">What We Provide:</h3>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[#F7A520] mt-1">•</span>
                      <span><strong>School supply kits:</strong> Notebooks, pens, pencils, backpacks, uniforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F7A520] mt-1">•</span>
                      <span><strong>Textbook replacement:</strong> Core curriculum books lost in flooding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F7A520] mt-1">•</span>
                      <span><strong>Technology access:</strong> Tablets and internet hotspots for remote learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F7A520] mt-1">•</span>
                      <span><strong>Tuition assistance:</strong> Emergency grants for families unable to pay school fees</span>
                    </li>
                  </ul>

                  <div className="bg-background p-4 rounded-lg mb-6 border border-secondary/20">
                    <p className="text-sm font-semibold mb-1">Program Goal:</p>
                    <p className="text-sm text-muted-foreground">
                      Support <strong>300 students</strong> with school supplies and educational resources to ensure no child falls behind due to hurricane impact.
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    <strong>Impact:</strong> Keeping students in school prevents long-term poverty cycles and gives families hope for the future during recovery.
                  </p>
                </div>
              </div>
            </div>

            {/* Program 3: Community Rebuilding */}
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#2D5016]/10 rounded-lg">
                      <Home className="h-8 w-8 text-[#2D5016]" />
                    </div>
                    <h2 className="text-3xl font-bold">Community Rebuilding</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    Beyond immediate relief, we're investing in long-term recovery by supporting infrastructure repair, economic recovery, and community resilience programs.
                  </p>
                  
                  <h3 className="font-bold text-lg mb-3">Our Focus Areas:</h3>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2D5016] mt-1">•</span>
                      <span><strong>Home repairs:</strong> Roofing materials, tools, and skilled labor for damaged homes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2D5016] mt-1">•</span>
                      <span><strong>Small business recovery:</strong> Grants and equipment for local vendors and entrepreneurs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2D5016] mt-1">•</span>
                      <span><strong>Community infrastructure:</strong> Water systems, sanitation, and public spaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2D5016] mt-1">•</span>
                      <span><strong>Disaster preparedness:</strong> Training and supplies for future hurricane seasons</span>
                    </li>
                  </ul>

                  <div className="bg-muted/50 p-4 rounded-lg mb-6">
                    <p className="text-sm font-semibold mb-1">Program Goal:</p>
                    <p className="text-sm text-muted-foreground">
                      Support <strong>500 households</strong> with rebuilding assistance and economic recovery resources over the next 12-18 months.
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    <strong>Approach:</strong> Community-led initiatives ensure rebuilding efforts respect local culture, employ local workers, and create sustainable solutions designed by those who know the area best.
                  </p>
                </div>

                <div>
                  <img
                    src="/hero_community.jpeg"
                    alt="Community members in Montego Bay"
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Donations Are Used */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How Your Donation Makes an Impact</h2>
              <p className="text-muted-foreground">
                Every dollar you contribute goes directly to programs. We're committed to transparency and efficiency in how we use your support.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$25</div>
                  <p className="text-sm font-semibold mb-2">Supporter Level</p>
                  <p className="text-xs text-muted-foreground">
                    Provides hygiene supplies for one family or school supplies for one student
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$50</div>
                  <p className="text-sm font-semibold mb-2">Advocate Level</p>
                  <p className="text-xs text-muted-foreground">
                    Provides a complete emergency relief kit for one family of four
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$100</div>
                  <p className="text-sm font-semibold mb-2">Champion Level</p>
                  <p className="text-xs text-muted-foreground">
                    Provides relief kit plus roofing materials for home repair
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Support Our Programs Today</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Choose a one-time donation or become a monthly supporter to provide sustained relief for Montego Bay families.
              </p>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg" asChild>
                    <a href="https://donate.stripe.com/7sY00k9Rh0Ee8cQ3gz63K00" target="_blank" rel="noopener noreferrer">
                      Donate with Stripe
                    </a>
                  </Button>

                </div>
                <div className="flex justify-center">
                  <Button size="lg" variant="outline" asChild>
                    <a href="/#monthly-giving">Become a Monthly Donor</a>
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
