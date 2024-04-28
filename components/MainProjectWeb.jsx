import MainProjectWebDetail from "./MainProjectWebDetail";

const obj = {
  articleListApp: {
    img: "article-list-app.png",
    name: "Article List App",
    desc: "This application is a project that utilizes an API to display articles. It includes a feature to search for articles from several countries, specific categories, and other general topics.",
    tech: ["Next.js", "Tailwindcss"],
    link: "https://article-list-one.vercel.app/",
  },
  animeListApp: {
    img: "anime-list-app.png",
    name: "Anime List App",
    desc: "This application is a project that utilizes an API to display a list of popular anime. It includes a feature to search for anime titles and a pagination system.",
    tech: ["Next.js", "Tailwindcss"],
    link: "https://anime-list-app-seven.vercel.app/",
  },
  topicCRUD: {
    img: "topic-crud.png",
    name: "Topic CRUD",
    desc: `This application is a simple project that features CRUD (Create, Read, Update, Delete) operations using Next.js, Tailwind CSS, and MongoDB as its database.`,
    tech: ["Next.js", "Tailwindcss", "Mongodb"],
    link: "https://cobafullstack.vercel.app/",
  },
  catatanBelanja: {
    img: "catatan-belanja.png",
    name: "Shopping List",
    desc: "This application is a simple project to display saved shopping lists. It includes a feature to filter existing shopping lists.",
    tech: ["React.js", "Vite.js"],
    link: "https://catatan-belanja-zeta.vercel.app/",
  },
  responsifWeb: {
    img: "responsif-web.png",
    name: "Responsif Web",
    desc: `An interactive and responsive web project with several supported animation views, built with modern Next.js technology.`,
    tech: ["Next.js", "Tailwindcss", "Redux Toolkit", "Framer Motion"],
    link: "https://asc-sf.vercel.app/",
  },
};

const MainProjectWeb = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-0 py-8">
      <MainProjectWebDetail
        img={obj.responsifWeb.img}
        name={obj.responsifWeb.name}
        desc={obj.responsifWeb.desc}
        tech={obj.responsifWeb.tech}
        link={obj.responsifWeb.link}
      />
      <MainProjectWebDetail
        img={obj.articleListApp.img}
        name={obj.articleListApp.name}
        desc={obj.articleListApp.desc}
        tech={obj.articleListApp.tech}
        link={obj.articleListApp.link}
      />
      <MainProjectWebDetail
        img={obj.animeListApp.img}
        name={obj.animeListApp.name}
        desc={obj.animeListApp.desc}
        tech={obj.animeListApp.tech}
        link={obj.animeListApp.link}
      />
      <MainProjectWebDetail
        img={obj.topicCRUD.img}
        name={obj.topicCRUD.name}
        desc={obj.topicCRUD.desc}
        tech={obj.topicCRUD.tech}
        link={obj.topicCRUD.link}
      />
      <MainProjectWebDetail
        img={obj.catatanBelanja.img}
        name={obj.catatanBelanja.name}
        desc={obj.catatanBelanja.desc}
        tech={obj.catatanBelanja.tech}
        link={obj.catatanBelanja.link}
      />
    </div>
  );
};
export default MainProjectWeb;
