"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { ArrowUpRight, TrendingUp } from "lucide-react"

const enrollmentData = [
  { month: "Jan", beneficiaries: 240, enrolled: 221 },
  { month: "Feb", beneficiaries: 380, enrolled: 229 },
  { month: "Mar", beneficiaries: 520, enrolled: 200 },
  { month: "Apr", beneficiaries: 680, enrolled: 229 },
  { month: "May", beneficiaries: 790, enrolled: 240 },
  { month: "Jun", beneficiaries: 980, enrolled: 221 },
  { month: "Jul", beneficiaries: 1200, enrolled: 250 },
]

const employmentOutcomesData = [
  { status: "Employed", value: 842, fill: "#10b981" },
  { status: "Self-Employed", value: 620, fill: "#3b82f6" },
  { status: "In Training", value: 485, fill: "#f59e0b" },
  { status: "Seeking Work", value: 126, fill: "#ef4444" },
]

const regionalData = [
  { region: "Lagos", beneficiaries: 450, employed: 380 },
  { region: "Kano", beneficiaries: 320, employed: 240 },
  { region: "Rivers", beneficiaries: 280, employed: 210 },
  { region: "Abuja", beneficiaries: 400, employed: 340 },
  { region: "Oyo", beneficiaries: 350, employed: 280 },
  { region: "Enugu", beneficiaries: 290, employed: 220 },
]

const trainingCenterPerformance = [
  { center: "Lagos Tech Hub", completionRate: 92, beneficiaries: 450, rating: 4.8 },
  { center: "Kano Skills Center", completionRate: 88, beneficiaries: 320, rating: 4.6 },
  { center: "Port Harcourt Training", completionRate: 85, beneficiaries: 280, rating: 4.5 },
  { center: "Abuja Business Center", completionRate: 90, beneficiaries: 400, rating: 4.7 },
  { center: "Ibadan Agricultural", completionRate: 84, beneficiaries: 350, rating: 4.4 },
]

export default function AnalyticsPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Analytics & Insights</h1>
        <p className="text-muted-foreground">Monitor beneficiary enrollment, employment outcomes, and training center performance</p>
      </div>

      <Tabs defaultValue="enrollment" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="enrollment">Enrollment Trends</TabsTrigger>
          <TabsTrigger value="employment">Employment Outcomes</TabsTrigger>
          <TabsTrigger value="regional">Regional Analysis</TabsTrigger>
          <TabsTrigger value="centers">Training Centers</TabsTrigger>
        </TabsList>

        <TabsContent value="enrollment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Beneficiary Enrollment Trends</CardTitle>
              <CardDescription>Monthly enrollment and active beneficiaries over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={enrollmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="beneficiaries" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="enrolled" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Enrolled This Year</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,853</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500">+18% from last year</span>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Average Monthly Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.4%</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 text-blue-500 mr-1" />
                  <span>Consistent growth</span>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground mt-1">Across all categories</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="employment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Employment Status Distribution</CardTitle>
              <CardDescription>Current employment outcomes for all beneficiaries</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={employmentOutcomesData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ status, value, percent }) => `${status}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {employmentOutcomesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Employed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">842</div>
                <p className="text-xs text-muted-foreground">29.5% of beneficiaries</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Self-Employed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">620</div>
                <p className="text-xs text-muted-foreground">21.7% of beneficiaries</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">In Training</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">485</div>
                <p className="text-xs text-muted-foreground">17.0% of beneficiaries</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">51.2%</div>
                <p className="text-xs text-muted-foreground">Employed + Self-employed</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="regional" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Regional Distribution & Employment</CardTitle>
              <CardDescription>Beneficiary enrollment and employment success by region</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={regionalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="beneficiaries" fill="#3b82f6" />
                  <Bar dataKey="employed" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="space-y-2">
            <h3 className="font-semibold">Regional Summary</h3>
            <div className="space-y-2">
              {regionalData.map((region) => (
                <Card key={region.region} className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{region.region}</p>
                      <p className="text-sm text-muted-foreground">{region.beneficiaries} beneficiaries enrolled</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">{region.employed}</p>
                      <p className="text-xs text-muted-foreground">{Math.round((region.employed / region.beneficiaries) * 100)}% employed</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="centers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Training Center Performance</CardTitle>
              <CardDescription>Completion rates, beneficiary enrollment, and ratings</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={trainingCenterPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="center" angle={-45} textAnchor="end" height={120} interval={0} fontSize={12} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completionRate" fill="#3b82f6" name="Completion Rate %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="space-y-2">
            <h3 className="font-semibold">Center Rankings</h3>
            <div className="space-y-2">
              {trainingCenterPerformance.map((center, idx) => (
                <Card key={center.center} className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-muted-foreground">#{idx + 1}</span>
                        <p className="font-medium">{center.center}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{center.beneficiaries} beneficiaries trained</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">{center.completionRate}%</p>
                      <p className="text-xs text-muted-foreground">Completion rate</p>
                      <p className="text-sm text-yellow-600 font-medium mt-2">★ {center.rating}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
