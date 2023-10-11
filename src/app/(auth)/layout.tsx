export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className='flex h-screen'>{children}</main>;
}
