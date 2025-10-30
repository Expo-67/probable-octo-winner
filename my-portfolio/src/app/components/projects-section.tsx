"use client";
import ProjectCard from "../components/project-card";
import depwithImage from "../../../public/images/monw.jpg";
import helplineImage from "../../../public/images/helpline.png";
import stramcoImage from "../../../public/images/stram.png";
import raponiGardensImage from "../../../public/images/raponi3.png";
import asyanaImage from "../../../public/images/asyana.png";
import bmi from "../../../public/images/bmi.jpg";
import randomizer from "../../../public/images/randomizer.jpg";
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-100/20 dark:bg-emerald-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-100/20 dark:bg-teal-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Selected Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work spanning full-stack web applications, mobile development, and frontend design
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Depwith"
            date="Oct 2024"
            description="A full-stack app for seamless money deposits, withdrawals, and transaction tracking with a user-friendly interface."
            image={depwithImage}
            tags={["MongoDB", "Express", "React", "Node.js", "Full Stack"]}
            githubUrl="https://github.com/Expo-67/depwith"
            status="Completed"
          />
          <ProjectCard
            title="Addiction Helpline"
            date="Sep-2022- Jan-2023"
            description="An online platform for patients struggling with drug addictions to discuss challenges with substance use disorder counselors."
            image={helplineImage}
            tags={["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Full Stack"]}
            githubUrl="https://github.com/Expo-67/helpline-sys.git"
            status="Completed"
          />
          <ProjectCard
            title="Stramco Solutions"
            description="Strategic Management Consultancy Firm website with HR services including outsourcing, audits, recruitment, and payroll processing."
            image={stramcoImage}
            tags={["MongoDB", "Express", "React", "Node.js", "Full Stack"]}
            liveUrl="https://stramco-limited-2.vercel.app/"
            date="Oct 2023 — Jan 2024"
            githubUrl="https://github.com/Expo-67/stramco-limited.2.git"
            status="Completed"
          />
          <ProjectCard
            title="Raponi Gardens"
            description="Website for a landscape and environmental solutions company specializing in sustainable outdoor spaces and garden design."
            image={raponiGardensImage}
            tags={["Frontend", "Web Design", "In Progress"]}
            date="April 2025"
            githubUrl="https://github.com/Expo-67/Raponiv2-guide.git"
            liveUrl="https://raponiv2-guide.vercel.app/"
            status="Completed"
          />
          <ProjectCard
            title="Asyana Hotel Booking"
            description="A comprehensive hotel booking platform with room reservations, user authentication, and booking management system."
            image={asyanaImage}
            tags={["MongoDB", "Express", "React", "Node.js", "Full Stack"]}
            githubUrl="https://github.com/Expo-67/Asyana-enigma"
            status="Ongoing"
          />
          <ProjectCard
            title="BMI  Mobile App"
            description="A Body Mass Index Calculator app developed as part of the Android Programming course on Coursera, designed to provide accurate Body Mass Index calculations with an intuitive user interface."
            image={bmi}
            tags={["Android Studio", "Java"]}
            liveUrl="https://www.coursera.org/account/accomplishments/certificate/NZAH823RP2SM"
            status="Completed"
          />
          <ProjectCard
            title="Randomizer Mobile App"
            description="A Randomizer app developed as part of the Android Programming course on Coursera, designed to generate random numbers and selections with a user-friendly interface."
            image={randomizer}
            tags={["Android Studio", "Kotlin"]}
            status="Completed"
            liveUrl="https://www.coursera.org/account/accomplishments/certificate/P5BEXAV8QDWT"
          />
        </div>
      </div>
    </section>
  );
}
