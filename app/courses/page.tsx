import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "@/components/dashboard-header"
import { Clock, FileText, Filter, Search, Users, Video } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import AutoMechatronics from '@/public/automotive-mechanic.jpeg'
import Welding from '@/public/welding.jpeg'
import Electricity from "@/public/electricity.jpg"
import AutoDesign from "@/public/auto-design.jpg"
import AutoDiagnostics from '@/public/vehicle-diagnostics.jpeg'
import AutoPainting from '@/public/auto-painting.jpg'


export default function CoursesPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight">Programs</h2>
          <div className="flex items-center gap-2">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search programs..."
                className="w-full appearance-none pl-8 shadow-none"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
            <Button variant="default">Add New Program</Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList className="w-full sm:w-auto flex justify-between sm:inline-flex">
            <TabsTrigger value="all" className="flex-1 sm:flex-initial">
              All Programs
            </TabsTrigger>
            <TabsTrigger value="active" className="flex-1 sm:flex-initial">
              Active
            </TabsTrigger>
            <TabsTrigger value="popular" className="flex-1 sm:flex-initial">
              Popular
            </TabsTrigger>
            <TabsTrigger value="new" className="flex-1 sm:flex-initial">
              New
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <Card
                  key={course.id}
                  className="overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-md"
                >
                  <div className="aspect-video w-full relative overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-green-600 hover:bg-green-700">{course.state}</Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="secondary" className="text-xs">{course.category}</Badge>
                        </div>
                        <CardTitle className="text-xl">{course.title}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <span className="font-medium text-green-700">{course.partner}</span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2 flex-grow">
                    <div className="flex items-center justify-between text-sm mb-3">
                      <div className="flex items-center gap-2">
                        {course.contentTypes.includes("video") && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Video className="h-3 w-3" /> Video
                          </Badge>
                        )}
                        {course.contentTypes.includes("pdf") && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <FileText className="h-3 w-3" /> PDF
                          </Badge>
                        )}
                      </div>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Users className="h-3 w-3" /> {course.enrolled}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Completion Rate</span>
                        <span className="font-medium">{course.completionRate}%</span>
                      </div>
                      <Progress value={course.completionRate} className="h-2" />
                    </div>
                    <div className="mt-3 flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{course.duration}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="default" size="sm" className="w-full" asChild>
                      <Link href={`/courses/${course.id}`}>Apply Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex items-center justify-center mt-6">
              <Button variant="outline" className="mx-2">
                Previous
              </Button>
              <Button variant="outline" className="mx-2">
                Next
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

const courses = [
  {
    id: 1,
    title: "Digital Marketing Skills",
    category: "Vocational Skills",
    partner: "Lagos Tech Hub",
    state: "Lagos",
    enrolled: 45,
    contentTypes: ["video", "pdf"],
    date: "2023-04-15",
    image: AutoMechatronics,
    completionRate: 68,
    duration: "12 weeks",
  },
  {
    id: 2,
    title: "Vocational Welding Certification",
    category: "Vocational Skills",
    partner: "Kano Skills Center",
    state: "Kano",
    enrolled: 32,
    contentTypes: ["video", "pdf", "audio"],
    date: "2023-04-10",
    image: Welding,
    completionRate: 75,
    duration: "8 weeks",
  },
  {
    id: 3,
    title: "Electrical Installation & Maintenance",
    category: "Vocational Skills",
    partner: "Port Harcourt Training Center",
    state: "Rivers",
    enrolled: 38,
    contentTypes: ["video", "pdf"],
    date: "2023-04-05",
    image: Electricity,
    completionRate: 62,
    duration: "10 weeks",
  },
  {
    id: 4,
    title: "Small Scale Enterprise Startup",
    category: "Small Scale Enterprises",
    partner: "Abuja Business Center",
    state: "Abuja",
    enrolled: 27,
    contentTypes: ["video", "pdf"],
    date: "2023-03-28",
    image: AutoDesign,
    completionRate: 55,
    duration: "16 weeks",
  },
  {
    id: 5,
    title: "Rural Agriculture Business",
    category: "Rural Employment",
    partner: "Ibadan Agricultural Institute",
    state: "Oyo",
    enrolled: 36,
    contentTypes: ["video", "pdf"],
    date: "2023-03-20",
    image: AutoDiagnostics,
    completionRate: 82,
    duration: "6 weeks",
  },
  {
    id: 6,
    title: "Public Works Infrastructure Training",
    category: "Special Public Works",
    partner: "Construction Excellence Ltd",
    state: "Enugu",
    enrolled: 29,
    contentTypes: ["video", "pdf"],
    date: "2023-03-15",
    image: AutoPainting,
    completionRate: 70,
    duration: "8 weeks",
  },
]
