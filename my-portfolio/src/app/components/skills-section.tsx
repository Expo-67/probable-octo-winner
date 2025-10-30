import SkillBadge from "../components/skill-badge";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-100 to-teal-100 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-emerald-100 dark:from-blue-900/10 dark:to-emerald-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Tech Stack Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable applications
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full mr-3"></span>
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="React.js" />
              <SkillBadge name="Next.js" />
              <SkillBadge name="TypeScript" />
              <SkillBadge name="Tailwind CSS" />
              <SkillBadge name="HTML/CSS" />
              <SkillBadge name="JavaScript" />
            </div>
          </div>
          <div className="mb-10 bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full mr-3"></span>
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="Node.js" />
              <SkillBadge name="Express.js" />
              <SkillBadge name="Laravel (PHP)" />
              <SkillBadge name="RESTful APIs" />
              <SkillBadge name="PHP" />
            </div>
          </div>
          <div className="mb-10 bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full mr-3"></span>
              Databases
            </h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="MongoDB" />
              <SkillBadge name="MySQL" />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-emerald-500 rounded-full mr-3"></span>
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="GitHub" />
              <SkillBadge name="Vercel" />
              <SkillBadge name="Postman" />
              <SkillBadge name="Docker (basic)" />
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mr-3"></span>
                Mobile Development
              </h4>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Android Studio" />
                <SkillBadge name="Java" />
                <SkillBadge name="Kotlin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
