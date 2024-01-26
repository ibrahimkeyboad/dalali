function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid px-8 sm:px-6 gap-4 grid-cols-[repeat(auto-fill,minmax(300px,_1fr))]'>
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
    </div>
  );
}

export default Container;
