"use client"
import { useRouter } from "next/navigation"
import { use } from "react"

const OrderPlace = () => {
    const router=useRouter()

    const handleClick=()=>{
        console.log("Order a place")
        router.forward()
    }
      return (
    <div>
        <h1>Order places you want</h1>
        <button onClick={handleClick}>Order</button>
      
    </div>
  )
}

export default OrderPlace
