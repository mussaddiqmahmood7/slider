import type { Metadata } from 'next';
import './globals.css';
import './event.css';
export const metadata: Metadata = {
  title: 'Web Development in the AI Era · COMSATS Sahiwal',
  description:
    'Understanding, building and learning in the AI era. A researched student keynote.',
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
