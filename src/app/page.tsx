import Link from "next/link";
import Image from "next/image";
import logo from "./humberger-svgrepo-com (3).svg"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-slate-900 p-8 flex justify-between text-xl items-center">
        <Link href="../">
          <Image
            src={logo}
            width={75}
            height={75}
            alt="logo"
          />
        </Link>

        <nav className="list-none flex gap-8">
          <Link href="../">Home</Link>
          <Link href="/page1">Page1</Link>
          <Link href="/page2">Page2</Link>
        </nav>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div>
          <h1 className="text-4xl font-bold text-white">This is a heading</h1>
          <p className="text-xl text-white">This is a smaller text</p>
          <button className="my-4 px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-950 transition-colors">Get Started</button>
        </div>
      </div>
    </div>
  
  );
}
