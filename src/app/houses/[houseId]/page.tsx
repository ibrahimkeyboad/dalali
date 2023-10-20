import dynamic from 'next/dynamic';
import Header from '@/components/header/Header';
import MainCard from '../components/MainCard';
import { baseUrl } from '@/actions/url';

export function generateMetadata({ params }: { params: { houseId: string } }) {
  return {
    title: `Home: ${params.houseId}`,
  };
}

async function getHouse(id: string) {
  console.log(id);
  const res = await fetch(`${baseUrl}/posts/house/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function Page({ params }: { params: { houseId: string } }) {
  const data = await getHouse(params.houseId);

  return (
    <>
      <Header />
      <MainCard data={data} />
    </>
  );
}

export default Page;
