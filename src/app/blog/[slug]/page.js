import { getBlog } from "@/src/libs/client";
import "@/src/styles/_editor.scss";
import style from "@/src/styles/blog/slug/page.module.scss";

const StaticPage = async (context) => {
  const data = await getBlog();
  const id = context.params.slug;
  const post = data.find((item) => item.id === id);
  const times = new Date(post.publishedAt);
  const time = times.toISOString().split("T")[0].replace(/-/g, ".");

  return (
    <div className={style.root}>
      <h1>{post.title}</h1>
      <p className={style.time}>{time}</p>
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
