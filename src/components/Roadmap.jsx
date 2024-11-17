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
import bgImage from "../images/bg3.jpeg";

export default function Roadmap() {
  const milestones = [
    {
      date: "Q4 2023",
      title: "ICO Launch",
      description: "Initial Coin Offering goes live.",
      icon: <Rocket className="w-8 h-8 text-yellow-400" />,
      status: "current",
    },
    {
      date: "Q1 2024",
      title: "Beta Marketplace",
      description: "Launch of beta version of NFT marketplace.",
      icon: <Code className="w-8 h-8 text-blue-400" />,
      status: "upcoming",
    },
    {
      date: "Q2 2024",
      title: "Artist Partnerships",
      description: "Onboarding of major artists and labels.",
      icon: <Users className="w-8 h-8 text-teal-400" />,
      status: "upcoming",
    },
    {
      date: "Q3 2024",
      title: "Full Launch",
      description: "Official launch of the full marketplace.",
      icon: <Globe className="w-8 h-8 text-yellow-400" />,
      status: "upcoming",
    },
    {
      date: "Q4 2024",
      title: "Mobile App",
      description: "Release of mobile app for iOS and Android.",
      icon: <Smartphone className="w-8 h-8 text-pink-400" />,
      status: "upcoming",
    },
    {
      date: "Q1 2025",
      title: "Expansion",
      description: "Expansion into new markets and genres.",
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      status: "upcoming",
    },
  ];

  return (
    <section
      id="roadmap"
      className="py-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          Roadmap
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white shadow-[0_0_15px_#f5c843]"></div>

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-${
                index % 2 === 0 ? "start" : "end"
              } items-center relative`}
            >
              <Card
                className={`w-full max-w-md bg-[#1c1132] backdrop-blur-md text-white shadow-md border border-gray-600 ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="mr-3 bg-gray-800 rounded-full p-3">
                      {milestone.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-400">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-gray-300">{milestone.date}</p>
                    </div>
                  </div>
                  <p className="mb-2 text-gray-200">{milestone.description}</p>
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
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-400 -translate-y-1/2"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
