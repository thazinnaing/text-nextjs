import Card from "@/components/card"
import Link from "next/link"

const Notifications = () => {
  return (
    <Card className="flex flex-col">
        <div>
            This is Notifications
        </div>
        <Link href="/complex-routes/archieved">archieved</Link>
    </Card>
  )
}

export default Notifications
