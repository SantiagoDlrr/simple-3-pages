import Link from "next/link"
import Image from "next/image"
import logo from "../humberger-svgrepo-com (3).svg"

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col items-center">

      <h1 className="p-8 text-4xl font-bold text-white">Services</h1>

        <div className="p-8 flex justify-center items-center gap-2">
          <Link href="../">
            <Image
              src={logo}
              width={150}
              height={150}
              alt="logo"
            />
          </Link>
          <p className="max-w-72 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo placeat, laudantium aliquam mollitia fuga inventore quia, pariatur alias nam at quas aut facere ullam nobis fugit! Ea voluptate tempore reiciendis.</p>
        </div>

        <div className="p-8 flex justify-center items-center gap-2">
          <p className="max-w-72 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo placeat, laudantium aliquam mollitia fuga inventore quia, pariatur alias nam at quas aut facere ullam nobis fugit! Ea voluptate tempore reiciendis.</p>

          <Link href="../">
            <Image
              src={logo}
              width={150}
              height={150}
              alt="logo"
            />
          </Link>
        </div>

        <div className="p-8 flex justify-center items-center gap-2">
          <Link href="../">
            <Image
              src={logo}
              width={150}
              height={150}
              alt="logo"
            />
          </Link>
          <p className="max-w-72 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo placeat, laudantium aliquam mollitia fuga inventore quia, pariatur alias nam at quas aut facere ullam nobis fugit! Ea voluptate tempore reiciendis.</p>
        </div>
      </div>
    );
  }
  