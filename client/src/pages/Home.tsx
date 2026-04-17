import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Wrench, Leaf, Droplets, Calendar } from "lucide-react";

/**
 * Home Page - Landing Page
 * Design: Organic Warmth
 * - Full-width hero with background image
 * - Feature cards
 * - Why beekeeping matters section
 * - Latest updates blog preview
 * - Call to action banner
 */

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "Learn Beekeeping Basics",
      description: "Comprehensive guides for beginners and experienced beekeepers",
    },
    {
      icon: Wrench,
      title: "Apiary Setup Guides",
      description: "Step-by-step instructions for setting up your beekeeping operation",
    },
    {
      icon: Leaf,
      title: "Hive Management Practices",
      description: "Expert techniques for maintaining healthy, productive hives",
    },
    {
      icon: Droplets,
      title: "Harvesting & Processing",
      description: "Learn the art of honey harvesting and quality processing",
    },
  ];

  const whyBeekeeping = [
    {
      title: "Income Generation",
      description: "Create sustainable income for communities through honey production and bee products",
    },
    {
      title: "Environmental Conservation",
      description: "Support biodiversity and ecosystem health through responsible beekeeping",
    },
    {
      title: "Agricultural Support",
      description: "Enhance crop pollination and agricultural productivity",
    },
    {
      title: "Sustainable Development",
      description: "Build thriving rural communities with sustainable agricultural practices",
    },
  ];

  const latestPosts = [
    {
      title: "Spring Hive Preparation Guide",
      date: "April 15, 2026",
      excerpt: "Get your hives ready for the productive spring season with our comprehensive preparation guide.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663537570709/CrBfbhYgyjieAHB6YkM7mr/hero-beekeeping-landscape-XJzXhjaxZChZyK2zRVdNoq.webp",
    },
    {
      title: "New Training Program Launches",
      date: "April 10, 2026",
      excerpt: "Join our comprehensive beekeeping training program designed for farmers of all experience levels.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663537570709/CrBfbhYgyjieAHB6YkM7mr/educational-knowledge-hub-J5J6KWvzW6vybY7c4yzo3i.webp",
    },
    {
      title: "Community Success Story",
      date: "April 5, 2026",
      excerpt: "Learn how a local cooperative increased honey production by 40% using sustainable practices.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663537570709/CrBfbhYgyjieAHB6YkM7mr/sustainable-farming-community-RPig5jTc9SpjMeNvEZiaAH.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663537570709/CrBfbhYgyjieAHB6YkM7mr/hero-beekeeping-landscape-XJzXhjaxZChZyK2zRVdNoq.webp')`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{fontSize: '49px', fontWeight: '800', fontFamily: 'Inter, sans-serif'}}>
              Empowering Beekeeping Knowledge Across Tanzania
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
              Learn, improve, and grow sustainable apiculture practices through trusted information and guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learn">
                <Button className="bg-primary hover:bg-accent text-foreground font-semibold rounded-lg px-8 py-4 text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                  Start Learning
                </Button>
              </Link>
              <Link href="/news">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold rounded-lg px-8 py-4 text-lg transition-all duration-200"
                >
                  Explore Updates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Comprehensive resources and guidance for every stage of your beekeeping journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card-organic text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Beekeeping Matters Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Why Beekeeping Matters
              </h2>
              <div className="space-y-6">
                {whyBeekeeping.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                        <span className="text-primary font-bold">✓</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663537570709/CrBfbhYgyjieAHB6YkM7mr/sustainable-farming-community-RPig5jTc9SpjMeNvEZiaAH.webp"
                alt="Beekeeping community"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest Updates
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Stay informed with the latest beekeeping insights and community news
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {latestPosts.map((post, index) => (
              <div key={index} className="card-organic overflow-hidden">
                {/* Image */}
                <div className="w-full h-48 bg-muted rounded-lg overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  <Link href="/news" className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/news">
              <Button className="bg-primary hover:bg-accent text-foreground font-semibold rounded-lg px-8 py-3 transition-all duration-200">
                View All Updates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Thousands Learning Sustainable Beekeeping in Tanzania
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Access comprehensive resources, expert guidance, and a supportive community dedicated to advancing beekeeping knowledge.
          </p>
          <Link href="/learn">
            <Button className="bg-primary hover:bg-accent text-foreground font-semibold rounded-lg px-8 py-4 text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
              Explore Knowledge Base
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
