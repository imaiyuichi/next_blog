import Link from "next/link";
import AboutMe from "@/app/components/AboutMe";
import Image from "next/image";
import style from "@/app/styles/partials/IndexSkils.module.scss";

import { getTop } from "@/app/libs/client";

const IndexSkils = async () => {
  const skils = await getTop();

  return (
    <section className={style.root}>
      <ul>
        {skils.Top_Skils.SkillLevel_imai &&
          skils.Top_Skils.SkillLevel_imai.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <Image
                    src={item.skil.url}
                    width={item.skil.width}
                    height={item.skil.height}
                    alt=""
                  />
                </div>
                <p>{item.level}</p>
              </li>
            );
          })}
      </ul>
      <ul>
        {skils.Top_Skils.SkillLevel_nakayama &&
          skils.Top_Skils.SkillLevel_nakayama.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <Image
                    src={item.skil.url}
                    width={item.skil.width}
                    height={item.skil.height}
                    alt=""
                  />
                </div>
                <p>{item.level}</p>
              </li>
            );
          })}
      </ul>
      <ul>
        {skils.Top_Skils.SkillLevel_shigeta &&
          skils.Top_Skils.SkillLevel_shigeta.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <Image
                    src={item.skil.url}
                    width={item.skil.width}
                    height={item.skil.height}
                    alt=""
                  />
                </div>
                <p>{item.level}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default IndexSkils;
