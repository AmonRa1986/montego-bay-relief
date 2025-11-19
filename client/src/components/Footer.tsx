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
                <a href="mailto:helpmontegobayrelief@gmail.com" className="hover:text-primary transition-colors">
                  helpmontegobayrelief@gmail.com
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
              <a href="#donate" className="text-muted-foreground hover:text-primary transition-colors">
                Donate
              </a>
            </nav>
          </div>

          {/* Board of Directors Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Board of Directors</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <div>
                <p className="font-semibold text-foreground">Duke Hines</p>
                <p className="text-xs">President</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Shomari Hines</p>
                <p className="text-xs">Executive Director</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Khadijah Hines</p>
                <p className="text-xs">Secretary</p>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-foreground">Directors:</p>
                <p className="text-xs">Barry Harvey, Neil Martin, Mark Harvey</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Section */}
        <div className="border-t pt-8">
          <div className="bg-secondary/50 rounded-lg p-4 mb-6">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Tax-Exempt Status:</strong> Montego Bay Relief, Inc. is a Florida nonprofit corporation with pending 501(c)(3) tax-exempt status. Donations may be tax-deductible upon IRS approval. Please consult your tax advisor. A receipt will be provided for all contributions.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Montego Bay Relief, Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <span className="font-semibold">Incorporated Nonprofit | 501(c)(3) Pending</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
