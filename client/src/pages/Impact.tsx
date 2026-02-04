import { SEOHead } from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Users, DollarSign, FileText, Eye } from "lucide-react";

export default function Impact() {
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
                Our Hurricane Relief Goals
              </h1>
              <p className="text-xl text-muted-foreground">
                As a registered 501(c)(3) nonprofit, we're building toward measurable impact in Montego Bay. Here's what we're working to achieve and how we'll track our progress.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Goals */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="text-center mb-12">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our First-Year Goals</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Transparent, measurable targets driven by community partnerships and donor generosity. We're committed to reporting progress quarterly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500</div>
                <div className="text-sm text-muted-foreground font-semibold">Relief Kits Goal</div>
                <div className="text-xs text-muted-foreground mt-1">Emergency supplies for families</div>
                <div className="mt-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '0%'}}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">0 distributed so far</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500</div>
                <div className="text-sm text-muted-foreground font-semibold">Households Goal</div>
                <div className="text-xs text-muted-foreground mt-1">Families receiving direct aid</div>
                <div className="mt-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '0%'}}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">0 supported so far</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">300</div>
                <div className="text-sm text-muted-foreground font-semibold">Students Goal</div>
                <div className="text-xs text-muted-foreground mt-1">Youth receiving school supplies</div>
                <div className="mt-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '0%'}}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">0 supported so far</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground font-semibold">To Programs</div>
                <div className="text-xs text-muted-foreground mt-1">Every dollar funds relief</div>
                <div className="mt-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Zero overhead commitment</p>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-muted-foreground italic">
                Progress bars will be updated monthly as we distribute relief and support families. Check back regularly to see our impact grow.
              </p>
            </div>
          </div>
        </section>

        {/* How We Measure Impact */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">How We Measure Success</h2>
                <p className="text-muted-foreground">
                  As a new nonprofit, we're building accountability systems from day one. Here's how we'll track and report our impact.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Beneficiary Tracking</h3>
                        <p className="text-sm text-muted-foreground">
                          Every family receiving aid is documented with consent. We track household size, needs met, and follow-up support to ensure sustained recovery.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-secondary/10 rounded-lg">
                        <DollarSign className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Financial Transparency</h3>
                        <p className="text-sm text-muted-foreground">
                          All donations and expenses are tracked in real-time. Quarterly reports show exactly how funds are allocated across programs and beneficiaries.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <FileText className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Distribution Documentation</h3>
                        <p className="text-sm text-muted-foreground">
                          Photos, receipts, and beneficiary testimonials document every distribution event. Community leaders verify deliveries and provide feedback.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Eye className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Public Reporting</h3>
                        <p className="text-sm text-muted-foreground">
                          Quarterly impact reports published on this website include photos, stories, financials, and progress toward goals. Full transparency for all donors.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Planned Impact Timeline */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our 12-Month Roadmap</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Months 1-3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Launch & Initial Relief</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Establish partnerships with local churches and community leaders in Montego Bay</li>
                      <li>• Distribute first 100 emergency relief kits to families in greatest need</li>
                      <li>• Begin school supply distribution for 50 students</li>
                      <li>• Launch monthly donor program and build donor base</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Months 4-6
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Scale & Expand</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Reach 250 households with relief kits and ongoing support</li>
                      <li>• Support 150 students with school supplies and tuition assistance</li>
                      <li>• Begin home repair program for 50 families</li>
                      <li>• Publish first quarterly impact report with photos and testimonials</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Months 7-9
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Sustained Support</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Reach 400 households with comprehensive relief and rebuilding support</li>
                      <li>• Support 250 students through full school year</li>
                      <li>• Launch small business recovery grants for 25 local entrepreneurs</li>
                      <li>• Maintain 501(c)(3) tax-exempt status and Florida charitable registration</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Months 10-12
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Goal Achievement</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Reach 500 household goal with ongoing recovery support</li>
                      <li>• Support 300 students through complete academic year</li>
                      <li>• Complete 500 relief kit distributions</li>
                      <li>• Publish annual impact report and plan Year 2 expansion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stories from the Ground */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Stories from the Ground</h2>
                <p className="text-muted-foreground">
                  These are real people in Montego Bay whose lives were shattered by Hurricane Melissa. Their stories show why our work matters—and why we can't wait.
                </p>
              </div>

              <div className="space-y-8">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-2xl">🏠</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">A Pillar of Westgreen, Left with Nothing</h3>
                        <p className="text-muted-foreground mb-3">
                          For decades, she was the heartbeat of the Westgreen community—the woman everyone turned to in times of need. When Hurricane Melissa tore through Montego Bay, the storm showed no mercy. Her roof was ripped away like paper, exposing everything she owned to torrential rains that lasted for days.
                        </p>
                        <p className="text-muted-foreground mb-3">
                          The flooding came next—relentless, rising water that swallowed her furniture, her clothes, her photographs, her memories. Everything she had worked her entire life to build was destroyed in a matter of hours. Now, this woman who spent years caring for others sits in what remains of her home, surrounded by ruin, with nowhere to turn.
                        </p>
                        <p className="text-sm text-muted-foreground italic">
                          She needs a new roof. She needs supplies to rebuild. She needs to know she's not forgotten. <strong>This is why we exist.</strong>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-secondary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                          <span className="text-2xl">🏪</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Black River's Businesses Swept Away</h3>
                        <p className="text-muted-foreground mb-3">
                          In Black River, a local entrepreneur watched helplessly as floodwaters consumed his shop—the business he built from nothing, the livelihood that fed his family. He's not alone. Entire blocks of small businesses were obliterated. Storefronts that once bustled with customers now stand empty, gutted by wind and water.
                        </p>
                        <p className="text-muted-foreground mb-3">
                          These weren't just businesses—they were dreams. They were the economic backbone of the community, providing jobs, services, and hope. Now, business owners face an impossible choice: rebuild from scratch with no resources, or abandon everything and start over somewhere else. Homes in the area suffered the same fate—roofs caved in, walls collapsed, families displaced.
                        </p>
                        <p className="text-sm text-muted-foreground italic">
                          Without support, these families and businesses won't recover. <strong>We're here to make sure they do.</strong>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                          <span className="text-2xl">📚</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Students Falling Behind, Futures at Risk</h3>
                        <p className="text-muted-foreground mb-3">
                          Hurricane Melissa didn't just destroy homes—it shattered childhoods. Schools across Montego Bay were forced to close, some indefinitely. Children who were already struggling to keep up academically now face an uncertain future. Without school supplies, without textbooks, without a safe place to learn, they're falling further behind every day.
                        </p>
                        <p className="text-muted-foreground mb-3">
                          Parents who lost everything in the storm can't afford notebooks, uniforms, or school fees. These families are choosing between feeding their children and educating them. For students in critical years—those preparing for exams that determine their entire future—every lost day of school is a door closing on their dreams.
                        </p>
                        <p className="text-sm text-muted-foreground italic">
                          Education is the pathway out of poverty. <strong>We refuse to let Hurricane Melissa steal that from these children.</strong>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-2xl">💼</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Mega Mart Closure: Families in Crisis</h3>
                        <p className="text-muted-foreground mb-3">
                          When the Mega Mart in Montego Bay closed its doors after Hurricane Melissa, it wasn't just a store shutting down—it was dozens of families losing their only source of income overnight. Workers who relied on those paychecks to feed their children, pay rent, and keep the lights on suddenly found themselves with nothing.
                        </p>
                        <p className="text-muted-foreground mb-3">
                          These aren't abstract statistics. These are mothers and fathers who wake up every morning wondering how they'll survive another day. They're facing eviction. They're skipping meals so their children can eat. They're watching their savings—if they had any—disappear as they struggle to find new work in an economy devastated by the storm.
                        </p>
                        <p className="text-sm text-muted-foreground italic">
                          These families need immediate relief to survive while they search for new opportunities. <strong>We're stepping in to help them through this crisis.</strong>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 text-center bg-muted/50 p-8 rounded-lg">
                <p className="text-muted-foreground mb-4">
                  <strong>These stories are why we can't wait.</strong> Every day we delay, more families lose hope. Every dollar you donate brings us closer to reaching the people who need us most.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg" asChild>
                    <a href="https://donate.stripe.com/7sY00k9Rh0Ee8cQ3gz63K00" target="_blank" rel="noopener noreferrer">
                      Donate with Stripe
                    </a>
                  </Button>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Commitment */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-3">Our Transparency Commitment</h2>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      As a new nonprofit, we understand that trust must be earned. We're committed to radical transparency in how we use every dollar donated and the impact we create in Montego Bay.
                    </p>
                    
                    <div className="bg-background p-4 rounded-lg">
                      <h3 className="font-bold text-foreground mb-2">What You Can Expect:</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span><strong>Quarterly impact reports</strong> with photos, beneficiary stories, and detailed financials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span><strong>Monthly email updates</strong> for donors showing progress toward goals</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span><strong>Public financial statements</strong> showing all revenue and expenses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span><strong>Distribution documentation</strong> with receipts and community leader verification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span><strong>Annual reports</strong> once we complete our first full year of operations</span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-sm">
                      <strong>Coming Soon:</strong> Once our 501(c)(3) status is approved, we'll publish our IRS Form 990 annually and maintain public records of all board meetings and governance decisions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Help Us Reach Our Goals</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every donation brings us closer to supporting 500 households and 300 students in Montego Bay. Be part of our founding donor community.
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
