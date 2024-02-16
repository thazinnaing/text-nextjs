import Card from "@/components/card"
import Link from "next/link"


const archieved = () => {
  return (
    <Card className="flex flex-col">
      <div>Archieved page</div>
      <Link href="/complex-routes">Default page</Link>
    </Card>
  )
}

export default archieved

