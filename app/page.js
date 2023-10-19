import Blog from "@/app/components/BlogArticle";
import Mv from "@/app/partials/IndexMv";
import IndexAbout from "@/app/partials/IndexAbout";
import IndexSkils from "@/app/partials/IndexSkils";

const Home = () => {
  return (
    <main>
      <Mv />
      <IndexAbout />
      <IndexSkils />
      <Blog />
    </main>
  );
};

export default Home;
