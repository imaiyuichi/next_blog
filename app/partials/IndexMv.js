import { client } from "@/app/libs/client";

async function getContents() {
  const response = await client.getList({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "top",
  });

  return response;
}

const Mv = async () => {
  const data = await getContents();

  return (
    <div>
      <div>{data.MvTitle}</div>
      <div>{data.MvSubTitle}</div>
      <div>{data.MvCatch}</div>
    </div>
  );
};

export default Mv;
