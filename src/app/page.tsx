import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1 className="text-blue-400 font-bold">Hello</h1>
      <h2>This is Home Page</h2>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
    </div>
  );
}
