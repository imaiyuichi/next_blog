import { getBlog } from "@/src/libs/client";
import "@/app/styles/_editor.scss";
import style from "@/app/styles/blog/page.module.scss";

const StaticPage = async (context) => {
  const data = await getBlog();
  const id = context.params.slug;
  const post = data.find((item) => item.id === id);
  const times = new Date(post.revisedAt);
  const time = times.toISOString().split("T")[0].replace(/-/g, ".");

  return (
    <div className={style.root}>
      <h2>{post.title}</h2>
      <h2>{time}</h2>
      <div className="editor">
        <div
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        ></div>
      </div>
    </div>
  );
};

export default StaticPage;
