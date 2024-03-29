import Card from "@/components/card"
import Link from "next/link"

const DefaultNotifications = () => {
  return (
    <Card className="flex flex-col">
        <div>
            This is Notifications
        </div>
        <Link className="text-red-500" href="/complex-routes/archieved">archieved</Link>
    </Card>
  )
}

export default DefaultNotifications
