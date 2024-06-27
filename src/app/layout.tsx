import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Header, ThemeProvider } from "@/components";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Bloria",
    template: "%s",
  },
  description: "Bloria is a dynamic blog application that allows users to post and view blogs across multiple categories. Users can easily explore diverse content and share their own insights on various topics.",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  keywords: ["Bloria", "bloria", "blogs", "blogs nextjs", "next14 blogs", "content-writing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="w-[100%] px-6 sm:px-10 lg:w-[90%] xl:w-[80%] lg:mx-auto lg:p-2">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
