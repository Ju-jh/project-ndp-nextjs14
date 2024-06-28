import TopBar from './components/TopBar';

export default function SignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="contentSection w-screen h-screen flex-col bg-gradient-to-t from-[#eae1f1] to-[#ffffff] to-35%">
      <TopBar />
      {children}
    </section>
  );
}