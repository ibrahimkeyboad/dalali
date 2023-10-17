export async function getHouses() {
  const res = await fetch('http://localhost:3000/api/posts/house');
  const data = await res.json();
  return data;
}
