import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Video } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import AutoMechatronics from '@/public/automotive-mechanic.jpeg'
import Welding from '@/public/welding.jpeg'
import Electricity from "@/public/electricity.jpg"
import AutoDesign from "@/public/auto-design.jpg"

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
  },
]

export function RecentCourses() {
  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <div key={course.id} className="flex flex-col sm:flex-row gap-4 rounded-md border p-4">
          <div className="relative h-24 sm:w-36 rounded-md overflow-hidden">
            <Image src={course.image.src || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
          </div>
          <div className="flex flex-col flex-1 justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{course.title}</h3>
                <Badge>{course.state}</Badge>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>Partner: {course.partner}</span>
                <span className="mx-2">•</span>
                <span>{course.enrolled} enrolled</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-2">
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
          </div>
          <div className="flex items-center justify-end mt-3 sm:mt-0">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/courses/${course.id}`}>
                View Details <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
