import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "@/components/dashboard-header"
import { ArrowLeft, Calendar, Clock, FileText, MapPin, Play, Users, Video } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import AutoMechatronics from '@/public/automotive-mechanic.jpeg'
import Welding from '@/public/welding.jpeg'
import Electricity from "@/public/electricity.jpg"
import AutoDesign from "@/public/auto-design.jpg"
import AutoDiagnostics from '@/public/vehicle-diagnostics.jpeg'
import AutoPainting from '@/public/auto-painting.jpg'

// This would normally come from a database
const getCourse = (id: string) => {
  const courseId = Number.parseInt(id)
  return courses.find((course) => course.id === courseId) || courses[0]
}

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = getCourse(params.id)

  return (
    <div className="flex flex-col">
      <DashboardHeader />
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/courses">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Courses
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Button className="rounded-full" size="icon">
                  <Play className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <Badge className="bg-green-600 hover:bg-green-700">{course.state}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-3 w-3" /> {course.partner}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" /> {course.duration}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="mr-1 h-3 w-3" /> {course.enrolled} enrolled
                </div>
              </div>
            </div>

            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructors">Instructors</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4 pt-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">About This Course</h3>
                  <p className="text-muted-foreground">
                    {course.title} is a comprehensive training program designed to equip trainees with the necessary
                    skills and knowledge in the automotive industry. This course is delivered in partnership with{" "}
                    {course.partner} and covers both theoretical concepts and practical applications.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">What You'll Learn</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      "Understand core principles and applications",
                      "Develop practical skills through hands-on training",
                      "Learn industry-standard techniques and methodologies",
                      "Gain knowledge of safety protocols and best practices",
                      "Prepare for certification and employment opportunities",
                      "Network with industry professionals",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-600 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Course Progress</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Overall Completion Rate</span>
                      <span className="font-medium">{course.completionRate}%</span>
                    </div>
                    <Progress value={course.completionRate} className="h-2" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-4 pt-4">
                <div className="space-y-4">
                  {[
                    {
                      title: "Module 1: Introduction and Fundamentals",
                      lessons: [
                        { title: "Course Overview", duration: "15 min", type: "video" },
                        { title: "Basic Principles", duration: "45 min", type: "video" },
                        { title: "Safety Guidelines", duration: "30 min", type: "pdf" },
                      ],
                    },
                    {
                      title: "Module 2: Core Concepts",
                      lessons: [
                        { title: "Technical Specifications", duration: "1 hr", type: "video" },
                        { title: "Practical Applications", duration: "2 hr", type: "video" },
                        { title: "Case Studies", duration: "45 min", type: "pdf" },
                      ],
                    },
                    {
                      title: "Module 3: Advanced Techniques",
                      lessons: [
                        { title: "Professional Methods", duration: "1.5 hr", type: "video" },
                        { title: "Troubleshooting", duration: "1 hr", type: "video" },
                        { title: "Industry Standards", duration: "30 min", type: "pdf" },
                      ],
                    },
                  ].map((module, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <CardTitle>{module.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="flex items-center justify-between py-2 border-b last:border-0"
                            >
                              <div className="flex items-center">
                                {lesson.type === "video" ? (
                                  <Video className="h-4 w-4 mr-2 text-green-600" />
                                ) : (
                                  <FileText className="h-4 w-4 mr-2 text-green-600" />
                                )}
                                <span>{lesson.title}</span>
                              </div>
                              <div className="flex items-center">
                                <span className="text-sm text-muted-foreground mr-3">{lesson.duration}</span>
                                <Button variant="ghost" size="sm">
                                  <Play className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="instructors" className="space-y-4 pt-4">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      name: "Dr. Emmanuel Okonkwo",
                      role: "Lead Instructor",
                      bio: "Dr. Okonkwo has over 15 years of experience in automotive engineering and has trained hundreds of technicians across Nigeria.",
                      image: "/placeholder.svg?height=100&width=100",
                    },
                    {
                      name: "Eng. Fatima Ibrahim",
                      role: "Technical Specialist",
                      bio: "Eng. Ibrahim specializes in automotive electronics and has worked with major automotive manufacturers in Nigeria and abroad.",
                      image: "/placeholder.svg?height=100&width=100",
                    },
                  ].map((instructor, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center">
                          <Avatar className="h-20 w-20 mb-4">
                            <AvatarImage src={instructor.image || "/placeholder.svg"} />
                            <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <h3 className="text-lg font-semibold">{instructor.name}</h3>
                          <p className="text-sm text-green-600 mb-2">{instructor.role}</p>
                          <p className="text-sm text-muted-foreground">{instructor.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="resources" className="space-y-4 pt-4">
                <div className="space-y-4">
                  {[
                    { title: "Course Handbook", type: "pdf", size: "2.4 MB" },
                    { title: "Technical Diagrams", type: "pdf", size: "5.1 MB" },
                    { title: "Practice Exercises", type: "pdf", size: "1.8 MB" },
                    { title: "Reference Materials", type: "pdf", size: "3.2 MB" },
                  ].map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 mr-3 text-green-600" />
                        <div>
                          <p className="font-medium">{resource.title}</p>
                          <p className="text-xs text-muted-foreground">{resource.size}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Training Partner</span>
                    <span className="font-medium">{course.partner}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">{course.state}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Enrolled</span>
                    <span className="font-medium">{course.enrolled} trainees</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Start Date</span>
                    <span className="font-medium">May 15, 2023</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Certificate</span>
                    <span className="font-medium">Yes, upon completion</span>
                  </div>
                </div>

                <Button className="w-full">Enroll Trainees</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: "Practical Workshop", date: "May 20, 2023", time: "10:00 AM - 2:00 PM" },
                  { title: "Guest Lecture", date: "May 25, 2023", time: "1:00 PM - 3:00 PM" },
                  { title: "Assessment", date: "June 5, 2023", time: "9:00 AM - 12:00 PM" },
                ].map((session, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                    <Calendar className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">{session.title}</p>
                      <p className="text-xs text-muted-foreground">{session.date}</p>
                      <p className="text-xs text-muted-foreground">{session.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Courses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses
                  .filter((c) => c.id !== course.id)
                  .slice(0, 3)
                  .map((relatedCourse) => (
                    <div key={relatedCourse.id} className="flex items-center space-x-3">
                      <div className="h-12 w-12 relative rounded overflow-hidden">
                        <Image
                          src={relatedCourse.image || "/placeholder.svg"}
                          alt={relatedCourse.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <Link
                          href={`/courses/${relatedCourse.id}`}
                          className="font-medium hover:text-green-600 transition-colors"
                        >
                          {relatedCourse.title}
                        </Link>
                        <p className="text-xs text-muted-foreground">{relatedCourse.partner}</p>
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

const courses = [
  {
    id: 1,
    title: "Automotive Mechatronics",
    partner: "Lanre Shittu Motors",
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
    title: "Introduction to Welding",
    partner: "Ajawole Technical",
    state: "Abuja",
    enrolled: 32,
    contentTypes: ["video", "pdf", "audio"],
    date: "2023-04-10",
    image: Welding,
    completionRate: 75,
    duration: "8 weeks",
  },
  {
    id: 3,
    title: "Electricity and Electromagnetism",
    partner: "Innoson Motors",
    state: "Enugu",
    enrolled: 38,
    contentTypes: ["video", "pdf"],
    date: "2023-04-05",
    image: Electricity,
    completionRate: 62,
    duration: "10 weeks",
  },
  {
    id: 4,
    title: "Automotive Design Fundamentals",
    partner: "Coscharis Group",
    state: "Lagos",
    enrolled: 27,
    contentTypes: ["video", "pdf"],
    date: "2023-03-28",
    image: AutoDesign,
    completionRate: 55,
    duration: "16 weeks",
  },
  {
    id: 5,
    title: "Vehicle Diagnostics",
    partner: "Lanre Shittu Motors",
    state: "Lagos",
    enrolled: 36,
    contentTypes: ["video", "pdf"],
    date: "2023-03-20",
    image: AutoDiagnostics,
    completionRate: 82,
    duration: "6 weeks",
  },
  {
    id: 6,
    title: "Automotive Painting",
    partner: "Innoson Motors",
    state: "Enugu",
    enrolled: 29,
    contentTypes: ["video", "pdf"],
    date: "2023-03-15",
    image: AutoPainting,
    completionRate: 70,
    duration: "8 weeks",
  },
]
