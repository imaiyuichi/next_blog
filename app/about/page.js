import Link from "next/link";

export const metadata = {
  title: "About peage",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <>
      <div>
        <Link href="/">Linkタグ トップ</Link>
      </div>
      <div>
        <a href="/">aタグ トップ</a>
      </div>
    </>
  );
}
