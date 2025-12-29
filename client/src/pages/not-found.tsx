import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/layout";

export default function NotFound() {
  return (
    <Layout>
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="gap-2" data-testid="button-go-home">
                <Home className="h-5 w-5" />
                Go to Home
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
              className="gap-2"
              data-testid="button-go-back"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}