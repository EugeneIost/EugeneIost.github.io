import Header from "./Header";

const MainSection = () => {
  return (
    <div className="">
      <Header />

      <main
        className="flex flex-col justify-center items-start min-h-screen h-screen p-0 pb-[200px] max-w-[1000px] mx-auto"
        id="main"
      >
        <h1 className="ml-1 mb-[30px] text-green font-['SF_Mono'] font-normal text-md">
          <span className="mr-[10px]">01.</span>
          Привет, меня зовут
        </h1>
        <h2 className="text-lightest-slate leading-[1.1] font-semibold text-[80px]">
          Евгений Иост
        </h2>
        <h3 className="mt-[5px] text-slate leading-[1.1] text-[80px] font-semibold">
          Начинающий <span className="text-green">Frontend</span> Разработчик
        </h3>
        <p className="mt-[20px] max-w-[70%] text-xl text-slate">
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
