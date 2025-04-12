import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "@/components/dashboard-header"
import { ArrowUpDown, Download, Filter, GraduationCap, Search, UserCheck } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RegionalDistribution } from "@/components/regional-distribution"

export default function TraineesPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Trainees</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Export
            </Button>
            <Button>Add New Trainee</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Trainees</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,853</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Trainees</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,619</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certified</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">76.2%</div>
            </CardContent>
          </Card>
        </div>

        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Regional Distribution</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <RegionalDistribution />
          </CardContent>
        </Card>

        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search trainees..." className="w-full appearance-none pl-8 shadow-none" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Trainees</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="certified">Certified</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Partner</TableHead>
                      <TableHead>State</TableHead>
                      <TableHead>
                        <div className="flex items-center">
                          Status <ArrowUpDown className="ml-2 h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {trainees.map((trainee) => (
                      <TableRow key={trainee.id}>
                        <TableCell className="font-medium">{trainee.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${trainee.name.charAt(0)}`} />
                              <AvatarFallback>{trainee.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            {trainee.name}
                          </div>
                        </TableCell>
                        <TableCell>{trainee.course}</TableCell>
                        <TableCell>{trainee.partner}</TableCell>
                        <TableCell>{trainee.state}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              trainee.status === "Certified"
                                ? "default"
                                : trainee.status === "In Progress"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {trainee.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

const trainees = [
  {
    id: "TR-001",
    name: "John Okafor",
    course: "Automotive Mechatronics",
    partner: "Lanre Shittu Motors",
    state: "Lagos",
    status: "Certified",
  },
  {
    id: "TR-002",
    name: "Amina Ibrahim",
    course: "Introduction to Welding",
    partner: "Ajawole Technical",
    state: "Abuja",
    status: "In Progress",
  },
  {
    id: "TR-003",
    name: "Chukwudi Eze",
    course: "Electricity and Electromagnetism",
    partner: "Innoson Motors",
    state: "Enugu",
    status: "Certified",
  },
  {
    id: "TR-004",
    name: "Folake Adeyemi",
    course: "Automotive Design Fundamentals",
    partner: "Coscharis Group",
    state: "Lagos",
    status: "In Progress",
  },
  {
    id: "TR-005",
    name: "Mohammed Bello",
    course: "Vehicle Diagnostics",
    partner: "Lanre Shittu Motors",
    state: "Kano",
    status: "Not Started",
  },
  {
    id: "TR-006",
    name: "Ngozi Okonkwo",
    course: "Automotive Painting",
    partner: "Innoson Motors",
    state: "Anambra",
    status: "Certified",
  },
]
