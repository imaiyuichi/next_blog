import Link from "next/link";
import Image from "next/image";
// import style from "@/app/styles/component/page.module.scss";

export default function Top() {
  const test = [
    {
      name: "test",
      last: "test2",
    },
    {
      name: "test",
      last: "test2",
    },
  ];

  return (
    <>
      <div>
        <Link href="about">Linkタグ about</Link>
      </div>
      <div>
        <a href="about">aタグ about</a>
      </div>
      {test.map((item, index) => {
        return <p key={index}>{item.name}</p>;
      })}
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
