import { getAllAccommodation } from '@/actions/Accommodation';
import Container from '@/components/Container';
import Header from '@/components/header/Header';
import Posts from '@/components/posts/Posts';

async function Page() {
  const data: Accommodation[] = await getAllAccommodation();

  return (
    <>
      <Header />
      <Container>
        {data.map((data) => (
          <Posts data={data} yes key={`${data._id}`} />
        ))}
      </Container>
    </>
  );
}

export default Page;
