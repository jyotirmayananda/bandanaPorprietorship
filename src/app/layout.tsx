import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Inter, Dancing_Script } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing-script', weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Bandana Proprietorship | Authentic Indian Spices',
  description: 'Authentic Indian Spices. Sourced with Integrity, Delivered Globally.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dancingScript.variable}`}>
      <body className="font-sans antialiased bg-world-map">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
