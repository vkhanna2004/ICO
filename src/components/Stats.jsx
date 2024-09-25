import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Music,
  TrendingUp,
  DollarSign,
  BarChart2,
  Eye,
  Repeat,
  Users,
} from "lucide-react";

export default function StatsPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference =
        new Date("2024-01-01").getTime() - new Date().getTime();
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const topGenres = [
    { name: "Pop", value: 30 },
    { name: "Hip Hop", value: 25 },
    { name: "Rock", value: 20 },
    { name: "Electronic", value: 15 },
    { name: "R&B", value: 10 },
  ];

  const topArtists = [
    { name: "Ed Sheeran", value: 1000 },
    { name: "Taylor Swift", value: 950 },
    { name: "Drake", value: 900 },
    { name: "Ariana Grande", value: 850 },
    { name: "The Weeknd", value: 800 },
  ];

  const salesVolume = [
    { period: "24h", value: 1000000 },
    { period: "7d", value: 5000000 },
    { period: "1m", value: 20000000 },
    { period: "All Time", value: 100000000 },
  ];

  const COLORS = ["#ff5c84", "#f5c843", "#e3b93e", "#d1aa39", "#bf9b34"];

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-black p-8">
      <Card className="bg-[#1a1a1a] border-[#e3b93e] mb-8 shadow-lg">
        <CardHeader>
          <CardTitle className="bg-[#e3b93e] text-[#0c0c0c] text-center text-lg font-bold">
            ICO Starts In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center space-x-4 text-2xl font-semibold">
            <div>{timeLeft.days}d</div>
            <div>{timeLeft.hours}h</div>
            <div>{timeLeft.minutes}m</div>
            <div>{timeLeft.seconds}s</div>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm">Tokens Available: 1,000,000</p>
            <p className="text-sm">Initial Price: $0.1 per token</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Sales" value="$100M" icon={<DollarSign />} />
        <StatCard title="Total Transactions" value="500K" icon={<Repeat />} />
        <StatCard title="Active Listings" value="10K" icon={<BarChart2 />} />
        <StatCard title="Unique Artists" value="5K" icon={<Users />} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="bg-[#1a1a1a] border-[#e3b93e] shadow-lg">
          <CardHeader>
            <CardTitle className="bg-[#e3b93e] text-[#0c0c0c] flex items-center">
              <Music className="mr-2" /> Top Genres
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={topGenres}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {topGenres.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: "#1a1a1a", border: "none" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#e3b93e] shadow-lg">
          <CardHeader>
            <CardTitle className="bg-[#e3b93e] text-[#0c0c0c] flex items-center">
              <Users className="mr-2" /> Top Artists
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topArtists}>
                <XAxis dataKey="name" stroke="#e3b93e" />
                <YAxis stroke="#e3b93e" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1a1a1a", border: "none" }}
                />
                <Bar dataKey="value" fill="#e3b93e" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="bg-[#1a1a1a] border-[#e3b93e] shadow-lg">
          <CardHeader>
            <CardTitle className="bg-[#e3b93e] text-[#0c0c0c] flex items-center">
              <TrendingUp className="mr-2" /> Sales Volume
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesVolume}>
                <XAxis dataKey="period" stroke="#e3b93e" />
                <YAxis stroke="#e3b93e" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1a1a1a", border: "none" }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#e3b93e"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Tabs defaultValue="best-selling" className="w-full">
          
          <TabsContent value="best-selling">
            <NFTList title="Best-Selling NFTs" icon={<DollarSign />} />
          </TabsContent>
          <TabsContent value="most-viewed">
            <NFTList title="Most-Viewed NFTs" icon={<Eye />} />
          </TabsContent>
          <TabsContent value="most-traded">
            <NFTList title="Most-Traded NFTs" icon={<Repeat />} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <Card className="bg-[#1a1a1a] border-[#e3b93e] shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-[#e3b93e]">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-2xl font-semibold">{value}</CardContent>
    </Card>
  );
}

function NFTList({ title, icon }) {
  const nfts = [
    { name: "CryptoArt", artist: "ArtisticApe", value: "$100,000" },
    { name: "Pixel Picasso", artist: "Pixel Picasso", value: "$45,000" },
    { name: "Neon Nights", artist: "Glow Guru", value: "$40,000" },
    { name: "Quantum Quasar", artist: "Data Dali", value: "$35,000" },
    { name: "Cyber Serenity", artist: "Binary Banksy", value: "$30,000" },
  ];

  return (
    <Card className="bg-[#1a1a1a] border-[#e3b93e] shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-[#e3b93e]">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#e3b93e]">
              <th className="text-left p-2 text-[#e3b93e]">NFT</th>
              <th className="text-left p-2 text-[#e3b93e]">Artist</th>
              <th className="text-left p-2 text-[#e3b93e]">Value</th>
            </tr>
          </thead>
          <tbody>
            {nfts.map((nft, index) => (
              <tr
                key={index}
                className="border-b border-[#333] hover:bg-[#e3b93e]"
              >
                <td className="p-2 text-black">{nft.name}</td>
                <td className="p-2 text-black">{nft.artist}</td>
                <td className="p-2 text-black">{nft.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
