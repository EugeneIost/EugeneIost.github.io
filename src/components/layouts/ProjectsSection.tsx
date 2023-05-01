import ProjectsList from "../UI/ProjectsList";
import Section from "../UI/Section";
import Title from "../UI/Title";

const ProjectsSection = () => {
  return (
    <Section id="pet-projects">
      <Title sectionIndex={3}>Pet-проекты</Title>
      <ProjectsList />
    </Section>
  );
};

export default ProjectsSection;
