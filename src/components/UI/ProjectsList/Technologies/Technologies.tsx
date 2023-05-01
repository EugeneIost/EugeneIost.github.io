import IProject from "@/types/Project";
import cn from "classnames";
import styles from "./Technologies.module.scss";

interface TechnologiesProps {
  index: number;
  project: IProject;
  classNames: string;
}

const Technologies = ({ index, project, classNames }: TechnologiesProps) => {
  return (
    <ul
      className={cn(
        "flex flex-wrap mt-[25px] mb-[10px] list-none lg:max-w-[350px] xl:max-w-full",
        {
          "justify-start": index % 2 === 0,
          "md:justify-end": index % 2 === 1,
        },
        classNames
      )}
    >
      {project.technologies.map((tech) => (
        <li
          key={tech}
          className={cn(
            "font-['SF_Mono'] lg:text-md whitespace-nowrap mr-[20px]",
            "md:text-xs/[1.3] md:drop-shadow-2xl",
            "text-xxs/[1.75]",
            { [styles["tech-odd"]]: index % 2 === 1 }
          )}
        >
          {tech}
        </li>
      ))}
    </ul>
  );
};

export default Technologies;
