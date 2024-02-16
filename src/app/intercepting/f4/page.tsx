import Link from "next/link"

const F4 = () => {
    return (
      <div>
        This is f4 page
        <br/>
        <Link href="/intercepting/f3">F3</Link>
        <Link href="/about">To About Page</Link>
      </div>
    )
  }
  
  export default F4