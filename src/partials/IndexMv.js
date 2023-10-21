import { getTop } from "@/src/libs/client";

const Mv = async () => {
  const data = await getTop();

  return (
    <div>
      <div>{data.MvTitle}</div>
      <div>{data.MvSubTitle}</div>
      <div>{data.MvCatch}</div>
    </div>
  );
};

export default Mv;
