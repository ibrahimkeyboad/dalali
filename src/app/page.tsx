import getPosts from '@/actions/getPosts';
import Posts from '@/components/posts/Posts';
import Accommodation from '@/models/accommodation';

async function Page() {
  // const res = await fetch('http://localhost:3000/api/posts');
  // const resData = await res.json();
  const resData = await getPosts();
  console.log('resData', resData);
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
      {resData.map((data: Accommodation) => (
        <Posts data={data} key={`${data._id}`} />
      ))}
    </main>
  );
}

export default Page;
