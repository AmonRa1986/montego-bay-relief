import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Montego Bay Relief, Inc.</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Providing humanitarian relief, educational support, and community development to underserved families in Montego Bay, Jamaica.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>909 Angle Road, Fort Pierce, FL 34947</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:631-388-1917" className="hover:text-primary transition-colors">
                  (631) 388-1917
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info.montegobayrelief@gmail.com" className="hover:text-primary transition-colors">
                  info.montegobayrelief@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                Our Programs
              </Link>
              <Link href="/impact" className="text-muted-foreground hover:text-primary transition-colors">
                Our Impact
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <a href="https://donate.stripe.com/7sY00k9Rh0Ee8cQ3gz63K00" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Donate with Stripe
              </a>

            </nav>
          </div>

          {/* Leadership Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Leadership</h3>
            <div className="text-sm text-muted-foreground space-y-3">
              <div>
                <p className="font-semibold text-foreground mb-1">Officers</p>
                <div className="space-y-1">
                  <div>
                    <p className="text-xs"><span className="font-medium text-foreground">Duke Hines</span> - President & Founder</p>
                  </div>
                  <div>
                    <p className="text-xs"><span className="font-medium text-foreground">Neil Martin</span> - Treasurer</p>
                  </div>
                  <div>
                    <p className="text-xs"><span className="font-medium text-foreground">Shomari Hines</span> - Executive Director</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Board of Directors</p>
                <div className="space-y-1">
                  <p className="text-xs">Barry Harvey</p>
                  <p className="text-xs">Mark Harvey</p>
                  <p className="text-xs">Khadijah Hines</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Section */}
        <div className="border-t pt-8">
          <div className="bg-secondary/50 rounded-lg p-4 mb-6">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Organization Status:</strong> Montego Bay Relief, Inc. is a registered nonprofit organization in the State of Florida and a tax-exempt 501(c)(3) public charity. Contributions are tax-deductible to the fullest extent allowed by law.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Montego Bay Relief, Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <span className="font-semibold">501(c)(3) Nonprofit Organization</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
