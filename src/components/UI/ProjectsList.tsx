import { projects } from "@/constants/projects";
import Image from "next/image";
import cn from "classnames";
import GitHubIcon from "./GitHubIcon";
import ExternalLinkIcon from "./ExternalLinkIcon";

const ProjectsList = () => {
  return (
    <ul className="list-none p-0 m-0">
      {projects.map((project, index) => (
        <li
          key={project.title}
          className="mb-[100px] last:mb-0 relative grid grid-cols-[repeat(12,_1fr)] items-center gap-[10px]"
        >
          <div
            className={cn("row-start-1 row-end-[-1] relative z-40", {
              "text-right col-start-7 col-end-[-1]": index % 2 === 1,
              "col-start-1 col-end-7": index % 2 !== 1,
            })}
          >
            <h3 className="text-lightest-slate text-[28px]/[30px] font-semibold mb-[20px] transition-all hover:text-green">
              <a href={project.link}>{project.title}</a>
            </h3>

            <div className="relative z-10 p-[25px] rounded-[10px] bg-light-navy text-lg/[23px] shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]">
              <p>{project.descr}</p>
            </div>

            <ul
              className={cn("flex flex-wrap mt-[25px] mb-[10px] list-none", {
                "justify-start": index % 2 === 0,
                "justify-end": index % 2 === 1,
              })}
            >
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="font-['SF_Mono'] text-md whitespace-nowrap ml-[20px]"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div
              className={cn(
                "flex items-center relative mt-[10px] text-lightest-slate",
                {
                  "mr-[-10px] justify-end": index % 2 === 1,
                  "ml-[10px] justify-start": index % 2 === 0,
                }
              )}
            >
              <a
                href={project.gitHubLink}
                className="p-[10px] flex justify-center items-center transition-all hover:text-green"
              >
                <GitHubIcon />
              </a>

              <a
                href={project.link}
                className="p-[10px] flex justify-center items-center transition-all hover:text-green"
              >
                <ExternalLinkIcon />
              </a>
            </div>
          </div>

          <div
            className={cn(
              "relative row-start-1 row-end-[-1] z-10 w-full h-full",
              {
                "col-start-1 col-end-8": index % 2 === 1,
                "col-start-6 col-end-[-1]": index % 2 !== 1,
              }
            )}
          >
            <a
              href={project.link}
              className="inline-block bg-green w-full h-[400px] align-middle rounded-[10px] z-10 hover:bg-[white] before:absolute before:inset-0 before:w-full before:h-full before:z-30 before:bg-navy before:mix-blend-screen before:hover:bg-[transparent] before:pointer-events-none"
            >
              <div className="inline-block rounded-[10px] mix-blend-multiply filter grayscale contrast-100 brightness-90 transition-all w-full h-full align-middle relative overflow-hidden hover:filter-none">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
