import Email from "@/components/UI/Email";
import SocialList from "@/components/UI/SocialList";
import AboutSection from "@/components/layouts/AboutSection";
import ContactSection from "@/components/layouts/ContactSection";
import MainSection from "@/components/layouts/MainSection";
import ProjectsSection from "@/components/layouts/ProjectsSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <div className="fixed bottom-0 left-[40px] text-light-slate">
        <SocialList />
      </div>
      <div className="fixed bottom-0 right-[40px] text-light-slate">
        <Email />
      </div>
    </>
  );
}
