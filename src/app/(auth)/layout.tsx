export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={`max-w-[1240px] px-5 lg:px-0 py-20 m-auto my-[10%] lg:my-[5%] shadow-xl shadow-gray-200 dark:shadow-none`}>
      {children}
    </section>
  );
}
