import BaseTitle from "@/src/components/BaseTitle";
import style from "@/src/styles/component/IndexLayout.module.scss";

const IndexLayout = ({ children, title, background }) => {
  return (
    <section className={style.root} data-background={background}>
      <div className={style.bg}>
        <div className={style.inner}>
          <BaseTitle title={title} />
          <div className={style.contents}>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default IndexLayout;
