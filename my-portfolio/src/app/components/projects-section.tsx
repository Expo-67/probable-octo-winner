"use client";
import ProjectCard from "../components/project-card";
import depwithImage from "../../../public/images/monw.jpg";
import helplineImage from "../../../public/images/helpline.png";
import stramcoImage from "../../../public/images/stram.png";
import raponiGardensImage from "../../../public/images/raponi3.png";
import serviceMotiImage from "../../../public/images/Servicemoti.png";
import bmi from "../../../public/images/bmi.jpg";
import randomizer from "../../../public/images/randomizer.jpg";
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Selected Projects
        </h2>
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
            tags={["Frontend", "UI/UX", "Responsive Design"]}
            liveUrl="https://stramcosolutions.com/"
            date="Oct 2023 — Jan 2024"
            githubUrl="https://github.com/Expo-67/Stramco-ltd.git"
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
            title="Service-Moti"
            description="A car maintenance service management platform built with React.js, Node.js, Express, and MongoDB."
            image={serviceMotiImage}
            tags={["Full Stack", "React", "Node.js", "MongoDB"]}
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
