import IProject from "@/types/Project";
import cn from "classnames";
import ExternalLinkIcon from "../../ExternalLinkIcon";
import GitHubIcon from "../../GitHubIcon";
import styles from "./Links.module.scss";

interface LinksProps {
  index: number;
  project: IProject;
  classNames: string;
}

const Links = ({ index, project, classNames }: LinksProps) => {
  return (
    <div
      className={cn(
        "flex items-center relative mt-[10px] text-lightest-slate",
        {
          "md:pr-0 justify-start": index % 2 === 0,
          "md:justify-end": index % 2 === 1,
        },
        classNames
      )}
    >
      <a
        href={project.gitHubLink}
        className={cn(styles.icon, { [styles["icon-odd"]]: index % 2 === 1 })}
      >
        <GitHubIcon />
      </a>

      <a
        href={project.link}
        className={cn(styles.icon, { [styles["icon-odd"]]: index % 2 === 1 })}
      >
        <ExternalLinkIcon />
      </a>
    </div>
  );
};

export default Links;
