import Link from "next/link";
import { client } from "@/app/libs/client";
import Image from "next/image";

async function getContents() {
  const response = await client.getList({
    endpoint: "blogs",
  });

  return response.contents;
}

export default async function StaticPage() {
  const data = await getContents();

  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <div>
              <Image
                src={item.eyecatch.url}
                width={item.eyecatch.width}
                height={item.eyecatch.height}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
