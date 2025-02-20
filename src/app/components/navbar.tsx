import Link from "next/link";
import Image from "next/image";
import logo from "../humberger-svgrepo-com (3).svg"

export default function Navbar(){

    return (
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
    );
}