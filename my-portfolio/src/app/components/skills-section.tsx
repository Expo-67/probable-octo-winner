import SkillBadge from "../components/skill-badge";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Tech Stack Expertise
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
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
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
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
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Databases
            </h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="MongoDB" />
              <SkillBadge name="MySQL" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="GitHub" />
              <SkillBadge name="Vercel" />
              <SkillBadge name="Postman" />
              <SkillBadge name="Docker (basic)" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
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
