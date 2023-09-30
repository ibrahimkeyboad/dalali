export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme='night'>
      <body>
        <main className='grid h-screen'>{children}</main>
      </body>
    </html>
  );
}
