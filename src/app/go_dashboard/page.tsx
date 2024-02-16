"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

const GoDashboard = () => {
    const router = useRouter()

    const clickHandler=()=>{
        console.log("I will go to dashboard")
        router.push("/dashboard", {scroll:false})
    }
  return (
    <div>
        <Link href="/dashboard" scroll={false}>Click</Link><br/>
      <button onClick={clickHandler}>Click to dashboard</button>
    </div>
  )
}

export default GoDashboard
