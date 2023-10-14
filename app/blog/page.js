import Link from 'next/link';
import { client } from '@/app/libs/client';

async function getContents() {
  const response = await client.getList({
    customRequestInit: {
      cache: 'no-store',
    },
    endpoint: 'blogs',
  });

  return response.contents;
}

export default async function StaticPage() {
  const { contents } = await getContents();

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <h1>{time}</h1>
      <ul>
        {contents.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/static/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
