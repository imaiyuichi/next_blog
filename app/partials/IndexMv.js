import { client } from '@/app/libs/client';

export default async function Mv() {
  const data = await client.get({ endpoint: 'top' });
  return (
    <div>
      <div>{data.MvTitle}</div>
      <div>{data.MvSubTitle}</div>
      <div>{data.MvCatch}</div>
    </div>
  );
}
