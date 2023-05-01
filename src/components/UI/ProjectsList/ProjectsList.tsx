import { projects } from "@/constants/projects";
import Image from "next/image";
import cn from "classnames";
import GitHubIcon from "../GitHubIcon";
import ExternalLinkIcon from "../ExternalLinkIcon";
import IProject from "@/types/Project";
import Technologies from "./Technologies";
import Links from "./Links";

const projectTitle = (project: IProject, classNames: string) => (
  <h3
    className={cn(
      "text-lightest-slate text-[28px]/[30px] font-semibold mb-[20px] transition-all hover:text-green",
      classNames
    )}
  >
    <a href={project.link}>{project.title}</a>
  </h3>
);

const ProjectsList = () => {
  return (
    <ul className="list-none p-0 m-0">
      {projects.map((project, index) => (
        <li
          key={project.title}
          className={cn(
            "xl:mb-[100px] last:mb-0 relative md:grid md:grid-cols-[repeat(12,_1fr)] items-center",
            "block w-100 mb-[70px]"
          )}
        >
          <div
            className={cn(
              "row-start-1 row-end-[-1] relative z-40 mr-[10px]",
              {
                "xl:col-start-1 xl:col-end-8": index % 2 === 0,
                "xl:text-right xl:col-start-6 xl:col-end-[-1]": index % 2 === 1,
              },
              {
                "md:col-start-1 md:col-end-7": index % 2 === 0,
                "md:text-right md:col-start-7 md:col-end-[-1]": index % 2 === 1,
              },
              "text-left"
            )}
          >
            {projectTitle(project, "hidden md:block")}

            <div className="relative z-10 p-[25px] rounded-[10px] bg-light-navy text-lg/[23px] shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]">
              {projectTitle(project, "md:hidden")}

              <p>{project.descr}</p>

              <Technologies
                index={index}
                project={project}
                classNames="md:hidden"
              />

              <Links index={index} project={project} classNames="md:hidden" />
            </div>

            <Technologies
              index={index}
              project={project}
              classNames="hidden md:flex"
            />

            <Links
              index={index}
              project={project}
              classNames="hidden md:flex"
            />
          </div>

          <div
            className={cn(
              "relative row-start-1 row-end-[-1] z-10 w-full h-full md:block",
              {
                "xl:col-start-7 xl:col-end-[-1]": index % 2 === 0,
                "xl:col-start-1 xl:col-end-7": index % 2 === 1,
              },
              {
                "md:col-start-5 md:col-end-[-1]": index % 2 === 0,
                "md:col-start-1 md:col-end-8": index % 2 === 1,
              },
              "md:pt-20",
              "hidden"
            )}
          >
            <a
              href={project.link}
              className="inline-block rounded-[16px] bg-green w-full h-fit align-middle z-10 hover:bg-[white] before:absolute before:inset-0 before:w-full before:h-full before:z-30 before:bg-navy before:mix-blend-screen before:hover:bg-[transparent] before:pointer-events-none"
            >
              <div className="inline-block rounded-[16px] mix-blend-multiply filter grayscale contrast-100 brightness-90 transition-all w-full h-fit align-middle relative hover:filter-none">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-contain !h-auto !static rounded-[16px]"
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
