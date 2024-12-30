import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// app 디렉토리의 최상위에 정의된 레이아웃을 "루트 레이아웃"이라고 함
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 루트 레이아웃은 필수이며, 반드시 html과 body 태그를 포함해야 함
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* children을 원하는 위치에 배치하여, 페이지나 중첩된 레이아웃을 렌더링할 수 있음 */}
        {children}
      </body>
    </html>
  );
}