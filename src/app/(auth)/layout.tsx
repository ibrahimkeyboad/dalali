export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className='grid h-screen'>{children}</main>;
}
