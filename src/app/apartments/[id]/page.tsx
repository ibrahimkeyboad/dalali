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
import coverImage from '../../../../public/images/apartment.jpg';
import ApartmentCard from '../_component/ApartmentCard';

function Page() {
  return (
    <div className='bg-background'>
      <section className='max-w-[1120px] px-3 md:px-10 m-auto'>
        <AspectRatio ratio={16 / 9}>
          <Image
            className='w-[1000px] h-[500px] object-cover'
            src={coverImage}
            alt='apartment cover image'
          />
        </AspectRatio>

        <Card>
          <CardHeader>
            <CardTitle>Ngulelo build Apartment</CardTitle>
            <CardContent>
              <div>
                <h3>Location</h3>
                <div className='flex gap-3'>
                  <span>Ngulelo</span>
                  <span>Arusha</span>
                  <span>Tanzania</span>
                </div>
              </div>
            </CardContent>
          </CardHeader>
        </Card>

        <div className='flex flex-wrap gap-5 py-8'>
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>What this place offers</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <div className='flexgap-5 flex-col'>
              <ul className='flex flex-wrap gap-10'>
                {data?.offers?.map((tag: any) => (
                  <li className='capitalize' key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Description</CardTitle>
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
    </div>
  );
}

export default Page;
