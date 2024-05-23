import '@/app/ui/global.css';
import { jost } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
