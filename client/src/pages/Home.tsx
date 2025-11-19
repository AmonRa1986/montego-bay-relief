import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, GraduationCap, Home as HomeIcon, Users, CheckCircle2, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-6 text-sm font-semibold">
                  Incorporated Nonprofit | 501(c)(3) Pending
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Building Hope in Montego Bay, Jamaica
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Montego Bay Relief, Inc. provides humanitarian relief, educational support, and community rebuilding aid to underserved families in Montego Bay, Jamaica. We partner with local leaders to deliver dignity-centered assistance that creates lasting change.
                </p>
                <p className="text-base font-semibold mb-8">
                  Your support today brings immediate relief and builds sustainable futures for families in need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="text-base">
                    <a href="#donate">Donate Now</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-base">
                    <a href="#programs">Learn About Our Work</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/hero_community.jpeg"
                  alt="Community members in Montego Bay, Jamaica"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-card border-2 border-primary/20 rounded-xl p-6 shadow-xl max-w-xs">
                  <p className="text-3xl font-bold text-primary mb-1">1,200+</p>
                  <p className="text-sm text-muted-foreground">Families supported through relief programs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-16 bg-muted/50">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed italic font-serif">
              "To provide humanitarian relief, emergency assistance, educational support, and community rebuilding aid to underserved families in Montego Bay, Jamaica, while fostering charitable programs and donor engagement within the United States."
            </p>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We deliver comprehensive support through three core programs designed to meet immediate needs and build long-term resilience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Relief Kits Program */}
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Humanitarian Relief Kits</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Providing families with hygiene kits, first-aid supplies, clean water, and household essentials through partnerships with local community centers and churches.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <span>50% of total budget</span>
                  </div>
                </CardContent>
              </Card>

              {/* Education Program */}
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <GraduationCap className="h-7 w-7 text-[oklch(0.75_0.15_70)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">School Supplies & Education</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Distributing backpacks, notebooks, tablets, uniforms, and classroom materials to students ages 5-18, partnering with local schools to improve educational readiness.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[oklch(0.75_0.15_70)]">
                    <span>25% of total budget</span>
                  </div>
                </CardContent>
              </Card>

              {/* Rebuilding Program */}
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-[oklch(0.35_0.08_130)]/10 flex items-center justify-center mb-6">
                    <HomeIcon className="h-7 w-7 text-[oklch(0.35_0.08_130)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Community Rebuilding</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Supporting safe living conditions through building materials, minor repairs to homes and schools, and coordinated volunteer labor with local partners.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[oklch(0.35_0.08_130)]">
                    <span>25% of total budget</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-primary/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transparent, measurable results driven by community partnerships and donor generosity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1,200+</div>
                <div className="text-sm text-muted-foreground">Relief kits distributed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">450+</div>
                <div className="text-sm text-muted-foreground">Families supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">300+</div>
                <div className="text-sm text-muted-foreground">Students receiving supplies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Donations to programs</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-0">
                  <img
                    src="/education_classroom.jpg"
                    alt="Students in classroom receiving educational support"
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">Empowering Students</h3>
                    <p className="text-sm text-muted-foreground">
                      Through partnerships with local schools, we provide essential supplies that enable students to focus on learning and building brighter futures.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <img
                    src="/relief_supplies.jpeg"
                    alt="Relief supplies being distributed to community"
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">Community-Led Distribution</h3>
                    <p className="text-sm text-muted-foreground">
                      Working with local leaders ensures relief reaches those who need it most, delivered with dignity and cultural understanding.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Support Us Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Support Montego Bay Relief?</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Hyper-Local Focus</h3>
                      <p className="text-sm text-muted-foreground">
                        Unlike large international NGOs, we focus exclusively on Montego Bay, enabling deeper community relationships and direct accountability.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Incorporated & Accountable</h3>
                      <p className="text-sm text-muted-foreground">
                        As a U.S.-incorporated nonprofit pursuing 501(c)(3) status, we offer tax benefits and regulatory oversight that informal projects cannot.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Diaspora-Connected</h3>
                      <p className="text-sm text-muted-foreground">
                        Founded by individuals with personal ties to Jamaica, ensuring cultural competence and sustained commitment to the community.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">100% to Programs</h3>
                      <p className="text-sm text-muted-foreground">
                        All administrative costs are covered by board members. Every dollar you donate goes directly to relief, education, and rebuilding programs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">Join Our Community</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Become part of a growing network of donors, volunteers, and partners committed to building hope in Montego Bay.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Receive quarterly impact reports</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>See exactly how your donation is used</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Connect with the community we serve</span>
                  </div>
                </div>
                <Button size="lg" className="w-full" asChild>
                  <a href="#donate">
                    Make a Difference Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Donation CTA Section */}
        <section id="donate" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Support Changes Lives</h2>
            <p className="text-lg mb-8 opacity-90">
              Every contribution—no matter the size—provides immediate relief and builds sustainable futures for families in Montego Bay.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">$25</div>
                <p className="text-sm opacity-90">Provides school supplies for 2 students</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">$50</div>
                <p className="text-sm opacity-90">Delivers a complete relief kit to one family</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">$100</div>
                <p className="text-sm opacity-90">Supports rebuilding materials for community repairs</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8 text-left">
              <p className="text-sm leading-relaxed">
                <strong>Tax-Deductible Donations:</strong> Montego Bay Relief, Inc. has applied for 501(c)(3) tax-exempt status. Donations may be tax-deductible upon IRS approval. Please consult your tax advisor. A receipt will be provided for all contributions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base font-bold">
                Make a One-Time Donation
              </Button>
              <Button size="lg" variant="outline" className="text-base font-bold bg-white/10 border-white/30 hover:bg-white/20 text-white">
                Become a Monthly Donor
              </Button>
            </div>

            <p className="text-sm mt-6 opacity-75">
              For questions about donations, contact us at{" "}
              <a href="mailto:helpmontegobayrelief@gmail.com" className="underline font-semibold">
                helpmontegobayrelief@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
