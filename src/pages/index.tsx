import Email from "@/components/UI/Email";
import SocialList, { SocialListOrientations } from "@/components/UI/SocialList";
import AboutSection from "@/components/layouts/AboutSection";
import ContactSection from "@/components/layouts/ContactSection";
import MainSection from "@/components/layouts/MainSection";
import ProjectsSection from "@/components/layouts/ProjectsSection";
import { ReactNode, useEffect } from "react";
import cn from "classnames";

const FixedWrapper = ({
  children,
  classNames,
}: {
  children: ReactNode;
  classNames: string;
}) => (
  <div
    className={cn(
      "fixed bottom-0 w-10 text-light-slate md:block hidden",
      classNames
    )}
  >
    {children}
  </div>
);

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <MainSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />

      <FixedWrapper classNames="lg:left-[40px] md:left-[20px]">
        <SocialList orientation={SocialListOrientations.VERTICAL} />
      </FixedWrapper>

      <FixedWrapper classNames="lg:right-[40px] md:right-[20px]">
        <Email />
      </FixedWrapper>

      <div className="mb-6 md:hidden">
        <SocialList orientation={SocialListOrientations.HORIZONTAL} />
      </div>
    </>
  );
}
