import Link from 'next/link';
import Image from 'next/image';
import Blog from '@/app/components/BlogArticle';
import Mv from '@/app/partials/IndexMv';
import style from '@/app/styles/component/page.module.scss';
import About from '@/app/components/About';

export default function Home() {
  const test = [
    {
      src: '/images/next.png',
      text: 'なかやま',
    },
    {
      src: '/images/next.png',
      text: 'いまい',
    },
    {
      src: '/images/next.png',
      text: 'しげた',
    },
  ];

  console.log(test);
  return (
    <>
      {test.map((item, index) => {
        return <About key={item.index} src={item.src} text={item.text} />;
      })}
      <About src="/images/next.png" text="しげた" />
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