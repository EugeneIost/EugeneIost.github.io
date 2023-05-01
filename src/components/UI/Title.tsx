import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  sectionIndex: number;
}

const Title = ({ children, sectionIndex }: TitleProps) => {
  return (
    <div className="mt-[10px] mb-[40px] w-fit inline-flex items-center">
      <span className="mr-[10px] text-green font-['SF_Mono'] font-normal text-xl/[22px]">
        0{sectionIndex}.
      </span>
      <h2 className="text-center text-lightest-slate font-semibold text-[32px]/[35px]">
        {children}
      </h2>
      <span className="ml-[20px] w-[300px] h-[1px] bg-lightest-navy block"></span>
    </div>
  );
};

export default Title;
