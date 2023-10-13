import { client } from "@/app/libs/client";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data,
    },
  };
};

export default function Blog({ blog }) {
  return (
    <div>
      <ul>
        {/* {blogs.map((blog) => (
          <li key={blog.id}>
            <a href="">{blog.title}</a>
          </li>
        ))} */}
      </ul>
    </div>
  );
}
