import Link from "next/link";

export const metadata={
    title: "Rewrite metadata"
}
const About=()=>{
    return(
        <div>
            
            <h1>Hello I am About page</h1>
            <Link href="/intercepting/f2">To f2 page</Link><br/>
            {/* <Link href="/intercepting/f3">To f3 page</Link> Intercepting f3 are in the other in writing intercepting f3 .You can't call from this level */}
            
        </div>
    )
}

export default About;