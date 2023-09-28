import getPosts from '@/actions/getAllPosts';
import Posts from '@/components/posts/Posts';
import Accommodation from '@/models/accommodation';
import { House } from '@prisma/client';

async function Page() {
  // const res = await fetch('http://localhost:3000/api/posts');
  // const resData = await res.json();
  // const resData = await getPosts();

  const resData: any = [
    {
      id: 'faf1',
      images: '/images/home.jpg',
      duration: 'siku',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium hic quia labore corrupti est, optio tenetur culpa quis quibusdam esse sunt minima ipsam repellendus eligendi incidunt aliquam quam dolores sit deserunt beatae possimus pariatur eveniet repudiandae qui. Porro beatae corrupti nisi maxime nam laboriosam doloribus dignissimos id voluptatem quae corporis natus dolorum, repellendus, totam facilis! Odio accusantium laboriosam cupiditate optio illo aliquid. Ut corrupti dolorem ab provident quo numquam quae.',
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
    {
      id: 'oda',
      price: 50000,
      category: 'lodge',
      images: '/images/cover2.jpg',
      duration: 'siku',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium hic quia labore corrupti est, optio tenetur culpa quis quibusdam esse sunt minima ipsam repellendus eligendi incidunt aliquam quam dolores sit deserunt beatae possimus pariatur eveniet repudiandae qui. Porro beatae corrupti nisi maxime nam laboriosam doloribus dignissimos id voluptatem quae corporis natus dolorum, repellendus, totam facilis! Odio accusantium laboriosam cupiditate optio illo aliquid. Ut corrupti dolorem ab provident quo numquam quae.',
      city: 'Arusha',
      street: 'Ngulelo',
      country: 'Tanzania',
      offers: ['umeme', 'maji', 'internet', 'tv', 'room service'],
      bedroom: [
        {
          type: 'luxury',
          size: '6*6',
        },
        {
          type: 'medium',
          size: '4*4',
        },
      ],

      barhroom: {
        type: 'luxury',
        shower: 'hot water',
      },

      seatroom: {
        sofa: {
          number: 2,
        },
      },
    },
  ];
  return (
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
      {resData.map((data: House) => (
        <Posts data={data} key={`${data.id}`} />
      ))}
    </main>
  );
}

export default Page;
