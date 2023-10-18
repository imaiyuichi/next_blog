import Image from "next/image";

const AboutMe = async ({ src, text }) => {
  return (
    <div>
      <div>
        <Image src={src} width={1500} height={600} alt="" />
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AboutMe;
