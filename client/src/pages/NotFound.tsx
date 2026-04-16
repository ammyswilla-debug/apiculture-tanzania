import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

/**
 * 404 Not Found Page
 * Design: Organic Warmth
 */

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-primary/30 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Link href="/">
          <Button className="bg-primary hover:bg-accent text-foreground font-semibold rounded-lg px-8 py-3 inline-flex items-center gap-2">
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
