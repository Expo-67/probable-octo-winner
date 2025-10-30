"use client";
import { Mail, MapPin, Github, Phone, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-blue-100 to-emerald-100 dark:from-blue-900/10 dark:to-emerald-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full mr-3"></span>
              Contact Information
            </h3>
            <div className="space-y-5 text-gray-600 dark:text-gray-300">
              <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-sm md:text-base">jamiendungu38@gmail.com</span>
              </div>
              <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span>0757-244-034</span>
              </div>
              <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Expo-67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl hover:from-emerald-100 hover:to-teal-100 dark:hover:from-emerald-900/30 dark:hover:to-teal-900/30 transition-all hover:scale-110 shadow-md"
                >
                  <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://www.instagram.com/james_expo4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl hover:from-pink-100 hover:to-orange-100 dark:hover:from-pink-900/30 dark:hover:to-orange-900/30 transition-all hover:scale-110 shadow-md"
                >
                  <Instagram className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/james-ndungu-b406ab248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30 transition-all hover:scale-110 shadow-md"
                >
                  <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 space-y-6"
            action="https://formsubmit.co/jamiendungu38@gmail.com"
            method="POST"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] py-6 text-lg font-semibold"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
