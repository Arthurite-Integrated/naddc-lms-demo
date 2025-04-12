import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Coscharis from '@/public/coscharis.png'
import Innoson from '@/public/innoson.jpeg'
import LanreShittu from '@/public/lanre-shittu.png'
import Ajawole from '@/public/ajawole.jpg'

const partners = [
  {
    id: 1,
    name: "Lanre Shittu Motors",
    courses: 8,
    trainees: 245,
    location: "Lagos",
    image: LanreShittu
  },
  {
    id: 2,
    name: "Ajawole Technical Services",
    courses: 5,
    trainees: 178,
    location: "Abuja",
    image: Ajawole
  },
  {
    id: 3,
    name: "Innoson Motors",
    courses: 6,
    trainees: 203,
    location: "Enugu",
    image: Innoson
  },
  {
    id: 4,
    name: "Coscharis Group",
    courses: 4,
    trainees: 156,
    location: "Lagos",
    image: Coscharis
  },
]

export function TrainingPartners() {
  return (
    <div className="space-y-4">
      {partners.map((partner) => (
        <div key={partner.id} className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={partner.image.src} />
              <AvatarFallback>{partner.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{partner.name}</div>
              <div className="text-xs text-muted-foreground">{partner.location}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{partner.courses} courses</Badge>
            <Badge variant="secondary">{partner.trainees} trainees</Badge>
          </div>
        </div>
      ))}
    </div>
  )
}
