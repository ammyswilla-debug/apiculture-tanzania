import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * Learn Beekeeping Page - Knowledge Hub
 * Design: Organic Warmth
 * - Expandable sections for knowledge categories
 * - Clean, structured layout
 */

export default function Learn() {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  const categories = [
    {
      title: "Getting Started in Beekeeping",
      description: "Learn the fundamentals of beekeeping and why it matters.",
      content: "Comprehensive guide for beginners interested in starting their beekeeping journey.",
    },
    {
      title: "Types of Beehives",
      description: "Explore Traditional, Top-bar, and Langstroth hive types.",
      content: "Detailed comparison of different hive types and their advantages.",
    },
    {
      title: "Apiary Site Selection & Setup",
      description: "Choose the perfect location and set up your apiary.",
      content: "Guidelines for selecting and preparing your beekeeping site.",
    },
    {
      title: "Hive Inspection & Management",
      description: "Learn proper inspection techniques and hive management.",
      content: "Step-by-step guide to inspecting and maintaining healthy hives.",
    },
    {
      title: "Seasonal Beekeeping Practices",
      description: "Adapt your practices to seasonal changes.",
      content: "Seasonal guide for optimal beekeeping practices throughout the year.",
    },
    {
      title: "Pests and Disease Control",
      description: "Identify and manage common pests and diseases.",
      content: "Comprehensive guide to pest and disease management in beekeeping.",
    },
    {
      title: "Honey Harvesting & Processing",
      description: "Master the art of harvesting and processing honey.",
      content: "Complete guide to harvesting, extracting, and processing honey.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn Beekeeping</h1>
          <p className="text-lg opacity-90">
            Comprehensive knowledge hub for sustainable beekeeping practices
          </p>
        </div>
      </section>

      {/* Knowledge Categories */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="border border-border rounded-2xl overflow-hidden hover-lift transition-all duration-200"
              >
                <button
                  onClick={() =>
                    setExpandedSection(expandedSection === index ? null : index)
                  }
                  className="w-full px-6 py-4 md:px-8 md:py-6 bg-card hover:bg-muted/50 flex items-center justify-between transition-colors duration-200"
                >
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${
                      expandedSection === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedSection === index && (
                  <div className="px-6 py-4 md:px-8 md:py-6 bg-background border-t border-border">
                    <p className="text-foreground leading-relaxed mb-4">
                      {category.content}
                    </p>
                    <Button className="bg-primary hover:bg-accent text-foreground font-semibold rounded-lg">
                      Read Full Article
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
