import { getAllAccommodation } from '@/actions/Accommodation';
import Header from '@/components/header/Header';
import Posts from '@/components/posts/Posts';

async function Page() {
  const data: Accommodation[] = await getAllAccommodation();

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
        {data.map((data: any) => (
          <Posts data={data} key={`${data.id}`} />
        ))}
      </main>
    </>
  );
}

export default Page;
