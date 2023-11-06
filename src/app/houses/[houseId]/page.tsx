import dynamic from 'next/dynamic';
import Header from '@/components/header/Header';
import MainCard from '../components/MainCard';
import { getAccommodation } from '@/actions/Accommodation';

export function generateMetadata({ params }: { params: { houseId: string } }) {
  return {
    title: `Home: ${params.houseId}`,
  };
}

async function Page({ params }: { params: { houseId: string } }) {
  const data: Accommodation = await getAccommodation(params.houseId);

  return (
    <>
      <Header />
      <MainCard data={data} />
    </>
  );
}

export default Page;
