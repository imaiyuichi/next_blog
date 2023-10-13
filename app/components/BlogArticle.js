import { client } from '@/app/libs/client';

export default async function Blog({ blog }) {
  const data = await client.get({ endpoint: 'blogs' });

  return (
    <div>
      <ul>
        {data.contents.map((blog) => (
          <li key={blog.id}>
            <a href="">{blog.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
