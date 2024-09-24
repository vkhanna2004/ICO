import { Card, CardContent } from "./ui/Card.jsx";
import  Badge  from "./ui/Badge.jsx";
import {
  Rocket,
  Code,
  Users,
  Globe,
  Smartphone,
  TrendingUp,
} from "lucide-react";

export default function Roadmap() {
  const milestones = [
    {
      date: "Q4 2023",
      title: "ICO Launch",
      description: "Initial Coin Offering goes live",
      icon: <Rocket className="w-8 h-8 text-[#f5c843]" />,
      status: "current",
    },
    {
      date: "Q1 2024",
      title: "Beta Marketplace",
      description: "Launch of beta version of NFT marketplace",
      icon: <Code className="w-8 h-8 text-[#4a9fff]" />,
      status: "upcoming",
    },
    {
      date: "Q2 2024",
      title: "Artist Partnerships",
      description: "Onboarding of major artists and labels",
      icon: <Users className="w-8 h-8 text-[#50c878]" />,
      status: "upcoming",
    },
    {
      date: "Q3 2024",
      title: "Full Launch",
      description: "Official launch of the full marketplace",
      icon: <Globe className="w-8 h-8 text-[#f5c843]" />,
      status: "upcoming",
    },
    {
      date: "Q4 2024",
      title: "Mobile App",
      description: "Release of mobile app for iOS and Android",
      icon: <Smartphone className="w-8 h-8 text-[#ff6b6b]" />,
      status: "upcoming",
    },
    {
      date: "Q1 2025",
      title: "Expansion",
      description: "Expansion into new markets and genres",
      icon: <TrendingUp className="w-8 h-8 text-[#9b59b6]" />,
      status: "upcoming",
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-[#0C0C0C]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Roadmap
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#f5c843] to-[#4a9fff]"></div>

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`mb-12 flex justify-${
                index % 2 === 0 ? "start" : "end"
              } items-center`}
            >
              <Card
                className={`w-full max-w-md bg-[#1a1a1a] border-2 border-[#f5c843] text-white shadow-lg shadow-[#f5c843]/20 ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 bg-[#0C0C0C] rounded-full p-3 border-2 border-[#f5c843]">
                      {milestone.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#f5c843]">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-gray-400">{milestone.date}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-gray-300">{milestone.description}</p>
                  <Badge
                    variant={
                      milestone.status === "current" ? "default" : "secondary"
                    }
                    className={
                      milestone.status === "current"
                        ? "bg-[#f5c843] text-[#0C0C0C]"
                        : "bg-[#4a9fff] text-white"
                    }
                  >
                    {milestone.status === "current" ? "Current" : "Upcoming"}
                  </Badge>
                </CardContent>
              </Card>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#0C0C0C] ${
                  milestone.status === "current"
                    ? "bg-[#f5c843]"
                    : "bg-[#4a9fff]"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
