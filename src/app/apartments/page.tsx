import { getHouses } from '@/actions/Accommodation';
import Container from '@/components/Container';
import Header from '@/components/header/Header';
import Posts from '@/components/posts/Posts';

async function ApartmentPage() {
  const houses: Accommodation[] = await getHouses('apartment');
  return (
    <>
      <Header />
      <Container>
        {houses.map((data) => (
          <Posts data={data} key={`${data._id}`} />
        ))}
      </Container>
    </>
  );
}

export default ApartmentPage;
