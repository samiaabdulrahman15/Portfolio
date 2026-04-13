import "./globals.css";
import Navbar from "./navbar/page";

export const metadata = {
  title: "My Portfolio",
  description: "A modern React/Next.js portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased pt-24">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
