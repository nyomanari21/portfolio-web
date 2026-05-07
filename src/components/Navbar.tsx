"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function getMenuClasses() {
    const baseClasses = "absolute md:static top-full left-0 w-full bg-slate-950 md:w-auto md:bg-transparent px-10 md:px-0 py-5 md:py-0 flex-col md:flex-row gap-4 md:gap-8 text-gray-400 transition-all duration-300 ease-in-out border-b md:border-none border-gray-800";

    if (isOpen) {
      return `${baseClasses} flex opacity-100 translate-y-0 shadow-xl`;
    } else {
      return `${baseClasses} flex opacity-0 -translate-y-5 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto invisible md:visible`;
    }
  }

  return (
    <nav className={`flex justify-between items-center py-6 px-10 bg-slate-950 border-b border-gray-800 sticky top-0 z-50 transition-all duration-300`}>
      <button className="cursor-pointer" onClick={() => { router.push('/', { scroll: false }); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <span className="text-xl font-bold tracking-tighter">NYOMAN ARI</span>
      </button>
      <div className={getMenuClasses()}>
        <Link href="/#about" className="hover:text-white transition-colors">
            About
        </Link>
        <Link href="/#experiences" className="hover:text-white transition-colors">
            Experiences
        </Link>
        <Link href="/#projects" className="hover:text-white transition-colors">
            Projects
        </Link>
        <Link href="/#education" className="hover:text-white transition-colors">
            Education
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button className="text-2xl p-2 focus:outline-none cursor-pointer" onClick={()=>{
          setIsOpen(!isOpen)
        }}>
          {isOpen ? (
            <span className="text-white">✕</span>
          ) : (
            <span className="text-white">☰</span>
          )}
        </button>
      </div>
    </nav>
  );
}