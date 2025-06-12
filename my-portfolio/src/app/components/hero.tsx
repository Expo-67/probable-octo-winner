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
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-emerald-100/30 dark:bg-emerald-900/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-emerald-100/30 dark:bg-emerald-900/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="order-2 md:order-1 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              James K. Ndungu
              <span className="block text-emerald-600 dark:text-emerald-500 mt-2">
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
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
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
    </section>
  );
}
