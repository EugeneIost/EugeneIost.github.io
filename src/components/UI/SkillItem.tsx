import { ReactNode } from "react";
import cn from "classnames";

interface SkillItemProps {
  children: ReactNode;
}

const SkillItem = ({ children }: SkillItemProps) => {
  return (
    <li className="mb-[10px]">
      <span
        className={cn(
          "text-green xl:text-sm/[12px] font-[SF_Mono] pr-[20px]",
          "text-xs pr-1.5"
        )}
      >
        ▹
      </span>
      <span className="text-xs/[1.3] lg:text-sm/[12px] xl:text-md/[12px]">
        {children}
      </span>
    </li>
  );
};

export default SkillItem;
