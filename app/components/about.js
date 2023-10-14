import Image from "next/image";

export default function About({ src, text }) {
  return (
    <div>
      <div>
        <Image
          src={src}
          width={1500}
          height={600}
          alt=""
          priority={true}
          // quality={100}
        />
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}
