import Link from "next/link";
import { getBlog } from "@/src/libs/client";
import Image from "next/image";

const StaticPage = async () => {
  const data = await getBlog();

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
};

export default StaticPage;
