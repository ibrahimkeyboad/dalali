'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import coverImage from '../../../../../public/images/apartment.jpg';
import ApartmentCard from '../_component/ApartmentCard';
import { IoLocationOutline } from 'react-icons/io5';
import Header from '@/components/header/Header';
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({ weight: '700', subsets: ['latin'] });
function Page() {
  return (
    <>
      <Header />
      <section className='max-w-[1120px] px-3 md:px-10 m-auto'>
        <AspectRatio ratio={16 / 9}>
          <Image
            priority
            className='w-[1000px] rounded-md h-[500px] object-cover'
            src={coverImage}
            alt='apartment cover image'
          />
        </AspectRatio>

        <Card>
          <CardHeader>
            <CardTitle className='capitalize tracking-wider'>
              Ngulelo build Apartment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className='flex gap-4 items-center mb-2'>
                <IoLocationOutline size={25} />
                <h3 className={merriweather.className}>Location</h3>
              </div>
              <div className='flex gap-3'>
                <span>Ngulelo</span>
                <span>Arusha</span>
                <span>Tanzania</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className='flex flex-wrap gap-5 py-8'>
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
        </div>

        <Card>
          <CardHeader>
            <CardTitle> What this Apartment have</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-2'>
              <h6 className={merriweather.className}>water</h6>
              <h6 className={merriweather.className}>umeme</h6>
              <h6 className={merriweather.className}>geti</h6>
              <h6 className={merriweather.className}>mashine ya kufulia</h6>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className={merriweather.className}>
              Description
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium recusandae vel ea cum eaque qui exercitationem magnam
              dicta perferendis eligendi, inventore aliquam, modi maxime quidem
              quam aperiam ipsum necessitatibus ad maiores. Voluptatum sapiente,
              dicta delectus quisquam provident reprehenderit necessitatibus
              reiciendis deleniti nulla odit iure expedita ratione debitis?
              Vitae, asperiores. Suscipit.
            </CardDescription>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

export default Page;
