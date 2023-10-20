import { baseUrl } from './url';

export async function getHouse(id: string) {
  console.log(id);
  const res = await fetch(`${baseUrl}/posts/house/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
