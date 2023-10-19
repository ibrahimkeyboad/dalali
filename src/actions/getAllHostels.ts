import House from '@/models/house';

export async function getHouse(id: string) {
  const res = await House.findById({ _id: id });

  // console.log(res);

  return res;
}
