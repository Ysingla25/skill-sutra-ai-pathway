import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Learning Materials",
      items: [
        { name: "Web Development Guide", type: "PDF", size: "2.5 MB" },
        { name: "JavaScript Cheatsheet", type: "PDF", size: "1.2 MB" },
        { name: "React Best Practices", type: "PDF", size: "1.8 MB" },
      ],
    },
    {
      title: "Practice Projects",
      items: [
        { name: "Todo App Starter", type: "ZIP", size: "4.2 MB" },
        { name: "Portfolio Template", type: "ZIP", size: "3.7 MB" },
        { name: "API Integration Demo", type: "ZIP", size: "2.9 MB" },
      ],
    },
    {
      title: "Additional Resources",
      items: [
        { name: "Interview Preparation Guide", type: "PDF", size: "1.5 MB" },
        { name: "Career Development Tips", type: "PDF", size: "1.1 MB" },
        { name: "Industry Insights Report", type: "PDF", size: "2.3 MB" },
      ],
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Learning Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.type} • {item.size}
                      </p>
                    </div>
                    <Button size="icon" variant="ghost">
                      <Download className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Resources;
