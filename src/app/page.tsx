import getPosts from '@/actions/getAllPosts';
import Posts from '@/components/posts/Posts';
import Accommodation from '@/models/accommodation';
import { House } from '@prisma/client';

async function Page() {
  // const res = await fetch('http://localhost:3000/api/posts');
  // const resData = await res.json();
  // const resData = await getPosts();

  const resData: House[] = [
    {
      id: 'faf1',
      images: '/images/cover.webp',
      duration: 'siku',
      Description: 'ddfa',
      bathrooms: 1,
      bedrooms: 2,
      city: 'Arusha',
      street: 'Ngulelo',
      country: 'Tanzania',
      offers: 'umeme',
      price: 3233,
      purpose: 'kukodishwa',
      userId: 'ie',
      category: 'house',
    },
  ];
  return (
    <main
      className='
        px-4 
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
      {resData.map((data: House) => (
        <Posts data={data} key={`${data.id}`} />
      ))}
    </main>
  );
}

export default Page;
