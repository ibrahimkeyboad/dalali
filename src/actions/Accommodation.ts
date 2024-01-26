import { baseUrl } from './url';

export async function getAllAccommodation() {
  const res = await fetch(`${baseUrl}/posts/accommodation`, {
    next: { revalidate: 100 },
  });
  const data = await res.json();
  return data;
}

export async function getHouses(category: string) {
  const res = await fetch(
    `${baseUrl}/posts/accommodation/category/${category}`,
    { next: { revalidate: 100 } }
  );
  const data = await res.json();
  return data;
}
export async function getAccommodation(id: string) {
  const res = await fetch(`${baseUrl}/posts/accommodation/${id}`, {
    cache: 'no-cache',
  });

  // console.log(await res.json());

  const data = await res.json();
  return data;
}
