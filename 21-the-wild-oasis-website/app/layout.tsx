import Navigation from "@/app/_components/Navigation";
import Logo from "./_components/Logo";

export const metadata = {
  title: "The Wild Oasis",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copywright by wild oasis 2025</footer>
      </body>
    </html>
  );
}
