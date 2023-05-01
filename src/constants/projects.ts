import IProject from "@/types/Project";

export const projects: IProject[] = [
  {
    title: "Интернет-магазин",
    descr:
      "Приложение интернет-магазина, в котором можно найти подходящий товар и поместить его в корзину покупок. Для получения товаров использовал Fake Store API, для запросов использовал встроенную функцию fetch. ",
    imageUrl: "/images/web-shop.png",
    gitHubLink: "https://github.com/EugeneIost/web-store",
    link: "https://eugeneiost.github.io/web-store/",
    technologies: ["React", "Redux Toolkit", "SCSS"],
  },

  {
    title: "Wordle",
    descr:
      "Популярная мини-игра, главная цель которой угадать сгенерированное слово за ограниченное количество попыток. В правом верхнем углу приложения можно более подробно ознакомиться с правилами.",
    imageUrl: "/images/wordle.png",
    gitHubLink: "https://github.com/EugeneIost/wordle",
    link: "https://eugeneiost.github.io/wordle/",
    technologies: ["React", "Redux Toolkit", "SCSS"],
  },

  {
    title: "Библиотека фильмов",
    descr:
      "Приложение представляет собой список фильмов, полученный с Кинопоиск API. Была реализована постраничная пагинация. Также в приложении можно посмотреть детальную информацию о фильме, кликнув по нему в списке. Все запросы реализованы с помощью библиотеки axios.",
    imageUrl: "/images/movie-library.png",
    gitHubLink: "https://github.com/EugeneIost/movie-library",
    link: "https://eugeneiost.github.io/movie-library/",
    technologies: ["React", "Redux Toolkit", "React Router", "axios"],
  },

  {
    title: "Todo Daily",
    descr:
      "Обычное todo-приложение на TypeScript со всем вытекающим функционалом. В разработке в качестве хранилища состояний использовал MobX. Также приложение использует runtime базу данных firebase, в качестве HTTP-клиента использовалась библиотека Axios. ",
    imageUrl: "/images/todo-daily.png",
    gitHubLink: "https://github.com/EugeneIost/todo-daily",
    link: "https://eugeneiost.github.io/todo-daily/",
    technologies: ["React", "MobX", "TypeScript", "axios", "firebase"],
  },

  {
    title: "Treloo",
    descr:
      "Landing page туристической компании. В разработке использовался фреймворк Next.js (TypeScript), все стили были написаны на Tailwind CSS.",
    imageUrl: "/images/treloo.png",
    gitHubLink: "https://github.com/EugeneIost/treloo",
    link: "https://eugeneiost.github.io/treloo/",
    technologies: ["Next.js", "Tailwind CSS"],
  },
];
