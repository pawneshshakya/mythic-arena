import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientBody from "./ClientBody"; // should ONLY be client if it must use hooks

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mythic Arena - Play Online Arena Games to Win Cash",
  description:
    "Mythic Arena offers online rummy games with cash prizes. Join now and play Indian Arena games online for free or with real cash to win big!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body cz-shortcut-listen="true">
        <Script
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3940256099942544"
          crossOrigin="anonymous"
        />
        {/* ClientBody should only wrap children, don't put hooks in RootLayout */}
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import Script from "next/script";
// import "./globals.css";
// import ClientBody from "./ClientBody";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Mythic Arena - Play Online Arena Games to Win Cash",
//   description:
//     "Mythic Arena offers online rummy games with cash prizes. Join now and play Indian Arena games online for free or with real cash to win big!",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
//       <head>
//         <Script
//           strategy="afterInteractive"
//           async
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3940256099942544"
//           crossOrigin="anonymous"
//         />
//       </head>
//       <body>
//         <ClientBody>{children}</ClientBody>
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import ClientBody from "./ClientBody";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Mythic Arena - Play Online Arena Games to Win Cash",
//   description:
//     "Mythic Arena offers online rummy games with cash prizes. Join now and play Indian Arena games online for free or with real cash to win big!",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
//       <ClientBody>{children}</ClientBody>
//     </html>
//   );
// }
