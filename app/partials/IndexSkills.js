import Link from "next/link";
import AboutMe from "@/app/components/AboutMe";
import Image from "next/image";
import style from "@/app/styles/partials/IndexSkills.module.scss";

import { getTop } from "@/app/libs/client";

const IndexSkills = async () => {
  const skills = await getTop();
  const skillImai = skills.Top_Skills.SkillLevel_imai;
  const skillNkayama = skills.Top_Skills.SkillLevel_nakayama;
  const skillShigeta = skills.Top_Skills.SkillLevel_nakayama;

  return (
    <section className={style.root}>
      <ul>
        {skillImai &&
          skillImai.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <Image
                    src={item.skill.url}
                    width={item.skill.width}
                    height={item.skill.height}
                    alt=""
                  />
                </div>
                <p>{item.level}</p>
              </li>
            );
          })}
      </ul>
      <ul>
        {skillNkayama &&
          skillNkayama.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <Image
                    src={item.skill.url}
                    width={item.skill.width}
                    height={item.skill.height}
                    alt=""
                  />
                </div>
                <p>{item.level}</p>
              </li>
            );
          })}
      </ul>
      <ul>
        {skillShigeta &&
          skillShigeta.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <Image
                    src={item.skill.url}
                    width={item.skill.width}
                    height={item.skill.height}
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

export default IndexSkills;
