import About from "@/public/images/index-about-title.png";
import Image from "next/image";
import style from "@/src/styles/component/BaseTitle.module.scss";

const BaseTitle = async ({ title }) => {
  const BaseTitle = (title === "about" && About) || (title === "test" && test);

  return (
    <h2 className={style.title}>
      <Image src={BaseTitle} width={396} height={77} alt="" quality={100} />
    </h2>
  );
};

export default BaseTitle;
