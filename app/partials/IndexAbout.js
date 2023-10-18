import Link from "next/link";
import AboutMe from "@/app/components/AboutMe";
import Image from "next/image";
import style from "@/app/styles/partials/IndexAbout.module.scss";

import { getTop } from "@/app/libs/client";

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
        src: about.AboutMe.image_shigeta.url,
        width: about.AboutMe.image_shigeta.width,
        height: about.AboutMe.image_shigeta.height,
      },
      description: about.AboutMe.description_shigeta,
    },
    {
      image: {
        src: about.AboutMe.image_nakayama.url,
        width: about.AboutMe.image_nakayama.width,
        height: about.AboutMe.image_nakayama.height,
      },
      description: about.AboutMe.description_nakayama,
    },
  ];

  return (
    <div>
      {aboutMe.map((item, index) => {
        return (
          <div key={item.index} className={style.root}>
            <div className={style.image}>
              <Image
                src={item.image.src}
                width={item.image.width}
                height={item.image.height}
                alt="画像"
              />
            </div>
            <div className={style.textBox}>
              <p className={style.text}>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IndexAbout;
