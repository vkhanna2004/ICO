import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import {PieChart,Pie,Cell,ResponsiveContainer,Tooltip,BarChart,Bar,XAxis,YAxis,} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import {Table,TableBody,TableCell,TableCellHeader,TableHeader,TableRow,} from "./ui/Table";
import {Coins,Users,TrendingUp,Zap,Lock,BarChart3,PieChart as PieChartIcon,} from "lucide-react";

export default function Tokenomics() {
  const tokenDistribution = [
    { name: "Public Sale", value: 40, color: "#f5c843" },
    { name: "Team & Advisors", value: 20, color: "#4a9fff" },
    { name: "Platform Development", value: 15, color: "#50c878" },
    { name: "Marketing", value: 10, color: "#ff6b6b" },
    { name: "Liquidity Pool", value: 10, color: "#9b59b6" },
    { name: "Community Rewards", value: 5, color: "#3498db" },
  ];

  const revenueModel = [
    { name: "NFT Holders", value: 85, color: "#f5c843" },
    { name: "Original Artist", value: 10, color: "#4a9fff" },
    { name: "Platform", value: 5, color: "#50c878" },
  ];

  const tokenUtility = [
    { name: "Governance", value: 30 },
    { name: "Staking", value: 25 },
    { name: "Fee Discounts", value: 20 },
    { name: "Exclusive Access", value: 15 },
    { name: "Royalty Distribution", value: 10 },
  ];

  return (
    <section id="tokenomics">
      <div className="min-h-screen bg-gradient-to-b from-[#0C0C0C] to-[#1a1a1a] text-[#f5c843] p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Tokenomics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Card className=" border-2 border-[#f5c843] overflow-hidden">
            <CardHeader className="bg-[#e2b636] text-[#0C0C0C]">
              <CardTitle className="flex items-center">
                <PieChartIcon className="mr-2" /> Token Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 bg-zinc-800">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={tokenDistribution}
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
                    {tokenDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a1a1a",
                      border: "none",
                    }}
                    itemStyle={{ color: "#0C0C0C" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800 border-2 border-[#f5c843] overflow-hidden">
            <CardHeader className="bg-[#e2b636] text-[#0C0C0C]">
              <CardTitle className="flex items-center">
                <Coins className="mr-2" /> Token Details
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-zinc-800">
              <ul className="space-y-4 mt-4 ">
                <li className="flex items-center">
                  <Coins className="mr-2 text-[#f5c843]" />
                  <span>
                    <strong className="text-[#f5c843]">Token Name:</strong>{" "}
                    MusicNFT Token
                  </span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="mr-2 text-[#f5c843]" />
                  <span>
                    <strong className="text-[#f5c843]">Token Symbol:</strong>{" "}
                    MNFT
                  </span>
                </li>
                <li className="flex items-center">
                  <Users className="mr-2 text-[#f5c843]" />
                  <span>
                    <strong className="text-[#f5c843]">Total Supply:</strong>{" "}
                    1,000,000,000 MNFT
                  </span>
                </li>
                <li className="flex items-center">
                  <Zap className="mr-2 text-[#f5c843]" />
                  <span>
                    <strong className="text-[#f5c843]">Initial Price:</strong>{" "}
                    $0.05 per MNFT
                  </span>
                </li>
                <li className="flex items-center">
                  <Lock className="mr-2 text-[#f5c843]" />
                  <span>
                    <strong className="text-[#f5c843]">Vesting:</strong> Team &
                    Advisor tokens locked for 12 months, then released over 24
                    months
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="financial-model" className="w-full">
          <TabsContent value="financial-model" className="mb-8">
            <Card className="bg-zinc-800 border-2 border-[#f5c843] overflow-hidden">
              <CardHeader className="bg-[#d1a42a] text-[#0C0C0C]">
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2" /> Financial Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 mt-4">
                  Our financial model is designed to create value for all
                  stakeholders in the ecosystem:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-[#f5c843] mb-2">
                      Revenue Distribution
                    </h3>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={revenueModel}
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
                          {revenueModel.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1a1a1a",
                            border: "none",
                          }}
                          itemStyle={{ color: "#0C0C0C" }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div>
                    <h3 className="text-[#f5c843] mb-2">
                      Token Utility Breakdown
                    </h3>
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={tokenUtility}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="value" fill="#f5c843">
                          {tokenUtility.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill="#f5c843" />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="incentives" className="mb-8">
            <Card className="bg-zinc-800 border-2 border-[#f5c843] overflow-hidden">
              <CardHeader className="bg-[#d1a42a] text-[#0C0C0C]">
                <CardTitle className="flex items-center">
                  <Zap className="mr-2" /> Incentives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our platform offers various incentives to encourage community
                  participation and support. Key incentives include:
                </p>
                <ul className="list-disc ml-6 mt-4">
                  <li>Exclusive access to new NFT releases</li>
                  <li>Token rewards for community engagement</li>
                  <li>Voting rights in platform governance</li>
                  <li>Discounts on transaction fees for staked tokens</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="nft-value" className="mb-8">
            <Card className="bg-zinc-800 border-2 border-[#f5c843] overflow-hidden">
              <CardHeader className="bg-[#e2b636] text-[#0C0C0C]">
                <CardTitle className="flex items-center">
                  <Lock className="mr-2" /> NFT Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our NFTs derive value from several factors, including:</p>
                <ul className="list-disc ml-6 mt-4">
                  <li>Rarity and uniqueness of each NFT</li>
                  <li>Artist reputation and track record</li>
                  <li>Utility within the platform ecosystem</li>
                  <li>Community engagement and ownership experience</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="token-utility" className="mb-8">
            <Card className="bg-zinc-800 border-2 border-[#f5c843] overflow-hidden">
              <CardHeader className="bg-[#e2b636] text-[#0C0C0C]">
                <CardTitle className="flex items-center">
                  <BarChart className="mr-2" /> Token Utility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>The utility of our token within the ecosystem includes:</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableCellHeader>Utility</TableCellHeader>
                      <TableCellHeader>Percentage</TableCellHeader>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tokenUtility.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.value}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
