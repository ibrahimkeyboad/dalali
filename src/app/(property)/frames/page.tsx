import Container from '@/components/Container';
import Header from '@/components/header/Header';
import Image from 'next/image';
import Link from 'next/link';

function FramePage() {
  return (
    <>
      <Header />
      <Container>
        <div className='flex flex-col gap-3'>
          <figure className='relative h-[300px] w-full'>
            <Image
              priority
              fill
              alt='Apartment Building 1'
              className='rounded-lg object-cover object-center transition-opacity'
              src='/images/apartment3.jpg'
            />
          </figure>

          <div className='grid gap-1'>
            <h3 className='font-semibold'>Apartment Building 1</h3>
            <p className='text-sm leading-none'>Street, City, Country</p>
            <p className='text-sm leading-none'>Number of Units: 100</p>
            <p className='text-sm leading-none'>Architecture: Modern</p>
          </div>
          <Link
            href=''
            className='font-semibold text-[#e2d] underline underline-offset-4'>
            View
          </Link>
        </div>
      </Container>
    </>
  );
}

export default FramePage;
