import Section from "../UI/Section";
import SkillItem from "../UI/SkillItem";
import Text from "../UI/Text";
import Title from "../UI/Title";
import Image from "next/image";

const AboutSection = () => {
  return (
    <Section id="about">
      <Title sectionIndex={2}>Обо мне</Title>
      <div className="flex flex-row items-center gap-[50px]">
        <div>
          <Text>
            Мой путь в программировании начался с обучения в ВУЗе, где я
            знакомился с основами программирования на языках Python и С++, а в
            дальнейшем изучал новейшие технологии для всех направлений в
            программировании. Наибольший интерес вызвала веб-разработка, и в
            этой сфере я решил развивать свои профессиональные навыки.
          </Text>

          <Text>
            В ВУЗе я много занимался backend-разработкой, где изучил базы
            данных, основы REST API, создание сессий пользователей, генерацию
            токенов и ключей для аутентификации и многое другое. Также активно
            использовал фреймворк Django для учебных проектов. Однако сильнее
            меня увлекла frontend-разработка. В качестве фреймворков во время
            обучения я использовал Vue и React. Последний, в свою очередь, мне
            показался более удобным, и я решил выбрать это направление для
            дальнейшего самообразования, так как после обучения в ВУЗе стало
            понятно, что моих навыков и знаний было недостаточно для
            коммерческой разработки.
          </Text>

          <Text>
            Я прошёл несертифицированные курсы по базовым frontend-технологиям,
            вышел за рамки практических заданий и усовершенствовал предлагаемые
            авторами решения, читал статьи на различные темы в веб-сфере,
            смотрел митапы популярных компаний. По итогам обучения я решил
            закрепить полученные знания и навыки, разработав несколько
            pet-проектов, ссылки на которые прикрепил ниже.
          </Text>

          <p className="text-xl/[26px] text-slate font-normal mb-[15px]">
            Список освоенных технологий, которые я применяю:
          </p>
        </div>
        <div className="relative ">
          <Image
            src={"/photo.png"}
            alt="photo"
            width={300}
            height={500}
            className="max-w-[300px] min-w-[300px] max-h-[450px] min-h-[450px] object-cover rounded-[10px] relative"
          />
          <div className="w-full h-full border-2 border-green absolute top-[15px] left-[15px] -z-10 rounded-[10px]" />
        </div>
      </div>

      <ul className="grid grid-cols-[repeat(3,_minmax(140px,_250px))] gap-x-[10px]">
        <SkillItem>HTML5</SkillItem>
        <SkillItem>React</SkillItem>
        <SkillItem>Tailwind</SkillItem>
        <SkillItem>CSS3, SASS</SkillItem>
        <SkillItem>Redux, Redux Toolkit</SkillItem>
        <SkillItem>Next.js</SkillItem>
        <SkillItem>JavaScript</SkillItem>
        <SkillItem>MobX</SkillItem>
        <SkillItem>Git, Webpack</SkillItem>
        <SkillItem>TypeScript</SkillItem>
        <SkillItem>ESLint, Prettier</SkillItem>
        <SkillItem>REST API</SkillItem>
      </ul>
    </Section>
  );
};

export default AboutSection;
