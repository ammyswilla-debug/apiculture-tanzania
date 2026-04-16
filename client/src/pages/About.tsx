import { Users, Target, Eye, Award } from "lucide-react";

/**
 * About Page
 * Design: Organic Warmth
 * - Mission, vision, and values
 * - Statistics section
 * - Clean editorial layout
 */

export default function About() {
  const stats = [
    { label: "Farmers Supported", value: "5,000+" },
    { label: "Guides Published", value: "150+" },
    { label: "Communities Reached", value: "45+" },
    { label: "Years of Experience", value: "10+" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Apiculture Tanzania</h1>
          <p className="text-lg opacity-90">
            Empowering sustainable beekeeping knowledge and community growth
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Purpose */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Purpose
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Apiculture Tanzania is dedicated to advancing sustainable beekeeping practices
              across Tanzania. We believe that beekeeping is not just a livelihood—it's a
              pathway to environmental conservation, economic empowerment, and community
              development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through accessible education, practical resources, and community collaboration,
              we empower farmers, students, and organizations to succeed in apiculture while
              contributing to a more sustainable future.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16">
            {/* Mission */}
            <div className="card-organic">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide comprehensive, accessible, and practical knowledge that enables
                farmers and organizations to adopt sustainable beekeeping practices, improve
                productivity, and build thriving apiculture communities across Tanzania.
              </p>
            </div>

            {/* Vision */}
            <div className="card-organic">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                An empowered beekeeping community in Tanzania where farmers have access to
                world-class knowledge, sustainable practices, and economic opportunities,
                while contributing to environmental conservation and food security.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Knowledge Sharing",
                  description: "We believe in democratizing beekeeping knowledge for all.",
                },
                {
                  title: "Sustainability",
                  description: "Environmental conservation is central to everything we do.",
                },
                {
                  title: "Community",
                  description: "We foster collaboration and mutual growth within communities.",
                },
                {
                  title: "Excellence",
                  description: "We maintain the highest standards in our resources and guidance.",
                },
              ].map((value, index) => (
                <div key={index} className="p-6 bg-muted/30 rounded-2xl border border-border">
                  <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm md:text-base text-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Dedicated to Your Success
            </h2>
            <div className="card-organic">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Our Team
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team consists of experienced beekeeping experts, educators, and
                    community advocates who are passionate about advancing sustainable
                    apiculture in Tanzania. We work collaboratively with farmers, organizations,
                    and institutions to ensure our resources are practical, relevant, and
                    impactful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
