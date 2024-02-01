/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AfXYpLG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { cn } from '@/lib/utils';
import { formatPrice } from '@/utils/formatPrice';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ weight: '700', subsets: ['latin'] });

export default function Component() {
  return (
    <section className='w-full p-5'>
      <header className='bg-[#034047] text-zinc-900 py-4 rounded-xl'>
        <div className='container mx-auto px-4 md:px-6'>
          <nav className='flex items-center text-[#CCD0C8] justify-between'>
            <div className='text-2xl font-bold'>Dalali</div>
            <div className='space-x-4'>
              <Link className='hover:text-zinc-700' href='#'>
                Home
              </Link>
              <Link className='hover:text-zinc-700' href='#'>
                Politics
              </Link>
              <Link className='hover:text-zinc-700' href='#'>
                Business
              </Link>
              <Link className='hover:text-zinc-700' href='#'>
                Tech
              </Link>
              <Link className='hover:text-zinc-700' href='#'>
                Culture
              </Link>
              <Link className='hover:text-zinc-700' href='#'>
                Sports
              </Link>
            </div>
          </nav>
        </div>
        <section className='flex items-center justify-center gap-4 px-8 py-20'>
          <div className='max-w-xl mx-auto flex flex-col justify-center'>
            <h1
              className={cn(
                'text-5xl font-bold text-[#CCD0C8] tracking-tight mb-6',
                inter.className
              )}>
              Pata nyumba, apartment, frame za biashara kwa urahisi na haraka
              sana kwa kubonyeza
            </h1>
            <p className='text-lg max-w-prose text-[#B7E3E8]'>
              Website yetu inakuwezesha kupata nyumba, apartment na frame za
              biashara bora na nzuri kwa haraka na urahisi sana kwa kubonyeza tu
              na kupata unachostahili kwa mda mchache sana
            </p>
          </div>
          <Image
            priority
            className='rounded-lg'
            src='/images/hero.jpg'
            alt='hero'
            width={600}
            height={900}
          />
        </section>
      </header>
      <main className='container mx-auto px-4 md:px-6 py-8'>
        {/* <section className='mb-16'>
          <h2 className='text-2xl font-bold mb-4'>NHC</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <img
                alt='Top Story Image'
                className='w-full h-64 object-cover object-center rounded-lg'
                height={400}
                src='/images/home.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width={600}
              />
            </div>
            <div className='flex flex-col justify-center'>
              <h3 className='text-xl font-bold mb-2'>Our Partner</h3>
              <p className='text-zinc-500 dark:text-zinc-400'>
                Pata nyumba, Apartment au frame kali kutoka NHC kwa uharaka na
                uhakika
              </p>
              <Link
                className='text-blue-500 hover:text-blue-700 mt-4'
                href='/nhc'>
                Jua zaidi
              </Link>
            </div>
          </div>
        </section> */}
        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Nyumba</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div>
              <Image
                priority
                alt='Politics Story Image'
                className='w-full h-64 object-cover object-center rounded-lg'
                height={400}
                src='/images/home.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width={600}
              />
              <h3 className='text-xl font-bold mb-2 mt-4'>
                Self ya vyumba viwili
              </h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                street, city
              </p>
              <h4 className='font-semibold text-base md:text-lg'>
                Tsh {formatPrice(250000)} / month
              </h4>
              <Link className='text-blue-500 hover:text-blue-700 mt-4' href='#'>
                Read More
              </Link>
            </div>
            <div>
              <Image
                priority
                alt='Politics Story Image'
                className='w-full h-64 object-cover object-center rounded-lg'
                height={400}
                src='/images/home.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width={600}
              />
              <h3 className='text-xl font-bold mb-2 mt-4'>
                Nyumba ya chumba kimoja
              </h3>

              <p className='text-sm text-gray-500 dark:text-gray-400'>
                street, city
              </p>
              <h4 className='font-semibold text-base md:text-lg'>
                Tsh {formatPrice(50000)} / month
              </h4>
              <Link className='text-blue-500 hover:text-blue-700 mt-4' href='#'>
                Read More
              </Link>
            </div>
            <div>
              <Image
                priority
                alt='Politics Story Image'
                className='w-full h-64 object-cover object-center rounded-lg'
                height={400}
                src='/images/home.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width={600}
              />
              <h3 className='text-xl font-bold mb-2 mt-4'>
                Self ya chumba kimoja
              </h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                street, city
              </p>
              <h4 className='font-semibold text-base md:text-lg'>
                Tsh {formatPrice(130000)} / month
              </h4>
              <Link className='text-blue-500 hover:text-blue-700 mt-4' href='#'>
                Read More
              </Link>
            </div>
          </div>
        </section>
        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Apartment</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div>
              <Image
                priority
                alt='Business Story Image'
                className='w-full h-64 object-cover object-center rounded-lg'
                height={400}
                src='/images/home.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width={600}
              />
              <h3 className='text-xl font-bold mb-2 mt-4'>VICTORIA PLACE</h3>
              <p className='text-zinc-500 dark:text-zinc-400'>
                This is a brief summary of the business story. Click the link to
                read more.
              </p>
              <Link className='text-blue-500 hover:text-blue-700 mt-4' href='#'>
                Read More
              </Link>
            </div>
            <div>
              <Image
                priority
                alt='Business Story Image'
                className='w-full h-64 object-cover object-center rounded-lg'
                height={400}
                src='/images/home.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width={600}
              />
              <h3 className='text-xl font-bold mb-2 mt-4'>
                Business Story Headline
              </h3>
              <p className='text-zinc-500 dark:text-zinc-400'>
                This is a brief summary of the business story. Click the link to
                read more.
              </p>
              <Link className='text-blue-500 hover:text-blue-700 mt-4' href='#'>
                Read More
              </Link>
            </div>
            <div>
              <Image
                priority
                alt='Business Story Image'
                className='w-full h-64 object-cover object-center rounded-lg'
                height={400}
                src='/images/home.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width={600}
              />
              <h3 className='text-xl font-bold mb-2 mt-4'>
                Business Story Headline
              </h3>
              <p className='text-zinc-500 dark:text-zinc-400'>
                This is a brief summary of the business story. Click the link to
                read more.
              </p>
              <Link className='text-blue-500 hover:text-blue-700 mt-4' href='#'>
                Read More
              </Link>
            </div>
          </div>
        </section>
        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Frame</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div>
              <Image
                priority
                alt='Tech Story Image'
                className='w-full h-64 object-cover object-center rounded-lg'
                height={400}
                src='/images/home.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width={600}
              />
              <h3 className='text-xl font-bold mb-2 mt-4'>
                Tech Story Headline
              </h3>
              <p className='text-zinc-500 dark:text-zinc-400'>
                This is a brief summary of the tech story. Click the link to
                read more.
              </p>
              <Link className='text-blue-500 hover:text-blue-700 mt-4' href='#'>
                Read More
              </Link>
            </div>
            <div>
              <Image
                priority
                alt='Tech Story Image'
                className='w-full h-64 object-cover object-center rounded-lg'
                height={400}
                src='/images/home.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width={600}
              />
              <h3 className='text-xl font-bold mb-2 mt-4'>
                Tech Story Headline
              </h3>
              <p className='text-zinc-500 dark:text-zinc-400'>
                This is a brief summary of the tech story. Click the link to
                read more.
              </p>
              <Link className='text-blue-500 hover:text-blue-700 mt-4' href='#'>
                Read More
              </Link>
            </div>
            <div>
              <Image
                priority
                alt='Tech Story Image'
                className='w-full h-64 object-cover object-center rounded-lg'
                height={400}
                src='/images/home.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width={600}
              />
              <h3 className='text-xl font-bold mb-2 mt-4'>
                Tech Story Headline
              </h3>
              <p className='text-zinc-500 dark:text-zinc-400'>
                This is a brief summary of the tech story. Click the link to
                read more.
              </p>
              <Link className='text-blue-500 hover:text-blue-700 mt-4' href='#'>
                Read More
              </Link>
            </div>
          </div>
        </section>
        <section className='mb-8'>
          <Link href='/hostels'>
            <h2 className='text-2xl font-bold mb-4'>Hostels</h2>
          </Link>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div>
              <Image
                priority
                alt='Culture Story Image'
                className='w-full h-64 object-cover object-center rounded-lg'
                height={400}
                src='/images/home.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width={600}
              />
              <h3 className='text-xl font-bold mb-2 mt-4'>
                Culture Story Headline
              </h3>
              <p className='text-zinc-500 dark:text-zinc-400'>
                This is a brief summary of the culture story. Click the link to
                read more.
              </p>
              <Link className='text-blue-500 hover:text-blue-700 mt-4' href='#'>
                Read More
              </Link>
            </div>
            <div>
              <Image
                priority
                alt='Culture Story Image'
                className='w-full h-64 object-cover object-center rounded-lg'
                height={400}
                src='/images/home.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width={600}
              />
              <h3 className='text-xl font-bold mb-2 mt-4'>
                Culture Story Headline
              </h3>
              <p className='text-zinc-500 dark:text-zinc-400'>
                This is a brief summary of the culture story. Click the link to
                read more.
              </p>
              <Link className='text-blue-500 hover:text-blue-700 mt-4' href='#'>
                Read More
              </Link>
            </div>
            <div>
              <Image
                priority
                alt='Culture Story Image'
                className='w-full h-64 object-cover object-center rounded-lg'
                height={400}
                src='/images/home.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width={600}
              />
              <h3 className='text-xl font-bold mb-2 mt-4'>
                Culture Story Headline
              </h3>
              <p className='text-zinc-500 dark:text-zinc-400'>
                This is a brief summary of the culture story. Click the link to
                read more.
              </p>
              <Link className='text-blue-500 hover:text-blue-700 mt-4' href='#'>
                Read More
              </Link>
            </div>
          </div>
        </section>
        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Sports</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div>
              <Image
                priority
                alt='Sports Story Image'
                className='w-full h-64 object-cover object-center rounded-lg'
                height={400}
                src='/images/home.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width={600}
              />
              <h3 className='text-xl font-bold mb-2 mt-4'>
                Sports Story Headline
              </h3>
              <p className='text-zinc-500 dark:text-zinc-400'>
                This is a brief summary of the sports story. Click the link to
                read more.
              </p>
              <Link className='text-blue-500 hover:text-blue-700 mt-4' href='#'>
                Read More
              </Link>
            </div>
            <div>
              <Image
                priority
                alt='Sports Story Image'
                className='w-full h-64 object-cover object-center rounded-lg'
                height={400}
                src='/images/home.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width={600}
              />
              <h3 className='text-xl font-bold mb-2 mt-4'>
                Sports Story Headline
              </h3>
              <p className='text-zinc-500 dark:text-zinc-400'>
                This is a brief summary of the sports story. Click the link to
                read more.
              </p>
              <Link className='text-blue-500 hover:text-blue-700 mt-4' href='#'>
                Read More
              </Link>
            </div>
            <div>
              <Image
                priority
                alt='Sports Story Image'
                className='w-full h-64 object-cover object-center rounded-lg'
                height={400}
                src='/images/home.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width={600}
              />
              <h3 className='text-xl font-bold mb-2 mt-4'>
                Sports Story Headline
              </h3>
              <p className='text-zinc-500 dark:text-zinc-400'>
                This is a brief summary of the sports story. Click the link to
                read more.
              </p>
              <Link className='text-blue-500 hover:text-blue-700 mt-4' href='#'>
                Read More
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className='bg-[#034047] text-zinc-900 py-4 rounded-xl'>
        <nav>
          <Link href=''>Dalali</Link>
        </nav>
      </footer>
    </section>
  );
}
