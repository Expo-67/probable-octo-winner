"use client";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent hover:from-emerald-600 hover:to-teal-600 dark:hover:from-emerald-400 dark:hover:to-teal-400 transition-all"
        >
          James K. Ndungu
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#about"
            className="text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 font-medium transition-colors relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#projects"
            className="text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 font-medium transition-colors relative group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#skills"
            className="text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 font-medium transition-colors relative group"
          >
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#contact"
            className="text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 font-medium transition-colors relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all transform hover:scale-105">
          <a href="#contact" className="flex items-center">
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </a>
        </Button>
      </div>
    </header>
  );
}
