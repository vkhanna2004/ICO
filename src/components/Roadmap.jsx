import React from "react";
import { Card, CardContent } from "./ui/Card.jsx";
import Badge from "./ui/Badge.jsx";
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
      description: "Initial Coin Offering goes live.",
      icon: <Rocket className="w-8 h-8 text-purple-500" />,
      status: "current",
    },
    {
      date: "Q1 2024",
      title: "Beta Marketplace",
      description: "Launch of beta version of NFT marketplace.",
      icon: <Code className="w-8 h-8 text-blue-500" />,
      status: "upcoming",
    },
    {
      date: "Q2 2024",
      title: "Artist Partnerships",
      description: "Onboarding of major artists and labels.",
      icon: <Users className="w-8 h-8 text-green-500" />,
      status: "upcoming",
    },
    {
      date: "Q3 2024",
      title: "Full Launch",
      description: "Official launch of the full marketplace.",
      icon: <Globe className="w-8 h-8 text-yellow-500" />,
      status: "upcoming",
    },
    {
      date: "Q4 2024",
      title: "Mobile App",
      description: "Release of mobile app for iOS and Android.",
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      status: "upcoming",
    },
    {
      date: "Q1 2025",
      title: "Expansion",
      description: "Expansion into new markets and genres.",
      icon: <TrendingUp className="w-8 h-8 text-indigo-500" />,
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
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-indigo-500"></div>

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`mb-2 flex justify-${
                index % 2 === 0 ? "start" : "end"
              } items-center relative`}
            >
              <Card
                className={`w-full max-w-md bg-white/10 backdrop-blur-lg text-white ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                }`}
              >
                <CardContent className="p-2">
                  <div className="flex items-center mb-2">
                    <div className="mr-3 bg-gray-800 rounded-full p-2">
                      {milestone.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-gray-400">{milestone.date}</p>
                    </div>
                  </div>
                  <p className="mb-2">{milestone.description}</p>
                  <Badge
                    variant={
                      milestone.status === "current" ? "default" : "secondary"
                    }
                  >
                    {milestone.status === "current" ? "Current" : "Upcoming"}
                  </Badge>
                </CardContent>
              </Card>
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                  milestone.status === "current"
                    ? "bg-purple-500"
                    : "bg-gray-700"
                } -translate-y-1/2`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
