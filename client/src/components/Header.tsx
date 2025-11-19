import { APP_LOGO } from "@/const";
import { Link } from "wouter";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src={APP_LOGO} alt="Montego Bay Relief, Inc." className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/programs" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
            Programs
          </Link>
          <Link href="/impact" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
            Impact
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <Button asChild className="ml-4">
            <a href="https://donate.stripe.com/7sY00k9Rh0Ee8cQ3gz63K00" target="_blank" rel="noopener noreferrer">Donate Now</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col gap-4 py-4">
            <Link href="/" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/programs" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="/impact" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Impact
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button asChild className="w-full">
              <a href="https://donate.stripe.com/7sY00k9Rh0Ee8cQ3gz63K00" target="_blank" rel="noopener noreferrer">Donate Now</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
