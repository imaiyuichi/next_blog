import Blog from "@/src/components/BlogArticle";
import Mv from "@/src/partials/IndexMv";
import IndexAbout from "@/src/partials/IndexAbout";
import IndexSkills from "@/src/partials/IndexSkills";

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
