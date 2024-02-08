import Card from "@/components/card"
import Link from "next/link"


const DefaultArchieved = () => {
  return (
    <Card className="flex flex-col">
      <div>Archieved page</div>
      <Link href="/complex-routes">Default</Link>
    </Card>
  )
}

export default DefaultArchieved



