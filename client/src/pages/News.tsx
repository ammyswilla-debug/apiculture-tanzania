import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";

/**
 * News & Updates Page - Blog System
 * Design: Organic Warmth
 * - Card-based blog layout
 * - Category filtering
 * - Search functionality
 */

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["All", "Seasonal Tips", "Training", "Innovations", "Events"];

  const blogPosts = [
    {
      title: "Spring Hive Preparation: Getting Ready for the Season",
      excerpt: "Learn essential steps to prepare your hives for the productive spring season.",
      date: "April 15, 2026",
      category: "Seasonal Tips",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663537570709/CrBfbhYgyjieAHB6YkM7mr/hero-beekeeping-landscape-XJzXhjaxZChZyK2zRVdNoq.webp",
    },
    {
      title: "New Training Program Launches in Dar es Salaam",
      excerpt: "Join our comprehensive beekeeping training program starting next month.",
      date: "April 10, 2026",
      category: "Training",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663537570709/CrBfbhYgyjieAHB6YkM7mr/educational-knowledge-hub-J5J6KWvzW6vybY7c4yzo3i.webp",
    },
    {
      title: "Innovative Top-Bar Hive Design Gains Popularity",
      excerpt: "Discover how modern hive designs are revolutionizing beekeeping in Tanzania.",
      date: "April 5, 2026",
      category: "Innovations",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663537570709/CrBfbhYgyjieAHB6YkM7mr/feature-hive-inspection-7bXSriaX7pmFrTnY2H5jL8.webp",
    },
    {
      title: "Community Beekeeping Cooperative Celebrates Record Harvest",
      excerpt: "Local farmers achieve unprecedented honey production through collaborative efforts.",
      date: "March 28, 2026",
      category: "Events",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663537570709/CrBfbhYgyjieAHB6YkM7mr/sustainable-farming-community-RPig5jTc9SpjMeNvEZiaAH.webp",
    },
    {
      title: "Summer Pest Management: Protecting Your Hives",
      excerpt: "Essential strategies for managing pests during the hot summer months.",
      date: "March 20, 2026",
      category: "Seasonal Tips",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663537570709/CrBfbhYgyjieAHB6YkM7mr/honey-harvest-processing-8djwXQhTTPkUy4m2uY3ouQ.webp",
    },
    {
      title: "Advanced Honey Processing Workshop Announced",
      excerpt: "Learn advanced techniques for honey extraction and quality control.",
      date: "March 15, 2026",
      category: "Training",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663537570709/CrBfbhYgyjieAHB6YkM7mr/hero-beekeeping-landscape-XJzXhjaxZChZyK2zRVdNoq.webp",
    },
  ];

  const filteredPosts =
    selectedCategory === null || selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-lg opacity-90">
            Stay informed with the latest beekeeping insights and community updates
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 md:py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category === "All" ? null : category)
                }
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  (category === "All" && selectedCategory === null) ||
                  selectedCategory === category
                    ? "bg-primary text-foreground"
                    : "bg-muted text-foreground hover:bg-primary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
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
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-accent uppercase">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-accent"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No posts found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
