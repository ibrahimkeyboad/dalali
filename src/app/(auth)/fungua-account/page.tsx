import { Metadata } from 'next';
import AuthForm from './AuthForm';
import { baseUrl } from '@/actions/url';

export const metadata: Metadata = {
  title: 'Fungua account yako',
};

async function getLocation() {
  const res = await fetch(`${baseUrl}/location`);

  const data = await res.json();

  return data;
}

async function Page() {
  const data = await getLocation();
  return (
    <>
      <AuthForm location={data} />
    </>
  );
}

export default Page;
