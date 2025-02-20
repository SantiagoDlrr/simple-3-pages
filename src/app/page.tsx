import Link from "next/link";
import Image from "next/image";
import logo from "./humberger-svgrepo-com (3).svg"
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

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
