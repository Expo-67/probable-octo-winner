import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  date?: string;
  status?: "Completed" | "Ongoing";
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  date,
  status = "Completed",
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:border-gray-800 bg-white dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
        />
        {status && (
          <div className="absolute top-3 right-3">
            <Badge
              variant={status === "Completed" ? "default" : "outline"}
              className={
                status === "Completed"
                  ? "bg-emerald-600"
                  : "border-amber-500 text-amber-500"
              }
            >
              {status}
            </Badge>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        {date && (
          <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
        )}
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {(liveUrl || githubUrl) && (
        <CardFooter className="pt-0 flex gap-3">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              className="flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400"
            >
              <ExternalLink className="h-4 w-4 mr-1" /> View Live
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <Github className="h-4 w-4 mr-1" /> View Project
            </Link>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
