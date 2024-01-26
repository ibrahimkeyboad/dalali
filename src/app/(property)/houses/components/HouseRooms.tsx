import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { BedSingleIcon } from 'lucide-react';
import React from 'react';
import { BiSolidDoorOpen } from 'react-icons/bi';
import { IoDesktopOutline } from 'react-icons/io5';
import { MdOutlineDinnerDining, MdOutlineShower } from 'react-icons/md';
import { PiTelevision, PiToilet } from 'react-icons/pi';
import { TbToolsKitchen2 } from 'react-icons/tb';

interface Props {
  room: Room[];
  bath: Bath[];
  kitchen?: Kitchen;
}

function HouseRooms({ bath, room, kitchen }: Props) {
  const roomLength = room.length;
  const bathLength = bath.length;

  return (
    <div>
      <h2 className='dark:text-[#e6f1ff] tracking-widest font-bold text-xl p-3 pb-5 '>
        What is house contain
      </h2>
      <div className='flex gap-6'>
        {room.length > 0 && (
          <article className='flex gap-5'>
            {room.map((item) => (
              <Card className='pt-3' key={item.sort}>
                <CardContent>
                  {item.sort === 'bedroom' ? (
                    <BedSingleIcon size={40} />
                  ) : (
                    <PiTelevision size={40} />
                  )}
                  <h3 className='font-semibold tracking-wider capitalize'>
                    {item.sort}
                  </h3>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </article>
        )}

        {bath.length > 0 &&
          bath.map((item) => (
            <Card className='pt-3' key={item.shower}>
              <CardContent>
                <PiToilet size={40} />
                <h3 className='font-semibold tracking-wider capitalize'>
                  {item.sort}
                </h3>
                <CardDescription>
                  <ul>
                    <li className='text-sm'>{item.shower}</li>
                    <li className='text-sm'>{item.toilet}</li>
                    <li className='text-sm'>{item.description}</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          ))}

        {/* {bath.length > 0 && (
          <CardContent className='border p-4 rounded-md '>
            <h3 className='text-center font-semibold pb-1'>
              {bathLength} {`bath${bathLength > 1 ? 's' : ''}`}
            </h3>

            <article className='flex  items-start justify-start gap-3'>
              <MdOutlineShower size={40} />
              <div className='flex flex-col gap-2'>
                {bath.map((bath) => (
                  <p className='flex flex-col' key={bath.sort}>
                    <span>{bath.sort}</span>
                    {bath.shower && (
                      <span className='text-sm text-gray-300'>
                        {bath.shower}
                      </span>
                    )}

                    <span className='text-sm text-gray-300'>{bath.toilet}</span>
                    <span className='text-sm text-gray-300'>
                      {bath.description}
                    </span>
                  </p>
                ))}
              </div>
            </article>
          </CardContent>
        )} */}

        {/* {kitchen && (
          <CardContent className='border p-4 rounded-md '>
            <h3 className='text-center font-semibold pb-1'>Kitchen</h3>

            <article className='flex  items-start justify-start gap-3'>
              <TbToolsKitchen2 size={40} />
              <div className='flex flex-col text-sm gap-1'>
                <p>{kitchen.size}</p>
                <p>{kitchen.washing}</p>
                <p>{kitchen.fidge}</p>
              </div>
            </article>
          </CardContent>
        )} */}

        {/* <CardContent className='border rounded-md flex gap-3'>
          <MdOutlinebath size={25} />
          <p>setting room</p>
        </CardContent> */}

        {}

        {/* <CardContent className='border rounded-md p-4 flex gap-3'>
          <MdOutlineDinnerDining size={35} />
          <div className='flex flex-col gap-1'>
            <h3 className='font-bold'>Dinning place</h3>
            <p className='text-sm'>place to eat breakfast dinner or lunch</p>
          </div>
        </CardContent> */}
        {/* <CardContent className='border rounded-md flex gap-3 p-4'>
          <IoDesktopOutline size={32} />
          <div>
            <h3 className='font-bold'>A room or Free space</h3>
            <p className='text-sm'>place where you can work or study</p>
          </div>
        </CardContent> */}
      </div>
    </div>
  );
}

export default HouseRooms;
