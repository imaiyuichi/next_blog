import IndexLayout from "../components/IndexLayout";
import Image from "next/image";
import style from "@/src/styles/partials/IndexAbout.module.scss";

import { getTop } from "@/src/libs/client";

const IndexAbout = async () => {
  const about = await getTop();
  const aboutMe = [
    {
      image: {
        src: about.AboutMe.image_imai.url,
        width: about.AboutMe.image_imai.width,
        height: about.AboutMe.image_imai.height,
      },
      description: about.AboutMe.description_imai,
    },
    {
      image: {
        src: about.AboutMe.image_nakayama.url,
        width: about.AboutMe.image_nakayama.width,
        height: about.AboutMe.image_nakayama.height,
      },
      description: about.AboutMe.description_nakayama,
    },
    {
      image: {
        src: about.AboutMe.image_shigeta.url,
        width: about.AboutMe.image_shigeta.width,
        height: about.AboutMe.image_shigeta.height,
      },
      description: about.AboutMe.description_shigeta,
    },
  ];

  return (
    <IndexLayout title="about">
      {aboutMe.map((item, index) => {
        return (
          <div key={index} className={style.content}>
            <div className={style.image}>
              <Image
                src={item.image.src}
                width={item.image.width}
                height={item.image.height}
                alt="画像"
                className="img-full"
              />
            </div>
            <div className={style.textBox}>
              <p className={style.text}>{item.description}</p>
            </div>
          </div>
        );
      })}
    </IndexLayout>
  );
};

export default IndexAbout;
