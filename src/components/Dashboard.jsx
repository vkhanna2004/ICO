
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const projectionData = [
    { month: 'Jan', value: 0.5 },
    { month: 'Feb', value: 0.7 },
    { month: 'Mar', value: 1.2 },
    { month: 'Apr', value: 1.5 },
    { month: 'May', value: 2.0 },
    { month: 'Jun', value: 2.4 },
  ];

  const growthData = [
    { sector: 'Streaming', growth: 45 },
    { sector: 'Live Events', growth: 30 },
    { sector: 'Merchandise', growth: 15 },
    { sector: 'Digital Downloads', growth: 10 },
  ];

  const allocationData = [
    { name: 'Development', value: 40 },
    { name: 'Marketing', value: 30 },
    { name: 'Operations', value: 20 },
    { name: 'Legal', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const topGenres = [
    { genre: "Pop", marketShare: "35%", growth: "+5%" },
    { genre: "Hip-Hop", marketShare: "25%", growth: "+8%" },
    { genre: "Rock", marketShare: "20%", growth: "+2%" },
    { genre: "Electronic", marketShare: "15%", growth: "+10%" },
    { genre: "Country", marketShare: "5%", growth: "+1%" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="px-6 py-4 bg-indigo-600 text-white">
        <h1 className="text-xl font-semibold">MusicToken ICO Dashboard</h1>
      </header>
      <main className="flex-1 p-6 space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="flex justify-center space-x-4">
            <TabsTrigger value="overview" className="px-4 py-2 text-lg font-medium rounded-lg bg-indigo-500 text-white hover:bg-indigo-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="projections" className="px-4 py-2 text-lg font-medium rounded-lg bg-indigo-500 text-white hover:bg-indigo-600">
              Projections
            </TabsTrigger>
            <TabsTrigger value="allocation" className="px-4 py-2 text-lg font-medium rounded-lg bg-indigo-500 text-white hover:bg-indigo-600">
              Fund Allocation
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white shadow-lg rounded-lg">
                <CardHeader className="flex items-center justify-between p-4 border-b">
                  <CardTitle className="text-sm font-medium">Total Raised</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold text-gray-900">$4.2M</div>
                  <p className="text-xs text-gray-500">+20% from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg rounded-lg">
                <CardHeader className="flex items-center justify-between p-4 border-b">
                  <CardTitle className="text-sm font-medium">Token Price</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold text-gray-900">$2.40</div>
                  <p className="text-xs text-gray-500">+15% from ICO price</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg rounded-lg">
                <CardHeader className="flex items-center justify-between p-4 border-b">
                  <CardTitle className="text-sm font-medium">Total Holders</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold text-gray-900">12,345</div>
                  <p className="text-xs text-gray-500">+5% from last week</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg rounded-lg">
                <CardHeader className="flex items-center justify-between p-4 border-b">
                  <CardTitle className="text-sm font-medium">Market Cap</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold text-gray-900">$24M</div>
                  <p className="text-xs text-gray-500">Based on circulating supply</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="projections" className="space-y-6">
            <Card className="bg-white shadow-lg rounded-lg">
              <CardHeader className="p-4 border-b">
                <CardTitle className="text-lg font-medium">Token Value Projection</CardTitle>
                <CardDescription>Estimated token value over the next 6 months</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={projectionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg rounded-lg">
              <CardHeader className="p-4 border-b">
                <CardTitle className="text-lg font-medium">Growth Rate by Sector</CardTitle>
                <CardDescription>Expected growth in different music sectors</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={growthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sector" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="growth" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="allocation">
            <Card className="bg-white shadow-lg rounded-lg">
              <CardHeader className="p-4 border-b">
                <CardTitle className="text-lg font-medium">ICO Funds Allocation</CardTitle>
                <CardDescription>How the raised funds will be utilized</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={allocationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {allocationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <Card className="bg-white shadow-lg rounded-lg mt-6">
          <CardHeader className="p-4 border-b">
            <CardTitle className="text-lg font-medium">Top Music Genres</CardTitle>
            <CardDescription>Market share and growth of top genres</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b">
                  <tr>
                    <th className="py-2 font-medium">Genre</th>
                    <th className="py-2 font-medium">Market Share</th>
                    <th className="py-2 font-medium">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {topGenres.map((genre, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2">{genre.genre}</td>
                      <td className="py-2">{genre.marketShare}</td>
                      <td className="py-2">{genre.growth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
