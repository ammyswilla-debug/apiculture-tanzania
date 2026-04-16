import { Button } from "@/components/ui/button";
import { Heart, Users, Briefcase, Award } from "lucide-react";

/**
 * Support Us Page
 * Design: Organic Warmth
 * - Partnership opportunities
 * - Contribution options
 * - Collaboration information
 */

export default function Support() {
  const supportOptions = [
    {
      icon: Heart,
      title: "Contributions",
      description: "Support our mission through direct contributions to fund educational resources and community programs.",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Users,
      title: "Partnerships",
      description: "Collaborate with us to expand beekeeping education and create sustainable impact in communities.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Briefcase,
      title: "Corporate Collaboration",
      description: "Partner with organizations to develop training programs, resources, and community initiatives.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Award,
      title: "Sponsorships",
      description: "Sponsor our workshops, events, and knowledge-sharing initiatives across Tanzania.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-lg opacity-90">
            Help us empower beekeeping communities across Tanzania
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Us in Growing Sustainable Beekeeping
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Apiculture Tanzania is committed to advancing sustainable beekeeping practices
              and empowering communities across the country. Your support helps us create
              educational resources, organize training programs, and build a thriving
              beekeeping ecosystem.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether through direct contributions, partnerships, or collaboration, there are
              many ways to support our mission and make a meaningful impact.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:mb-16">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div key={index} className="card-organic">
                  <div className={`p-3 ${option.bgColor} rounded-lg w-fit mb-4`}>
                    <Icon className={`w-6 h-6 ${option.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {option.description}
                  </p>
                  <Button className="bg-primary hover:bg-accent text-foreground font-semibold rounded-lg">
                    Learn More
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Impact Section */}
          <div className="bg-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Impact Matters
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl mt-1">✓</span>
                <span>
                  <strong>Educational Resources:</strong> Help us create and distribute
                  comprehensive guides, manuals, and training materials.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl mt-1">✓</span>
                <span>
                  <strong>Community Programs:</strong> Support workshops, training sessions,
                  and knowledge-sharing events across Tanzania.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl mt-1">✓</span>
                <span>
                  <strong>Technology & Infrastructure:</strong> Enable us to maintain and
                  improve our digital platforms and resources.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl mt-1">✓</span>
                <span>
                  <strong>Community Empowerment:</strong> Support initiatives that help
                  farmers increase productivity and income.
                </span>
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Contact us to explore how you can support our mission and contribute to the
              growth of sustainable beekeeping in Tanzania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-accent text-foreground font-semibold rounded-lg px-8 py-3">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg px-8 py-3"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
