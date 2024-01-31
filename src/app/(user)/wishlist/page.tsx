import { MountainIcon } from 'lucide-react';
import Link from 'next/link';

export default function Component() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900'>
      <header className='px-4 lg:px-6 h-14 flex items-center'>
        <Link className='flex items-center justify-center' href='#'>
          <MountainIcon className='h-6 w-6' />
          <span className='sr-only'>Acme Inc</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'>
            Fire
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'>
            Police
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'>
            Ambulance
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'>
            Water
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'>
            Electricity
          </Link>
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                  Emergency Services
                </div>
                <h1 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-5xl'>
                  {`
                  
                 `}
                </h1>
                <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  We provide emergency services to help you during times of
                  need.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
              <div className='space-y-4'>
                <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                  Fire
                </div>
                <h2 className='text-2xl font-bold tracking-tighter sm:text-3xl'>
                  Fire Department
                </h2>
                <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400'>
                  The Fire Department provides fire protection and emergency
                  medical services to the community.
                </p>
                <Link
                  className='inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                  href='#'>
                  Call Now
                </Link>
              </div>
              <div className='space-y-4'>
                <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                  Police
                </div>
                <h2 className='text-2xl font-bold tracking-tighter sm:text-3xl'>
                  Police Department
                </h2>
                <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400'>
                  The Police Department provides law enforcement services to the
                  community.
                </p>
                <Link
                  className='inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                  href='#'>
                  Call Now
                </Link>
              </div>
              <div className='space-y-4'>
                <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                  Ambulance
                </div>
                <h2 className='text-2xl font-bold tracking-tighter sm:text-3xl'>
                  Ambulance Service
                </h2>
                <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400'>
                  The Ambulance Service provides emergency medical services to
                  the community.
                </p>
                <Link
                  className='inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                  href='#'>
                  Call Now
                </Link>
              </div>
              <div className='space-y-4'>
                <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                  Water
                </div>
                <h2 className='text-2xl font-bold tracking-tighter sm:text-3xl'>
                  Water Department
                </h2>
                <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400'>
                  The Water Department provides water services to the community.
                </p>
                <Link
                  className='inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                  href='#'>
                  Call Now
                </Link>
              </div>
              <div className='space-y-4'>
                <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                  Electricity
                </div>
                <h2 className='text-2xl font-bold tracking-tighter sm:text-3xl'>
                  Electricity Department
                </h2>
                <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400'>
                  The Electricity Department provides electricity services to
                  the community.
                </p>
                <Link
                  className='inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                  href='#'>
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Terms of Service
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
