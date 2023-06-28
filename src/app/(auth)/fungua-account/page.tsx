import { Metadata } from 'next';
import AuthForm from './AuthForm';

export const metadata: Metadata = {
  title: 'Fungua account yako',
};

function Page() {
  return (
    <>
      <AuthForm />
    </>
  );
}

export default Page;
