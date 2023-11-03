import ImageFigure from '@/components/ImageFigure';
import UserAvatar from '@/components/UserAvatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from 'lucide-react';
import React from 'react';

interface Props {
  data: Accommodation;
}

function Page({ data }: Props) {
  return (
    <div className='bg-background'>
      <section className='max-w-[1120px] px-3 md:px-10 m-auto'>
        {/* <ImageFigure images={data.images} /> */}
        <div className={`bg-card p-3 my-4  rounded-sm divide-y`}>
          <div className='flex items-center justify-between p-5'>
            <h2 className='tracking-widest font-bold text-3xl'>Overview</h2>
            {/* @ts-ignore  */}
            <Badge className='capitalize font-bold' variant='secondary'>
              Rent
            </Badge>
          </div>
          <div>
            <Card className='p-4 flex gap-8 md:items-center flex-col md:flex-row items-start justify-between'>
              <div className='md:flex gap-2 flex-col'>
                <h3 className='flex items-center gap-1'>
                  <span>Tsh</span>
                  <span className='text-xl font-extrabold'>
                    {200000?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                  <span>month</span>
                </h3>
                <h4></h4>
                <h3 className=''>{`Ngulelo, Arusha, Tanzania`}</h3>
              </div>
              <figure className='flex justify-center items-center gap-4'>
                <UserAvatar />
                <figcaption className='flex flex-col'>
                  <span
                    className={`dark:text-[#e6f1ff] font-bold tracking-wide text-base`}>
                    {/* @ts-ignore  */}
                    Ibrahim Mwanga
                  </span>

                  <span className={`dark:text-[#ccd6f6] font-bold text-base`}>
                    {/* @ts-ignore  */}
                    +2556299067
                  </span>
                </figcaption>
              </figure>
            </Card>
          </div>
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
