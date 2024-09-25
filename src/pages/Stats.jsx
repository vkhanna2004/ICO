// import React, { useState, useEffect } from "react";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "../components/ui/card";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
//   AreaChart,
//   Area,
// } from "recharts";
// import {
//   Music,
//   TrendingUp,
//   DollarSign,
//   BarChart2,
//   Eye,
//   Repeat,
//   Users,
//   Zap,
//   Award,
//   TrendingDown,
// } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Stats() {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const difference = new Date("2024-12-01").getTime() - new Date().getTime();
//       setTimeLeft({
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const topGenres = [
//     { name: "Pop", value: 30 },
//     { name: "Hip Hop", value: 25 },
//     { name: "Rock", value: 20 },
//     { name: "Electronic", value: 15 },
//     { name: "R&B", value: 10 },
//   ];

//   const topArtists = [
//     { name: "Ed Sheeran", value: 1000 },
//     { name: "Taylor Swift", value: 950 },
//     { name: "Drake", value: 900 },
//     { name: "Ariana Grande", value: 850 },
//     { name: "The Weeknd", value: 800 },
//   ];

//   const salesVolume = [
//     { period: "Jan", value: 1000000 },
//     { period: "Feb", value: 1200000 },
//     { period: "Mar", value: 1800000 },
//     { period: "Apr", value: 2200000 },
//     { period: "May", value: 2800000 },
//     { period: "Jun", value: 3500000 },
//   ];

//   const marketGrowth = [
//     { month: "Jan", users: 1000, transactions: 5000 },
//     { month: "Feb", users: 1500, transactions: 7500 },
//     { month: "Mar", users: 2200, transactions: 11000 },
//     { month: "Apr", users: 3000, transactions: 15000 },
//     { month: "May", users: 4000, transactions: 20000 },
//     { month: "Jun", users: 5500, transactions: 27500 },
//   ];

//   const COLORS = ["#ff5c84", "#f5c843", "#e3b93e", "#d1aa39", "#bf9b34"];

//   return (
//     <div className="min-h-screen bg-[#0c0c0c] text-gray-100 p-8">
//       <motion.h1 
//         className="text-4xl font-bold mb-4 text-center text-[#f5c843]"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Market Insights
//       </motion.h1>
//       <motion.p 
//         className="text-xl text-center mb-12 max-w-2xl mx-auto"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         Dive into the heart of our thriving music NFT ecosystem. Explore real-time data, trends, and insights that shape the future of digital music ownership.
//       </motion.p>
      
//       {/* ICO Timer */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//       >
//         <Card className="bg-[#1a1a1a] border-[#e3b93e] mb-16 shadow-lg">
//           <CardHeader>
//             <CardTitle className="bg-[#e3b93e] text-[#0c0c0c] text-center text-lg font-bold p-2 rounded">
//               ICO Countdown: Be Part of the Revolution
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="flex justify-center space-x-4 text-2xl font-semibold mb-4">
//               {["days", "hours", "minutes", "seconds"].map((unit) => (
//                 <motion.div 
//                   className="bg-[#e3b93e] text-[#0c0c0c] p-2 rounded"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                   key={unit}
//                 >
//                   {timeLeft[unit]}{unit.charAt(0)}
//                 </motion.div>
//               ))}
//             </div>
//             <div className="text-center">
//               <p className="text-lg mb-2">Don't miss your chance to own a piece of the future of music.</p>
//               <p className="text-sm">Tokens Available: 1,000,000 | Initial Price: $0.1 per token</p>
//             </div>
//           </CardContent>
//         </Card>
//       </motion.div>

//       {/* Key Stats */}
//       <div className="mb-16">
//         <motion.h2 
//           className="text-3xl font-bold mb-8 text-center text-[#f5c843]"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Platform Milestones
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           <StatCard title="Total Sales" value="$100M" icon={<DollarSign />} trend="up" percent="25%" />
//           <StatCard title="Total Transactions" value="500K" icon={<Repeat />} trend="up" percent="15%" />
//           <StatCard title="Active Listings" value="10K" icon={<BarChart2 />} trend="up" percent="10%" />
//           <StatCard title="Unique Artists" value="5K" icon={<Users />} trend="up" percent="20%" />
//         </div>
//       </div>

//       {/* Market Overview */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Card className="bg-[#1a1a1a] border-[#e3b93e] shadow-lg mb-16">
//           <CardHeader>
//             <CardTitle className="bg-[#e3b93e] text-[#0c0c0c] p-2 rounded">Exponential Growth</CardTitle>
//             <CardDescription>Witness our platform's remarkable expansion</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-col md:flex-row">
//               <p className="mb-4 md:w-1/2">Our ecosystem is flourishing, with user adoption and transaction volume skyrocketing month over month. This chart showcases our platform's robust growth, highlighting the increasing number of users and transactions.</p>
//               <ResponsiveContainer className="md:w-1/2" width="100%" height={300}>
//                 <AreaChart data={marketGrowth}>
//                   <XAxis dataKey="month" stroke="#e3b93e" />
//                   <YAxis stroke="#e3b93e" />
//                   <Tooltip />
//                   <Area type="monotone" dataKey="users" stroke="#f5c843" fillOpacity={1} fill="#f5c843" />
//                   <Area type="monotone" dataKey="transactions" stroke="#e3b93e" fillOpacity={1} fill="#e3b93e" />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>
//       </motion.div>

//       {/* Genre Distribution */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Card className="bg-[#1a1a1a] border-[#e3b93e] shadow-lg mb-16">
//           <CardHeader>
//             <CardTitle className="bg-[#e3b93e] text-[#0c0c0c] p-2 rounded">Genre Popularity</CardTitle>
//             <CardDescription>Discover the most popular genres among our users</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-col md:flex-row">
//               <ResponsiveContainer className="md:w-1/2" width="100%" height={300}>
//                 <PieChart>
//                   <Pie data={topGenres} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
//                     {topGenres.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                 </PieChart>
//               </ResponsiveContainer>
//               <p className="mb-4 md:w-1/2">Explore the diverse range of music genres on our platform, showcasing the preferences of our user base. This pie chart illustrates the percentage of users engaging with each genre.</p>
//             </div>
//           </CardContent>
//         </Card>
//       </motion.div>

//       {/* Top Artists */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Card className="bg-[#1a1a1a] border-[#e3b93e] shadow-lg mb-16">
//           <CardHeader>
//             <CardTitle className="bg-[#e3b93e] text-[#0c0c0c] p-2 rounded">Top Artists</CardTitle>
//             <CardDescription>Meet the artists driving our platform's success</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-col md:flex-row">
//               <p className="mb-4 md:w-1/2">Our platform features a plethora of talented artists who are making waves in the music NFT scene. The bar chart below illustrates the most successful artists based on sales volume.</p>
//               <ResponsiveContainer className="md:w-1/2" width="100%" height={300}>
//                 <BarChart data={topArtists}>
//                   <XAxis dataKey="name" stroke="#e3b93e" />
//                   <YAxis stroke="#e3b93e" />
//                   <Tooltip />
//                   <Bar dataKey="value" fill="#e3b93e" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>
//       </motion.div>

//       {/* Sales Volume */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Card className="bg-[#1a1a1a] border-[#e3b93e] shadow-lg mb-16">
//           <CardHeader>
//             <CardTitle className="bg-[#e3b93e] text-[#0c0c0c] p-2 rounded">Sales Volume Trends</CardTitle>
//             <CardDescription>Examine the growth in sales volume over time</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-col md:flex-row">
//               <ResponsiveContainer className="md:w-1/2" width="100%" height={300}>
//                 <LineChart data={salesVolume}>
//                   <XAxis dataKey="period" stroke="#e3b93e" />
//                   <YAxis stroke="#e3b93e" />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="value" stroke="#ff5c84" />
//                 </LineChart>
//               </ResponsiveContainer>
//               <p className="mb-4 md:w-1/2">This line chart illustrates our sales volume trends over the past six months, demonstrating a significant upward trajectory as more users engage with our platform.</p>
//             </div>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// }

// const StatCard = ({ title, value, icon, trend, percent }) => (
//   <Card className="bg-[#1a1a1a] border-[#e3b93e] shadow-lg text-center">
//     <CardContent>
//       <div className="text-2xl text-[#e3b93e] mb-2">{icon}</div>
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-3xl font-bold">{value}</p>
//       <p className={`text-sm ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
//         {trend === "up" ? `↑ ${percent}` : `↓ ${percent}`}
//       </p>
//     </CardContent>
//   </Card>
// );
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card"; // adjust import as per your structure
import { PieChart, Pie, Cell, Tooltip, BarChart,Bar, XAxis, YAxis, LineChart, Line, ResponsiveContainer } from "recharts"; // adjust imports if necessary

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const topGenres = [
  { name: 'Pop', value: 400 },
  { name: 'Hip Hop', value: 300 },
  { name: 'Rock', value: 300 },
  { name: 'Jazz', value: 200 },
];

const topArtists = [
  { name: 'Artist A', value: 2400 },
  { name: 'Artist B', value: 4567 },
  { name: 'Artist C', value: 1398 },
  { name: 'Artist D', value: 9800 },
];

const salesVolume = [
  { period: 'Jan', value: 2400 },
  { period: 'Feb', value: 4567 },
  { period: 'Mar', value: 1398 },
  { period: 'Apr', value: 9800 },
  { period: 'May', value: 3908 },
  { period: 'Jun', value: 4800 },
];

export default function Stats() {
  return (
    <div className="p-6">
      
      <h1 className="text-4xl font-bold mb-8 text-center text-[#f5c843]">Stats</h1>
      {/* Genre Popularity */}
      <Card className="border-2 border-[#f5c843] overflow-hidden mb-16">
        <CardHeader className="bg-[#e2b636] text-[#0c0c0c]">
          <CardTitle>Genre Popularity</CardTitle>
        </CardHeader>
        <CardContent className="bg-[#1a1a1a] text-[#f5c843]">
          <div className="flex flex-col md:flex-row">
            <ResponsiveContainer className="md:w-1/2" width="100%" height={300}>
              <PieChart>
                <Pie data={topGenres} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
                  {topGenres.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="md:w-1/2 mb-4">
              <p className="font-bold text-lg">Discover the most popular genres among our users</p>
              <p>Explore the diverse range of music genres on our platform, showcasing the preferences of our user base. This pie chart illustrates the percentage of users engaging with each genre, giving insights into user preferences and trends in the music industry.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Artists */}
      <Card className="border-2 border-[#f5c843] overflow-hidden mb-16">
        <CardHeader className="bg-[#e2b636] text-[#0c0c0c]">
          <CardTitle>Top Artists</CardTitle>
        </CardHeader>
        <CardContent className="bg-[#1a1a1a] text-[#f5c843]">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-4">
              <p className="font-bold text-lg">Meet the artists driving our platform's success</p>
              <p>Our platform features a plethora of talented artists who are making waves in the music NFT scene. The bar chart below illustrates the most successful artists based on sales volume, highlighting the talent that captivates our audience.</p>
            </div>
            <ResponsiveContainer className="md:w-1/2" width="100%" height={300}>
              <BarChart data={topArtists}>
                <XAxis dataKey="name" stroke="#e3b93e" />
                <YAxis stroke="#e3b93e" />
                <Tooltip />
                <Bar dataKey="value" fill="#e3b93e" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Sales Volume */}
      <Card className="border-2 border-[#f5c843] overflow-hidden mb-16">
        <CardHeader className="bg-[#e2b636] text-[#0c0c0c]">
          <CardTitle>Sales Volume Trends</CardTitle>
        </CardHeader>
        <CardContent className="bg-[#1a1a1a] text-[#f5c843]">
          <div className="flex flex-col md:flex-row">
            <ResponsiveContainer className="md:w-1/2" width="100%" height={300}>
              <LineChart data={salesVolume}>
                <XAxis dataKey="period" stroke="#e3b93e" />
                <YAxis stroke="#e3b93e" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#ff5c84" />
              </LineChart>
            </ResponsiveContainer>
            <div className="md:w-1/2 mb-4">
              <p className="font-bold text-lg">Examine the growth in sales volume over time</p>
              <p>This line chart illustrates our sales volume trends over the past six months, demonstrating a significant upward trajectory as more users engage with our platform. This growth reflects our expanding community and increased interest in our offerings.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const StatCard = ({ title, value, icon, trend, percent }) => (
  <Card className="border-2 border-[#f5c843] overflow-hidden bg-[#1a1a1a] text-[#f5c843] text-center">
    <CardContent>
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
      <p className={`text-sm ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
        {trend === "up" ? `↑ ${percent}` : `↓ ${percent}`}
      </p>
    </CardContent>
  </Card>
);