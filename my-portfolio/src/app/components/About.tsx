export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 space-y-6">
          <p>
            I&apos;m a passionate{" "}
            <strong className="text-gray-900 dark:text-white">
              Full Stack Software Developer
            </strong>{" "}
            with a strong background in designing, building, and deploying
            high-quality web applications.
          </p>
          <p>
            A certified Full Stack Software Developer from Gomycode Kenya,
            specializing in MERN stack development. I have expertise in a
            diverse range of programming languages (**Python, C#, Java**), as
            well as mobile development using Android Studio, with proficiency in
            **Java and Kotlin**.
          </p>
        </div>
      </div>
    </section>
  );
}
