import useScrollDirection from "@/hooks/useScrollDirection";
import Logo from "../UI/Logo";
import NavItem from "../UI/NavItem/NavItem";
import cn from "classnames";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

const links = [
  { url: "/#main", title: "Приветствие" },
  { url: "/#about", title: "Обо мне" },
  { url: "/#pet-projects", title: "Проекты" },
  { url: "/#contact", title: "Обратная связь" },
];

interface MenuProps {
  classNames: string;
  onItemClick?: () => void;
}

const Menu = ({ classNames, onItemClick }: MenuProps) => {
  return (
    <ol className={cn("flex flex-row items-center", classNames)}>
      {links.map((link) => (
        <NavItem
          key={link.url}
          onClick={() => onItemClick && onItemClick()}
          href={link.url}
        >
          {link.title}
        </NavItem>
      ))}

      <a
        href="/resume.pdf"
        className="text-green bg-[transparent] border-[1px] ml-[15px] border-green rounded text-sm font-['SF_Mono'] py-[1rem] px-[1.5rem] leading-[1] transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-green"
      >
        Резюме
      </a>
    </ol>
  );
};

const Header = () => {
  const scrollDirection = useScrollDirection();

  const [isMenuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (isMenuOpened) {
      disableBodyScroll(document.querySelector("body")!);
    } else {
      enableBodyScroll(document.querySelector("body")!);
    }
  }, [isMenuOpened]);

  return (
    <header
      className={cn(
        "fixed w-screen h-[100px] flex justify-between items-center lg:px-[50px] shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] transition-all",
        {
          "bg-[#0a192fd9] top-0 z-50 backdrop-blur-md":
            scrollDirection === "up",
          "-top-[100px]": scrollDirection === "down",
        },
        "px-[25px]"
      )}
    >
      <Logo />

      {isMenuOpened && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black/80"></div>
      )}

      <div
        className={cn(
          "fixed w-[75%] transition-transform lg:hidden h-screen right-0 top-0 bg-light-navy",
          {
            "translate-x-0": isMenuOpened,
            "translate-x-full": !isMenuOpened,
          }
        )}
      >
        <Image
          onClick={() => setMenuOpened(false)}
          className="lg:hidden cursor-pointer absolute top-8 right-6"
          src={"/icons/close.svg"}
          height={32}
          width={32}
          alt="menu"
        />

        <Menu
          classNames="lg:hidden flex flex-col items-center h-full justify-center [&>*]:!mb-8"
          onItemClick={() => {
            setMenuOpened(false);
          }}
        />
      </div>

      <nav>
        <Menu classNames="lg:flex hidden" />

        <Image
          onClick={() => setMenuOpened(true)}
          className="lg:hidden cursor-pointer"
          src={"/icons/menu.svg"}
          height={32}
          width={32}
          alt="menu"
        />
      </nav>
    </header>
  );
};

export default Header;
