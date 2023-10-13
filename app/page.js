import Link from 'next/link';
import Image from 'next/image';
import Blog from '@/app/components/BlogArticle';
import Mv from '@/app/partials/IndexMv';
import style from '@/app/styles/component/page.module.scss';

export default function Home() {
  const test = [
    {
      name: 'top',
      boolean: false,
    },
    {
      name: 'bottom',
      boolean: true,
    },
  ];

  return (
    <>
      <div className={style.test}>
        <Link href="about">Linkタグ about</Link>
      </div>
      <div>
        <a href="about">aタグ about</a>
      </div>
      <p>--------------------</p>
      <Blog />
      <p>--------------------</p>
      <Mv />
      <p>--------------------</p>
      {/* {test.map((item, index) => {
        return (
          <>
            <p key={index}>{item.name}</p>
            {item.boolean && <p>{item.name}</p>}
          </>
        );
      })} */}
      <div>
        <Image
          src="/images/next.png"
          width={1500}
          height={600}
          alt=""
          priority={true}
          // quality={100}
        />
      </div>
      <div>
        <img src="/images/next.png" alt="test" width="1500" height="600"></img>
      </div>
    </>
  );
}
