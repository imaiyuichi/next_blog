import { getBlog } from "@/app/libs/client";
import Link from "next/link";

const Blog = async () => {
  const data = await getBlog();

  return (
    <div>
      <ul>
        {data.map((blog) => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
