import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shaw & Goswami Consulting | Business Consulting for the AI Era",
  description: "We help organizations transform operations, decision-making and growth through strategy, data and AI. Premium boutique management consulting.",
  metadataBase: new URL("https://shawandgoswami.in"),
  openGraph: {
    title: "Shaw & Goswami Consulting",
    description: "Business Consulting for the AI Era",
    url: "https://shawandgoswami.in",
    siteName: "Shaw & Goswami Consulting",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        {/* ======================================================== */}
        {/* GOOGLE ANALYTICS (GA4) PLACEHOLDER                       */}
        {/* ======================================================== */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }} />
        */}

        {/* ======================================================== */}
        {/* MICROSOFT CLARITY PLACEHOLDER                            */}
        {/* ======================================================== */}
        {/*
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "XXXXXXXXXX");
          `
        }} />
        */}
      </head>
      <body>
        <Header />
        <main style={{ paddingTop: "80px", flex: "1 0 auto" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
