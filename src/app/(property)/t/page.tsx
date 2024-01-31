/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IEVZWzffZRM
 */
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from '@/components/ui/carousel';
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import Image from 'next/image';

export default function Component() {
  return (
    <div className='flex flex-col space-y-8'>
      <Carousel className='w-full max-w-3xl'>
        <CarouselContent>
          <CarouselItem>
            <Image
              alt='Apartment Image 1'
              className='aspect-[16/9] object-cover rounded-md'
              height={500}
              src='/placeholder.svg'
              width={800}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt='Apartment Image 2'
              className='aspect-[16/9] object-cover rounded-md'
              height={500}
              src='/placeholder.svg'
              width={800}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt='Apartment Image 3'
              className='aspect-[16/9] object-cover rounded-md'
              height={500}
              src='/placeholder.svg'
              width={800}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='flex flex-col space-y-2'>
        <h1 className='text-3xl font-bold'>Luxury Apartment</h1>
        <p className='text-gray-500'>123 Main St, New York, NY, USA</p>
      </div>
      <div className='flex flex-col space-y-4'>
        <h2 className='text-2xl font-bold'>Amenities</h2>
        <ul className='grid grid-cols-2 gap-2'>
          <li>Free Wi-Fi</li>
          <li>24/7 Security</li>
          <li>Swimming Pool</li>
          <li>Gym</li>
          <li>Free Parking</li>
          <li>Laundry Service</li>
        </ul>
      </div>
      <div className='flex flex-col space-y-4'>
        <h2 className='text-2xl font-bold'>About the Area</h2>
        <p className='text-gray-500'>
          The apartment is located in the heart of the city, with easy access to
          shopping malls, restaurants, and parks. The area is well-connected
          with public transportation, making it easy to explore the city.
        </p>
      </div>
      <div className='flex flex-col space-y-4'>
        <h2 className='text-2xl font-bold'>Other Apartments</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <Card>
            <CardHeader>
              <CardTitle>Cozy Apartment</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                alt='Cozy Apartment'
                className='aspect-[1/1] object-cover rounded-md'
                height='200'
                src='/placeholder.svg'
                width='200'
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Modern Apartment</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                alt='Modern Apartment'
                className='aspect-[1/1] object-cover rounded-md'
                height='200'
                src='/placeholder.svg'
                width='200'
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Classic Apartment</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                alt='Classic Apartment'
                className='aspect-[1/1] object-cover rounded-md'
                height='200'
                src='/placeholder.svg'
                width='200'
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
