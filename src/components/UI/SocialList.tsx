import GitHubIcon from "./GitHubIcon";
import TelegramIcon from "./TelegramIcon";
import cn from "classnames";
import VKIcon from "./VKIcon";

export enum SocialListOrientations {
  HORIZONTAL = "horizontal",
  VERTICAL = "VERTICAL",
}

interface SocialListProps {
  orientation: SocialListOrientations;
}

const SocialList = ({ orientation }: SocialListProps) => {
  return (
    <ul
      className={cn("list-none flex items-center justify-center", {
        "flex-row": orientation === SocialListOrientations.HORIZONTAL,
        "flex-col after:bg-light-slate after:w-[1px] after:h-[90px] after:block":
          orientation === SocialListOrientations.VERTICAL,
      })}
    >
      <li className="w-[40px] h-[46px] flex items-center justify-center">
        <a
          href="https://t.me/eugene_skarb"
          className="transition-all hover:text-green"
        >
          <TelegramIcon />
        </a>
      </li>

      <li className="w-[40px] h-[46px] flex items-center justify-center">
        <a
          href="https://github.com/EugeneIost"
          className="transition-all hover:text-green"
        >
          <GitHubIcon />
        </a>
      </li>

      <li
        className={cn("w-[40px] h-[46px] flex items-center justify-center", {
          "mb-[20px]": orientation === SocialListOrientations.VERTICAL,
        })}
      >
        <a
          href="https://vk.com/eugene_skarb"
          className="transition-all hover:text-green"
        >
          <VKIcon />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
