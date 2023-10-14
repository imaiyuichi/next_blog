import { client } from '@/app/libs/client';
import Link from 'next/link';

async function getContents() {
  const response = await client.getList({
    customRequestInit: {
      cache: 'no-store',
    },
    endpoint: 'blogs',
  });

  return response.contents;
}

export default async function Blog() {
  const data = await getContents();

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
}
