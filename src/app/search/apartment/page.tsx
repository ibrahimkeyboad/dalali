'use client';
import { Card, CardContent } from '@/components/ui/card';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function Select() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const bed = searchParams.get('bed');
  const bedrooms = searchParams.get('bedrooms');
  const bathrooms = searchParams.get('bathrooms');
  const location = searchParams.get('location');

  return (
    <Card className='inline-block'>
      <CardContent>{bed} bed</CardContent>
      <CardContent>{bedrooms} bedrooms</CardContent>
      <CardContent>{bathrooms} bathrooms</CardContent>
      <CardContent>{location} location</CardContent>
    </Card>
  );
}

export default Select;
