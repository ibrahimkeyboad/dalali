import { getHouses } from '@/actions/Accommodation';
import Header from '@/components/header/Header';
import Posts from '@/components/posts/Posts';

async function ApartmentPage() {
  // const houses: Accommodation[] = await getHouses('apartment');
  return (
    <>
      <Header />
      <main
        className='
        px-8 
        grid 
        grid-cols-1 
        gap-4 
        sm:grid-cols-2
        justify-items-center
        sm:gap-2
        md:grid-cols-3
        md:gap-3
        xl:grid-cols-5
        xl:gap-x-4
        xl:gap-y-8
    '>
        {/* {houses.map((data) => (
          <Posts data={data} key={`${data._id}`} />
        ))} */}
      </main>
    </>
  );
}

export default ApartmentPage;
