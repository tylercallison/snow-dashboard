import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { NavMenu } from '@/components/nav-menu';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Tahoe Snow Dashboard',
  description: 'Tahoe Snow Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavMenu />
        <main>{children}</main>
      </body>
    </html>
  );
}
