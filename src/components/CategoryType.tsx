'use client';

function CategoryType() {
  const items = ['single room', 'double room', 'single self', 'self'];
  return (
    <div className='py-6'>
      <h3 className='mb-3'>What type of house you need?</h3>
      <div className='flex gap-4'>
        {items.map((item) => (
          <button
            key={item}
            className='px-8 py-6 border-2 hover:border-primary transition duration-200 rounded-md'>
            single room
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryType;
