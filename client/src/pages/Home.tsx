import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Heart, GraduationCap, Home as HomeIcon, Users, CheckCircle2, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-2 mb-4">
                <span className="inline-block px-3 py-1 bg-destructive/90 text-destructive-foreground text-sm font-bold rounded-full animate-pulse">
                  🚨 URGENT: Hurricane Relief Needed
                </span>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full ml-2">
                  Incorporated Nonprofit | 501(c)(3) Pending
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Help Montego Bay Families Rebuild After Hurricane Melissa
              </h1>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground mb-8">
                <p>
                  <strong>Families in Montego Bay, Jamaica have lost everything to Hurricane Melissa</strong>—the strongest Category 5 storm to hit Jamaica in modern history. Homes destroyed. No power. No clean water. Families sleeping in damaged shelters without basic necessities.
                </p>
                <p className="text-base font-semibold text-foreground">
                  <strong>Montego Bay Relief, Inc.</strong> is a U.S.-incorporated nonprofit founded by individuals with deep family roots in Montego Bay. This is our home, our community, our family. We provide humanitarian relief, educational support, and community rebuilding aid to help our neighbors recover and thrive.
                </p>
                <p className="text-base font-semibold text-foreground">
                  Every dollar you give goes directly to purchasing and delivering clothing, bedding, clean water, food, and personal care items to families who have nowhere else to turn.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="text-base">
                    <a href="https://donate.stripe.com/7sY00k9Rh0Ee8cQ3gz63K00" target="_blank" rel="noopener noreferrer">Donate Now</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-base">
                    <a href="#programs">Learn About Our Work</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/hero_families.jpg"
                  alt="Jamaican mother and child - Fresh Start Jamaica"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-card border-2 border-primary/20 rounded-xl p-6 shadow-xl max-w-xs">
                  <p className="text-3xl font-bold text-primary mb-1">500</p>
                  <p className="text-sm text-muted-foreground">Household goal for Hurricane Melissa relief</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Tracker */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="max-w-2xl mx-auto bg-card border rounded-lg p-8 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-3xl font-bold">
                    $<span id="raised">0</span>
                  </p>
                  <p className="text-sm text-muted-foreground">raised of $25,000 goal</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">
                    <span id="percent">0</span>%
                  </p>
                  <p className="text-sm text-muted-foreground">funded</p>
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden mb-4">
                <div
                  id="progressBar"
                  className="h-full bg-primary transition-all duration-1000 ease-out"
                  style={{ width: '0%' }}
                ></div>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                100% of donations go directly to relief supplies—receipts tracked and posted publicly
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission: Jamaica Disaster Relief & Community Development</h2>
              <blockquote className="text-lg text-muted-foreground italic leading-relaxed mb-6">
                "To provide humanitarian relief, emergency assistance, educational support, and community rebuilding aid to underserved families in Montego Bay, Jamaica, while fostering charitable programs and donor engagement within the United States."
              </blockquote>
              <p className="text-base text-muted-foreground leading-relaxed">
                <strong>Montego Bay Relief, Inc.</strong> is a U.S.-incorporated 501(c)(3) pending nonprofit organization dedicated to Caribbean hurricane recovery and long-term community development in Jamaica. Founded by individuals with deep family roots in Montego Bay, we understand the unique challenges facing Jamaican communities and work directly with local coordinators to ensure disaster relief reaches those who need it most. Our Jamaica humanitarian aid programs focus on emergency relief, educational resources for youth, and sustainable community rebuilding efforts throughout the Montego Bay area and surrounding parishes.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Hurricane Relief & Community Development Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We deliver comprehensive Jamaica disaster relief and humanitarian aid through three core programs designed to meet immediate hurricane recovery needs and build long-term community resilience in Montego Bay and surrounding areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Relief Kits Program */}
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Hurricane Relief Kits & Emergency Aid</h3>
                  <p className="text-muted-foreground mb-4">
                    Providing Hurricane Melissa-affected families in Montego Bay with critical hygiene kits, first aid supplies, clean water, food, clothing, bedding, and household essentials. Our Jamaica disaster relief program works with trusted local coordinators to ensure emergency aid reaches families most impacted by the Category 5 hurricane.
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
                  <h3 className="text-xl font-bold mb-3">School Supplies & Educational Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Helping Montego Bay students recover from hurricane disruptions by distributing backpacks, notebooks, tablets, uniforms, and learning materials. Our Jamaica educational aid program supports teachers with classroom resources to ensure youth can continue their education despite hurricane damage to schools and homes.
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
                  <h3 className="text-xl font-bold mb-3">Community Rebuilding & Hurricane Recovery</h3>
                  <p className="text-muted-foreground mb-4">
                    Supporting Caribbean hurricane recovery by providing building materials, tools, and construction support to Montego Bay families. Our Jamaica community development program helps repair homes, schools, and community centers damaged by Hurricane Melissa, working toward long-term resilience and sustainable rebuilding.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Hurricane Relief Goals</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                As a newly incorporated nonprofit, we're committed to reaching these targets to help Montego Bay families recover from Hurricane Melissa. Your support brings us closer to these goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500</div>
                <div className="text-sm text-muted-foreground font-semibold">Relief Kits Goal</div>
                <div className="text-xs text-muted-foreground mt-1">Emergency supplies for families</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500</div>
                <div className="text-sm text-muted-foreground font-semibold">Households Goal</div>
                <div className="text-xs text-muted-foreground mt-1">Families receiving direct aid</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">300</div>
                <div className="text-sm text-muted-foreground font-semibold">Students Goal</div>
                <div className="text-xs text-muted-foreground mt-1">Youth receiving school supplies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground font-semibold">To Programs</div>
                <div className="text-xs text-muted-foreground mt-1">Every dollar funds relief</div>
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
                    src="/community_distribution.jpg"
                    alt="Community volunteers organizing relief supplies and donations"
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
                  Become part of a growing network of donors, volunteers, and partners committed to rebuilding in Montego Bay.
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
                  <a href="https://donate.stripe.com/7sY00k9Rh0Ee8cQ3gz63K00" target="_blank" rel="noopener noreferrer">
                    Make a Difference Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Food Drive Section */}
        <section className="py-16 bg-green-50 border-t border-b">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                  📦 Physical Donations Welcome
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">South Florida & Treasure Coast Food Drive</h2>
                <p className="text-lg text-muted-foreground">
                  Can't donate money? You can still help! We're organizing a food and supplies drive in South Florida and the Treasure Coast region to collect donated items for Montego Bay families.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-green-700">What We're Collecting:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">🥫</span>
                    <div>
                      <strong>Non-Perishable Food:</strong> Canned goods, rice, beans, pasta, baby formula, protein bars
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">💧</span>
                    <div>
                      <strong>Water & Beverages:</strong> Bottled water, electrolyte drinks, juice boxes
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">👕</span>
                    <div>
                      <strong>Clothing:</strong> New or gently used clothes (all sizes), shoes, blankets, bedding
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">🧴</span>
                    <div>
                      <strong>Personal Care:</strong> Soap, toothpaste, diapers, feminine hygiene products, first aid supplies
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">🔨</span>
                    <div>
                      <strong>Building Supplies:</strong> Tarps, nails, screws, hammers, basic tools, flashlights, batteries
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-3">How to Donate Items</h3>
                <p className="text-muted-foreground mb-4">
                  We're currently organizing collection points in South Florida and the Treasure Coast. Drop-off locations and dates will be announced soon.
                </p>
                <p className="font-semibold text-lg mb-2">
                  Contact us to donate items or volunteer:
                </p>
                <a href="mailto:helpmontegobayrelief@gmail.com" className="text-primary font-semibold text-lg underline">
                  helpmontegobayrelief@gmail.com
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll coordinate pickup or provide drop-off locations in your area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation CTA Section */}
        <section id="donate" className="py-20 bg-primary text-primary-foreground">
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

            {/* One-Time Donation Button */}
            <div className="flex justify-center mb-8">
              <Button size="lg" variant="secondary" className="text-base font-bold px-8" asChild>
                <a href="https://donate.stripe.com/7sY00k9Rh0Ee8cQ3gz63K00" target="_blank" rel="noopener noreferrer">
                  Make a One-Time Donation
                </a>
              </Button>
            </div>

            {/* Monthly Donation Tiers */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-3 text-center">Become a Monthly Donor</h3>
              <p className="text-center opacity-90 mb-8">Join our community of sustaining supporters with recurring monthly giving</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* Supporter Tier */}
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20 hover:border-white/40 transition-all hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="text-sm font-semibold uppercase tracking-wide opacity-75 mb-2">Supporter</div>
                    <div className="text-4xl font-bold mb-1">$25</div>
                    <div className="text-sm opacity-75">per month</div>
                  </div>
                  <ul className="space-y-3 mb-6 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Provide relief kits for families</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Quarterly impact updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Tax-deductible receipts</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="secondary" asChild>
                    <a href="https://buy.stripe.com/4gMfZifbB5Yy64I7wP63K03" target="_blank" rel="noopener noreferrer">
                      Choose Supporter
                    </a>
                  </Button>
                </div>

                {/* Advocate Tier */}
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-accent hover:border-accent/80 transition-all hover:scale-105 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold uppercase">Popular</span>
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-sm font-semibold uppercase tracking-wide opacity-75 mb-2">Advocate</div>
                    <div className="text-4xl font-bold mb-1">$50</div>
                    <div className="text-sm opacity-75">per month</div>
                  </div>
                  <ul className="space-y-3 mb-6 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Support education & rebuilding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Monthly impact reports with photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Recognition on website</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>All Supporter benefits</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="secondary" asChild>
                    <a href="https://buy.stripe.com/aFaeVegfFfz80KobN563K04" target="_blank" rel="noopener noreferrer">
                      Choose Advocate
                    </a>
                  </Button>
                </div>

                {/* Champion Tier */}
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20 hover:border-white/40 transition-all hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="text-sm font-semibold uppercase tracking-wide opacity-75 mb-2">Champion</div>
                    <div className="text-4xl font-bold mb-1">$100</div>
                    <div className="text-sm opacity-75">per month</div>
                  </div>
                  <ul className="space-y-3 mb-6 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Maximum impact across all programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Personal thank-you from leadership</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>Featured donor recognition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>All Advocate benefits</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="secondary" asChild>
                    <a href="https://buy.stripe.com/eVq5kE3sT1Ii78M9EX63K05" target="_blank" rel="noopener noreferrer">
                      Choose Champion
                    </a>
                  </Button>
                </div>
              </div>
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
