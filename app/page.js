import Blog from "@/app/components/BlogArticle";
import Mv from "@/app/partials/IndexMv";
import IndexAbout from "@/app/partials/IndexAbout";
import IndexSkills from "@/app/partials/IndexSkills";

const Home = () => {
  return (
    <main>
      <Mv />
      <IndexAbout />
      <IndexSkills />
      <Blog />
    </main>
  );
};

export default Home;
