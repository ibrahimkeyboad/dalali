async function getHouses() {
  const res = await fetch('http://localhost:3000/api');
  const data = await res.json();
}
