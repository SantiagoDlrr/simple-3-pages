import Link from "next/link"

export default function Home() {
    return (
      <div className="bg-slate-900 p-8 flex justify-between text-xl">
        <h2>Logo</h2>
        <nav className="list-none flex gap-8">
          <Link href="../">Home</Link>
          <li>aquí va 1</li>
          <li>Page 2</li>
        </nav>
      </div> 
  
    );
  }
  