function Container({ children }: { children: React.ReactNode }) {
  return (
    <main
      className='
  px-8 
  grid 
  grid-cols-1 
  gap-4 
  sm:grid-cols-2
  justify-items-center
  sm:gap-2
  md:grid-cols-3
  md:gap-3
  xl:grid-cols-4
  xl:gap-x-4
  xl:gap-y-8
'>
      {children}
    </main>
  );
}

export default Container;
