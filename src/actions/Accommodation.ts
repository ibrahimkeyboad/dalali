export async function getAllAccommodation() {
  const res = await fetch('http://localhost:3000/api/posts/accommodation', {
    next: { revalidate: 100 },
  });
  const data = await res.json();
  return data;
}

export async function getHouses(category: string) {
  const res = await fetch(
    `http://localhost:3000/api/posts/accommodation/category/${category}`,
    { next: { revalidate: 100 } }
  );
  const data = await res.json();
  return data;
}
export async function getAccommodation(id: string) {
  const res = await fetch(
    `http://localhost:3000/api/posts/accommodation/${id}`,
    { next: { revalidate: 100 } }
  );
  const data = await res.json();
  return data;
}
