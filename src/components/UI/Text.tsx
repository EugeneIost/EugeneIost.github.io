import { ReactNode } from "react";
import cn from "classnames";

interface TextProps {
  children: ReactNode;
}

const Text = ({ children }: TextProps) => {
  return (
    <p
      className={cn(
        "xl:text-xl/[26px] text-slate font-normal mb-[15px]",
        "text-lg/[1.3]"
      )}
    >
      {children}
    </p>
  );
};

export default Text;
