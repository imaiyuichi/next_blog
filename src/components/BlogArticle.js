import { getBlog } from "@/src/libs/client";
import Link from "next/link";

const Blog = async () => {
  const data = await getBlog();

  return (
    <div>
      <ul>
        {data.map((blog, index) => (
          <li key={index}>
            <Link href={`blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
