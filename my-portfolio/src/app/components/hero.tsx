"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react"; // ✅ Removed unused imports: MapPin, Mail, Phone
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

const profile = "/images/pro.jpg"; // ✅ Use a string path instead of direct import

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 overflow-hidden relative">
      {/* Enhanced Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-gradient-to-br from-emerald-200 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-gradient-to-tr from-blue-100 to-emerald-100 dark:from-blue-900/10 dark:to-emerald-900/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -z-10 w-72 h-72 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 opacity-50"></div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="order-2 md:order-1 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              James K. Ndungu
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 bg-clip-text text-transparent mt-2">
                Full Stack Developer
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              I&apos;m a passionate Full Stack Software Developer who loves
              building scalable and user-friendly web applications using modern
              technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Link href="https://github.com/Expo-67" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
              </Link>
            </div>
          </div>

          {/* Profile image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-teal-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform transition-transform hover:scale-105 duration-300">
                <Image
                  src={profile}
                  alt="James K. Ndungu"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
