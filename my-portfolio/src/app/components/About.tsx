export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-50 to-emerald-50 dark:from-blue-950/20 dark:to-emerald-950/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full mr-3"></span>
                  Full Stack Software Developer
                </h3>
                <p className="text-lg leading-relaxed">
                  With a solid foundation in designing, developing and deploying
                  high-quality web applications, I bring both technical skills and
                  practical experience to every project.
                </p>
              </div>
              
              <div className="pt-4">
                <p className="text-lg leading-relaxed">
                  I&apos;m a certified Full Stack Software Developer from <span className="font-semibold text-emerald-600 dark:text-emerald-400">GoMyCode Kenya</span>,
                  specializing in <span className="font-semibold text-emerald-600 dark:text-emerald-400">MERN stack development</span>. Beyond web technologies, I
                  have hands-on experience with multiple programming languages
                  including <span className="font-semibold">Python</span>, <span className="font-semibold">C#</span>, and <span className="font-semibold">Java</span>, and I&apos;ve also worked on mobile
                  applications using Android Studio with proficiency in Java and
                  Kotlin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
