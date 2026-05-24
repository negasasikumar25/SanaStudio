// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sana Studio - Learn Aari Work, Mehndi, Silk Thread Jewellery & More',
  description: 'Sana Studio offers professional courses in Aari Work, Mehndi Design, Silk Thread Jewellery Making, and Embroidery Hoop Art. Join us to learn traditional and modern art forms.',
  keywords: 'Aari work, Mehndi design, Silk thread jewellery, Embroidery hoop art, craft courses, handcraft training',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Poppins', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}