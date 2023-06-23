import React from 'react';
import LoginForm from './LoginForm';

interface ParamsProps {
  searchParams: {
    email: string;
  };
}

function LoginPage({ searchParams: { email } }: ParamsProps) {
  console.log(email);
  return <LoginForm email={email} />;
}

export default LoginPage;
