import Link from "next/link"

const F1 = () => {
  return (
    <div>
      This is f1 page <br/>

      <Link href="/intercepting/f2">F2</Link>
    </div>
  )
}

export default F1
