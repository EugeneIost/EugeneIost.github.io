import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id: string;
}

const Section = ({ children, id }: SectionProps) => {
  return (
    <section
      className="max-w-[1200px] h-fit py-[100px] opacity-100 mx-auto"
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
