import cn from "classnames";
import Header from "../Header";
import styles from "./MainSection.module.scss";

const MainSection = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <main
        className={cn(
          // "p-0 pb-[200px] max-w-[1000px] mx-auto",
          "lg:max-w-[1000px]",
          "md:w-[85%] md:mx-auto",
          "min-h-screen px-[25px] flex flex-col justify-center items-start"
        )}
        id="main"
      >
        <h1
          className={cn(
            "ml-1 xl:mb-[30px] text-green font-['SF_Mono'] font-normal text-md",
            "text-md/[17.6px] mb-[20px]"
          )}
        >
          <span className="mr-[10px] text-sm/[1.1]">01.</span>
          Привет, меня зовут
        </h1>

        <h2 className={cn("text-lightest-slate", styles.title)}>
          Евгений Иост
        </h2>

        <h3 className={cn("mt-[5px] text-slate", styles.title)}>
          Начинающий <span className="text-green">Frontend</span> Разработчик
        </h3>

        <p
          className={cn(
            "mt-[20px] xl:max-w-[70%] text-slate",
            "md:text-xl/[1.3]",
            "max-w-full text-lg/[1.3]"
          )}
        >
          Недавно окончил Белгородсий Государственный Технологический
          Университет имени В.Г. Шухова, где приобрел как теоритические, так и
          практические навыки, которые я отточил во время самообучения.
          Стремлюсь развиваться и становиться лучше с каждым днем.
        </p>
      </main>
    </div>
  );
};

export default MainSection;
