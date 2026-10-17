import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Next Slide Starter',
  description: 'Presentations built from React components.',
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
