export async function getAllAccommodation() {
  const res = await fetch('http://localhost:3000/api/posts/accommodation');
  const data = await res.json();
  return data;
}

export async function getHouses(category: string) {
  const res = await fetch(
    `http://localhost:3000/api/posts/accommodation/category/${category}`
  );
  const data = await res.json();
  return data;
}
