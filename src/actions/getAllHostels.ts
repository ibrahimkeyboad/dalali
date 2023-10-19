export async function getHouse(id: string) {
  console.log(id);
  const res = await fetch(`http://localhost:3000/api/posts/house/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
