"use client"
import Card from "@/components/card"
import Link from "next/navigation"
import { useRouter } from "next/navigation"

const DefaultUsers = () => {
  const router=useRouter()
  const handleClick=()=>{
    router.push("/products")

  }
  return (
    <Card className="flex flex-col">
      <div>This is users page</div>
      <button onClick={handleClick}>Products</button>
    </Card>

  )
}

export default DefaultUsers
