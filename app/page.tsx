import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { OverviewStats } from "@/components/overview-stats"
import { RecentCourses } from "@/components/recent-courses"
import { RegionalDistribution } from "@/components/regional-distribution"
import { CompletionRates } from "@/components/completion-rates"
import { TrainingPartners } from "@/components/training-partners"

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex items-center space-x-2">
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <OverviewStats />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Regional Distribution</CardTitle>
                      <CardDescription>Trainee distribution across geo-political zones</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <RegionalDistribution />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Completion Rates</CardTitle>
                      <CardDescription>Course completion statistics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <CompletionRates />
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Training Partners</CardTitle>
                      <CardDescription>Active industry partners</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <TrainingPartners />
                    </CardContent>
                  </Card>
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Recent Courses</CardTitle>
                      <CardDescription>Recently added or updated courses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentCourses />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
