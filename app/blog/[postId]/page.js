const { notFound } = require('next/navigation');
const parse = require('html-react-parser');
import { client } from '@/app/libs/client';

async function generateStaticParams() {
  const { contents } = await client.getList({
    customRequestInit: {
      cache: 'no-store',
    },
    endpoint: 'blogs',
  });

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return paths;
}

async function StaticDetailPage({ params: { postId } }) {
  const post = await generateStaticParams(postId);

  // console.log(post);

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{time}</h2>
      <div>{post.content}</div>
    </div>
  );
}

module.exports = StaticDetailPage;
