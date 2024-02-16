import Link from "next/link"

const Dashboard = () => {
  return (
    <div>
        <Link href="/dashboard#setting">Go to Setting</Link>
        <div className="h-screen">
            This is dashboard page
        </div>
        <div id="setting">
            Settings
        </div>
    </div>
  )
}

export default Dashboard
