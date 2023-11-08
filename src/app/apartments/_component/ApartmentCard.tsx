import coverApartment from '../../../../public/images/cover1.jpg';
import { MdApartment, MdOutlineShower } from 'react-icons/md';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { BedIcon } from 'lucide-react';

function ApartmentCard() {
  return (
    <Card className='w-[330px] overflow-hidden'>
      <AspectRatio ratio={16 / 9}>
        <Image className='w-full' src={coverApartment} alt='cover' />
      </AspectRatio>
      <CardHeader className='mt-6'>
        <h4>Standard Double Room</h4>
      </CardHeader>

      <CardContent>
        <div className='flex gap-2 items-center'>
          <BedIcon />
          <h4> bedrooms 3</h4>
        </div>
        <div className='flex gap-2 items-center'>
          <MdOutlineShower />
          <h4> bedroom </h4>
        </div>
        <div className='flex gap-2 items-center'>
          <MdApartment />
          <h4> city view</h4>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <h3 className='flex text-[12px] items-center gap-1'>
          <span>Tsh</span>
          <span className='text-xl font-extrabold'>
            {200000?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
          <span>month</span>
        </h3>
        <h4 className='text-[12px]'>3/ 5</h4>
      </CardFooter>
    </Card>
  );
}

export default ApartmentCard;
