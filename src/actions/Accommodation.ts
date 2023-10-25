export async function getAllAccommodation() {
  const res = await fetch('http://localhost:3000/api/posts/accommodation');
  const data = await res.json();
  return data;
}
