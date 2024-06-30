import Link from "next/link"
import Image from "next/image"
export default function Page(){
    return (
      <div>
        <Image
        src="/photo_2024-06-21_00-41-28.jpg"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        <Image
        src="/索隆.jpg"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        <h1 className="text-3xl font-bold">生命是有光的</h1>
        <Link href="/">返回</Link>
      </div>
    )
  }