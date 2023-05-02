import { ReactNode } from "react";
import cn from "classnames";

interface SectionProps {
  children: ReactNode;
  id: string;
  screenHeight?: boolean;
}

const Section = ({ children, id, screenHeight = true }: SectionProps) => {
  return (
    <section
      className={cn(
        "lg:max-w-[1000px] h-fit xl:py-25 py-20 opacity-100 mx-auto overflow-x-hidden",
        "md:w-[85%]",
        "px-[25px]",
        { "min-h-screen lg:min-h-fit": screenHeight }
      )}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
