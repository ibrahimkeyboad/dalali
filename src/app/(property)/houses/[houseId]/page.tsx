import dynamic from 'next/dynamic';
import Header from '@/components/header/Header';
import MainCard from '../components/MainCard';
import { getAccommodation } from '@/actions/Accommodation';

export async function generateMetadata({
  params,
}: {
  params: { houseId: string };
}) {
  const data: Accommodation = await getAccommodation(params.houseId);

  console.log(data);

  return {
    title: `Home: ${data.type}`,
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
