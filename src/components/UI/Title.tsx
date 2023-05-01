import { ReactNode } from "react";
import cn from "classnames";

interface TitleProps {
  children: ReactNode;
  sectionIndex: number;
}

const Title = ({ children, sectionIndex }: TitleProps) => {
  return (
    <div className="mt-[10px] mb-[40px] w-fit inline-flex items-center">
      <div className="flex items-end">
        <span
          className={cn(
            "mr-[10px] text-green font-['SF_Mono'] font-normal text-xl/[22px] pb-[3px]",
            "text-md/[1.1]"
          )}
        >
          0{sectionIndex}.
        </span>

        <h2
          className={cn(
            "text-center text-lightest-slate font-semibold text-[32px]/[35px] whitespace-nowrap",
            "text-[26px]/[1.1]"
          )}
        >
          {children}
        </h2>
      </div>

      <span className="ml-[20px] w-[300px] h-[1px] bg-lightest-navy block"></span>
    </div>
  );
};

export default Title;
