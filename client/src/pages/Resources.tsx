import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

/**
 * Resources Page - Download Center
 * Design: Organic Warmth
 * - Card-based layout for resources
 * - Download functionality
 */

export default function Resources() {
  const resources = [
    {
      title: "Beginner's Beekeeping Manual",
      description: "Comprehensive guide for those starting their beekeeping journey",
      type: "PDF Manual",
      size: "2.4 MB",
    },
    {
      title: "Apiary Setup Checklist",
      description: "Complete checklist for setting up your apiary",
      type: "Checklist",
      size: "0.5 MB",
    },
    {
      title: "Hive Inspection Checklist",
      description: "Step-by-step checklist for regular hive inspections",
      type: "Checklist",
      size: "0.3 MB",
    },
    {
      title: "Seasonal Management Guide",
      description: "Month-by-month guide for seasonal beekeeping practices",
      type: "PDF Guide",
      size: "1.8 MB",
    },
    {
      title: "Pest & Disease Reference",
      description: "Identification and treatment guide for common pests and diseases",
      type: "Reference",
      size: "3.2 MB",
    },
    {
      title: "Honey Processing Guide",
      description: "Complete guide to harvesting, extracting, and processing honey",
      type: "PDF Guide",
      size: "2.1 MB",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-lg opacity-90">
            Download guides, checklists, and reference materials
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="card-organic"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase">
                      {resource.type}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">{resource.size}</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {resource.description}
                </p>

                <Button className="w-full bg-primary hover:bg-accent text-foreground font-semibold rounded-lg flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
