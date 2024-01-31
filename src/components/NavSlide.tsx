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
      className='w-full mx-auto sm:max-w-lg my-16  lg:max-w-xl xl:max-w-2xl'>
      <CarouselContent className='gap-10'>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className='basis-[50px]'>
            <Link className='bg-white p-4' href={`/${index}`}>
              link{index}
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
