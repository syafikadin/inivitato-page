import type { Metadata } from "next";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'

const butler = localFont({
  src: "./fonts/Butler.woff", // pastikan path file font sudah benar
  variable: "--font-butler",
  weight: "300",
});

export const metadata: Metadata = {
  title: "The Wedding of Tiffany & Jared by Invitato",
  description: 'Celebrating the love of Tiffany and Jared.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap"
          rel="stylesheet" />

        {/* Icon */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet" />

      </head>
      <body className={`${butler.variable}`}>
        {children}
      </body>
    </html>
  );
}
