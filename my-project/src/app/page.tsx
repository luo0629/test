import Link from "next/link"
export default function homePage(){
  return (
    <div>
      <img src="/索隆.jpg" width={300} height={200}/>
      <h1 className="text-3xl font-bold">本应是落花之季，却未曾有飘落之意！</h1>
      <Link href="/pages">下一句</Link>
    </div>
  )
}