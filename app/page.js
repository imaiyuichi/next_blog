import Blog from "@/app/components/BlogArticle";
import Mv from "@/app/partials/IndexMv";
import IndexAbout from "@/app/partials/IndexAbout";

const Home = () => {
  return (
    <main>
      <Mv />
      <IndexAbout />
      <Blog />
    </main>
  );
};

export default Home;
