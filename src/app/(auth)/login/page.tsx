import LoginForm from './LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ingia kwenye account Yako',
};

interface ParamsProps {
  searchParams: {
    email: string;
  };
}

function LoginPage({ searchParams: { email } }: ParamsProps) {
  return <LoginForm email={email} />;
}

export default LoginPage;
