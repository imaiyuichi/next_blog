import Link from 'next/link';
import OreImages from '@/app/components/OreImages';

export default function IndexAbout() {
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

  return (
    <div>
      {test.map((item, index) => {
        return <OreImages key={item.index} src={item.src} text={item.text} />;
      })}
      <div>
        <Link href="about">Linkタグ about</Link>
      </div>
    </div>
  );
}
