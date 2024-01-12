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
import image2 from '../../../../public/images/apartment2.jpg';
import image3 from '../../../../public/images/apartment3.jpg';
import { IoLocationOutline } from 'react-icons/io5';
import Header from '@/components/header/Header';
import ApartmentCard from '@/app/apartments/_component/ApartmentCard';

function Page() {
  return (
    <>
      <Header />
      <div className='bg-background'>
        <section className='max-w-[1120px] px-3 md:px-10 m-auto'>
          <AspectRatio ratio={16 / 9}>
            <Image
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
                  <h3>Location</h3>
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
                Three swimming pools
                <h6>water</h6>
                <h6>umeme</h6>
                <h6>geti</h6>
                <h6>Gymnasium</h6>
                <h6>Clubhouse</h6>
                <h6> Kids playing area</h6>
                <h6>
                  The security system that filters access within the building
                  based on nature and category of the users profile
                </h6>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                For 40 years, Steven Emmanuel, lived at former Victoria House on
                new Bagamoyo road and never thought of moving. Two things made
                him fall in love with his place all this time, the convenience
                and privacy. On these same plots, NHC has built the all-modern
                VICTORIA PLACE, a blend of 2,3 and 3 bedroom apartments that
                gives you the same things that made Steve a tenant for 40 years.
                Come build everlasting memories in these modern apartments with
                well-equipped gymnasium, swimming pool and surrounded by
                schools, retail shopping center, financial institutions and
                offices.
              </CardDescription>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}

export default Page;
