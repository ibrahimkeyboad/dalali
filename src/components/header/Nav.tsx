import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'All',
    link: '/',
  },
  {
    name: 'Apartments',
    link: '/apartments',
  },
  {
    name: 'Houses',
    link: '/houses',
  },
  {
    name: 'Hostels',
    link: '/hostels',
  },
  {
    name: 'Frames',
    link: '/frames',
  },
  {
    name: 'Geust Houses',
    link: '/geusthouses',
  },
  {
    name: 'Lodges',
    link: '/lodges',
  },
];

function Nav() {
  const asPath = usePathname();

  return (
    <>
      {!asPath.includes('search') && (
        <ul className='flex gap-10 p-2'>
          {links.map((link) => (
            <Link
              key={link.name}
              className={`text-sm whitespace-nowrap my-3 mx-0 md:mx-4 ${
                asPath === link.link
                  ? 'dark:text-[#64FFDA] text-[#00ceb8] font-bold'
                  : ' text-[#b0b7cf]'
              }`}
              href={link.link}>
              {link.name}
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}

export default Nav;
