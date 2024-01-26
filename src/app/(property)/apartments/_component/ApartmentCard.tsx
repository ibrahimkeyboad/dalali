import {
  MdApartment,
  MdLocalDining,
  MdOutlineKitchen,
  MdOutlineShower,
} from 'react-icons/md';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { BedIcon, Car } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PiTelevisionSimpleThin, PiToilet } from 'react-icons/pi';
import { BiCar } from 'react-icons/bi';
import { formatPrice } from '@/utils/formatPrice';

const images = ['cover1.jpg', 'cover2.jpg', 'cover3.jpg'];

function ApartmentCard() {
  return (
    <Card onClick={() => {}} className='overflow-hidden cursor-pointer'>
      <Carousel className='m-auto mb-2'>
        <CarouselContent className=' rounded-md h-[300px]'>
          {images?.map((img, i) => (
            <CarouselItem className='relative' key={i}>
              <AspectRatio>
                <Image
                  quality={100}
                  alt=''
                  className='object-cover'
                  priority
                  src={`/images/${img}`}
                  fill
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-1' />
        <CarouselNext className='right-1' />
      </Carousel>

      <CardContent>
        <CardTitle className='text-lg mb-2'>2 Bedroom Apartment</CardTitle>
        {/* <div className='flex items-center gap-2 mt-2'>
          <BedIcon className='w-5 h-5' />
          <span>{roomtotal} rooms</span>
          <BathIcon className='w-5 h-5 ml-4' />
          <span>{bathtotal} baths</span>
        </div> */}
        <div className='flex gap-2  items-center'>
          <BedIcon className='w-6 h-6' />
          <h4>2 Bedrooms </h4>
        </div>
        <div className='flex gap-2 items-center'>
          <PiToilet className='w-6 h-6' />
          <h4>2 Toilets </h4>
        </div>
        <div className='flex gap-2 items-center'>
          <MdOutlineShower className='w-6 h-6' />
          <h4>Shower </h4>
        </div>
        <div className='flex gap-2 items-center'>
          <MdLocalDining className='w-6 h-6' />
          <h4>Dining</h4>
        </div>
        <div className='flex gap-2 items-center'>
          <PiTelevisionSimpleThin className='w-6 h-6' />
          <h4>Sitting room</h4>
        </div>
        <div className='flex gap-2 items-center'>
          <MdOutlineKitchen className='w-6 h-6' />
          <h4>Kitchen</h4>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <h3 className='flex text-[12px] items-center gap-1'>
          <span>Tsh</span>
          <span className='text-xl font-extrabold'>{formatPrice(200000)}</span>
          <span>month</span>
        </h3>
        <h4 className='text-[12px]'>3/5</h4>
      </CardFooter>
    </Card>
  );
}

export default ApartmentCard;
