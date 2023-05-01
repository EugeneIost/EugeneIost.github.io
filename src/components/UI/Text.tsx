import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

const Text = ({ children }: TextProps) => {
  return (
    <p className="text-xl/[26px] text-slate font-normal mb-[15px]">
      {children}
    </p>
  );
};

export default Text;
