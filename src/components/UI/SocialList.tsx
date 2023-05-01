import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";
import TelegramIcon from "./TelegramIcon";

const SocialList = () => {
  return (
    <ul className="list-none flex flex-col items-center justify-center after:w-[1px] after:h-[90px] after:bg-light-slate after:block">
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

      <li className="w-[40px] h-[46px] mb-[20px] flex items-center justify-center">
        <a href="#" className="transition-all hover:text-green">
          <LinkedInIcon />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
