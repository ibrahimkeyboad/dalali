import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { BiSolidDoorOpen } from 'react-icons/bi';
import { IoDesktopOutline } from 'react-icons/io5';
import { MdOutlineDinnerDining, MdOutlineShower } from 'react-icons/md';
import { TbToolsKitchen2 } from 'react-icons/tb';

interface Props {
  bedrooms: [
    {
      sort: string;
      description: string;
    }
  ];
  bathrooms: [
    {
      sort: string;
      description: string;
      shower: string;
    }
  ];
  kitchen: {
    sort: string;
    fidge: string;
    washing: string;
    cook: string;
  };
}

function HouseRooms({ bathrooms, bedrooms, kitchen }: Props) {
  const bedroomLength = bedrooms.length;
  const bathroomLength = bedrooms.length;
  return (
    <Card>
      <h2 className='dark:text-[#e6f1ff] tracking-widest font-bold text-xl p-3 pb-5 '>
        What is house contain
      </h2>
      <div className='flex gap-6 p-4 flex-wrap'>
        {bedrooms && (
          <CardContent className='border p-3 rounded-md '>
            <h3 className='text-center font-semibold pb-1'>
              {bedroomLength} {`Bedroom${bedroomLength > 1 ? 's' : null}`}
            </h3>

            <article className='flex items-start gap-3'>
              <BiSolidDoorOpen size={40} />
              <div className='flex flex-col gap-2'>
                {bedrooms.map((bedroom) => (
                  <p className='flex flex-col' key={bedroom.sort}>
                    <span>{bedroom.sort}</span>
                    <span className='text-sm text-gray-300'>
                      {bedroom.description}
                    </span>
                  </p>
                ))}
              </div>
            </article>
          </CardContent>
        )}

        {bathrooms && (
          <CardContent className='border p-4 rounded-md '>
            <h3 className='text-center font-semibold pb-1'>
              {bathroomLength} {`Bathroom${bathroomLength > 1 ? 's' : null}`}
            </h3>

            <article className='flex  items-start justify-start gap-3'>
              <MdOutlineShower size={40} />
              <div className='flex flex-col gap-2'>
                {bathrooms.map((bathroom) => (
                  <p className='flex flex-col' key={bathroom.sort}>
                    <span>{bathroom.sort}</span>
                    {bathroom.shower && (
                      <span className='text-sm text-gray-300'>
                        {bathroom.shower}
                      </span>
                    )}
                    <span className='text-sm text-gray-300'>
                      {bathroom.description}
                    </span>
                  </p>
                ))}
              </div>
            </article>
          </CardContent>
        )}

        {kitchen && (
          <CardContent className='border p-4 rounded-md '>
            <h3 className='text-center font-semibold pb-1'>Kitchen</h3>

            <article className='flex  items-start justify-start gap-3'>
              <TbToolsKitchen2 size={40} />
              <div className='flex flex-col text-sm gap-1'>
                <p>{kitchen.sort}</p>
                <p>{kitchen.cook}</p>
                <p>{kitchen.washing}</p>
                <p>{kitchen.fidge}</p>
              </div>
            </article>
          </CardContent>
        )}

        {/* <CardContent className='border rounded-md flex gap-3'>
          <MdOutlineBathroom size={25} />
          <p>setting room</p>
        </CardContent> */}

        {}

        <CardContent className='border rounded-md p-4 flex gap-3'>
          <MdOutlineDinnerDining size={35} />
          <div className='flex flex-col gap-1'>
            <h3 className='font-bold'>Dinning place</h3>
            <p className='text-sm'>place to eat breakfast dinner or lunch</p>
          </div>
        </CardContent>
        <CardContent className='border rounded-md flex gap-3 p-4'>
          <IoDesktopOutline size={32} />
          <div>
            <h3 className='font-bold'>A room or Free space</h3>
            <p className='text-sm'>place where you can work or study</p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export default HouseRooms;
