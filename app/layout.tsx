import '@/app/ui/global.css';
import { jost } from './ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | SoftwareGenies Dashboard',
    default: 'SoftwareGenies Dashboard'
  },
  description: 'Innovate, Analyze, Succeed',
  metadataBase: new URL('https://company-dashboard-pi.vercel.app/'),
};



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
