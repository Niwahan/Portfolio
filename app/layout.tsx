import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Niwahang Angbuhang - Full Stack Developer Portfolio",
  description: "Experienced Full Stack Developer specializing in modern web technologies. View my projects, skills, and professional experience.",
  keywords: "Full Stack Developer, Web Development, React, Next.js, TypeScript, Portfolio",
  authors: [{ name: "Niwahang Angbuhang" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "Niwahang Angbuhang - Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer specializing in modern web technologies. View my projects, skills, and professional experience.",
    siteName: "Niwahang Angbuhang Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Niwahang Angbuhang Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Niwahang Angbuhang - Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer specializing in modern web technologies",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground">
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
