import { ReactNode } from "react";

interface SkillItemProps {
  children: ReactNode;
}

const SkillItem = ({ children }: SkillItemProps) => {
  return (
    <li className="mb-[10px]">
      <span className="text-green text-sm/[12px] font-[SF_Mono] pr-[20px]">
        ▹
      </span>
      <span>{children}</span>
    </li>
  );
};

export default SkillItem;
