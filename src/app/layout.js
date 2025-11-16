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

export const metadata = {
  title: "Nishant Neupane - Frontend Developer | Next.js, React, Tailwind CSS Expert",
  description: "Nishant Neupane - Professional Frontend Developer with 10+ months of experience in Next.js, React, and Tailwind CSS. Based in Kathmandu, Nepal. Specializing in responsive web applications, bulk messaging systems, and restaurant management platforms. Available for hire.",
  keywords: "Nishant Neupane, Nishant Neupane Nepal, Nishant Neupane Kathmandu, Frontend Developer Nepal, Next.js Developer Nepal, React Developer Kathmandu, Web Developer Nepal, MERN Stack Developer, Tailwind CSS Expert, nishantn.com.np, Nest Nepal Developer, Full-stack Developer Nepal",
  authors: [{ name: "Nishant Neupane", url: "https://nishantn.com.np" }],
  creator: "Nishant Neupane",
  publisher: "Nishant Neupane",
  metadataBase: new URL("https://nishantn.com.np"),
  alternates: {
    canonical: "https://nishantn.com.np",
  },
  openGraph: {
    title: "Nishant Neupane - Frontend Developer | Portfolio",
    description: "Professional Frontend Developer with 10+ months of experience in Next.js, React, and Tailwind CSS. Based in Kathmandu, Nepal.",
    url: "https://nishantn.com.np",
    siteName: "Nishant Neupane Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/mine1.png",
        width: 1200,
        height: 630,
        alt: "Nishant Neupane - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishant Neupane - Frontend Developer",
    description: "Professional Frontend Developer specializing in Next.js, React, and Tailwind CSS. 10+ months of experience.",
    creator: "@nishantneupane",
    images: ["/mine1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "google-site-verification-code", // Add your Google Search Console verification code
  // },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nishant Neupane",
    url: "https://nishantn.com.np",
    image: "https://nishantn.com.np/mine1.png",
    jobTitle: "Frontend Developer",
    description: "Frontend Developer with 10+ months of experience in Next.js, React, and Tailwind CSS",
    email: "nishantneupane488@gmail.com",
    telephone: "+977-9840033587",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "Nepal"
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Herald College Kathmandu"
    },
    sameAs: [
      "https://github.com/nishant-neupane",
      "https://www.linkedin.com/in/nishant-neupane"
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Full-stack Development",
      "Frontend Development",
      "Web Development"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Nest Nepal"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo1.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://nishantn.com.np" />
        <meta name="author" content="Nishant Neupane" />
        <meta name="geo.region" content="NP-BA" />
        <meta name="geo.placename" content="Kathmandu" />
        <meta name="geo.position" content="27.7172;85.3240" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
