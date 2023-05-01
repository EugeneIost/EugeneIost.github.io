import useScrollDirection from "@/hooks/useScrollDirection";
import Logo from "../UI/Logo";
import NavItem from "../UI/NavItem/NavItem";
import cn from "classnames";
import { useEffect } from "react";

const Header = () => {
  const scrollDirection = useScrollDirection();
  useEffect(() => {
    console.log(scrollDirection);
  }, [scrollDirection]);
  return (
    <header
      className={cn(
        "fixed w-full h-[100px] flex justify-between items-center px-[50px] shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] transition-all",
        {
          "bg-[#0a192fd9] top-0 z-50 backdrop-blur-md":
            scrollDirection === "up",
          "-top-[100px]": scrollDirection === "down",
        }
      )}
    >
      <Logo />

      <nav>
        <ol className="flex flex-row items-center">
          <NavItem href="/#main">Приветствие</NavItem>
          <NavItem href="/#about">Обо мне</NavItem>
          <NavItem href="/#pet-projects">Проекты</NavItem>
          <NavItem href="/#contact">Обратная связь</NavItem>
          <a
            href="#"
            className="text-green bg-[transparent] border-[1px] ml-[15px] border-green rounded text-sm font-['SF_Mono'] py-[1rem] px-[1.5rem] leading-[1] transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-green"
          >
            Резюме
          </a>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
