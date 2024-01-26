'use client';

interface Props {
  value: string;
  onHandlerClick: (value: string) => void;
}

function CategoryType({ onHandlerClick, value }: Props) {
  const items = ['single room', 'double room', 'single self', 'self'];
  return (
    <div className='py-6'>
      <h3 className='mb-3'>What type of house you need?</h3>
      <div className='flex gap-4 flex-wrap'>
        {items.map((item) => (
          <button
            onClick={() => onHandlerClick(item)}
            key={item}
            className={`px-4 py-2 border-2 hover:border-primary capitalize transition duration-200 rounded-2xl ${
              value === item ? 'border-primary' : 'border-gray-500'
            } `}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryType;
