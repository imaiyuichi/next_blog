import Image from 'next/image';
import Blog from '@/app/components/BlogArticle';
import Mv from '@/app/partials/IndexMv';
import IndexAbout from '@/app/partials/IndexAbout';

export default function Home() {
  return (
    <main>
      <Mv />
      <IndexAbout />
      <Blog />
    </main>
  );
}
