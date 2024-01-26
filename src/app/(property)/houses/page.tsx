import { getHouses } from '@/actions/Accommodation';
import Container from '@/components/Container';
import Header from '@/components/header/Header';
import Posts from '@/components/posts/Posts';
import React from 'react';

async function HomePage() {
  const houses: Accommodation[] = await getHouses('house');
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

export default HomePage;
