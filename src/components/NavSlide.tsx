import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';

export function NavSlider() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className='w-full mx-auto my-10 max-w-sm'>
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className='md:basis-1/6 lg:basis-1/6'>
            <Link className='bg-white p-3' href={`/${index}`}>
              {index}
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
