import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DietWise - AI-Powered Diet Coach",
  description:
    "Fuel your body the smart way. DietWise uses AI to analyze your body and generate a scientifically optimized meal plan built for long-term success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${fontSans.variable} font-sans antialiased bg-text-dark`}
        >
          <div className="flex relative min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Toaster />
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
